
const InputNumCard = ({num,update}) => {


    const isDigit = c => {
        return c >= '0' && c <= '9';
    }

    const checkInput = inputValue => {
        return inputValue.split('')
            .every((char, index) => ([4, 9, 14].includes(index)) ?
                char == " " : isDigit(char)) || inputValue == "";
    }


    const updateInput = event => {
        const value = event.target.value;
        const lengthValue = value.length;
        if (lengthValue > num.length) {
            if (checkInput(value)) {
                update(value)
                if ([4, 9, 14].includes(lengthValue)) {
                    update(value + " ")
                }
            }
        }
        else {
            if (checkInput(value)) {
                update(value)
                if ([4, 9, 14].includes(lengthValue)) {
                    update(value.slice(0, -1))
                }
            }
        }
    }

    return (

        <input
                            placeholder="0000 0000 0000 0000"
                            title="Numéro de carte"
                            name="input-name"
                            type="tel"
                            className="input_field"
                            id="password_field"
                            value = {num}onChange={updateInput} maxLength={19}
                        />

    )
}

export default InputNumCard;