const getScore = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  return response.json();
};

const sendScore = async (name, score) => {
  const hash = 'V9ILV26xsH3AzCaQYXZc';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });

  if (response.status === 400) { throw new Error('You need your name to send.'); }

  return response.json();
};

export { sendScore, getScore };
