import React, { useEffect,useState } from 'react'

const useFetchData = () => {
const[apiData, setApiData] = useState("")

    const fetchData = async function fetchApi(){
        const data= await fetch("https://fakestoreapi.com/products")
        const jsonData = await data.json();
        setApiData(jsonData)
    }
    useEffect(() => {
      fetchData()
    },[])
  return  {apiData,setApiData}
}

export default useFetchData