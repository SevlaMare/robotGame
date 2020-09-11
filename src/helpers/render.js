const renderScores = (result) => {
  const containerOpen = `<div id="scoresBoard" style="
    height: 350px;
    width: 250px;
    padding: 3px 5px;
    font-size: 16xpx;
    border: 3px solid #333;
    border-radius: 5px;
    color: #333;
    background: #fff;>
  "`;
  let playersScores = '';
  const containerClose = '</div>';

  // loop over input and insert in a paragraph
  for (let index = 0; index < result.length; index += 1) {
    const player = result[index].user;
    const { score } = result[index];

    playersScores += `<p>${score} by ${player}</p>`;
  }

  // string list of players scores
  const scoreBoard = containerOpen + playersScores + containerClose;

  // console.log(result[index]['user'], result[index]['score'])
  return scoreBoard;
};

export default renderScores;
