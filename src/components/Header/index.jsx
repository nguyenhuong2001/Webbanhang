import Badge from "@mui/material/Badge";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Couter } from "../../Context/counter";
import Viewcart from "../Viewcart";
import "./styles.scss";

function Header(props) {
  const history = useHistory()
  const { searchHandle, listAllProduct} = props;
  const [data, setData] = useState([]);
  const [check, setCheck] = useState();
  const { countPro, checkUser, setCheckUser } = useContext(Couter);
  // const [value , setValue] = useState('')
  useEffect(() => {
    setCheck(countPro);
  }, []);
  const handelLogout = () => {
    localStorage.removeItem("UseId");
    setCheckUser(false);
  };
  const search = (e) => {
    if(e === ''){
      searchHandle('');
      return setData([])
    } 
    if (searchHandle) searchHandle(e);
    setData(listAllProduct);
  };
  const getData = (item) => {
    localStorage.setItem('item',JSON.stringify(item))
    history.push('/allproduct')
  }
  return (
    <div className="Header">
      <div className="Header_top">
        <img
          src="https://imagizer.imageshack.com/img923/8343/Z1aWM9.png"
          alt=""
          className="Header_logo"
        />
        <div className="Header_search">
          <div className="Header_search_icon">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => search(e.target.value)}
            />
            <i className="fas fa-search Search_icon"></i>
          </div>
          <div className="search-item" style={{ display: data.length ? 'flex': "none"}} >
            {data.map((item) => {
              return <span onClick={() =>getData(item)} key={item?.id}>{item?.TenSP} </span>;
            })}
          </div>
        </div>
        <div className="Header_icon">
          <li className="Header_icon-cart">
            <NavLink to="/cart" exact>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                color="secondary"
                badgeContent={countPro}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dnoiydox.json"
                  trigger="hover"
                  colors="primary:#242424,secondary:#e88c30"
                  stroke="100"
                  scale="44"
                  axis-x="51"
                  axis-y="49"
                ></lord-icon>
              </Badge>
            </NavLink>

            {check ? (
              <div className="Header_icon-empty">
                <div className="Header_icon-list">
                  <div className="Header_icon-title">New products added</div>
                  <div className="Header_icon-content">
                    <Viewcart />
                  </div>
                  <div className="Header_icon-btn">
                    <button>
                      <NavLink to="/cart" exact>
                        View cart
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="Header_icon-empty">
                <img
                  src="https://imageshack.com/i/poyiw2qep"
                  alt=""
                  className="Header_icon-no_cart"
                />
                <span>No Product</span>
              </div>
            )}
          </li>
          <li className="lord-icon-like">
            <lord-icon
              src="https://cdn.lordicon.com/hrqwmuhr.json"
              trigger="hover"
              colors="primary:#121331,secondary:#e88c30"
              style={{ transform: "rotate(180deg)" }}
            ></lord-icon>
          </li>
          <li className="lord_icon_login">
            {checkUser ? (
              <p onClick={handelLogout}>Da dang nhap</p>
            ) : (
              <NavLink to="/login" exact>
                <lord-icon
                  src="https://cdn.lordicon.com/bwnhdkha.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#e88c30"
                  stroke="68"
                  scale="49"
                ></lord-icon>
              </NavLink>
            )}
          </li>
          <li htmlFor="nav_mobile" className="mobile">
            <label htmlFor="nav_mobile">
              {" "}
              <i className="fad fa-bars"></i>
            </label>
          </li>
        </div>
      </div>

      <div className="Header_Nav">
        <div className="Nav_left">
          <NavLink to="/" exact>
            home
          </NavLink>
          <NavLink to="/allproduct" exact>
            All Product
          </NavLink>
          <NavLink to="/skincare" exact>
            Skin care
          </NavLink>
          <NavLink to="/haircare" exact>
            hair care
          </NavLink>
          <NavLink to="/bodycare" exact>
            body care
          </NavLink>
          <NavLink to="/makeup" exact>
            make up
          </NavLink>
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>
            blog
          </NavLink>
          <NavLink to="/contact" exact>
            contact
          </NavLink>
        </div>
      </div>
      <input type="checkbox" id="nav_mobile" name="nav_mobile" />

      <div className="Header_Nav nav_Mobile">
        <div className="Nav_left">
          <label htmlFor="nav_mobile" style={{ padding: "10px" }}>
            &#x2715;
          </label>
          <NavLink to="/" exact>
            home
          </NavLink>
          <NavLink to="/allproduct" exact>
            All Product
          </NavLink>
          <NavLink to="/skincare" exact>
            Skin care
          </NavLink>
          <NavLink to="/haircare" exact>
            hair care
          </NavLink>
          <NavLink to="/bodycare" exact>
            body care
          </NavLink>
          <NavLink to="/makeup" exact>
            make up
          </NavLink>
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>
            blog
          </NavLink>
          <NavLink to="/contact" exact>
            contact
          </NavLink>
        </div>
      </div>
      {/* <label htmlFor="nav_mobile"> <i className="fas fa-hamburger mobile"></i></label> */}
    </div>
  );
}

export default Header;
