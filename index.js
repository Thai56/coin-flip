function randomNumber(precision) {
  return Math.floor(Math.random() * precision);
}

module.exports = () => {
  // odd equals heads
  // even equal even
  const coin = (randomNumber(10000)  % 2) ? 'heads' : 'tails';
  
  return {
    data: coin,
  };
}

