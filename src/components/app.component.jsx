import ProductList from "./productList/productList.jsx";
import ShoppingCart from "./shoppingCart/shoppingCart.jsx";
import RecapShoppingCart from "./recapShoppingCart/recapShoppingCart.jsx"
import "../assets/style/app.css"
import "../assets/style/product.css"
import products from "../data/products.js"
import { useEffect,useState } from "react";
import PaymentComponent from "./paymentComponent/paymentComponent.jsx";
import Loading from "./loading/loading.jsx";
import Ticket from "./afterBuying/ticket/ticket.jsx";
import DeliveryTime from "./afterBuying/deliveryTime/deliveryTime.jsx";
const App = () => {

  const [currentProducts,setCurrentProducts] = useState([]);
  const [productsInCart,setProductsInCart] = useState([]);
  const [showPayment,setShowPayment] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [isPurchased,setIsPurchased] = useState(false);
  const [card,setCard] = useState({
        num : "",
        name : "",
        expiration : "",
        cvv : ""
    })

  useEffect(() =>{
    setCurrentProducts(products.map(p => ({...p , currentStock : p.stock, inCart : 0}) ));
  }
  , []);

  useEffect(()=>{
    if (showPayment||isPurchased){
      setIsLoading(true);
      setInterval( () => setIsLoading(false), 3000);
    }
  }
    ,[showPayment,isPurchased])



  const addProductInCart = ({product}) => {
    product.inCart += 1;
    product.currentStock -=1;
    if (product.inCart == 1){
      setProductsInCart([...productsInCart,product])
    }
    else{
      setProductsInCart([...productsInCart])
    }
  }

  const updateInCart = ({product,nbInCart}) => {
    product.inCart = nbInCart;
    product.currentStock = product.stock -nbInCart;
      setProductsInCart([...productsInCart])
  }

  const deleteProductInCart = ({product}) => {
    product.inCart = 0;
    product.currentStock = product.stock;
    setProductsInCart(productsInCart.filter(p => p != product));
  }

  const changeComponent = () =>{
    if (productsInCart.length !=0){
      setShowPayment(! showPayment);
    }
  }

  const switchIsPurchase=() =>{
    setIsPurchased(true)
  }
    
  const totalPrice = productsInCart.reduce((previous,product)=> previous + (product.price * product.inCart),0);


  const shopComponent = (
      <>
        <ProductList dataProducts = {currentProducts} buyProduct = {addProductInCart}/>
        <ShoppingCart productsInCart = {productsInCart} fonctionForRemove = {deleteProductInCart} updateInCart = {updateInCart} clickBuyButton={changeComponent} total = {totalPrice}/>
      </>
    )

  const paymentComponent = (
      <>
      <RecapShoppingCart productsInCart= {productsInCart} total = {totalPrice} switchComponent = {changeComponent}/>
      <PaymentComponent total={totalPrice} showTicket = {switchIsPurchase} card = {card} setCard = {setCard}/>
      </>
  )

  const afterBuyingComponent = (
    <>
    <Ticket inCart = {productsInCart} total = {totalPrice} card = {card}/>
    <DeliveryTime/>
    </>
  )

  const load = (<Loading/>);
  let currentComponent;

  if (showPayment){
    if (isLoading){
      currentComponent = load
    }
    else{
      if (isPurchased){
        currentComponent = afterBuyingComponent
      }
      else{
        currentComponent =paymentComponent
      }
    }
  }else {
    currentComponent =shopComponent;
  }
  
  
  
  return (
    <div>
      {currentComponent}
    </div>
  );
}
export default App;
