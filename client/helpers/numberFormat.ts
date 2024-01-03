export const numberFormat = (number: Number) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
};
