// import react from "react";
import Card from "../Card/Card";
import "../DisplayCards/DisplayCards.css";

export default function DisplayCards(props) {
    const { setCardScore, cardTotalScore, cardScore, listaRespondidas, setListaRespondidas, acertou, setAcertou, restart, setRestart, cards } = props;

    return (
        <menu className="cardScreenMenu">
            {
                cards.map(
                    (card, indice) => {
                        return (
                            <Card
                                key={indice}
                                numeroCard={indice + 1}
                                question={card.question}
                                answer={card.answer}
                                cardTotalScore={cardTotalScore}
                                setCardScore={setCardScore}
                                cardScore={cardScore}
                                listaRespondidas={listaRespondidas}
                                setListaRespondidas={setListaRespondidas}
                                acertou={acertou}
                                setAcertou={setAcertou}
                                restart={restart}
                                setRestart={setRestart}
                            />
                        )
                    }
                )
            }
        </menu>
    )
}