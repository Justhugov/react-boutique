import "../../assets/style/recap.css"
import Total from "../utils/total.jsx";
import DeliveryCost from "./deliveryCost.jsx";
import ProductInRecap from "./productInRecap.jsx";
import extraCost from "../../data/extraCost.js";
import ManagementCost from "./managementCost.jsx";
import GoBackButton from "../utils/button/goBackButton.jsx";
import ExtraGift from "../product/extraGift/extraGift.jsx";
const RecapShoppingCart = ({productsInCart,total,switchComponent}) =>{


    const allProductsInRecap = productsInCart.map(product =><ProductInRecap key={product.id} 
                                                                          product = {product}/>)

    return (
        <div className="recap">
            <GoBackButton onClick={switchComponent}/>
            <h4>Récapitulatif du panier</h4>
            <div className="allProductsInCart">
                {allProductsInRecap}
                <ExtraGift/>
                <DeliveryCost/>
                <ManagementCost/>
            </div>
            <Total totalPrice = {total + extraCost.allExtraCost }/>
        </div>
    );
}

export default RecapShoppingCart;