const formatNumber = (amount: number) => {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
  }).format(amount);
};

export default formatNumber;
