import React  from 'react';

const PropertySlide = ()=>{

  return (

  <div>

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/1399287/pexels-photo-1399287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
         <img src="https://images.pexels.com/photos/1079033/pexels-photo-1079033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
         <img src="https://images.pexels.com/photos/3088778/pexels-photo-3088778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>)

}

export default  PropertySlide;