const ParticleBackground = () => (
    <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gray-950"></div>
        {/* Subtle ambient dots — very few, very faint */}
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full opacity-[0.08]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
            ></div>
        ))}
    </div>
);

export default ParticleBackground;
