import { useState } from "react"
import "../../assets/style/payment.css"
import PaymentInformation from "./cardInformations.jsx/paymentInformation.jsx"
import CheckCard from "../../scripts/checkCard.js"
import ConfirmPayment from "./confirmPayment/confirmPayment.jsx"
const PaymentComponent = ({total,showTicket,card,setCard}) => {
    

    const [areErrors,setAreErrors] = useState(true);

    const checkCard = () =>{
        const check = new CheckCard(card);
        const errors = check.allError
        setAreErrors(errors.length != 0);
        return errors
    }


    return (
        areErrors ?<PaymentInformation total = {total} card = {card} setCard= {setCard} checkCard = {checkCard}/> : <ConfirmPayment showTicket={showTicket} card = {card}/>
            )
}

export default PaymentComponent;