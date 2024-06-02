import Isotipo from "../../atoms/logo";
import imagenIsotipo from "../../../assets/images/logo_ev.png";
import "./Imagotipo.css";

const Imagotipo = () => {
    return  (
        <div className="imagotipo-container">
            <div className="imagotipo-imgTitle" >
                <Isotipo pathImg={imagenIsotipo} width={'6rem'} height={'2.75rem'}/>
            </div>
        </div>
    )
};

export default Imagotipo;
