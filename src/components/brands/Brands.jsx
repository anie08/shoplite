import {brands} from "../../data.js";
import './Brands.scss'
const Brands = () => {
    return (
        <section className=" brands">
            <ul className="brands_inner container">

            {brands.map((item) => (


<li className={`brands_item brands_item--${item.modifier}`}>
    {item.name}
    {item.nameLight && <span className="brands_light">{item.nameLight}</span>}
</li>

                ))}
            </ul>

        </section>
    );
};

export default Brands;