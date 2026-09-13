
const InputExpirationDate = ({expiration,update}) => {

    const isDigit = c => {
        return c >= '0' && c <= '9';
    }

    const checkInput = inputValue =>{
        if (inputValue.length == 0){
            return true;
        }
        else if (inputValue.length == 1){
            return inputValue === "0" || inputValue === "1"
        }
        else{
            const month = inputValue.split('/')[0]
            return (month > 0 && month <13) && (inputValue[3] === undefined ||  isDigit(inputValue[3])) && (inputValue[4] === undefined ||  isDigit(inputValue[4])) 
        }
    }

    const change = event =>{
        const value = event.target.value;
        if (value.length > expiration.length){
            if (checkInput(value)){
                if (value.length == 2){
                    update(value + "/")
                }
                else{
                    update(value)
                }
            }
        }
        else{
            if (checkInput(value)){
                update(value)
                if (value.length == 2){
                    update(value.slice(0, -1))
                }
            }
        }

    }

     return (
        <input
                                placeholder="01/23"
                                title="Expiry Date"
                                name="input-name"
                                type="text"
                                className="input_field"
                                id="password_field"
                                maxLength={5} value={expiration} onChange={change}
                            />
    )
}
export default InputExpirationDate;