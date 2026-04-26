export const TextShadow = ({ title }) => {
  return (
    <div className="flex justify-center w-full mb-10">
      <div className="relative inline-block text-center">
        {/* Սա ստվերն է */}
        <div 
          className="absolute pointer-events-none select-none"
          style={{
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#0000003b",
            letterSpacing: "8px", // Միայն ստվերի համար
            zIndex: 0,
            whiteSpace: "nowrap",
            fontSize: "30px", // Որպեսզի h2-ի չափը վերցնի
            fontWeight: "inherit",
          }}
        >
          {title}
        </div>

        {/* Սա հիմնական տեքստն է */}
        <h2 className="relative z-10 m-0 p-0 text-[25px] text-[#010101]">
          {title}
        </h2>
      </div>
    </div>
  );
};