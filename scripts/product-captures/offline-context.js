import { business, demoLocation } from "./fixture-data";
const user = {
  id: "demo-owner",
  business_id: "demo-business",
  account_type: "customer_admin",
  role: "admin",
  onboarding_completed: true,
};
export const useAuth = () => ({ user, isLoading: false });
export const useBusiness = () => ({ business, isLoading: false });
export const useActiveLocation = () => ({
  assignedLocations: [demoLocation],
  activeLocation: demoLocation,
  isAllLocations: false,
  setActiveLocation: () => {},
});
// All writes are disabled. Never import the live API client into product captures.
export const base44 = new Proxy(
  {},
  {
    get: () =>
      new Proxy(
        {},
        {
          get: () => async () => {
            throw new Error(
              "Production operations are disabled in this offline fixture",
            );
          },
        },
      ),
  },
);
