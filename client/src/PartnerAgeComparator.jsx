import React, { useState } from 'react';

const PartnerAgeComparator = () => {
  const [name1, setName1] = useState('Yousaf');
  const [date1, setDate1] = useState('1998-05-14');
  const [name2, setName2] = useState('Partner');
  const [date2, setDate2] = useState('2000-08-20');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const compareAges = () => {
    if (!date1 || !date2) return;

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffTime = Math.abs(d1 - d2);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = (diffDays / 365.25).toFixed(1);

    const older = d1 < d2 ? name1 : name2;
    const younger = d1 < d2 ? name2 : name1;

    setResult({
      diffDays,
      diffYears,
      older,
      younger
    });
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `💖 Partner Age Comparison Report 💖\n` +
                 `👤 ${name1}: ${date1}\n` +
                 `👤 ${name2}: ${date2}\n\n` +
                 `✨ Time Gap: ${result.diffYears} Years (${result.diffDays} Days)\n` +
                 `🏆 Older: ${result.older}\n` +
                 `🌱 Younger: ${result.younger}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#f3f4f6' }}>
            Partner Age Comparator 💖
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Compare ages and find the exact time gap
          </p>
        </div>

        {/* Person 1 */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '12px', fontWeight: '500', color: '#d1d5db' }}>
            Person 1 Name & Birth Date
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={name1} 
              onChange={(e) => setName1(e.target.value)}
              placeholder="Name"
              style={{ width: '40%', padding: '10px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none' }}
            />
            <input 
              type="date" 
              value={date1} 
              onChange={(e) => setDate1(e.target.value)}
              style={{ width: '60%', padding: '10px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none' }}
            />
          </div>
        </div>

        {/* Person 2 */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '12px', fontWeight: '500', color: '#d1d5db' }}>
            Person 2 Name & Birth Date
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={name2} 
              onChange={(e) => setName2(e.target.value)}
              placeholder="Name"
              style={{ width: '40%', padding: '10px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none' }}
            />
            <input 
              type="date" 
              value={date2} 
              onChange={(e) => setDate2(e.target.value)}
              style={{ width: '60%', padding: '10px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none' }}
            />
          </div>
        </div>

        <button 
          onClick={compareAges}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7000ff)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)' }}
        >
          Compare Ages ✨
        </button>

        {result && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
              <h3 style={{ borderBottom: '1px solid #2a2a3c', paddingBottom: '12px', marginTop: 0, marginBottom: '16px', textAlign: 'center', color: '#00f0ff', fontSize: '16px', fontWeight: '600' }}>
                Time Gap: {result.diffYears} Years ({result.diffDays} Days)
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#38bdf8' }}>{result.older}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Older</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#38bdf8' }}>{result.younger}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Younger</span>
                </div>
              </div>

              <button 
                onClick={copyToClipboard}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  background: copied ? '#10b981' : '#22222d', 
                  color: copied ? '#fff' : '#00f0ff', 
                  border: '1px solid #2a2a3c', 
                  borderRadius: '8px', 
                  fontWeight: '600', 
                  fontSize: '13px', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? '✅ Report Copied!' : '📋 Copy Comparison Report'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerAgeComparator;
