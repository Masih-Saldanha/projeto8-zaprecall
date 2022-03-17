export default function StartScreen(props) {
    const { hidden, function1, function2 } = props;
    return (
        <main className={"startScreen" + hidden} >
            <img className="startImage" src="./assets/logo.png" alt="startImage" />
            <h1 className="startTitle" >ZapRecall</h1>
            <button className="startButton" onClick={() => {
                function1(" hidden");
                function2("");
            }} >Iniciar Recall!</button>
        </main>
    )
}