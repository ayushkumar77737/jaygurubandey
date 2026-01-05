export function isMaintenanceTime() {
    // 🟢 Always allow site in local development
    if (import.meta.env.DEV) {
        return false;
    }

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // 🔴 PRODUCTION maintenance window
    const startMinutes = 0 * 60 + 39;  // 12:39 AM
    const endMinutes = 0 * 60 + 41;  // 12:41 AM

    return currentMinutes >= startMinutes &&
        currentMinutes <= endMinutes;
}
