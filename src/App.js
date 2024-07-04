import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/abelsportfolio" element={<HomePage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
