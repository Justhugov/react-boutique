import Name from "../../components/product/attribute/name.jsx";
import ImageProduit from "../../components/product/attribute/imageProduit.jsx";
import Stock from "../../components/product/attribute/stock.jsx";
import Price from "../../components/product/attribute/price.jsx";
const ProductInRecap = ({product}) =>{


    return (
        <div className="product">
            <div className="info">
                <Name name = {product.name}/>
            </div>
            <ImageProduit image = {product.image} description={product.name}/>
            <Stock stock = {product.inCart}/>
            <Price price= {product.price}/>
        </div>
    );
}

export default ProductInRecap;