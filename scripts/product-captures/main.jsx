import React from "react";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import QuoteBookingSection from "@/components/quotes/QuoteBookingSection";
import Organizer from "@/components/schedule/ScheduleOrganizerModal";
import WeekView from "@/components/schedule/WeekView";
import PriceDisplay from "@/components/calculator/PriceDisplayNew";
import EmbedForm from "@/components/embed/EmbedCalculatorForm";
import AiConnections from "@/components/settings/AIConnectionsTab";
import "@/index.css";
import "./style.css";
const noop = () => {};
const screen = new URLSearchParams(location.search).get("screen") || "pricing";
const suggestions = ["Sample home A", "Sample home B", "Sample home C"].map(
  (name, i) => ({
    visitId: `demo-${i}`,
    customerName: name,
    serviceType: "Bi-weekly cleaning",
    estimatedHours: 2,
    matchQuality: "full_match",
    hasChanged: true,
    currentDate: "2026-10-05",
    currentTime: `${9 + i * 2}:00`,
    currentAssignedUserName: "Demo cleaner A",
    proposedDate: "2026-10-06",
    proposedTime: `${9 + i * 2}:00`,
    proposedAssignedUserName: "Demo cleaner B",
    conflictsResolved: [],
    schedulingNotes: "Preferred day and cleaner matched",
    requiredPeople: 1,
  }),
);
const visits = Array.from({ length: 10 }, (_, i) => ({
  id: `visit-${i}`,
  job_id: `job-${i}`,
  customer_name: `Sample home ${String(i + 1).padStart(2, "0")}`,
  scheduled_date: `2026-10-0${5 + (i % 5)}`,
  scheduled_time: i < 5 ? "09:00" : "13:00",
  estimated_hours: 2.5,
  duration_hours: 2.5,
  status: "scheduled",
  assigned_user_ids: [i % 2 ? "demo-a" : "demo-b"],
}));
function App() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (screen === "schedule" && ref.current) ref.current.scrollTop = 400;
  }, []);
  return (
    <TooltipProvider>
      <div className={`capture-shell ${screen}`}>
        <header>
          <span className="wordmark">
            Clean<span>Quote</span>
          </span>
          <span>Product demonstration · Fictional data</span>
        </header>
        <main>
          {screen === "pricing" && (
            <>
              <h1>A price built around this home</h1>
              <p className="fixture-note">
                Example: 2,000 sq ft · 3 bedrooms · 2 bathrooms
              </p>
              <PriceDisplay
                lineItems={[
                  { service_name: "Initial Cleaning", price: 325, hours: 5 },
                  {
                    service_name: "Bi-Weekly Cleaning",
                    price: 195,
                    hours: 3,
                    is_optional: true,
                  },
                  {
                    service_name: "Weekly Cleaning",
                    price: 156,
                    hours: 2.4,
                    is_optional: true,
                  },
                  {
                    service_name: "Monthly Cleaning",
                    price: 234,
                    hours: 3.6,
                    is_optional: true,
                  },
                ]}
                totalPrice={325}
                business={{}}
                onSaveQuote={noop}
                sqft={2000}
                soilLevel="average"
                bedrooms={3}
                bathrooms={2}
                pets="no"
                includeOven="no"
                includeRefrigerator="no"
              />
            </>
          )}
          {screen === "booking" && (
            <QuoteBookingSection
              quote={{ public_access_token: "fictional-local-token" }}
              brandColor="#003366"
            />
          )}
          {screen === "organizer" && (
            <Organizer
              isOpen
              onClose={noop}
              suggestions={suggestions}
              onApply={noop}
              isApplying={false}
              scopeLabel="Oct 5–9"
              routeStats={[]}
            />
          )}
          {screen === "schedule" && (
            <>
              <h1>Your week, in one place</h1>
              <p className="fixture-note">
                October 5–9 · Recurring cleaning visits
              </p>
              <WeekView
                currentDate={new Date("2026-10-05T12:00:00")}
                hideWeekends
                getVisitsForDate={(date) =>
                  visits.filter(
                    (v) =>
                      v.scheduled_date ===
                      `2026-10-${String(date.getDate()).padStart(2, "0")}`,
                  )
                }
                getTasksForDate={() => []}
                jobs={visits.map((v) => ({
                  id: v.job_id,
                  title: "Bi-weekly cleaning",
                }))}
                scrollContainerRef={ref}
                isDragging={false}
                onSelectVisit={noop}
                onSelectTask={noop}
                userColorMap={{ "demo-a": "#e0edfc", "demo-b": "#fff0d8" }}
              />
            </>
          )}
          {screen === "widget" && (
            <>
              <h1>Get your cleaning estimate</h1>
              <EmbedForm
                sqft={2000}
                setSqft={noop}
                minSqft={300}
                maxSqft={10000}
                bedrooms={3}
                setBedrooms={noop}
                bathrooms={2}
                setBathrooms={noop}
                pets="no"
                setPets={noop}
                includeOven="no"
                setIncludeOven={noop}
                includeRefrigerator="no"
                setIncludeRefrigerator={noop}
                applyOvenToRecurring={false}
                setApplyOvenToRecurring={noop}
                applyRefrigeratorToRecurring={false}
                setApplyRefrigeratorToRecurring={noop}
                applySoilToRecurring={false}
                setApplySoilToRecurring={noop}
                soilLevel="average"
                setSoilLevel={noop}
                showRecurring
                includeInitial
                includeBiweekly
                includeWeekly={false}
                includeMonthly={false}
                includeDeep={false}
                includeMoveInOut={false}
                {...Object.fromEntries(
                  [
                    "ShowRecurring",
                    "IncludeInitial",
                    "IncludeWeekly",
                    "IncludeBiweekly",
                    "IncludeMonthly",
                    "IncludeDeep",
                    "IncludeMoveInOut",
                  ].map((k) => ["set" + k, noop]),
                )}
                primaryColor="#003366"
                business={{}}
                onGetEstimate={noop}
              />
            </>
          )}
          {screen === "ai" && (
            <>
              <h1>AI Connections</h1>
              <AiConnections />
            </>
          )}
        </main>
      </div>
    </TooltipProvider>
  );
}
createRoot(document.getElementById("root")).render(<App />);
