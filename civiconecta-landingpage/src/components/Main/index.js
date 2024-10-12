import { Home } from "./Home";
import { AboutCivi } from "./AboutCivi";
import { Advantages } from "./Advantages";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";

const Main = ({imgArrow}) =>{
    return (
        <div className="container-main">
            <Home/>
            <AboutCivi imgArrow={imgArrow}/>
            <Advantages imgArrow={imgArrow}/>
            <Team/>
            <Testimonials imgArrow={imgArrow}/>
        </div>

    )

}

export { Main };