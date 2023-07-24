import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Shop from "./Component/Pages/Shop";
import Blog from "./Component/Pages/Blog";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import But from "./Component/LandPage/But";
import Cpage from "./Component/Pages/Cpage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Layout from "./Component/Pages/Layout";
import Authenticate from "./Auth/Authenticate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<Authenticate />}>
            <Route path="/Shop" element={<Shop />} />
            <Route path="/cpage" element={<Cpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/element" element={<Element />} />
            <Route path="/element" element={<But />} />
          </Route>
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
