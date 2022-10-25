import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routers from "./Routes/Routers";
import Footer from "./Components/Navbar/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
