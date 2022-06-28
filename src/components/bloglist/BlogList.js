import React from "react";
import BlogListItem from "./BlogListItem";


const BlogList = ({blogListData}) => {

    

    
    return(
        <div className="BlogList">
            <h2>The last visits:</h2>
            <BlogListItem 
            blogListItems={blogListData}

            />
        </div>
    )
}

export default BlogList;


