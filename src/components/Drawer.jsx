/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { X } from "lucide-react";

const DrawerContext = createContext(null);

export function DrawerProvider({ children }) {
  const [drawer, setDrawer] = useState(null);

  const openDrawer = (content) => setDrawer(content);
  const closeDrawer = () => setDrawer(null);

  useEffect(() => {
    if (!drawer) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => event.key === "Escape" && closeDrawer();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawer]);

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      <AnimatePresence>
        {drawer && (
          <Drawer
            key={drawer.id ?? drawer.title}
            {...drawer}
            onClose={closeDrawer}
          />
        )}
      </AnimatePresence>
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("useDrawer must be used inside DrawerProvider");
  return context;
}

function Drawer({ title, eyebrow, description, content, onClose }) {
  const dragControls = useDragControls();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:px-10 fixed inset-0 z-[100] flex items-end bg-black/70 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.9 }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) =>
          (info.offset.y > 130 || info.velocity.y > 700) && onClose()
        }
        className="drawer-scrollbar relative max-h-[90dvh] w-full overflow-y-auto rounded-t-[34px] border-t border-white/15 bg-[#1b1719] px-6 pb-8 pt-4 text-white shadow-[0_-30px_90px_rgba(0,0,0,.5)] sm:px-10"
      >
        <div
          className="mx-auto mb-5 h-1.5 w-14 cursor-grab touch-none rounded-full bg-white/25 active:cursor-grabbing"
          onPointerDown={(event) => dragControls.start(event)}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close drawer"
          className="sticky top-2 z-[60] ml-auto -mb-11 grid size-11 place-items-center rounded-full border border-white/10 bg-[#2b2528]/95 shadow-xl shadow-black/30 backdrop-blur-xl transition hover:rotate-90 hover:border-brand/40 hover:bg-brand"
        >
          <X size={20} />
        </button>
        <div className="mx-auto max-w-4xl">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {eyebrow}
            </p>
          )}
          <h2
            id="drawer-title"
            className="pr-14 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl leading-7 text-white/60">
              {description}
            </p>
          )}
          <div className="mt-7">{content}</div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Drawer;
