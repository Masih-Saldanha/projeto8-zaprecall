import react from "react";
import CardScreenHeader from "../CardScreenHeader/CardScreenHeader";
import DisplayCards from "../DisplayCards/DisplayCards";
import CardScreenFooter from "../CardScreenFooter/CardScreenFooter";
import "../CardScreen/CardScreen.css"

export default function CardScreen(props) {
    const { hidden } = props;
    const [cardTotalScore, setCardTotalScore] = react.useState(8);
    const [cardScore, setCardScore] = react.useState(0);
    const [listaRespondidas, setListaRespondidas] = react.useState([]);
    const [errou, setErrou] = react.useState(false)

    return (
        <main className={"cardScreen" + hidden} >
            <CardScreenHeader />
            
            <DisplayCards
                setCardTotalScore={setCardTotalScore}
                setCardScore={setCardScore}
                cardScore={cardScore}
                listaRespondidas={listaRespondidas}
                setListaRespondidas={setListaRespondidas}
                setErrou={setErrou}
            />

            <CardScreenFooter
                cardScore={cardScore}
                cardTotalScore={cardTotalScore}
                listaRespondidas={listaRespondidas}
                errou={errou}
            />
        </main>
    )
}