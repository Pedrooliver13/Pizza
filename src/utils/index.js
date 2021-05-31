export const formatBRL = (value) => {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export const getRandomNumber = (totalLength) => {
  const randomNumber = Math.floor(Math.random() * (totalLength - 1));
  return randomNumber;
}

export const getFeaturedItem = (results) => {
  let randomNumber = getRandomNumber(results.length);
  let featuredItem = results[randomNumber];

  return featuredItem;
}
