import ImageProduit from "./attribute/imageProduit.jsx";
import Info from "./attribute/info.jsx";
import Stock from "./attribute/stock.jsx";
import Price from "./attribute/price.jsx";
import AddToCart from "../utils/button/addToCart.jsx";
const ForSaleProduct = ({product,buyProduct}) => {


    const onAddToCartClick = () =>{
        if ((product.currentStock)>0){
            buyProduct({product});
        }
    }

    return (
        <div className="product">
            <Info name={product.name} weight={product.weight} description = {product.description} />
            <ImageProduit image = {product.image} description= {product.description}/>
            <Stock stock = {product.currentStock}/>
            <Price price= {product.price}/>
            <AddToCart buy = {onAddToCartClick} inCart={product.inCart}/>
        </div>
    )
}

export default ForSaleProduct;