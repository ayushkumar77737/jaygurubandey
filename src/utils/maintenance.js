export function isMaintenanceTime() {
  // 🟢 Always allow site in local development
  if (import.meta.env.DEV) {
    return false;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 🔴 PRODUCTION maintenance window (12:45 AM – 12:47 AM)
  const startMinutes = 0 * 60 + 47; // 12:45 AM
  const endMinutes   = 0 * 60 + 49; // 12:47 AM

  // ⏱ No midnight crossing here, but logic still safe
  if (startMinutes > endMinutes) {
    return (
      currentMinutes >= startMinutes ||
      currentMinutes <= endMinutes
    );
  }

  return (
    currentMinutes >= startMinutes &&
    currentMinutes <= endMinutes
  );
}
