import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css"
import './bg.css'

function App() {
  return (
      <div id="wrapper">
        {/* <Sidebar /> */}
        <div id="content-wrapper" className="d-flex flex-column bg">
          <div id="content">
            <Header />
            <MainContent />
          </div>
          <Footer />
        </div>
      </div>
  );
}

export default App;
