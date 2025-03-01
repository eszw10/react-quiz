import PropTypes from "prop-types";

function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.number,
  numQuestions: PropTypes.number,
  index: PropTypes.number,
};

export default NextButton;
