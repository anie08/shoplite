import "./Card.scss";

const Card = ({ image, name, price, oldPrice }) => {
    return (
        <div className="card">
            <div className="card_img-box">
                <img className="card_img" src={image} alt={name} />
            </div>
            <div className="card_info">
                <p className="card_name">{name}</p>
                <div className="card_prices">
                    {oldPrice && <span className="card_old-price">${oldPrice}</span>}
                    {price && <span className="card_price">${price}</span>}
                </div>
            </div>
        </div>
    );
};

export default Card;