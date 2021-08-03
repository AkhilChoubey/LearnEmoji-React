import React from "react";
import emoji from "../LearnEmoji";

function Emoji(props){
 return <div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.emoji}
    </span>
    <span>{props.name}</span>
  </dt>
  <dd>
   {props.meaning}
  </dd>
</div>

}

function makeEmoji(emoji){
  return <Emoji key={emoji.id} emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning}/>
}


function App() {
  return (
    <div>
      <h1>
        <span>LearnEmoji</span>
      </h1>
    
     <dl className="dictionary">
        {emoji.map(makeEmoji)}
      </dl> 
    </div>
  );
}

export default App;
