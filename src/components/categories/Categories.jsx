import "./Categories.scss";
import { home } from "../../data.js";
import Card from "../card/Card.jsx";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
const Categories = () => {
    return (
        <section className="categories">
            <div className="categories_inner container">
                <div className="categories_head">
                    <SectionTitle title={home.categories.title} />
                </div>
                <div className="categories_list">
                    {home.categories.items.map((item) => (
                        <Card key={item.id} image={item.image} name={item.name} />
                    ))}
            </div>
            </div>
        </section>
    );
};

export default Categories;
