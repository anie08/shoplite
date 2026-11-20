import React from 'react';
import {shop} from "../../data.js";
import {products} from "../../data.js";
import "./Shop.scss"
import PageBanner from "../../components/pageBanner/PageBanner.jsx";
import Card from "../../components/card/Card.jsx";
const Shop = () => {
    return (
        <div className="shop">
            <PageBanner title={shop.title} lastLabel={shop.title} />
            <div className="shop_inner container">
                <div className="shop_main">
                    <div className="shop_top">
                        <p className="shop_results">{shop.resultsText}</p>
                        <select className="shop_sort">
                            {shop.sortOptions.map((option)=>(
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ul className="shop_grid">
                        {products.slice(0,12).map((product) => (
                            <li className="shop_item" key={product.id}>
                                <Card isFull image={product.image} name={product.name} price={product.price}
                                oldPrice={product.oldPrice}/>

                            </li>
                        ))}


                    </ul>
                </div>
                    <aside className="shop_sidebar">

                    </aside>

            </div>
        </div>
    );
};

export default Shop;