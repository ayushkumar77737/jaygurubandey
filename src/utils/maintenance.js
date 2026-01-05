export function isMaintenanceTime() {
  // 🟢 Always allow site in local development
  if (import.meta.env.DEV) {
    return false;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 🔴 PRODUCTION maintenance window
  const startMinutes = 0 * 60 + 31; // 12:31 AM
  const endMinutes   = 0 * 60 + 35; // 12:35 AM

  return currentMinutes >= startMinutes &&
         currentMinutes <= endMinutes;
}
