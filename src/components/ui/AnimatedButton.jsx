import { motion } from "framer-motion";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const MotionHashLink = motion.create(HashLink);

const mergeMotionValue = (base, value) =>
  value && typeof value === "object" ? { ...base, ...value } : base;

export default function AnimatedButton({
  children,
  className = "",
  to,
  href,
  type = "button",
  disabled = false,
  disableHoverTransform = false,
  animate,
  whileHover,
  whileTap,
  transition,
  onHoverStart,
  onHoverEnd,
  onKeyDown,
  onKeyUp,
  onBlur,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const Component = to ? MotionHashLink : href ? motion.a : motion.button;

  const handleKeyDown = (event) => {
    if (!disabled && (event.key === "Enter" || event.key === " ")) {
      setIsKeyPressed(true);
    }
    onKeyDown?.(event);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" || event.key === " ") setIsKeyPressed(false);
    onKeyUp?.(event);
  };

  const componentProps = to ? { to } : href ? { href } : { type, disabled };

  return (
    <Component
      {...componentProps}
      {...props}
      className={`group/animated-button relative isolate overflow-hidden [transform-style:preserve-3d] disabled:pointer-events-none disabled:opacity-60 ${className}`}
      animate={
        isKeyPressed
          ? {
              ...(animate && typeof animate === "object" ? animate : {}),
              scale: 0.965,
              y: 2,
            }
          : animate
      }
      whileHover={
        disableHoverTransform
          ? whileHover
          : mergeMotionValue(
              {
                y: -2,
                scale: 1.012,
                transition: {
                  type: "spring",
                  stiffness: 170,
                  damping: 23,
                  mass: 0.78,
                },
              },
              whileHover,
            )
      }
      whileTap={mergeMotionValue(
        {
          y: 2,
          scale: 0.965,
          transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.65 },
        },
        whileTap,
      )}
      transition={
        transition ?? { type: "spring", stiffness: 430, damping: 27, mass: 0.65 }
      }
      onHoverStart={(event, info) => {
        setIsHovered(true);
        onHoverStart?.(event, info);
      }}
      onHoverEnd={(event, info) => {
        setIsHovered(false);
        onHoverEnd?.(event, info);
      }}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={(event) => {
        setIsKeyPressed(false);
        onBlur?.(event);
      }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[linear-gradient(115deg,rgba(56,189,248,.34),rgba(99,102,241,.28),rgba(255,255,255,.2),rgba(12,82,159,.3))] bg-[length:260%_100%]"
        initial={false}
        animate={{
          opacity: isHovered || isKeyPressed ? 1 : 0,
          backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
        }}
        transition={{
          opacity: { duration: 0.25 },
          backgroundPosition: { duration: 1.15, ease: "easeInOut" },
        }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] border"
        initial={false}
        animate={{
          borderColor:
            isHovered || isKeyPressed
              ? "rgba(125,211,252,.9)"
              : "rgba(125,211,252,0)",
          boxShadow:
            isHovered || isKeyPressed
              ? "inset 0 0 16px rgba(125,211,252,.18), 0 0 18px rgba(12,82,159,.16)"
              : "inset 0 0 0 rgba(125,211,252,0), 0 0 0 rgba(12,82,159,0)",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      />
      {children}
    </Component>
  );
}
