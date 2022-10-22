const getBrowserLocale = () =>
  navigator.language || (navigator.languages || ['en'])[0];

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString(getBrowserLocale(), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
