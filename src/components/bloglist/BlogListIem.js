import React from "react";
import './BlogListItem.css';
import { Link } from "react-router-dom";
import './AvatarKO.js';


const BlogListItem = ({ blogListItems }) => {

    return (

        <section className="blogListBox">
            {
                blogListItems.map(blogListItem => {



                    return (
                        <Link to={`/post/${blogListItem._id}`} key={blogListItem._id}>
                            <div className="blogListItem">

                                <img className="blogListImg" src={blogListItem.img} alt={blogListItem.title} />
                                <div className="blogListText">
                                    <p className="title">{blogListItem.title}</p>
                                    <p>Start of jouney: {blogListItem.visitingdate}</p>
                                    <div className="authorItem">
                                        <img className="authorImg" src={blogListItem.authorimg} alt={blogListItem.authorname} />
                                        <p><span>Posted by </span>{postListItem.authorname}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default BlogListItem;