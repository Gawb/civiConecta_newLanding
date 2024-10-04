import { Home } from "./Home";
import { AboutCivi } from "./AboutCivi";

const Main = ({imgArrow}) =>{
    return (
        <div className="container-main">
            <Home/>
            <AboutCivi imgArrow={imgArrow}/>
        </div>

    )

}

export { Main };