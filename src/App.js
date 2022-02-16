import React from "react";
import Cards from "./Cards";
import data from "./Netflixdata";



function App(){
  return(
    <>
    <h1 className="Heading">My Anime List</h1>
      {data.map((data)=> { return(<>
      <Cards 
        imgsrc={data.imgsrc}
        desc={data.desc}
        title={data.title}
        link={data.link}
      />
    </>)})}
            
    </>
  );
};

export default App;