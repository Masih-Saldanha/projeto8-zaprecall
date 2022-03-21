import "../StartScreen/StartScreen.css"
import Logo from "../../assets/logo.png"

export default function StartScreen(props) {
    const { hidden, function1, function2, setRestart, setAimedScore } = props;
    return (
        <main className={"startScreen" + hidden} >
            <img className="startImage" src={Logo} alt="startImage" />
            <p className="startTitle" >ZapRecall</p>

            <input className="aimedScore" type="text" placeholder="Digite sua meta de zaps..."></input>
            <button className="startButton" onClick={() => {
                const scoreDesejado = document.querySelector(".aimedScore").value;
                setAimedScore(Number(scoreDesejado));
                function1(" hidden");
                function2("");
                // setRestart(true);
            }} >Iniciar Recall!</button>
        </main>
    )
}