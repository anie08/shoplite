import "./Card.scss";
import classNames from "classnames";
const Card = ({ image, name, price, oldPrice,isFull }) => {
    return (
        <div className={classNames('card',{'card--full':isFull})}>
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