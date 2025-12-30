import { motion } from "framer-motion";

export default function Marquee() {
  const marqueeVariants = {
    animate: {
      x: [0, -1035], // Di chuyển sang trái (giá trị tùy thuộc vào độ dài text)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Tốc độ chạy (càng lớn càng chậm)
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden mb-16 relative">
      <div className="relative w-full bg-neo-yellow border-y-4 border-neo-black py-3 md:-rotate-1 shadow-hard z-20 transform origin-center">
        <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none"></div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex space-x-12 font-display font-bold text-2xl md:text-4xl uppercase text-neo-black tracking-tighter"
            variants={marqueeVariants}
            animate="animate"
          >
            {/* Lặp lại nội dung đủ để lấp đầy màn hình và tạo hiệu ứng vô tận */}
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center space-x-12">
                <span>Data Engineer</span>
                <span className="text-neo-white text-stroke">+++</span>
                <span>Big Data</span>
                <span className="text-neo-white text-stroke">+++</span>
                <span>Python Master</span>
                <span className="text-neo-white text-stroke">+++</span>
                <span>Cloud Computing</span>
                <span className="text-neo-white text-stroke">+++</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}