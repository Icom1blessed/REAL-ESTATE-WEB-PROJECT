import "./App.css";
import About, { Services } from "./Component/About";
import Conditional from "./Component/Conditional";
import Home from "./Component/Home";
import List from "./Component/List";
import MyForm from "./Component/MyForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./Component/Pages/Layouts";
import NotFound from "./Component/Pages/NotFound";
import Dashboard from "./Component/Pages/Dashboard";
import Navbar from "./Project/components/Navbar";
import Slider from "./Project/Slider";
import Steps from "./Project/components/Steps";
import Select from "./Project/components/Select";
import Newdeal from "./Project/components/Newdeal";
import Footer from "./Project/components/Footer";



function App() {
  return (
    <>
      {/*  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={
                localStorage.getItem("auth") ? (
                  <About />
                ) : (
                  <Navigate to="/sign-in" />
                )
              }
            />
            <Route
              path="services"
              element={
                localStorage.getItem("auth") ? (
                  <Services />
                ) : (
                  <Navigate to="/sign-in" />
                )
              }
            />
            <Route path="sign-in" element={<MyForm />} />
            <Route
              path="dashboard"
              element={
                localStorage.getItem("auth") ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/sign-in" />
                )
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      {/* <div className="theme-switch-input"> */}
      <Navbar />
      <Slider/>
      < Steps/>
      <Select/>
      <Newdeal/>
      <Footer/>
      {/* </div> */}
     
    </>
  );
}

export default App;
