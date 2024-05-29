import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState(false);
  const myStyle = {
    color: "White",
    backgroundColor: "green",
    fontSize: 30,
    padding: "2rem",
    textAlign: "center",
  };
  const popUpStyle = {
    visibility: "visible",
    transform: "translateY(-50rem)",
    transition: "all 2s ease",
  };
  const popUpStyleVisible = {
    visibility: "visible",
    transform: "translateY(50%)",
    transition: "all 2s ease",
  };
  const name = localStorage.getItem("name");
  const logOutHandler = () => {
    localStorage.removeItem("auth");
    navigate("/sign-in");
  };

  const deleteUser = () => {
    setIsDelete((prev) => !prev);
  };

  function deleteAUser() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <h1 style={myStyle}>My name is {name}</h1>
      <div>
        <button className="btn btn-info text-white" onClick={logOutHandler}>
          Log-Out
        </button>
        <button className="btn btn-danger" onClick={deleteUser}>
          Delete User
        </button>
      </div>

      {/* <div className="pop"> */}
      <div style={isDelete ? popUpStyleVisible : popUpStyle}>
        <div className=" bg-secondary col-md-5 text-center m-auto mt-5 p-3">
          <p className="text-white">
            Are You sure you want to delete you account?
          </p>
          <button className="btn btn-primary mx-3" onClick={deleteUser}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={deleteAUser}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
