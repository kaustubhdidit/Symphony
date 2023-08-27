// import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useEffect, useContext,useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";



const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState("")
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const onChange=(e)=>{
        setQuery(e.target.value);
    }

    let {data} =useFetch( `/api/products?populate=*&filters[title][$contains]=${query}`);

    if(!query.length){
        data=null;
    }

const handleClose = () => {
  setIsVisible(false);
  setTimeout(() => {
    setShowSearch(false);
  },700); 
};
    return <div className={`search-modal ${isVisible ? "visible" : "hidden"}`}>
        <div className="form-field">
            <input type="text"
            autoFocus
            placeholder="Search for products"
            value={query}
            onChange={onChange}
             />
            
             <MdClose onClick={handleClose}/>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                {data?.data?.map(item=> (
                     <div className="search-result-item" onClick={()=>{
                        navigate("/product/" + item.id)
                        setShowSearch(false)
                     }}>
                     <div className="img-container">
                         <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                     </div>
                     <div className="prod-details">
                     <span className="name">{item.attributes.title}</span>
                     <span className="desc">{item.attributes.desc}</span>
                     </div>
                 </div>
                ))}
               
            </div>
        </div>
    </div>;
};

export default Search;
