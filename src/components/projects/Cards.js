import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import CalculatorPhoto from '../../images/calculator.png'
import ClimaPhoto from '../../images/clima.png'
import WinesPhoto from '../../images/wines.png'
import BackendPhoto from '../../images/proyecto-backend.png'
import AutoshopPhoto from '../../images/autoshop.png'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items:3,
        partialVisibilityGutter: -100
    },
    mobile: {
        breakpoint: {max:464, min:0},
        items: 1,
        partialVisibilityGutter:110
    }
};
const Gallery = ()=>{
    useEffect(() => {
        Aos.init({duration:1000})
      }, []);
    const cartas = [
        {
            id: "projectsCalculator",
            img: CalculatorPhoto,
            title: "Calculator App",
            repoLink: "https://github.com/Gonzalonu99/calculator-app",
            demoLink: "https://nunez-calculator.web.app"
        },
        {
            id: "projectsWeather-app",
            img: ClimaPhoto,
            title: "Weather App",
            repoLink: "https://github.com/Gonzalonu99/weather-app",
            demoLink: "https://nunez-weatherapp.web.app"
        },
        {
            id: "projectsNumen-wines",
            img: WinesPhoto,
            title: "Numen Wines",
            repoLink: "https://github.com/Gonzalonu99/numen-wines",
            demoLink: "https://numenwines.web.app/"
        },
        {
            id: "projectsMongoDB",
            img: BackendPhoto,
            title: "Cymbals CRUD",
            repoLink: "https://github.com/Gonzalonu99/backend-express-mongoDB",
            demoLink: ""
        },
        {
            id: "Autoshop",
            img: AutoshopPhoto,
            title: "AutoShop web",
            repoLink: "https://github.com/Gonzalonu99/autoshop-web",
            demoLink:"http://a365.com.ar/"
        }
    ]
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
            {cartas.map((carta)=>(
                <div className="card-container" key={carta.id} data-aos="fade-up">
                    <div className="img-card-container">
                        <img src={carta.img} alt="img" className="card-img"/>
                    </div>
                    <h5 className="card-subtitle">{carta.title}</h5>
                    <button className="repo-link-button">
                        <a href={carta.repoLink}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  View Repository
                        </a>
                    </button>
                    <button className="demo-link-button">
                        <a href={carta.demoLink}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  View Project
                        </a>
                    </button>
                </div>
            ))}
        </Carousel> 
    )

}


export default Gallery