import Price from "../product/attribute/price.jsx";
const Total = ({totalPrice}) =>{
    const numberFormatter = new Intl.NumberFormat();


    return (
        <div className="total">
            <div>
                Total commande: <Price price= {numberFormatter.format(Number.parseFloat(totalPrice))}/>
            </div>
        </div>
    );
}

export default Total;