import "../DisplayCards/DisplayCards.css"
import Card from "../Card/Card";

export default function DisplayCards(props) {
    const { setCardTotalScore, setCardScore, cardTotalScore, cardScore, listaRespondidas, setListaRespondidas, acertou, setAcertou, restart, setRestart } = props
    const cards = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript."
        },
        {
            question: "O React é __",
            answer: "Uma biblioteca JavaScript para construção de interfaces."
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula."
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma."
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências."
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes."
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
        }
    ]
    setCardTotalScore(cards.length)
    function comparador() {
        return Math.random() - 0.5;
    }
    cards.sort(comparador)
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