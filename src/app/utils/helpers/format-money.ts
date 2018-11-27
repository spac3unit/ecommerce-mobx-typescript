export const formatMoneyNative = (
  num: number,
  currency: string = 'RUB'
): number | string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    maximumSignificantDigits: 2
  });

  return num && formatter.format(num);
};

export const formatMoney = (
  num: number,
  penny: number = 2,
  breaking: boolean = true
): number | string => {
  let value =
    num &&
    parseFloat(num.toString())
      .toFixed(penny)
      .replace(/\d(?=(\d{3})+\.)/g, '$& ')
      .replace(/\./g, ',')
      .replace(/,0{2}/g, '');

  if (!breaking) {
    value = value && value.replace(/\s/g, '&nbsp;');
  }

  return (num && value) || 0;
};
