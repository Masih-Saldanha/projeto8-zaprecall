import react from "react";
import StartScreen from "./StartScreen";
import CardScreen from "./CardScreen";

export default function App() {
    const [hiddenStartScreen, setHiddenStartScreen] = react.useState("")
    const [hiddenCardScreen, setHiddenCardScreen] = react.useState(" hidden")

    return (
        <>
            <StartScreen
                hidden={hiddenStartScreen}
                function1={setHiddenStartScreen}
                function2={setHiddenCardScreen}
            />
            <CardScreen hidden={hiddenCardScreen} />
        </>
    )
}