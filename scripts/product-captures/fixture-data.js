import platform from "./local-pricing.json";
import descriptions from "./service-descriptions.json";
import {
  buildResidentialPlatformParams,
  toFlatPlatformRecord,
  setServiceParams,
} from "@/domain/pricing/residentialEngine";
import { residentialLineItems } from "@/domain/pricing/residentialCalculator";
// Only authorized pricing settings enter this offline fixture. No production IDs or contacts.
export { platform };
export const business = {
  id: "demo-business",
  business_name: "Reliable Housekeeping",
  logo_url: "/reliablehousekeeping-logo.png",
  primary_color: "#ff9c00",
  secondary_color: "#53C764",
  hourly_rate: 60,
  service_categories: ["residential"],
  break_duration_minutes: 10,
  break_is_paid: true,
  lunch_duration_minutes: 30,
  lunch_is_paid: false,
  pay_period_type: "biweekly",
  pay_period_anchor: "2026-09-21",
};
export const demoLocation = {
  id: "demo-location",
  nickname: "Portland",
  hourly_rate: 60,
  calibration_offsets: {},
  service_categories: ["residential"],
};
const params = buildResidentialPlatformParams(toFlatPlatformRecord(platform));
Object.assign(business, descriptions);
setServiceParams(
  params.services,
  params.minSqft,
  params.maxSqft,
  params.addOns,
);
export const lineItems = residentialLineItems({
  selections: {
    includeInitial: true,
    includeWeekly: true,
    includeBiweekly: true,
    includeMonthly: true,
  },
  sqft: 2000,
  hourlyRate: 60,
  business,
  calibrationOffsets: {},
  soilLevel: "normal",
  applySoilToRecurring: false,
  bathrooms: 2,
  pets: "no",
  includeOven: "no",
  includeRefrigerator: "no",
});
export const quote = {
  id: "demo-quote",
  quote_number: "DEMO-001",
  status: "sent",
  public_access_token: "fictional-local-token",
  customer_first_name: "Sample",
  customer_last_name: "Customer",
  customer_email: "",
  customer_phone: "",
  customer_address: "",
  sqft: 2000,
  bedrooms: 3,
  bathrooms: 2,
  pets: "no",
  include_oven: "no",
  include_refrigerator: "no",
  line_items: lineItems.filter((i) =>
    /Initial|Bi-Weekly/i.test(i.service_name),
  ),
  deposit_required: false,
  require_signature: false,
  require_terms_acceptance: false,
  created_date: "2026-09-25T12:00:00Z",
  total_price: lineItems[0]?.price,
};
