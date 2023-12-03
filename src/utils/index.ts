export const arrayWithLength = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);

export const thousandSeperator = (num: number) => {
  if (!num) return 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
