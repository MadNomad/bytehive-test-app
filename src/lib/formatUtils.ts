export const formatPercentageValue = (value: number) => {
  if (value > 0) return `+${value}%`;
  else if (value < 0) return `-${value}%`;
  else return `${value}$`;
};
