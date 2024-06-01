import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/sKDs7JQ/workers-getting-back-office-23-2149161631.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/8xhG8Fv/students-learning-together-cafe-23-2148166363.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/NZM25s5/medium-shot-people-working-office-23-2149345227.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/RPScRp1/teens-with-drinks-laptop-23-2147659112.jpg" />
                
            </div>
        </Carousel>
    )


}

export default Banner;