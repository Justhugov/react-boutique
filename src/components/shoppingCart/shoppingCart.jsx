import "../../assets/style/cart.css"
import ProductInCart from "../product/productInCart.jsx";
import BuyButton from "../utils/button/buyButton.jsx";
import Weight from "../product/attribute/weight.jsx";
const ShoppingCart = ({productsInCart,fonctionForRemove,updateInCart,clickBuyButton,total}) => {



    const allProductsInCart = productsInCart.map(product =><ProductInCart key={product.id} 
                                                                          product = {product}
                                                                          fonctionForRemove = {fonctionForRemove}
                                                                          updateInCart = {updateInCart}/>)

    const totalWeight = productsInCart.reduce((previous,product)=> previous + (product.weight * product.inCart),0);
    const weightText = "poids total   "


    return (
        <div className="cart">
            <h4>Panier</h4>
            <Weight weightText = {weightText} weight={totalWeight}/>
            <div className="total">
                <BuyButton totalPrice= {total} clickBuyButton = {clickBuyButton}/>
            </div>
            <div className="allProductsInCart">
                {allProductsInCart}
            </div>
        </div>
    );
}

export default ShoppingCart;