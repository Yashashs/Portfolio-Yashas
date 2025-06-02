import { useRef } from "react";

export default function TiltCard({ title, subtitle, date, children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (-y / (height / 2)) * 10;
    const rotateY = (x / (width / 2)) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="relative md:w-1/2 w-full pl-8 md:pl-6 md:text-left"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-md shadow-sm shadow-cyan-700 pb-3 md:pl-4 pl-2 pr-2
          relative overflow-hidden cursor-pointer
          transition-transform duration-500 ease-out
          bg-neutral-900 border-2 border-transparent
          border-indigo-600 md:border-r md:pl-4 md:ml-2"
        style={{
          transformStyle: "preserve-3d",
          background: "rgb(17, 24, 39)",
        }}
      >
        <h3 className="text-white text-sm md:text-sm font-bold mb-2 mt-2">
          <span className="md:text-lg text-cyan-400">{title}&nbsp;&nbsp;</span>
          {date && <span>({date})</span>}
        </h3>
        {subtitle && <h4 className="text-primary-300 text-gray-400 mb-2">• {subtitle}</h4>}
        <div className="text-primary-200 text-sm md:text-base font-body-1">
          {children}
        </div>
      </div>
    </div>
  );
}
