import React, { useEffect, useRef } from 'react';

const AdBanner = ({ adKey }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const confScript = document.createElement('script');
      confScript.type = 'text/javascript';
      confScript.innerHTML = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;

      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = `https://versatilesentiment.com/${adKey}/invoke.js`;

      bannerRef.current.appendChild(confScript);
      bannerRef.current.appendChild(invokeScript);
    }
  }, [adKey]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <div ref={bannerRef} style={{ width: '300px', height: '250px', background: '#121216', borderRadius: '12px', overflow: 'hidden' }} />
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

  const adKeys = [
    'd3c0fd21efdb64029cb87ff0f0d28ea8',
    '6c5d70e67f5656ac9b1d8d7f81c0be9d',
    '6443f0fe3afe17e44708ccb3a0454eb3'
  ];

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto', padding: '16px' }}>
      <div style={{ background: '#171721', border: '1px solid #2a2a3c', borderRadius: '16px', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 6px 0', fontSize: '24px', color: '#00f0ff' }}>AiBeast Hub</h2>
        <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Explore advanced calculation tools designed for speed and precision.</p>
      </div>

      <h3 style={{ fontSize: '15px', color: '#818cf8', marginBottom: '14px' }}>Select a Tool</h3>

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
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <span style={{ fontSize: '28px', background: '#1a1a24', padding: '10px', borderRadius: '10px' }}>{tool.icon}</span>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#fff' }}>{tool.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>{tool.description}</p>
              </div>
            </div>

            {index < adKeys.length && <AdBanner adKey={adKeys[index]} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
