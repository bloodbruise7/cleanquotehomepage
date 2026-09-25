import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Calculator from "@/pages/Calculator";
import QuoteView from "@/pages/QuoteView";
import TimesheetSettings from "@/components/settings/TimesheetSettingsTab";
import { business } from "./fixture-data";
import { installPublicDocumentAccess } from "@/lib/publicDocumentAccess";
import AutomationRuleCard from "@/components/settings/automations/AutomationRuleCard";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import QuoteBookingSection from "@/components/quotes/QuoteBookingSection";
import Organizer from "@/components/schedule/ScheduleOrganizerModal";
import WeekView from "@/components/schedule/WeekView";
import EmbedForm from "@/components/embed/EmbedCalculatorForm";
import AiConnections from "@/components/settings/AIConnectionsTab";
import "@/index.css";
import "./style.css";
const noop = () => {};
installPublicDocumentAccess();
const screen =
  new URLSearchParams(location.search).get("screen") || "calculator";
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
          {screen === "calculator" && <Calculator />}
          {screen === "quote" && <QuoteView />}
          {screen === "timesheets" && (
            <>
              <h1>Timesheets & payroll settings</h1>
              <TimesheetSettings business={business} setBusiness={noop} />
            </>
          )}
          {screen === "automations" && (
            <>
              <h1>Follow up at the right moment</h1>
              <p className="fixture-note">
                Example lifecycle rules · No messages sent
              </p>
              <div>
                {[
                  {
                    name: "A helpful nudge after the quote",
                    trigger_stage: "quote_sent",
                    trigger_days: 2,
                    trigger_unit: "days",
                    action_type: "both",
                  },
                  {
                    name: "Before the next clean",
                    trigger_stage: "visit_upcoming",
                    trigger_days: 24,
                    trigger_unit: "hours",
                    action_type: "sms",
                  },
                  {
                    name: "Check in after the clean",
                    trigger_stage: "visit_completed",
                    trigger_days: 2,
                    trigger_unit: "hours",
                    action_type: "email",
                  },
                  {
                    name: "Reconnect after cancelled service",
                    trigger_stage: "cancelled",
                    trigger_days: 30,
                    trigger_unit: "days",
                    action_type: "email",
                  },
                ].map((rule, i) => (
                  <AutomationRuleCard
                    key={i}
                    rule={{
                      ...rule,
                      id: `demo-rule-${i}`,
                      is_enabled: true,
                      send_window_start: "09:00",
                      send_window_end: "17:00",
                      send_days: ["mon", "tue", "wed", "thu", "fri"],
                    }}
                    onToggle={noop}
                    onSave={noop}
                    onDelete={noop}
                    smsLocked={false}
                  />
                ))}
              </div>
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
                soilLevel="normal"
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
createRoot(document.getElementById("root")).render(
  <QueryClientProvider
    client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
