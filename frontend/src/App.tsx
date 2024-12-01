import Navbar from "./components/navbar/navbar";
import SocialBar from "./components/social/social-bar";
import Squares from "./components/squares/squares";
import AboutMe from "./components/about/aboutMe";

function App() {
  return (
    <div className="w-full m-0">
      <Navbar />
      <Squares />
      <AboutMe />
      <SocialBar />
    </div>
  );
}

export default App;
