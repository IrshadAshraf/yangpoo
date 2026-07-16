import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PageLoader from "@/components/ui/PageLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = previousOverflow;
    }, 2300);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
