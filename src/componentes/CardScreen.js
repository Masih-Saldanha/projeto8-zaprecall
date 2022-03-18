import react from "react";
import CardScreenHeader from "./CardScreenHeader";
import DisplayCards from "./DisplayCards";
import CardScreenFooter from "./CardScreenFooter";

export default function CardScreen(props) {
    const { hidden } = props;
    const [cardTotalScore, setCardTotalScore] = react.useState(8);
    const [cardScore, setCardScore] = react.useState(0);

    return (
        <main className={"cardScreen" + hidden} >
            <CardScreenHeader />
            <DisplayCards />
            <CardScreenFooter cardScore={cardScore} cardTotalScore={cardTotalScore} />
        </main>
    )
}