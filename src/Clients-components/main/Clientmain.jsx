import React from "react";
import PropertyListings from "../content/PropertyListing";
import ListingCards from "../content/ListingCards";
import WhyChooseLivyco from "../content/WhyChooseLivyco";
import PropertyCarousel from "../content/PropertyCarousel";
import ScrollableTestimonials from "../content/ScrollableTestimonials";
import FAQ from "../content/FAQ";
import Footer from "../footer/Footer";
import Login from "../login/Login";
import LoginVerification from "../login/LoginVerification";
import Navbar from "../navabar/Navbar";

const Clientmain = () => {
  return (
    <>
      <div className="h-auto">
        <Navbar />
        <PropertyListings />
        <Login />
        <LoginVerification />

        <ListingCards />
        <WhyChooseLivyco />
        <PropertyCarousel />
        <ScrollableTestimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Clientmain;
