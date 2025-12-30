import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Tọa độ gốc
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Hiệu ứng Spring siêu nhạy
  const springConfig = { stiffness: 1000, damping: 40, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX - 12); // Căn giữa (w-6 = 24px -> offset 12)
      mouseY.set(e.clientY - 12);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
        {/* Main Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        >
            <motion.div 
                className={`w-full h-full border-2 border-white transition-colors duration-200 ${isHovering ? 'bg-white' : 'bg-transparent'}`}
                animate={{
                    rotate: isHovering ? 0 : 45, // Xoay 45 độ (Diamond) khi thường, 0 độ (Square) khi hover
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            />
        </motion.div>
        
        {/* Crosshair Center Dot (Optional - tăng độ chính xác) */}
        <motion.div
             className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
             style={{
                 x: useSpring(mouseX, { ...springConfig, stiffness: 2000 }), // Dot đi nhanh hơn một chút
                 y: useSpring(mouseY, { ...springConfig, stiffness: 2000 }),
                 translateX: 10, // Căn chỉnh lại tâm (12 - 2 = 10)
                 translateY: 10
             }}
        />
    </>
  );
}
