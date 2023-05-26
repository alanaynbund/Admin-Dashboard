import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
          <Sidebar/>
          <div className="other">other pages</div>
        </div>
        
    </div>
  );
}

export default App;
