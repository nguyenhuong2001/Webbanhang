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

const dataPost= [
    {
        id:'blog1' ,
        tilte:'Top 12 Kem Dưỡng Ẩm Cho Da Dầu Mụn Tốt',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/poQO0Pjap',
        content: 'Mặc dù đã chăm sóc da theo nhiều cách khác nhau, tuy nhiên nổi “MỤN” là một vấn đề khó tránh khỏi. Có người nổi mụn do thay đổi cơ địa đột ngột, cũng có người sinh ra đã phải sống chung với mụn...',
        link_post: 'https://blogchamsoc.com/kem-duong-am-cho-da-dau-mun'
    },
    {
        id:'blog2' ,
        tilte:'Top 12 Kem Dưỡng Ẩm Cho Da Nhạy Cảm Tốt Nhất Việt Nam',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/podwscY3p',
        content: 'Hiện nay trên thị trường đã có rất nhiều dòng kem dưỡng ẩm da cho da nhạy cảm nhưng mình thấy đa phần là các loại giá rất cao, công dụng lại không tốt lắm, chỉ có 1 số ít các sản phẩm thì thật sự phù hợp cho da mà thôi...',
        link_post: 'https://blogchamsoc.com/kem-duong-am-cho-da-nhay-cam'
    },
    {
        id:'blog3' ,
        tilte:'Top 8 Serum Trắng Da Tốt Nhất Giúp Da Trắng Hồng',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/pmalINIJj',
        content: 'Trong quy trình skincare routine thì serum là “vũ khí”  không thể thiếu để cải thiện làn da trắng sáng, hồng hào mỗi ngày. Sử dụng serum trắng da hàng ngày, sẽ giúp da trắng sáng, mịn màng, cải thiện nếp nhăn, chống lão hoá...',
        link_post: 'https://blogchamsoc.com/serum-trang-da'
    },
    {
        id:'blog4' ,
        tilte:'Top 10 Serum Trị Mụn Tốt Nhất Cho Da Hiện Nay',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/pomakEODp',
        content: 'Nếu bạn đang bị mụn, và loay hoay tìm kiếm các serum trị mụn tốt cho da thì dưới đây là bài viết review top 10 serum trị mụn hiệu quả mà mình đã tổng hợp lại dành cho các bạn!...',
        link_post: 'https://blogchamsoc.com/serum-tri-mun'
    },
    {
        id:'blog5' ,
        tilte:'Top 10 Kem Trị Mụn Hiệu Quả Giúp Da Sạch Mụn',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/pnilyZJ5p',
        content: 'Hiện nay trên thị trường có rất nhiều loại kem trị mụn với nhiều thành phần, công dụng, hoạt chất khác nhau và rất khó để tìm ra được kem trị mụn phù hợp, hiệu quả với làn da...',
        link_post: 'https://blogchamsoc.com/kem-tri-mun-hieu-qua'
    },
    {
        id:'blog6' ,
        tilte:'Top 5 Kem Trị Mụn Bọc Tốt Cho Da',
        author:'Gem Nguyễn',
        link: 'https://imageshack.com/i/pnPSOcsqp',
        content: 'Khi bị mụn bọc da bạn sẽ có cảm giác sưng nhức và rất khó chịu, nhiều bạn đã vì nôn nóng quá mức mà tìm tới các spa để trị mụn và nặn mụn bọc ra tuy nhiên điều này cực kỳ nguy hiểm...',
        link_post: 'https://blogchamsoc.com/kem-tri-mun-boc'
    }
];

function Blogger() { 
  const [listBlog,setListBlog] =useState([])
  useEffect(async () => {
    const res= await getBlog();
    console.log(res)
    setListBlog(res)
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
                        <Link to = {`https://www.youtube.com/embed/${mangImage.link_img}?autoplay=1`}>
                          <div className="overlay">
                            <i className="far fa-play-circle"></i>
                          </div>
                          <img id ={`${mangImage.link_img}`} src= {`https://i.ytimg.com/vi/${mangImage.link_img}/hqdefault.jpg`} alt="Top 3 store" border="0"/> 
                        </Link>
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
                    <img src={`${dataPost.photo}`} border="0"/> 
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

