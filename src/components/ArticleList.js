import Article from "./Article";
import React from "react";

function ArticleList({postarticle}) {
    const articlepost=postarticle.map((post)=>{return(
        <Article 
            key={post.id} 
            posttitle={post.title} 
            postdate={post.date} 
            postpreview={post.preview }
         />
    )})
    
    
    
    return(
        <main>
        {articlepost}
        </main>
    )
}
export default ArticleList;