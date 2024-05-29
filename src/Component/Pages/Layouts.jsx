import { NavLink, Outlet } from "react-router-dom";

function Layouts() {
  const auth = localStorage.getItem("auth");
  const navigation = [
    { id: 2, url: "About", path: "about" },
    { id: 3, url: "services", path: "services" },
    { id: 3, url: "Register", path: "sign-in" },
  ];
  return (
    <div>
      {auth &&
        navigation.map((navigation) => {
          return (
            <>
              <li>
                <NavLink to={navigation.path}>{navigation.url}</NavLink>
              </li>
            </>
          );
        })}
      <NavLink to="/">Home</NavLink>

      <Outlet />
    </div>
  );
}

export default Layouts;
