export default function CardScreenFooter(props) {
    const {cardScore, cardTotalScore} = props
    return (
        <footer className="cardScreenFooter" >
            <p className="cardScreenFooterScore">{cardScore}/{cardTotalScore} CONCLUÍDOS</p>
        </footer>
    )
}