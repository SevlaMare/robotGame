// Localstorage connector
// const sendScore = (name, score) => {
//   // access DB
//   const database = JSON.parse(localStorage.getItem('scores'));

//   // insert new value
//   database.player3 = { name, score };

//   // store
//   return localStorage.setItem('scores', JSON.stringify(database));
// };

// get local scores
// const getScore = () => JSON.parse(localStorage.getItem('scores'));

// fetchData
const getScore = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  // if (response.status !== 200) { return displayError('Game not found'); }
  const data = await response.json();

  return data;
};

const sendScore = async (name, score) => {
  const hash = 'XzHsDGhBgMOmUU8gUgdd';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });

  // console.log('running sendScore');

  const data = await response.json();
  return data;
};

export { sendScore, getScore };
