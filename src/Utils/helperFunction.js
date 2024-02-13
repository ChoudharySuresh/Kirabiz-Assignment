export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

export const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatQuantity = (number) => {
  const numberString = number.toString();
  const formattedNumber = numberString.replace(/\.?0*$/, "");
  const [integerPart, decimalPart] = formattedNumber.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const formateWeight = (weight) => {
  const weightInNumber = Number(weight);
  const number = Intl.NumberFormat("en-IN").format(weightInNumber);
  return number;
};

