import "../Card/Card.css"
import Setinha from "../../assets/setinha.png"

export default function Card(props) {
    const { numeroCard, question, answer } = props;
    return (
        <section className="card">
            <article className="frontCard">
                <p className="frontCardTitle">Pergunta {numeroCard}</p>
                <ion-icon name="play-outline"></ion-icon>
            </article>
        </section>
    )
    // return (
    //     <section className="cardQuestion">
    //             <p className="question">{question}</p>
    //             <img className="setinha" src={Setinha} alt="setinha" />
    //     </section>
    // )
    // return (
    //     <section className="cardQuestion">
    //         <p className="question">{answer}</p>
    //         <menu className="buttonsMenu">
    //             <button className="redButton" >Não lembrei</button>
    //             <button className="yellowButton" >Quase não lembrei</button>
    //             <button className="greenButton" >Zap!</button>
    //         </menu>
    //     </section>
    // )
}