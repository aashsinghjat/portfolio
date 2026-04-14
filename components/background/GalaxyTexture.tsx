'use client';

export default function GalaxyTexture() {
  return (
    <div className="galaxy-texture pointer-events-none fixed inset-0 z-0">
      {/* Purple nebula clouds */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse at 15% 25%, rgba(147, 51, 234, 0.3) 0%, transparent 45%),
            radial-gradient(ellipse at 85% 75%, rgba(126, 34, 206, 0.25) 0%, transparent 50%)
          `,
          filter: 'blur(80px)'
        }}
      />

      {/* Yellow/Gold accents */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 35%),
            radial-gradient(circle at 30% 70%, rgba(255, 193, 7, 0.12) 0%, transparent 40%)
          `,
          filter: 'blur(100px)'
        }}
      />

      {/* Cyan glow areas */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          background: `
            radial-gradient(ellipse at 50% 10%, rgba(0, 217, 255, 0.2) 0%, transparent 40%),
            radial-gradient(ellipse at 45% 90%, rgba(0, 217, 255, 0.18) 0%, transparent 45%)
          `,
          filter: 'blur(90px)'
        }}
      />

      {/* Mixed galaxy swirls */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          background: `
            radial-gradient(circle at 60% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 25% 45%, rgba(255, 200, 50, 0.1) 0%, transparent 35%)
          `,
          filter: 'blur(120px)'
        }}
      />
    </div>
  );
}
