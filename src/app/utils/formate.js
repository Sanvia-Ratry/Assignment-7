export function formatDate(dateString) {
  if (!dateString) return "";

  const dateObj = new Date(`${dateString}T00:00:00`);

  if (isNaN(dateObj.getTime())) return dateString;

  return dateObj
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/,? (\d{4})$/, ", $1");
}
