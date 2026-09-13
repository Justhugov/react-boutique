import Name from "../../components/product/attribute/name.jsx";
import Price from "../../components/product/attribute/price.jsx";
import extraCost from "../../data/extraCost.js";
const ManagementCost = () =>{

    return(
        <div className="product">
            <div className="info">
                <Name name = {"Frais de gestion"}/>
            </div>
            <Price price= {extraCost.managementCost}/>
        </div>
    )
}

export default ManagementCost;