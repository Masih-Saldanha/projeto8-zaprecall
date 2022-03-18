import Card from "./Card";

export default function DisplayCards(props) {
    const { setCardTotalScore, setCardScore } = props
    const cards = [
        {question: "O que é JSX?"},
        {question: "O React é __"},
        {question: "Componentes devem iniciar com __"},
        {question: "Podemos colocar __ dentro do JSX"},
        {question: "O ReactDOM nos ajuda __"},
        {question: "Usamos o npm para __"},
        {question: "Usamos props para __"},
        {question: "Usamos estado (state) para __"}
    ]
    setCardTotalScore(cards.length)
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
                            />
                        )
                    }
                )
            }
        </menu>
    )
}