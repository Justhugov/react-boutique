// < !--From Uiverse.io by Cksunandh-- >
import "../../../assets/style/ticket.css"
import extraCost from "../../../data/extraCost"
const Ticket = ({ inCart, total ,card}) => {

    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');



    const allProducts = inCart.map(product =>
        <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.inCart}</td>
            <td>{product.price * product.inCart}€</td>
        </tr>)


    return (
        <div className="receipt">
            <p className="shop-name">{card.name}</p>
            <p className="infoTicket">
                {/* 1234 Market Street, Suite 101<br />
                City, State ZIP<br /> */}
                Date: {day}/{month}/{year}<br />
                Heure: {hours}:{minutes}:{seconds}
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Objet</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts}
                    <tr>
                        <td>Cadeau Mystère</td>
                        <td>1</td>
                        <td>Offert</td>
                    </tr>
                    <tr>
                        <td>Frais de livraison</td>
                        <td></td>
                        <td>{extraCost.deliveryCost}€</td>
                    </tr>
                    <tr>
                        <td>Frais de gestion</td>
                        <td></td>
                        <td>{extraCost.managementCost}€</td>
                    </tr>
                </tbody>
            </table>

            <div className="totalTicket">
                <p>Total:</p>
                <p>{total + extraCost.allExtraCost}€</p>
            </div>

            <p className="thanks">Merci d'avoir donné votre carte bancaire !</p>
        </div>

    )
}

export default Ticket;