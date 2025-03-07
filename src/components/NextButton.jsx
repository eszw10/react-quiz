import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { questions, answer, index, dispatch } = useQuiz();
  const numQuestions = questions.length;

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

export default NextButton;
