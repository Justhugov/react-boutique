import Description from "./description.jsx";
import Name from "./name.jsx";
import Weight from "./weight.jsx";


const Info = ({description,name,weight}) => {


    return (
        <div className="info">
            <Name name = {name}/>
            <Description description= {description}/>
            <Weight weight = {weight}/>
        </div>
    )
}

export default Info;