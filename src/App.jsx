import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToSection from "../src/components/ScrollToSection";
import "./App.css";
import { About } from "./components/about";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import LoginForm from "./components/LoginForm/LoginForm";
import { Navigation } from "./components/navigation";
import { Services } from "./components/services";
import Signup from "./components/Signup/Signup";
import { SocialMediaSection } from "./components/SocialMedia/SocialMedia";
import { Testimonials } from "./components/testimonials";
import JsonData from "./data/data.json";


// Home Page Component (Landing Page Sections)
const Home = ({ data }) => (
  <>
  <ScrollToSection/>
    <Navigation />\
    <Header data={data.Header} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Gallery data={data.Gallery} />
    <Testimonials data={data.Testimonials} />
    <SocialMediaSection data={data.SocialMediaSection} />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={landingPageData} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
