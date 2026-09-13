import { useEffect,useState } from "react";

const Weight = ({weight,weightText}) => {
    const [currentWeightText,setCurrentWeightText] = useState(weightText);

    useEffect(()=>{
        if (currentWeightText == null){
            setCurrentWeightText("");
        };
    } ,[weightText]);

    return(
        <div className="weight">
            {currentWeightText}{weight}
        </div>
    )
}

export default Weight;