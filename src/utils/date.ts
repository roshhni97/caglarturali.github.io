export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatDateRange(startDate: string, endDate: string): string {
  return [
    formatDate(startDate),
    endDate != '' ? formatDate(endDate) : 'Present',
  ].join(' - ');
}
