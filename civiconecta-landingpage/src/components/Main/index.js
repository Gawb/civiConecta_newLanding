import { Home } from "./Home";
import { AboutCivi } from "./AboutCivi";
import { Advantages } from "./Advantages";

const Main = ({imgArrow}) =>{
    return (
        <div className="container-main">
            <Home/>
            <AboutCivi imgArrow={imgArrow}/>
            <Advantages imgArrow={imgArrow}/>
        </div>

    )

}

export { Main };