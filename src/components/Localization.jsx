import { BiWorld } from "react-icons/bi";
import { GiBrazil } from "react-icons/gi";
import '../design/Localization.css';

function Localization() {
  return (
    <div className="Localization-icon">
      <BiWorld size={30} color="#ffffff" />
      <div className="location-hover">
        <span className="country-name">Brazil</span>
        <GiBrazil className="brazil-icon" />
      </div>
    </div>
  );
}

export default Localization;
