const getScore = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  return response.json();
};

const sendScore = async (name, score) => {
  const hash = 'XzHsDGhBgMOmUU8gUgdd';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });

  return response.json();
};

export { sendScore, getScore };
