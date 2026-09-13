import ImageProduit from "./attribute/imageProduit.jsx";
import Name from "./attribute/name.jsx";
import InputNbProduct from "../shoppingCart/inputNbProduct.jsx";
import DeleteProductButton from "../utils/button/deleteProductButton.jsx";
const ProductInCart = ({product,fonctionForRemove,updateInCart}) => {


    const deleteProduct = () => {
        fonctionForRemove({product});
    }

    const updateStock = event =>{
        const nbInCart = Number.parseInt(event.target.value);
        if (! Number.isNaN(nbInCart) && nbInCart <= product.stock && nbInCart > 0){
            updateInCart({product,nbInCart});
        }
    }


    return (
        <div className="product">
            <div className="info">
            <Name name = {product.name}/>
            </div>
            <ImageProduit image = {product.image} description={product.name}/>
            <InputNbProduct maxStock = {product.stock} nbInCart = {product.inCart} updateStock = {updateStock}/>
            <DeleteProductButton deleteFonction = {deleteProduct}/>
        </div>
    )
}

export default ProductInCart;