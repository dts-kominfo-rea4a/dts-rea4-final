import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      {/* Header */}
      <Navbar loginStatus={true} />
      {/* Main Content */}
      <main>HomePage</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
