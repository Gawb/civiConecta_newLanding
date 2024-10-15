import { Home } from "./Home";
import { AboutCivi } from "./AboutCivi";
import { Advantages } from "./Advantages";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";

const Main = ({imgArrow}) =>{
    return (
        <div className="container-main">
            <Home/>
            <AboutCivi imgArrow={imgArrow}/>
            <Advantages imgArrow={imgArrow}/>
            <Team/>
            <Testimonials imgArrow={imgArrow}/>
            <Contact/>
        </div>

    )

}

export { Main };