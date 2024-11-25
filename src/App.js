import "./app.css"
import Navbar from "./components/navbar/Navbar.jsx"
import About from "./components/about/About.jsx"
import Transformations from "./components/Transformations/Transformations.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Blog from "./components/blog/BLOG.jsx"
import Footer from "./components/footer/Footer.jsx"
import OurTiming from "./components/OurTiming/OurTiming.jsx"
import Modal from "./components/modal/Modal.jsx"
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import { useState, useEffect } from "react"

function App() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Function to check if an hour has passed since last shown
    const shouldShowModal = () => {
      const lastShown = localStorage.getItem('lastModalShown');
      if (!lastShown) return true;

      const hourInMs = 60 * 60 * 1000; // 1 hour in milliseconds
      const timeSinceLastShown = Date.now() - parseInt(lastShown);
      return timeSinceLastShown >= hourInMs;
    };

    // Function to show modal and update last shown time
    const showModal = () => {
      if (shouldShowModal()) {
        setOpen(true);
        localStorage.setItem('lastModalShown', Date.now().toString());
      }
    };

    // Show modal on initial load if needed
    showModal();

    // Set up interval to check every hour
    const intervalId = setInterval(showModal, 60 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Navbar/>
      <OurTiming/>
      <About/>
      <Transformations/>
      <Cards/>
      <ContactForm/>
      <Blog/>
      <Footer/>
      <Modal isOpen={open} onClose={handleClose} />
    </div>
  );
}

export default App;
