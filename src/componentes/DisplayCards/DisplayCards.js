import "../DisplayCards/DisplayCards.css"
import Card from "../Card/Card";

export default function DisplayCards(props) {
    const { setCardTotalScore, setCardScore, cardTotalScore, cardScore, listaRespondidas, setListaRespondidas, acertou, setAcertou, restart, setRestart, deckChoosen } = props;
    let cards = [];
    if (deckChoosen === 1) {
        cards = [
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
    } else if (deckChoosen === 2) {
        cards = [
            {
                question: "Quem matou o Kuririn?",
                answer: "Freeza."
            },
            {
                question: "Quem é o maior rival de Goku?",
                answer: "Vegeta."
            },
            {
                question: "Qual o nome da transformação final usada por Goku no torneio do poder?",
                answer: "Instinto Superior Completo."
            },
            {
                question: "Qual a forma mais poderosa do Majin-Buu?",
                answer: "Buu com Gohan absorvido."
            },
            {
                question: "Quem derrotou Cell?",
                answer: "Gohan."
            },
            {
                question: "Quantas esferas do dragão existem na Terra?",
                answer: "Sete."
            },
            {
                question: "A Genki-dama usa energia de todos os seres vivos que levantarem suas mãos! Verdadeiro ou falso?",
                answer: "Verdadeiro."
            },
            {
                question: "Qual o nome do golpe assinatura de Goku?",
                answer: "Kame Hame Ha."
            }
        ]
    }
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