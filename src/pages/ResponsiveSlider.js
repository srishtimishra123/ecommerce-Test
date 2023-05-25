import React from 'react'
import ecom2 from "../image/ecom2.png"
import ecom3 from "../image/ecom3.jpg"
import ecom from "../image/ecom.png"


const ResponsiveSlider = ()=>{
    return(
        <>
        <div
  id="carouselExampleControls"
  className="carousel slide mt-1"
  data-bs-ride="carousel"
>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={ecom} className="d-block w-100" alt="..." style={{height:'300px'}}/>
    </div>
    <div className="carousel-item">
      <img src={ecom3} className="d-block w-100" alt="..." style={{height:'300px'}}/>
    </div>
    <div className="carousel-item">
      <img src={ecom2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}

export default ResponsiveSlider