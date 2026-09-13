
const InputCvv = ({cvv,update}) => {

    const isDigit = c =>{
        return c >= '0' && c<= '9';
    }

    const checkCvv = value =>{
        return value.split("")
                    .every(char => isDigit(char));
    }

    const changeValue = event =>{
        if (checkCvv(event.target.value)){
            update(event.target.value)
        }
    }

     return (
        <input
                                placeholder="CVV"
                                title="CVV"
                                name="cvv"
                                type="password"
                                className="input_field"
                                id="password_field"
                                maxLength={3} value={cvv} onChange={changeValue}
                            />
    )
}
export default InputCvv;