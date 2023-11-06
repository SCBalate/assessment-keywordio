export function formatNumber(number, isCurrency) {
  if (typeof number !== "number") {
    return number;
  }

  const formattedNumber = number.toLocaleString("en-IN");

  if (isCurrency) {
    return `USD ${formattedNumber}`;
  } else {
    return formattedNumber;
  }
}
