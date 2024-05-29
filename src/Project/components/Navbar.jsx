import FirstHero from "./FirstHero";
import Float from "./Float";

function Navbar() {
  return (
    <>
      <div className="my_flex">
        <FirstHero />
        <div className="sec_hero">
          <div className="sub">
            <div className="fir">
              <p>Housing</p>
            </div>
            <div className="sec">
              <p>Flat</p>
            </div>
            <div className="thir">
              <p>Rooms</p>
            </div>
          </div>
          <Float />
        </div>
      </div>
    </>
  );
}

export default Navbar;
