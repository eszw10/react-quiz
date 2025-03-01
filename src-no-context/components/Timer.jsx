import PropTypes from "prop-types";
import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

Timer.propTypes = {
  dispatch: PropTypes.func,
  secondsRemaining: PropTypes.number,
};

export default Timer;
