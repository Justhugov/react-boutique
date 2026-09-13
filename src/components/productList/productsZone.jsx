import ForSaleProduct from "../product/forSaleProduct.jsx";
const ProductsZone = ({ dataProducts, buyProduct, filterText }) => {
    const filter = filterText.toLowerCase();


    const productsInSale = dataProducts.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
        .map(product => <ForSaleProduct
            product={product}
            key={product.id}
            buyProduct={buyProduct} />);

    return (
        <div className="productsZone">
            {productsInSale}
        </div>
    );
}

export default ProductsZone;