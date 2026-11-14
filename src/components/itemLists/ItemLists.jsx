import {home} from "../../data.js";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import Card from "../card/Card.jsx";
import "./ItemLists.scss"
const ItemLists = () => {
    return (
        <section className="item-lists">
            <div className="item-lists_inner container">

                {home.itemLists.map((list) => (
                    <div className="item-lists_column" key={list.title}>
                        <SectionTitle title={list.title} />
<div className="card_info">
                        {list.items.map((item) => (
                            <Card key={item.id} image={item.image} name={item.name} price={item.price} oldPrice={item.oldPrice} />
                        ))}
</div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default ItemLists;