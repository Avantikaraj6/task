import React from 'react';
import useFetchData from './utils.js/useFetchData';

const RecentlyViewed = () => {
    const{apiData, setApiData} = useFetchData()
  return (
    <div><h2 className="sp-head">Recently Viewed Products</h2>
    <div className="similar-products1">{
        apiData.map((ele,i) =>{
            return(
                <div className="prod-cont">
                     <img className="prod-image" src={ele.image} />
                    <h5 className="price-text">$ {ele.price}</h5>
                    <h5 className="title-text2">{ele.title}</h5>
                    <button className="add-cart1">ADD TO CART</button>
                    </div>
            )
        })
    }</div>
    </div>
  )
}

export default RecentlyViewed