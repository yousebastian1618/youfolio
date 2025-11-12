export function getDuration(startDate: Date, endDate: Date) {
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return (years ? `${years} yr` : '') + ' ' + (months ? `${months} mo` : '');

}