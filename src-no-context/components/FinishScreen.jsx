import PropTypes from "prop-types";

function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  const pointPercentage = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (pointPercentage === 100) emoji = "🥇";
  if (pointPercentage >= 80 && pointPercentage < 100) emoji = "🎉";
  if (pointPercentage >= 50 && pointPercentage < 80) emoji = "👍";
  if (pointPercentage >= 10 && pointPercentage < 50) emoji = "🤦‍";
  if (pointPercentage < 10) emoji = "💀";
  return (
    <>
      <div className="result">
        <p>
          {emoji} You scored {points} out of {maxPoints} ({pointPercentage}%)
        </p>
      </div>
      <p className="highscore">(Highscore : {highScore} )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

FinishScreen.propTypes = {
  points: PropTypes.number,
  maxPoints: PropTypes.number,
  highScore: PropTypes.number,
  dispatch: PropTypes.func,
};

export default FinishScreen;
