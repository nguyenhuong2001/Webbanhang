import React from 'react'
const mangImage = [
    { link_img: "a9dFOin3nDw" },
    { link_img: "Jko6hLJ2K9o" },
    { link_img: "hPgfI3IyJ3o" },
    { link_img: "8EfLOKQarB0" },
    { link_img: "AvQtLizO5_8" },
    { link_img: "cbqeT6ihTk8" },
  ];

function Blog() {
    const ulElement = (
      <ul class ="video_layout">
        { mangImage.map(mangImage => 
            <li class="video-item col">
            <a href = "https://www.youtube.com/embed/${mangImage.link_img}?autoplay=1">
            <div class="overlay">
              <i class="far fa-play-circle"></i>
            </div>
              <img id ="" src="https://i.ytimg.com/vi/${mangImage.link_img}/hqdefault.jpg" alt="Top 3 store" border="0"/> 
            </a>
          </li>
        )}
      </ul> )
    ReactDOM.render(ulElement, document.querySelector('video'))

    
    return (
        <div className="Blog">
            <div class = "video">

            </div>
        </div>
    )
}

export default Blog

