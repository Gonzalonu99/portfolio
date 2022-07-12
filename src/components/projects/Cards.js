import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import CalculatorPhoto from '../../images/calculator.png'
import ClimaPhoto from '../../images/clima.png'

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items:2,
        partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: {max:464, min:0},
        items: 1,
        partialVisibilityGutter:100
    }
};
const Gallery = ()=>{
    return(
       <Carousel
            responsive={responsive}
            partialVisbile={true}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1600}
            customTransition= "all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet","mobile"]}
            itemClass="carousel-item-padding-40-px"
        >
            <div className="card-container" id="projects/calculator">
                <div className="img-card-container"><img className="card-img" src={CalculatorPhoto}   alt="calculator" /></div>
                <h5 className="card-subtitle">Calculator App</h5>
                <button className="repo-link-button">
                    <a href="https://github.com/Gonzalonu99/calculator-app">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Repository
                    </a>
                </button>
                <button className="demo-link-button">
                    <a href="">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Project
                    </a>
                </button>
            </div>
            <div className="card-container" id="projects/weather-app">
                <div className="img-card-container"><img className="card-img" src={ClimaPhoto}   alt="clima" /></div>
                <h5 className="card-subtitle">Weather App</h5>
                <button className="repo-link-button">
                    <a href="https://github.com/Gonzalonu99/weather-app">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Repository
                    </a>
                </button>
                <button className="demo-link-button">
                    <a href="">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Project
                    </a>
                </button>
            </div>
            <div className="card-container" id="projects/numen-wines">
                <div className="img-card-container"><img className="card-img" src={ClimaPhoto}   alt="clima" /></div>
                <h5 className="card-subtitle">Wineries Page</h5>
                <button className="repo-link-button">
                    <a href="">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Repository
                    </a>
                </button>
                <button className="demo-link-button">
                    <a href="">
                        <FontAwesomeIcon icon=      {faArrowUpRightFromSquare}/>  View Project
                    </a>
                </button>
            </div>
        </Carousel> 
    )

}


export default Gallery