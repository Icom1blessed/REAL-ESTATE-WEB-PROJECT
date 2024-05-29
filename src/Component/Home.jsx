import { myStyles } from "../Styles";
import { Services } from "./About";
import "../styles/styles.css";
function Home() {
  const myStyle = {
    color: "White",
    backgroundColor: "green",
    fontSize: 30,
    padding: "2rem",
    textAlign: "center",
  };
  // const name = "Alvin";
  const name = localStorage.getItem("name");
  return (
    <div>
      <h1 style={myStyle}>My name is {name}</h1>
      <h3 style={myStyles}>This is my HomePage</h3>
      <Services />
      <NewHome name={name} />
    </div>
  );
}

const NewHome = ({ name }) => {
  return (
    <>
      <h1>My name is {name}</h1>
      <Services />
    </>
  );
};

export default Home;
