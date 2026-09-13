// From Uiverse.io by Bodyhc
import "../../../assets/style/confirmButton.css"
const ConfirmButton = ({showTicket}) => {


    const handleClick = () => {
        setTimeout(() => {
           showTicket();
        }, 4500);
    };

    return (
        <button id="pay-button2" className="pay-btn2" onClick={handleClick}>
            <span>PAYER</span>
            <span className="icon">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <g id="Interface / Credit_Card_01">
                        <path id="Vector" d="M3 11V15.8002C3 16.9203 3 17.4801 3.21799 17.9079C3.40973 18.2842 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H17.8031C18.921 19 19.48 19 19.9074 18.7822C20.2837 18.5905 20.5905 18.2842 20.7822 17.9079C21 17.4805 21 16.9215 21 15.8036V11M3 11V9M3 11H21M3 9V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V9M3 9H21M7 15H11M21 11V9" stroke="#ffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </g></svg></span>
            <div id="fingerprint-container">
                <svg style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet" height={430} width={430} viewBox="0 0 430 430" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g opacity={1} transform="matrix(1, 0, 0, 1, 215, 215)">
                            <path d="M0,167.5 C92.5,167.5 167.5,92.5 167.5,0 C167.5,-92.5 92.5,-167.5 0,-167.5 C-92.5,-167.5 -167.5,-92.5 -167.5,0 C-167.5,92.5 -92.5,167.5 0,167.5z" strokeWidth={12} strokeOpacity={1} stroke="rgb(255,255,255)" className="primary" fillOpacity={0} strokeLinejoin="round" strokeLinecap="round" />
                        </g>
                        <g opacity={1} transform="matrix(1, 0, 0, 1, 215, 215)">
                            <path d="M0,-30 C0,-30 0,30 0,30 M-30,0 C-30,0 -30,-30 -30,-30 C-30,-46.569000244140625 -16.569000244140625,-60 0,-60 C16.569000244140625,-60 30,-46.569000244140625 30,-30 M30,0 C30,0 30,30 30,30 C30,46.569000244140625 16.569000244140625,60 0,60 C-16.569000244140625,60 -30,46.569000244140625 -30,30 M20,-86.58599853515625 C13.744000434875488,-88.7969970703125 7.013000011444092,-90 0,-90 C-33.137001037597656,-90 -60,-63.137001037597656 -60,-30 C-60,-30 -60,30 -60,30 C-60,47.77000045776367 -52.275001525878906,63.736000061035156 -40,74.72200012207031 M-20,86.58599853515625 C-13.744000434875488,88.7969970703125 -7.013000011444092,90 0,90 C33.137001037597656,90 60,63.137001037597656 60,30 C60,30 60,-30 60,-30 C60,-47.77000045776367 52.275001525878906,-63.736000061035156 40,-74.72200012207031 M-70,-86.572998046875 C-82.50800323486328,-71.11599731445312 -90,-51.43299865722656 -90,-30 C-90,-30 -90,30 -90,30 C-90,79.70600128173828 -49.70600128173828,120 0,120 C18.500999450683594,120 35.69900131225586,114.41799926757812 50,104.84500122070312 M70,86.572998046875 C82.50800323486328,71.11599731445312 90,51.43299865722656 90,30 C90,30 90,-30 90,-30 C90,-79.70600128173828 49.70600128173828,-120 0,-120 C-18.500999450683594,-120 -35.69900131225586,-114.41799926757812 -50,-104.84500122070312" strokeWidth={12} strokeOpacity={1} stroke="rgb(255,255,255)" className="secondary" fillOpacity={0} strokeLinejoin="round" strokeLinecap="round" />
                        </g>
                        <g opacity={1} transform="matrix(1, 0, 0, 1, 215, 215)">
                            <path d="M0,167.5 C92.5,167.5 167.5,92.5 167.5,0 C167.5,-92.5 92.5,-167.5 0,-167.5 C-92.5,-167.5 -167.5,-92.5 -167.5,0 C-167.5,92.5 -92.5,167.5 0,167.5z" strokeWidth={12} strokeOpacity={1} stroke="rgb(255,255,255)" className="primary_check" fillOpacity={0} strokeLinejoin="round" strokeLinecap="round" />
                        </g>
                        <g fontSize={50} transform="translate(75, 75) scale(3)" opacity={0} className="checkmark">
                            <path d="M20,50 L40,70 L70,30" strokeLinejoin="round" strokeLinecap="round" strokeWidth={20} stroke="rgb(255,255,255)" fill="none" />
                        </g>
                    </g>
                </svg>
            </div>
        </button>
    )


}

export default ConfirmButton;