import "./app.css"
import Navbar from "./components/navbar/Navbar.jsx"
import About from "./components/about/About.jsx"
import Transformations from "./components/Transformations/Transformations.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Blog from "./components/blog/BLOG.jsx"
import Footer from "./components/footer/Footer.jsx"


function App() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Transformations/>
        <Cards/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
