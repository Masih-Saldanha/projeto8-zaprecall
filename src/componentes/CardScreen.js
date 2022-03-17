import react from "react";
import Card from "./Card";
import CardScreenFooter from "./CardScreenFooter";
import CardScreenHeader from "./CardScreenHeader";

export default function CardScreen(props) {
    const { hidden } = props;
    const [cardTotalScore, setCardTotalScore] = react.useState(8);
    const [cardScore, setCardScore] = react.useState(0);
    return (
        <main className={"cardScreen" + hidden} >
            <CardScreenHeader />
            <Card />
            <Card />
            <Card />
            <Card />
            <CardScreenFooter cardScore={cardScore} cardTotalScore={cardTotalScore} />
        </main>
    )
}