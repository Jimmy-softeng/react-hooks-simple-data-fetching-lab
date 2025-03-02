
import React,{useState,useEffect} from "react"

function App (){
    const[imgInArray,setImgInArray]=useState([])
    const[isLoaded,setIsLoaded]=useState(true);
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((data)=>{setImgInArray(data.message)
       setIsLoaded(false);
    })
  },[])
    return(
        <div>
            {isLoaded ?(<p>Loading...</p>):(<img src={imgInArray}alt="A Random Dog" />)}
        </div>
    )
}
 export default App;