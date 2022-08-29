import React from "react";
const getData=()=>{
  fetch('db.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}
useEffect(()=>{
  getData()
},[])


const Home = () => {
  
  return <div>{/* Code here */}</div>;
};

export default Home;
