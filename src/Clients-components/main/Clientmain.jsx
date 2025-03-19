import React from "react";
import PropertyListings from "../content/PropertyListing";
import ListingCards from "../content/ListingCards";
import WhyChooseLivyco from "../content/WhyChooseLivyco";
import PropertyCarousel from "../content/PropertyCarousel";
import ScrollableTestimonials from "../content/ScrollableTestimonials";
import FAQ from "../content/FAQ";
import Footer from "../content/Footer";
import Login from "../login/Login";
import LoginVerification from "../login/LoginVerification";

const Clientmain = () => {
  return (
    <>
      <div className="h-auto">
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
