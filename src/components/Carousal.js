import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

                <div className="carousel-inner" id='carousal'>
                    <div className='carousel-caption' style={{zIndex:10}}>
                        <form className="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/900/700" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/900/700" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/900/700" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
