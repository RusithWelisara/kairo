


const ParticleBackground = () => (
    <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`
                }}
            ></div>
        ))}
        <style>{`
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-20px) rotate(180deg); }
      }
    `}</style>
    </div>
);

export default ParticleBackground;
