import { FooterEducational } from "../../../../components/FooterEducational";
import { Container, MainMenu, ScoreView } from "./styles";

// Import Swiper styles
import { useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeaderEducational } from "../../../../components/HeaderEducational";
import { useEffect, useState } from "react";

import gameover from "../../../../assets/images/gameover.png";

export function FinishedGame() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [results, setResults] = useState("");

  function handleResults(state: number) {
    if (state < 40) {
      setResults(
        `Nossa, pensei que você sabia um pouco de javascript...
        Você precisa praticar mais!!`
      );
    } else {
      setResults("Você é um deus do javascript");
    }
  }

  useEffect(() => {
    handleResults(state);
  }, [state]);

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <ScoreView>SCORE: {state}/70</ScoreView>
        <ScoreView>{results}</ScoreView>

        <img src={gameover} alt="gameover" />

        <ScoreView
          onClick={() => navigate("/Educational/QuizGame")}
          style={{ cursor: "pointer" }}
        >
          Tentar Novamente?
        </ScoreView>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
