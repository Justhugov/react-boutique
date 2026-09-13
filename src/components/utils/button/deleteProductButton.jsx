import poubelle from "../../../assets/images/poubelle.jpg";


const DeleteProductButton = ({deleteFonction}) => {


    return (
        <img className="button" src={poubelle} alt="poubelle" onClick={deleteFonction}/>
    )
}

export default DeleteProductButton;