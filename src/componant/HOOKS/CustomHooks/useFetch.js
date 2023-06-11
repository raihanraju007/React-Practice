import React,{useState,useFetch} from 'react'

const useFetch = (url) => {
    const DataFetch = () => {
        const[data, setData] = useState(null)
        const[isLoading, SetIsLoading] = useState(true)
        const[error, setError] = useState(null)
        
          useEffect(() =>{
            fetch(url)
            .then((res)=>{
              if(!res.ok){
                throw Error("Fetching is not successful");
              }else{
                return res.json();
              }
              
            })
            .then((data)=>{
                setData(data);
              SetIsLoading(false);
              setError(null);
            })
            .catch((error) =>{
              setError(error.message)
              SetIsLoading(false);
            })
          },[url]);
          return {data, isLoading, error};
}


export default useFetch 
