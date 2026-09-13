// < !--From Uiverse.io by PriyanshuGupta28-- >
import "../../../assets/style/deliveryTime.css"
const DeliveryTime = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = new Date().toLocaleDateString('fr-FR', { month: 'long' });
    const year = date.getFullYear() + 1000;
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return (

        <div className="stepper-box">
            <div className="stepper-step stepper-completed">
                <div className="stepper-circle">
                    <svg
                        viewBox="0 0 16 16"
                        className="bi bi-check-lg"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                        ></path>
                    </svg>
                </div>
                <div className="stepper-line"></div>
                <div className="stepper-content">
                    <div className="stepper-title">Commande passée</div>
                    <div className="stepper-status">Complété</div>
                    <div className="stepper-time">{day} {month}, {hours}:{minutes}</div>
                </div>
            </div>

            <div className="stepper-step stepper-active">
                <div className="stepper-circle">2</div>
                <div className="stepper-line"></div>
                <div className="stepper-content">
                    <div className="stepper-title">En cours d'expédition</div>
                    <div className="stepper-status">En cours</div>
                </div>
            </div>

            <div className="stepper-step stepper-pending">
                <div className="stepper-circle">3</div>
                <div className="stepper-content">
                    <div className="stepper-title">Livraion</div>
                    <div className="stepper-status">En attente</div>
                    <div className="stepper-time">Livraison estimée: en {year} </div>
                </div>
            </div>

            <div className="stepper-controls">
                <button className="stepper-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                        ></path>
                    </svg>
                    Previous
                </button>
                <button className="stepper-button stepper-button-primary">
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default DeliveryTime