import PropTypes from "prop-types";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let&apos;s start
      </button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default StartScreen;
