import "./Card.scss";

const Card = ({ image, name, price }) => {
    return (
        <div className="card">
            <div className="card_img-box">
                <img className="card_img" src={image} alt={name} />
            </div>
            <p className="card_name">{name}</p>
            {price && <p className="card_price">${price}</p>}
        </div>
    );
};

export default Card;