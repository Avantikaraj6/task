import React from 'react'
import useFetchData from '../utils.js/useFetchData'
import "./Body.css"
const Display = () => {
    const {apiData, setApiData} = useFetchData();
   
  return (
    <div className="display-container">
        <div><img className="display-img" src="https://veirdo.in/cdn/shop/files/1_82225e8f-9461-487d-b728-1cd1888ac5a8_375x.progressive.jpg?v=1707377357" />
    <img className="display-img" src="https://veirdo.in/cdn/shop/files/4_d7e7133a-7516-442e-9246-7ece312ae337_375x.progressive.jpg?v=1707377372" />
    </div>
    <div> <img className="display-img" src="https://veirdo.in/cdn/shop/files/2_c877f082-ccb9-4aca-8d34-74622f005f1a_375x.progressive.jpg?v=1707377372" />
    <img className="display-img" src="https://veirdo.in/cdn/shop/files/3_59cd68fc-f8c1-45d7-93ff-084a04397703_375x.progressive.jpg?v=1707377372" />
    </div>
    </div>
  )
}

export default Display