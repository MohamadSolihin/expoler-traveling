import Blogs from "./components/Blogs";
import Discover from "./components/Discover";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Populer from "./components/Populer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Packages />
      <Populer />
      <Discover />
      <Blogs />
    </>
  );
}

export default App;
