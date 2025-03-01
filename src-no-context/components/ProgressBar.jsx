import PropTypes from "prop-types";

function ProgressBar({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

ProgressBar.propTypes = {
  index: PropTypes.number,
  numQuestions: PropTypes.number,
  points: PropTypes.number,
  maxPoints: PropTypes.number,
  answer: PropTypes.number,
};

export default ProgressBar;
