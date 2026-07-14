import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PageLoader from "@/components/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let minimumComplete = false;
    let pageComplete = document.readyState === "complete";
    let finished = false;

    const finish = () => {
      if (finished || !minimumComplete || !pageComplete) return;
      finished = true;
      setLoading(false);
    };
    const handleLoad = () => {
      pageComplete = true;
      finish();
    };
    const minimumTimer = window.setTimeout(() => {
      minimumComplete = true;
      finish();
    }, Math.max(0, 2100 - (performance.now() - startedAt)));
    const maximumTimer = window.setTimeout(() => {
      if (!finished) {
        finished = true;
        setLoading(false);
      }
    }, 5200);

    if (!pageComplete) window.addEventListener("load", handleLoad, { once: true });
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
  }, [loading]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="page-loader" />}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.55, delay: loading ? 0 : 0.1 }} aria-hidden={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
