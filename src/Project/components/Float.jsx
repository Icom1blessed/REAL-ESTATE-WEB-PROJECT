import { FaChevronDown, FaSearch } from "react-icons/fa";
function Float() {
  return (
    <div className="float">
      <div className="f">
        <span>
          Location <FaChevronDown />
        </span>
        <p>New york city</p>
      </div>
      <div className="s">
        <span>
          Property types <FaChevronDown />
        </span>
        <p>Duplex city</p>
      </div>
      <div className="l">
        <span>
          Price ranges <FaChevronDown />
        </span>
        <p>$14000-$35000</p>
      </div>
      <div className="se">
        <FaSearch color="white" />
      </div>
    </div>
  );
}

export default Float;
