
const InputNbProduct = ({maxStock,nbInCart,updateStock}) => {

    return (
        <input type="number" min={1} max={maxStock} value={nbInCart} onChange={updateStock}/>
    )
}

export default InputNbProduct;