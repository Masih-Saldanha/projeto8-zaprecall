import Card from "./Card";

export default function DisplayCards(props) {
    const {amountOfCards} = props
    const cards = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]
    
    return (
        <menu className="cardScreenMenu">
            {cards.map((card, indice) => {
                return (
                    <Card
                        key={indice}
                        numeroCard={indice + 1}
                    />
                )
            })}
        </menu>
    )
}