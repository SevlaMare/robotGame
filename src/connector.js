const getScore = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  if (response.status === 200) { return response.json(); }

  return Promise.reject(new Error('Error, try late.'));
};

const sendScore = async (name, score) => {
  const hash = 'XzHsDGhBgMOmUU8gUgdd';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });

  return response.json();
};

export { sendScore, getScore };
