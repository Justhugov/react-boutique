import Name from "../../components/product/attribute/name.jsx";
import Price from "../../components/product/attribute/price.jsx";
import extraCost from "../../data/extraCost.js";
const DeliveryCost = () =>{

    return(
        <div className="product">
            <div className="info">
                <Name name = {"Frais de livraison"}/>
            </div>
            <Price price= {extraCost.deliveryCost}/>
        </div>
    )
}

export default DeliveryCost;