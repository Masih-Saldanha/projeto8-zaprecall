import react from "react";
import StartScreen from "../StartScreen/StartScreen";
import CardScreen from "../CardScreen/CardScreen";
import "./reset.css";
import "./styles.css";

export default function App() {
    const [hiddenStartScreen, setHiddenStartScreen] = react.useState("");
    const [hiddenCardScreen, setHiddenCardScreen] = react.useState(" hidden");
    const [restart, setRestart] = react.useState(false);
    const [aimedScore, setAimedScore] = react.useState(0);
    const [deckChoosen, setDeckChoosen] = react.useState(0);

    return (
        <>
            <StartScreen
                hidden={hiddenStartScreen}
                function1={setHiddenStartScreen}
                function2={setHiddenCardScreen}
                setRestart={setRestart}
                setAimedScore={setAimedScore}
                setDeckChoosen={setDeckChoosen}
            />
            <CardScreen
                hidden={hiddenCardScreen}
                setHiddenStartScreen={setHiddenStartScreen}
                setHiddenCardScreen={setHiddenCardScreen}
                restart={restart}
                setRestart={setRestart}
                aimedScore={aimedScore}
                deckChoosen={deckChoosen}
            />
        </>
    )
}