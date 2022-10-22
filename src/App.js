import './Firebase'
import './App.css';
import Routes from "./Routes/Routes";
import NewsMenu from "./Components/NewsMenu";

function App() {
    return (
        <div className="App">
            <NewsMenu/>
            <Routes/>
        </div>
    );
}

export default App;
