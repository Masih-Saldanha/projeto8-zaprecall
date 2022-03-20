import "../CardScreenFooter/CardScreenFooter.css"
import Party from "../../assets/party.png"
import Sad from "../../assets/sad.png"

export default function CardScreenFooter(props) {
    const { cardScore, cardTotalScore, listaRespondidas, errou } = props
    if (cardScore < cardTotalScore) {
        return (
            <footer className="cardScreenFooter" >
                <p className="cardScreenFooterScore">{cardScore}/{cardTotalScore} CONCLUÍDOS</p>
                <menu className="listOfAnswered">
                    {listaRespondidas.map(item => {
                        return (
                            item
                        )
                    })}
                </menu>
            </footer>
        )
    } else if (cardScore === cardTotalScore && errou === false) {
        return (
            <footer className="cardScreenFooter" >
                <article className="endContainer">
                    <img className="endImage" src={Party} alt="Parabens!" />
                    <p className="endMessage1">Parabéns!</p>
                </article>
                <p className="endMessage2">Você não esqueceu de nenhum flashcard!</p>
                <p className="cardScreenFooterScore">{cardScore}/{cardTotalScore} CONCLUÍDOS</p>
                <menu className="listOfAnswered">
                    {listaRespondidas.map(item => {
                        return (
                            item
                        )
                    })}
                </menu>
            </footer>
        )
    } else if (cardScore === cardTotalScore && errou === true) {
        return (
            <footer className="cardScreenFooter" >
                <article className="endContainer">
                    <img className="endImage" src={Sad} alt="Que pena!" />
                    <p className="endMessage1">Putz...</p>
                </article>
                <p className="endMessage2">Ainda faltam alguns...
                    Mas não desanime!</p>
                <p className="cardScreenFooterScore">{cardScore}/{cardTotalScore} CONCLUÍDOS</p>
                <menu className="listOfAnswered">
                    {listaRespondidas.map(item => {
                        return (
                            item
                        )
                    })}
                </menu>
            </footer>
        )
    }
}