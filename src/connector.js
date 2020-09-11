const getScore = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  // if (response.status !== 200) { return displayError('Game not found'); }
  return response.json();
};

const sendScore = async (name, score) => {
  const hash = 'XzHsDGhBgMOmUU8gUgdd';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, score: score }),
  });

  // console.log('running sendScore');

  const data = await response.json();

  return data;
};

export { sendScore, getScore };
