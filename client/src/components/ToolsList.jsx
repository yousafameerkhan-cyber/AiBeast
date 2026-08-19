import React from 'react';

// Ad Component jo har tool ke beech mein show hoga
const AdBanner = () => (
  <div style={{ margin: '16px 0', padding: '10px', background: '#111827', borderRadius: '12px', textAlign: 'center', border: '1px solid #1f2937' }}>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/path-to-your-ad.jpg" alt="Advertisement" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px' }}>Sponsored Ad</p>
    </a>
  </div>
);

export default function ToolsList({ tools }) {
  return (
    <div className="tools-container">
      {tools.map((tool, index) => (
        <React.Fragment key={tool.id || index}>
          {/* Tool Card */}
          <div style={{ background: '#1f2937', padding: '16px', borderRadius: '12px', marginBottom: '12px' }}>
            <h3 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0 0 4px 0' }}>{tool.name}</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>{tool.description}</p>
          </div>

          {/* Har tool ke baad ek Ad */}
          <AdBanner />
        </React.Fragment>
      ))}
    </div>
  );
}
