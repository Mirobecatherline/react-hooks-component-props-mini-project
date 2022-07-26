import React from "react";

function EmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";
  
    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
      emojis += emoji;
    }
  
    return emojis;
  }
function Article({posttitle,postdate="January 1, 1970",postpreview, minutes}) {
    const emojis = EmojiList(minutes);
    return(
        <article>
            <h3> {posttitle} </h3>
            <small>{postdate}.{emojis}{minutes} min </small>
            <p>{postpreview}</p>
        </article>
    )
}
export default Article;