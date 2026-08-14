import React, { useEffect, useRef } from 'react';

const AdBanner = ({ adKey, w, h }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && !ref.current.firstChild) {
      const s1 = document.createElement('script');
      s1.innerHTML = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : ${h}, 'width' : ${w}, 'params' : {} };`;
      const s2 = document.createElement('script');
      s2.src = `https://versatilesentiment.com/${adKey}/invoke.js`;
      ref.current.appendChild(s1);
      ref.current.appendChild(s2);
    }
  }, [adKey]);
  return <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }} ref={ref} />;
};

const Home = ({ setActiveTool }) => {
  const tools = [
    { id: 'age-calculator', title: 'Age Calculator Pro', icon: '⏳' },
    { id: 'partner-age', title: 'Partner Age Comparator', icon: '💖' },
    { id: 'unit-converter', title: 'Time Unit Converter', icon: '⏱️' },
    { id: 'nation-age', title: 'Nation Independence Age', icon: '🏛️' }
  ];

  // Saari 10 keys (Ad-container + 9 banner keys)
  const ads = [
    { k: 'd3c0fd21efdb64029cb87ff0f0d28ea8', w: 300, h: 250 },
    { k: 'd115e550e46c09cfe291ed49e0e2fa9e', w: 468, h: 60 },
    { k: 'f421aa1896bb10f6fc60ce8d7f4a9c3f', w: 160, h: 300 },
    { k: '6c5d70e67f5656ac9b1d8d7f81c0be9d', w: 160, h: 600 },
    { k: 'e8ae945dd284baf5462fc3a497f1cad3', w: 320, h: 50 },
    { k: '6443f0fe3afe17e44708ccb3a0454eb3', w: 728, h: 90 },
    { k: '4a0e8995f3b16a23f53f673fd8f8961b', w: 300, h: 250 },
    { k: 'f008ff3851fcf29d03aa0457fe7b0a54', w: 300, h: 250 },
    { k: 'c8786462aae7480656b5b49f169cf9db', w: 300, h: 250 }
  ];

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '15px', color: '#fff' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="/logo.png" style={{ width: '80px', borderRadius: '15px' }} />
        <h2 style={{ margin: '10px 0 5px' }}>AiBeast Hub</h2>
      </div>

      {/* Tools Loop */}
      {tools.map((tool, i) => (
        <React.Fragment key={tool.id}>
          <div onClick={() => setActiveTool(tool.id)} style={{ background: '#121216', padding: '15px', borderRadius: '12px', border: '1px solid #2a2a3c', marginBottom: '10px', cursor: 'pointer' }}>
            {tool.icon} {tool.title}
          </div>
          {/* Har tool ke baad ek ad */}
          {ads[i] && <AdBanner adKey={ads[i].k} w={ads[i].w} h={ads[i].h} />}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Home;
