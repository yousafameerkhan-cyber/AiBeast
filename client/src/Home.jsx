import React, { useEffect, useRef } from 'react';

const Home = ({ setActiveTool }) => {
  const tools = [
    { id: 'age-calculator', title: 'Age Calculator Pro', description: 'Calculate exact years, months, days, planetary age, zodiac & more.', icon: '⏳', badge: 'Available', active: true },
    { id: 'date-difference', title: 'Partner Age Comparator', description: 'Compare ages, enter names & find exact time gap with copy feature.', icon: '💖', badge: 'Available', active: true },
    { id: 'unit-converter', title: 'Time Unit Converter', description: 'Convert centuries, decades, years, months, and seconds instantly.', icon: '⏱️', badge: 'Available', active: true },
    { id: 'nation-age', title: 'Nation Independence Age', description: 'Calculate exact years, days & time passed since national independence.', icon: '🏛️', badge: 'Available', active: true }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto', padding: '16px', boxSizing: 'border-box' }}>
      <style>{`
        @keyframes floatGlow {
          0% { transform: translateY(0px); filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.5)); }
          50% { transform: translateY(-6px); filter: drop-shadow(0 0 18px rgba(0, 240, 255, 0.8)); }
          100% { transform: translateY(0px); filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.5)); }
        }
        .animated-logo { animation: floatGlow 3s ease-in-out infinite; }
      `}</style>

      {/* Header with Logo */}
      <div style={{
        background: 'linear-gradient(135deg, #171721 0%, #1e1e2c 100%)',
        border: '1px solid #2a2a3c',
        borderRadius: '16px',
        padding: '24px',
        textAlign: 'center',
        marginBottom: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
      }}>
        <img
          src="/logo.png"
          alt="Logo"
          className="animated-logo"
          style={{ width: '85px', height: '85px', objectFit: 'contain', margin: '0 auto 12px auto', display: 'block' }}
        />
        <h2 style={{
          margin: '0 0 6px 0',
          fontSize: '24px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 50%, #ff007f 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          MrBrain Hub
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af', lineHeight: '1.5' }}>
          Explore advanced calculation tools designed for speed, precision, and ease of use.
        </p>
      </div>

      <h3 style={{ fontSize: '15px', color: '#818cf8', marginBottom: '14px', fontWeight: '600' }}>
        Select a Tool
      </h3>

      {/* Tools & Interspersed Ads */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tools.map((tool) => (
          <React.Fragment key={tool.id}>
            <div
              onClick={() => tool.active && setActiveTool(tool.id)}
              style={{
                background: '#121216',
                border: '1px solid #22222d',
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '28px', background: '#1a1a24', padding: '10px', borderRadius: '10px', border: '1px solid #2a2a3c' }}>
                  {tool.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>
                      {tool.title}
                    </h4>
                    <span style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '20px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      fontWeight: '600',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      {tool.badge}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af', lineHeight: '1.4' }}>
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>

          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default Home;
