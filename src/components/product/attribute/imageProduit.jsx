
const ImageProduit = ({image,description}) => {

    return (
        <div className="imageProduit">
            <img src ={image} alt = {description}/>
        </div>
    )
}

export default ImageProduit;