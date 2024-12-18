import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../components/home/index";
import NavBar from "../components/navigation";
import SignIn from "../modal/signIn/index";
import SignUpModal from "../modal/signUp/index";

const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const About = () => {
    return <div>This is our About page</div>;
  };

  const Contact = () => {
    return <div>This is our Contact page</div>;
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="signup" element={<SignUpModal />} />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
