export function isMaintenanceTime() {
    const now = new Date();

    // Current time in minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Maintenance window (24-hour format)
    const startMinutes = 0 * 60 + 27;  // 12:27 AM
    const endMinutes = 0 * 60 + 30;  // 12:30 AM

    return currentMinutes >= startMinutes &&
        currentMinutes <= endMinutes;
}
