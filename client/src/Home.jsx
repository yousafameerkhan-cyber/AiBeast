import React, { useEffect, useRef } from 'react';

// Single Ad Component jo har size ko handle karega
const AdWidget = ({ adConfig }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current && !ref.current.firstChild) {
      if (adConfig.type === 'iframe') {
        const s1 = document.createElement('script');
        s1.innerHTML = `atOptions = { 'key' : '${adConfig.key}', 'format' : 'iframe', 'height' : ${adConfig.h}, 'width' : ${adConfig.w}, 'params' : {} };`;
        
        const s2 = document.createElement('script');
        s2.src = `https://versatilesentiment.com/${adConfig.key}/invoke.js`;
        
        ref.current.appendChild(s1);
        ref.current.appendChild(s2);
      } else if (adConfig.type === 'container') {
        const s = document.createElement('script');
        s.async = true;
        s.setAttribute('data-cfasync', 'false');
        s.src = `https://versatilesentiment.com/${adConfig.key}/invoke.js`;
        
        ref.current.appendChild(s);
      } else if (adConfig.type === 'direct') {
        const s = document.createElement('script');
        s.src = adConfig.src;
        ref.current.appendChild(s);
      }
    }
  }, [adConfig]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0', overflow: 'hidden', width: '100%' }}>
      <div ref={ref} id={adConfig.containerId ? `container-${adConfig.key}` : undefined} />
    </div>
  );
};

const Home = ({ setActiveTool }) => {
  const tools = [
    { id: 'age-calculator', title: 'Age Calculator Pro', description: 'Calculate exact years, months, days, planetary age, zodiac & more.', icon: '⏳', badge: 'Available', active: true },
    { id: 'date-difference', title: 'Partner Age Comparator', description: 'Compare ages, enter names & find exact time gap with copy feature.', icon: '💖', badge: 'Available', active: true },
    { id: 'unit-converter', title: 'Time Unit Converter', description: 'Convert centuries, decades, years, months, and seconds instantly.', icon: '⏱️', badge: 'Available', active: true },
    { id: 'nation-age', title: 'Nation Independence Age', description: 'Calculate exact years, days & time passed since national independence.', icon: '🏛️', badge: 'Available', active: true }
  ];

  // Aapke diye gaye saare 10 ads ki list
  const allAds = [
    { type: 'container', key: '4a0e8995f3b16a23f53f673fd8f8961b', containerId: true },
    { type: 'iframe', key: 'd115e550e46c09cfe291ed49e0e2fa9e', w: 468, h: 60 },
    { type: 'iframe', key: 'd3c0fd21efdb64029cb87ff0f0d28ea8', w: 300, h: 250 },
    { type: 'iframe', key: 'f421aa1896bb10f6fc60ce8d7f4a9c3f', w: 160, h: 300 },
    { type: 'iframe', key: '6c5d70e67f5656ac9b1d8d7f81c0be9d', w: 160, h: 600 },
    { type: 'iframe', key: 'e8ae945dd284baf5462fc3a497f1cad3', w: 320, h: 50 },
    { type: 'iframe', key: '6443f0fe3afe17e44708ccb3a0454eb3', w: 728, h: 90 },
    { type: 'direct', src: 'https://versatilesentiment.com/f0/08/ff/f008ff3851fcf29d03aa0457fe7b0a54.js' },
    { type: 'direct', src: 'https://versatilesentiment.com/c8/78/64/c8786462aae7480656b5b49f169cf9db.js' }
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
          AiBeast Hub
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
        {tools.map((tool, index) => (
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

            {/* Har tool ke baad aik ad place hoga */}
            {allAds[index] && <AdWidget adConfig={allAds[index]} />}
          </React.Fragment>
        ))}
      </div>

      {/* Baaki bache hue ads neechay grid container mein */}
      {allAds.length > tools.length && (
        <div style={{
          marginTop: '25px',
          background: '#111827',
          border: '1px solid #1f2937',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>Sponsored Partners</h4>
          {allAds.slice(tools.length).map((ad, idx) => (
            <div key={idx} style={{
              background: '#1f2937',
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <AdWidget adConfig={ad} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
