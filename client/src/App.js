import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Milestone from "./components/Milestone";
import ProfileNav from "./components/ProfileNav";
import UserCodewars from "./components/UserCodewars";
import Pulls from "./components/Pulls";
import CodeWars from "./components/CodeWars";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/MyProfile"
          element={ <>
          <ProfileNav /> 
          <CodeWars />
          </> }
        />
        <Route path="/CodeWars" element={<UserCodewars />} />
        <Route path="/Pull Requests" element={<Pulls/>}/>
        <Route path="/MileStone"  element={<Milestone/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
