export function isMaintenanceTime() {
  // 🟢 Always allow site in local development
  if (import.meta.env.DEV) {
    return false;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 🔴 PRODUCTION maintenance window (12:45 AM – 12:47 AM)
  const startMinutes = 1 * 60 + 3; // 1:03 AM
const endMinutes   = 1 * 60 + 5; // 1:05 AM


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
