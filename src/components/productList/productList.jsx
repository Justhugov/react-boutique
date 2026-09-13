import "../../assets/style/productList.css"
import ProductFilter from "./productFilter.jsx";
import ProductZone from "./productsZone.jsx";
import { useState } from 'react';
const ProductList = ({dataProducts,buyProduct}) =>{
    const [filterText,setFilterText] = useState("");


    return(
        <div className="productList">
            <h4>Boutique</h4>
            <ProductFilter filterText= {filterText} setFilterText= {setFilterText}/>
            <ProductZone dataProducts={dataProducts} buyProduct = {buyProduct} filterText= {filterText}/>
        </div>
    );
}

export default ProductList;