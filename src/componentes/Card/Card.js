import react from "react";
import "../Card/Card.css";
import Setinha from "../../assets/setinha.png";

export default function Card(props) {
    const { numeroCard, question, answer, cardTotalScore, setCardScore, cardScore, listaRespondidas, setListaRespondidas, acertou, setAcertou, restart, setRestart } = props;
    const [perguntaRevelada, setPerguntaRevelada] = react.useState(false);
    const [respostaRevelada, setRespostaRevelada] = react.useState(false);
    const [cor, setCor] = react.useState("");
    if (restart === true && cardScore === cardTotalScore && cor !== "") {
        setPerguntaRevelada(false);
        setRespostaRevelada(false);
        setCor("");
        setListaRespondidas([]);
        setRestart(false);
    }
    if (perguntaRevelada === false && respostaRevelada === false) {
        return (
            <section className="card">
                <article className="frontCard">
                    <p className="frontCardTitle">Pergunta {numeroCard}</p>
                    <ion-icon name="play-outline" onClick={() => setPerguntaRevelada(true)}></ion-icon>
                </article>
            </section>
        )
    } else if (perguntaRevelada === true && respostaRevelada === false) {
        return (
            <section className="cardQuestion">
                <p className="question">{question}</p>
                <img className="setinha" src={Setinha} onClick={() => setRespostaRevelada(true)} alt="setinha" />
            </section>
        )
    } else if (perguntaRevelada === true && respostaRevelada === true) {
        return (
            <section className="cardQuestion">
                <p className="question">{answer}</p>
                <menu className="buttonsMenu">
                    <button className="redButton" onClick={() => {
                        setCardScore(cardScore + 1);
                        setListaRespondidas([...listaRespondidas, <ion-icon class="red" name="close-circle"></ion-icon>]);
                        setCor("red");
                        setPerguntaRevelada(false);
                    }} >Não lembrei</button>
                    <button className="yellowButton" onClick={() => {
                        setAcertou(acertou + 1);
                        setCardScore(cardScore + 1);
                        setListaRespondidas([...listaRespondidas, <ion-icon class="yellow" name="help-circle"></ion-icon>]);
                        setCor("yellow");
                        setPerguntaRevelada(false);
                    }}>Quase não lembrei</button>
                    <button className="greenButton" onClick={() => {
                        setAcertou(acertou + 1);
                        setCardScore(cardScore + 1);
                        setListaRespondidas([...listaRespondidas, <ion-icon class="green" name="checkmark-circle"></ion-icon>]);
                        setCor("green");
                        setPerguntaRevelada(false);
                    }}>Zap!</button>
                </menu>
            </section>
        )
    } else if (perguntaRevelada === false && respostaRevelada === true && cor === "red") {
        return (
            <section className="card">
                <article className={"frontCardred"}>
                    <p className={"frontCardTitlered"}>Pergunta {numeroCard}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </article>
            </section>
        )
    } else if (perguntaRevelada === false && respostaRevelada === true && cor === "yellow") {
        return (
            <section className="card">
                <article className={"frontCardyellow"}>
                    <p className={"frontCardTitleyellow"}>Pergunta {numeroCard}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </article>
            </section>
        )
    } else if (perguntaRevelada === false && respostaRevelada === true && cor === "green") {
        return (
            <section className="card">
                <article className={"frontCardgreen"}>
                    <p className={"frontCardTitlegreen"}>Pergunta {numeroCard}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </article>
            </section>
        )
    }
}