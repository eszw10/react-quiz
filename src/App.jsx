import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { questions, status } = useQuiz();

  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <ProgressBar maxPoints={maxPossiblePoints} />
            <Question />
            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen maxPoints={maxPossiblePoints} />
        )}
      </Main>
    </div>
  );
}

export default App;
