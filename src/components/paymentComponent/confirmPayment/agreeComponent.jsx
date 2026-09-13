// <!-- From Uiverse.io by PriyanshuGupta28 --> 
import "../../../assets/style/agree.css"
const Agree = ({change,value}) => {

    return (
        <div className="checkbox-wrapper">
            <input onClick={change} value = {value}type="checkbox" className="check" id="check1-61" disabled = {value}/>
                <label htmlFor="check1-61" className="label">
                    <svg width="45" height="45" viewBox="0 0 95 95">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                        <g transform="translate(0,-952.36222)">
                            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                        </g>
                    </svg>
                    <span>Je confirme que mes informations bancaires sont correctes</span>
                </label>
        </div>








    );
}

export default Agree;