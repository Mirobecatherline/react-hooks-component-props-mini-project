import React from "react";

function About({picture="https://via.placeholder.com/215",aboutblog}) {
    return(
        <aside>
            <img src={picture} alt="blog logo" ></img>
            <p> {aboutblog} </p>
        </aside>
    )
}
export default About;