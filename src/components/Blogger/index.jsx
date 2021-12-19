/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { getBlog} from "../../api/ApiResult";
import "./styles.scss"
const mangImage = [
    { link_img: "CXvG2CBJ3SE" },
    { link_img: "Jko6hLJ2K9o" },
    { link_img: "UZZGdknx85g" },
    { link_img: "AuTgJ1EdLf0" },
    { link_img: "Miu0NHPr8T4" },
    { link_img: "Geeqrolx0bA" },
  ];

function Blogger() { 
  const [listBlog,setListBlog] =useState([])
      //react-hooks/exhaustive-deps
  useEffect( () => {
    async function Fetch(){
      const res= await getBlog();
      setListBlog(res)
  }
  Fetch();

    window.scrollTo(0, 0);
  }, []); 
    return (
        <div className="Blogger">
            <div className = "intro">
                  <img src="https://imageshack.com/i/poCuetrij" alt="Introduction blog" />
                  <div className = "intro-text">
                      <div className = "intro-content">
                          <h1>Beauty blog </h1>
                          <p className ="intro-p1">Review cosmetics</p>
                          <p className ="intro-p2">More than 200+ articles on skincare and beauty topics will help you choose better products and care methods!</p>
                      </div>
                      <img src="https://imageshack.com/i/pmvM4SfRp" alt="Introduction blog image" className ="img-intro" />
                  </div>
                  
            </div>
            <div className = "video">
              <ul className ="video_layout">
                {mangImage.map (mangImage =>
                    <li className="video-item col">
                        <a href = {`https://www.youtube.com/embed/${mangImage.link_img}?autoplay=1`}>
                          <div className="overlay">
                            <i className="far fa-play-circle"></i>
                          </div>
                          <img alt='' id ={`${mangImage.link_img}`} src= {`https://i.ytimg.com/vi/${mangImage.link_img}/hqdefault.jpg`} alt="Top 3 store" border="0"/> 
                        </a>
                    </li>
                )}
             </ul> 
            </div>
          <div className = "author">
            <img src="https://imageshack.com/i/pm2MjR38j" alt="" />
            <div className ="author-content">
              <h1>MY NAME IS ...</h1> 
              <p className ="content-name"><i>Gem</i></p>
              <p className ="content-text"> Beauty blogger at webbanhang-nine.vercel.app. Over 2 years experience in skin care, love blogging and traveling.<br />

                  Please visit my blog often!</p>
            </div>
          </div>

          <div className = "post">
            {listBlog.map (dataPost => 
              <div className="item">
                <div className="item__img">
                  <Link to="#" target="_self"> 
                    <img alt="" src={`${dataPost.photo}`} border="0"/> 
                  </Link>
                </div>
                <div className="item__description">
                  <div className="des_title">
                    <b>{dataPost.tilte}</b>
                  </div>
                  <div className="des_date">
                    <p>{dataPost.author}</p>
                  </div>
                  <div className="des_text">
                    <p>
                      {dataPost.content}
                    </p>
                  </div>
                  <div className="des_btn">
                    <Link to ={`${dataPost.link_post}`} target="_blank" > Đọc tiếp </Link>  
                  </div>
                </div>
              </div>
            )}
            <button className="btn-next" type ="submit">Next</button>

          </div>

        </div>
    )
}

export default Blogger

