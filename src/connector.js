// TEST WITH LOCAL STORAGE
const sendScore = (name, score) => {
  // access DB
  const database = JSON.parse(localStorage.getItem('scores'));

  // insert new value
  database.player3 = { name, score };

  // store
  return localStorage.setItem('scores', JSON.stringify(database));
};

const getScore = () => JSON.parse(localStorage.getItem('scores'));

export { sendScore, getScore };