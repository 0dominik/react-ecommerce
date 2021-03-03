export const getNameFromSlug = (slug) => {
  return slug.replace(/-/g, ' ');
};

export const round = (number, precision) => {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};
