import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar loginStatus={true} />

      {/* Main Content */}
      <main className="grow">
        <Banner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
