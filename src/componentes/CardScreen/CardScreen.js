import react from "react";
import CardScreenHeader from "../CardScreenHeader/CardScreenHeader";
import DisplayCards from "../DisplayCards/DisplayCards";
import CardScreenFooter from "../CardScreenFooter/CardScreenFooter";
import "../CardScreen/CardScreen.css";

export default function CardScreen(props) {
    const { hidden, setHiddenStartScreen, setHiddenCardScreen, restart, setRestart, aimedScore, deckChoosen } = props;
    const [cardTotalScore, setCardTotalScore] = react.useState(8);
    const [cardScore, setCardScore] = react.useState(0);
    const [listaRespondidas, setListaRespondidas] = react.useState([]);
    const [acertou, setAcertou] = react.useState(0);

    return (
        <main className={"cardScreen" + hidden} >
            <CardScreenHeader />

            <DisplayCards
                setCardTotalScore={setCardTotalScore}
                setCardScore={setCardScore}
                cardTotalScore={cardTotalScore}
                cardScore={cardScore}
                listaRespondidas={listaRespondidas}
                setListaRespondidas={setListaRespondidas}
                acertou={acertou}
                setAcertou={setAcertou}
                restart={restart}
                setRestart={setRestart}
                deckChoosen={deckChoosen}
            />

            <CardScreenFooter
                cardScore={cardScore}
                setCardScore={setCardScore}
                cardTotalScore={cardTotalScore}
                listaRespondidas={listaRespondidas}
                acertou={acertou}
                setAcertou={setAcertou}
                setHiddenStartScreen={setHiddenStartScreen}
                setHiddenCardScreen={setHiddenCardScreen}
                aimedScore={aimedScore}
            />
        </main>
    )
}