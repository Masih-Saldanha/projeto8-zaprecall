export default function Card(props) {
    const {numeroCard} = props;
    return (
        <section className="card">
            <article className="frontCard">
                <p className="frontCardTitle">Pergunta {numeroCard}</p>
                <ion-icon name="play-outline"></ion-icon>
            </article>
        </section>
    )
}