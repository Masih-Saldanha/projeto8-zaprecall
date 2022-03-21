import "../StartScreen/StartScreen.css";
import Logo from "../../assets/logo.png";

export default function StartScreen(props) {
    const { hidden, function1, function2, setRestart, setAimedScore, setDeckChoosen } = props;
    return (
        <main className={"startScreen" + hidden} >
            <img className="startImage" src={Logo} alt="startImage" />
            <p className="startTitle" >ZapRecall</p>

            <select className="aimedScore deckChoosen" name="deckChoosen" id="deckChoosen">
                <option hidden value="default" >Escolha seu deck</option>
                <option className="option" value="deck1">React</option>
                <option className="option" value="deck2">Dragon Ball</option>
            </select>

            <input className="aimedScore" type="text" placeholder="Digite sua meta de zaps..." id="aimedScore"></input>

            <button className="startButton" onClick={() => {
                let deck = document.getElementById("deckChoosen").options[document.getElementById("deckChoosen").selectedIndex].value;
                if (deck === "deck1") {
                    setDeckChoosen(1);
                } else if (deck === "deck2") {
                    setDeckChoosen(2);
                }
                const scoreDesejado = document.getElementById("aimedScore").value;
                setAimedScore(Number(scoreDesejado));
                function1(" hidden");
                function2("");
                setRestart(true);
            }} >Iniciar Recall!</button>
        </main>
    )
}