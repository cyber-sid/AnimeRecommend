import React from "react";

function Cards(props){
return (<>
    <div className="Cards">
        <div className="Card">
            <img src={props.imgsrc} alt="" className="poster"></img>
            <div className="card_info">
                <span className="desc">{props.desc}</span>
                <h3 className="title">{props.title}</h3>
                <a href={props.link} target="_blank">
                    <button className="btn">Watch Now</button>
                </a>
            </div>
        </div>
    </div>
</>)
};

export default Cards;