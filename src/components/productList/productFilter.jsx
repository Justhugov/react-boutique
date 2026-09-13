const ProductFilter = ({ filterText, setFilterText }) => {
    const handleChangeFilter = event => setFilterText(event.target.value);


    return (
        <input className="filter" placeholder="filtrer les produits"
        value = {filterText}
        onChange = {handleChangeFilter} />
    )
}

export default ProductFilter;