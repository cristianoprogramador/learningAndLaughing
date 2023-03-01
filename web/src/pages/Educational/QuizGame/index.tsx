import { FooterEducational } from "../../../components/FooterEducational";
import {
  Container,
  Description,
  Explanations,
  ImageContainer,
  MainMenu,
  QuizContainer,
  ScoreView,
  Title,
  TitleQuiz,
} from "./styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeaderEducational } from "../../../components/HeaderEducational";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { quiz } from "../../../services/quiz";
import { toast } from "react-toastify";
import { ButtonQuiz } from "../../../components/ButtonQuiz";
import { Button } from "../../../components/Button";

export interface QuizProps {
  id: number;
  language: string;
  question: string;
  correct: string;
  explanations: string;
  answers: {
    id: string;
    answer: string;
  }[];
}

export function QuizGame() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState<QuizProps | null>(
    null
  );
  const [askedQuestions, setAskedQuestions] = useState<QuizProps[]>([]);
  const [points, setPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [optionSelected, setOptionSelected] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledSeeResults, setIsDisabledSeeResults] = useState(true);
  const [seeCorrection, setSeeCorrection] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [notAnswered, setNotAnswered] = useState(true);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    const unansweredQuestions = quiz.filter((q) => !askedQuestions.includes(q));
    if (unansweredQuestions.length === 0) {
      navigate("/Educational/QuizGame/FinishedGame", { state: points });
    } else {
      const randomIndex = Math.floor(
        Math.random() * unansweredQuestions.length
      );
      const randomQuestion = unansweredQuestions[randomIndex];
      setCurrentQuestion(randomQuestion);
    }
  }, [askedQuestions]);

  // console.log("QUAL RESPOSTA CORRETA? ", correctAnswer);

  function handleAnswer(selectedIndex: string) {
    const isCorrect = selectedIndex === currentQuestion!.correct;
    if (isCorrect) {
      toast.success("Acertouuuu");
      setPoints(points + 10);
    } else {
      setCorrectAnswer(currentQuestion!.correct);
      toast.error("ERRROUUU");
    }
    setTotalPoints(totalPoints + 10);
    setIsDisabled(true);
    setIsDisabledSeeResults(false);
    setNotAnswered(false);
  }

  if (!currentQuestion) {
    return <div>Carregando o quiz...</div>;
  }

  function handleNextQuestion() {
    setIsDisabled(false);
    setAskedQuestions([...askedQuestions, currentQuestion!]);
    setSeeCorrection(false);
    setCorrectAnswer("");
    setNotAnswered(true);
  }

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <div>
          <Title>Preparado para o melhor quiz da internet?</Title>
          <Description>
            Selecione a alternativa e TESTE SUA SORTE! (ou sabedoria se for o
            caso)
          </Description>
          <ScoreView>
            SCORE: {points}/{totalPoints}
          </ScoreView>

          <QuizContainer>
            <ImageContainer>
              <img src={currentQuestion.question} />
            </ImageContainer>
            <TitleQuiz>Resultado:</TitleQuiz>
            {currentQuestion.answers.map((answer, index) => {
              const buttonStyle = {
                backgroundColor:
                  selectedAnswerIndex === index ? "green" : "gray",
                border: correctAnswer === answer.id ? "2px solid red" : "none",
                color: correctAnswer === answer.id && "red",
              };
              return (
                <ButtonQuiz
                  text={answer.answer}
                  onClick={() => {
                    setSelectedAnswerIndex(index);
                    setOptionSelected(answer.id);
                    setIsDisabledSeeResults(false);
                  }}
                  key={answer.id}
                  style={buttonStyle}
                  disabled={isDisabled}
                />
              );
            })}
            <Button
              text={"Testar a sorte!"}
              differentColor
              onClick={() => {
                handleAnswer(optionSelected);
                setIsDisabledSeeResults(true);
              }}
              disabled={isDisabledSeeResults}
              style={{ width: "50%", alignSelf: "center", marginTop: "30px" }}
            />
          </QuizContainer>
        </div>

        <div
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <QuizContainer>
            <Button
              text={"Próxima Pergunta"}
              differentColor
              onClick={() => handleNextQuestion()}
              style={{ width: "220px", height: "70px", alignSelf: "center" }}
              disabled={notAnswered}
            />
            <Button
              onClick={() => setSeeCorrection((prev) => !prev)}
              text="Ver Explicação"
              style={{ width: "220px", height: "70px", alignSelf: "center" }}
              disabled={notAnswered}
            />
          </QuizContainer>

          {seeCorrection && (
            <QuizContainer>
              <Explanations>{currentQuestion.explanations}</Explanations>
            </QuizContainer>
          )}
        </div>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
