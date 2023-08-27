import { useEffect, useContext,useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import { useRef } from "react";
import { scrollTo } from "../helper";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const ref = useRef(null);
    const location = useLocation(); 
    const navigate = useNavigate();
    const {cartCount}= useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            const offset=window.scrollY;
            if (offset > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll)
    },[])
    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header": ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        {location.pathname === "/" && (
                            <li onClick={() => scrollTo("categories")}>Categories</li>
                        )}
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>SYMPHONY</div>
                    <div className="right">
                        <TbSearch onClick={()=> setShowSearch(true)}/>
                        <AiOutlineHeart/>
                        <span className="cart-icon" onClick={()=> setShowCart(true)}>
                            <CgShoppingCart/>
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    );
};

export default Header;
