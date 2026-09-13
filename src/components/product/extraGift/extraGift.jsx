import Gift from "../../../data/gift.js";
import ImageProduit from "../attribute/imageProduit.jsx";
import Stock from "../attribute/stock.jsx";
import Price from "../attribute/price.jsx";
const ExtraGift = () =>{

    return(
        <div className="product" id="gift">
            <div className="info">
                {Gift.name}
            </div>
            <div className="imageProduit">
                <ImageProduit image={Gift.image} description={Gift.description}/>
            </div>
            <Stock stock={1} />
            <Price price={"Offert"}/>
        </div>
    )
}

export default ExtraGift;