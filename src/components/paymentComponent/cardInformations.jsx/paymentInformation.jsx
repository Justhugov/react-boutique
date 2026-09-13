import { useState } from "react"
import ErrorInput from "./errorInput.jsx"
import InputCvv from "./inputCvv.jsx"
import InputExpirationDate from "./inputExpirationDate.jsx"
import InputNumCard from "./inputNumCard.jsx"
import PayButton from "./payButton.jsx"
// < !--From Uiverse.io by zaeniahmad - id-- >
const PaymentInformation = ({ total, card, setCard ,checkCard}) => {
    const [allError,setAllError] = useState([]);

    const setName = event =>{
        const newCard = ({...card});
        newCard.name = event.target.value;
        setCard(newCard);
    }

    const setNum = newNum =>{
        const newCard = ({...card});
        newCard.num = newNum;
        setCard(newCard);
    }

    const setExpiration = newExpiration =>{
        const newCard = ({...card});
        newCard.expiration = newExpiration;
        setCard(newCard);
    }

    const setCvv = newCvv =>{
        const newCard = ({...card});
        newCard.cvv = newCvv;
        setCard(newCard);
    }


    const updateError = () =>{
        setAllError(checkCard())
    }

    let errorOnTheInput;
    if (allError.length == 0){
        errorOnTheInput = null
    }
    else{
        errorOnTheInput = <ErrorInput listError= {allError}/>
    }

    return (
        <div className="modal">
            <div className="form">
                <div className="credit-card-info--form">
                    <div className="input_container">
                        <label className="input_label" htmlFor="password_field">Nom sur la carte</label>
                        <input
                            placeholder="Entrer votre nom complet"
                            title="Inpit title"
                            name="input-name"
                            type="text"
                            className="input_field"
                            id="password_field"
                            onChange={setName}
                            value={card.name}
                        />
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="password_field">N° sur la carte</label>
                        <InputNumCard num = {card.num} update = {setNum}/>
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="password_field">Date d'expiration / CVV</label>
                        <div className="split">
                            <InputExpirationDate expiration = {card.expiration} update = {setExpiration} />
                            <InputCvv cvv = {card.cvv} update = {setCvv}/>
                        </div>
                    </div>
                    {errorOnTheInput}
                    <PayButton total = {total} onClick = {updateError}/>
                </div>
            </div>
        </div>
    )
}

export default PaymentInformation;