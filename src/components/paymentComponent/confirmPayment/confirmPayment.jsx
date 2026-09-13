import { useState } from "react";
import Agree from "./agreeComponent.jsx";
import RecapCard from "./recapCard.jsx";
import ConfirmButton from "./confirmButton.jsx";

const ConfirmPayment = ({ card ,showTicket}) => {
    const [displayButton, setDisplayButton] = useState(false);

    const switchDisplayButton = () => {
        setDisplayButton(!displayButton )
    }

    return (
        <div className="payment">
            <h4>Confirmation du paiement</h4>
            <RecapCard card={card} />
            <Agree change = {switchDisplayButton} value = {displayButton}/>
            {displayButton ? <ConfirmButton showTicket = {showTicket}/> : null}
        </div>
    )
}

export default ConfirmPayment;