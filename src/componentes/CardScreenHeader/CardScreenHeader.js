import "../CardScreenHeader/CardScreenHeader.css";
import LogoPequeno from "../../assets/logo-pequeno.png";

export default function CardScreenHeader() {
    return (
        <header className="cardScreenHeader" >
            <img className="cardScreenHeaderImage" src={LogoPequeno} alt="startImage" />
            <p className="cardScreenHeaderTitle" >ZapRecall</p>
        </header>
    )
}