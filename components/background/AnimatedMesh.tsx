'use client';

export default function AnimatedMesh() {
  return (
    <div className="gradient-mesh fixed inset-0 z-0 overflow-hidden opacity-60 pointer-events-none">
      <div className="blob blob-1 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-1"
           style={{
             background: 'radial-gradient(circle, rgba(91, 33, 182, 0.08) 0%, transparent 70%)',
             top: '-20%',
             left: '-10%',
           }}
      />
      <div className="blob blob-2 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-2"
           style={{
             background: 'radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)',
             top: '50%',
             right: '-10%',
           }}
      />
      <div className="blob blob-3 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-3"
           style={{
             background: 'radial-gradient(circle, rgba(15, 118, 110, 0.08) 0%, transparent 70%)',
             bottom: '-20%',
             left: '30%',
           }}
      />

      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(40px, 20px) scale(1.05); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 50px) scale(1.05); }
          50% { transform: translate(30px, -30px) scale(0.95); }
          75% { transform: translate(-50px, -20px) scale(1.1); }
        }

        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, 40px) scale(0.9); }
          50% { transform: translate(-40px, -40px) scale(1.1); }
          75% { transform: translate(20px, -30px) scale(0.95); }
        }

        .animate-blob-1 {
          animation: blob-1 30s infinite ease-in-out;
        }

        .animate-blob-2 {
          animation: blob-2 30s infinite ease-in-out 10s;
        }

        .animate-blob-3 {
          animation: blob-3 30s infinite ease-in-out 20s;
        }
      `}</style>
    </div>
  );
}
