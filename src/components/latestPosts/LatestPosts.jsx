import { posts, blog } from "../../data.js";
import SectionTitle from "../sectionTitle/SectionTitle.jsx"
import React from 'react';
import {Link} from "react-router-dom";
import './LatestPosts.scss'
const LatestPosts = () => {
    return (
        <section className="latest-posts_item">
            <div className="latest-posts_inner container">
                <SectionTitle title={blog.latestPostsTitle} />
                <div className="latest-posts_list">
                {posts.map(post => (
<div className="latest-posts_item" key={post.id}>
    <span className="latest-posts_category">{post.category}</span>
    <div className="latest-posts_img-wrapper">
        <img className="latest-posts_image" src={post.image} alt={post.title} />
    </div>
    <h3 className="latest-posts_title">{post.title}</h3>
    <p className="latest-posts_text">{post.text}</p>
    <Link className="latest-posts_link" to={`/blog/${post.id}`}>{blog.readMore}</Link>
</div>
                ))}
                </div>

            </div>

        </section>
    );
};

export default LatestPosts;