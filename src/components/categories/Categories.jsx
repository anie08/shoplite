import "./Categories.scss";
import { home } from "../../data.js";

const Categories = () => {
    return (
        <section className="categories">
            <div className="categories_inner container">
                <div className="categories_head">
                    <h2 className="categories_title">{home.categories.title}</h2>
                    <span className="categories_line">{"/".repeat(150)}</span>
                </div>
                <div className="categories_list">
                {home.categories.items.map((item) => (
                    <div className="categories_item" key={item.id}>
                        <div className="categories_img-box">
                            <img className="categories_img" src={item.image} alt={item.name} />
                        </div>
                        <p className="categories_name">{item.name}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Categories;
