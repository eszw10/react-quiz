import PropTypes from "prop-types";
import { useQuiz } from "../context/QuizContext";

function FinishScreen({ maxPoints }) {
  const { points, highScore, dispatch } = useQuiz();
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
  maxPoints: PropTypes.number,
};

export default FinishScreen;
