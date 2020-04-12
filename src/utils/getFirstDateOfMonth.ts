const getFirstDateOfMonth = (): Date => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export default getFirstDateOfMonth;
