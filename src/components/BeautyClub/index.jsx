import React from 'react'
import "./styles.scss"

function BeautyClub(props) {
  const {beautyClubBlog} = props;
  return (
    <div className="BeautyClub">
      <div className="items">
        {beautyClubBlog.map((val, index) => {
          return (
            // style={{backgroundImage: `url(${val.srcimg})`}}
            <div className="item"> 
              <div className="img">
                <img src={`${val.srcimg}`} alt="" />
              </div>
              
              <div className="content">
                <a href="">{val.name}</a>
                <span className="date">{val.date}</span>
                <a className="continue" href="">Continue reading</a>
              </div>
            </div>
          )
          
        })}
      
      </div>
      
      <div className="view-more">
        <a href="">View more</a>  
      </div>
    
    </div>
  )
}
export default BeautyClub
