// Offline responses only. These are fictional examples, never production records.
import { business, quote, platform } from "./fixture-data";
const disabledService = new Proxy(
  {},
  {
    get: () => async () => {
      throw new Error("No live services in screenshots");
    },
  },
);
export const quoteService = disabledService,
  customerService = disabledService,
  businessService = disabledService,
  activityLogService = disabledService,
  jobService = disabledService,
  opportunityService = disabledService;
export const fns = {
  getPlatformSettings: async () => ({ data: { settings: platform } }),
  getPublicQuote: async () => ({ data: { business, quote } }),
  getQuoteBookingSlots: async ({ preferred_date } = {}) => ({
    data: preferred_date
      ? {
          slots: [
            {
              date: preferred_date,
              start_time: "09:00",
              cleaner_id: "demo-cleaner",
              cleaner_display: "Demo cleaner",
              estimated_hours: 3.5,
            },
          ],
          alternatives: [],
        }
      : {
          meta: {
            min_date: "2026-10-05",
            max_date: "2026-10-30",
            closed_days: ["saturday", "sunday"],
            bookable_online: true,
          },
        },
  }),
  bookQuoteVisit: async ({ date, start_time }) => ({
    data: {
      date,
      start_time,
      cleaner_display: "Demo cleaner",
      recurring: { frequency: "biweekly" },
    },
  }),
  mcpGetConnections: async () => ({
    data: {
      mcp_server_url: "https://api.example.invalid/mcp",
      connections: [],
    },
  }),
};
