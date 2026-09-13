// <!-- From Uiverse.io by abhinav_7137 --> 
import "../../assets/style/loading.css"
const Loading = () => {

    return (
        <div className="cart-loader">
            <div className="items-container">
                <div id="item-mobile" className="item"></div>
                <div id="item-laptop" className="item"></div>
                <div id="item-tab" className="item"></div>
                <div id="item-headphone" className="item"></div>
                <div id="item-mixer" className="item"></div>
            </div>

            <div id="cart-icon"></div>

            <div className="loading-text">
                Chargement<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
            </div>
        </div>

    )
}

export default Loading;