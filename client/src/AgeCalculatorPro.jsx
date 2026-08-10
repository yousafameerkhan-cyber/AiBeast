import React, { useState } from 'react';

const AgeCalculatorPro = () => {
  const [birthDate, setBirthDate] = useState('1998-05-14');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculateAge = () => {
    if (!birthDate) return;

    const start = new Date(birthDate);
    const now = new Date();

    if (start > now) {
      alert('Future date select nahi ho sakti!');
      return;
    }

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(now - start);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffTime / (1000 * 60));

    setResult({
      years,
      months,
      days,
      totalWeeks,
      totalDays,
      totalHours,
      totalMinutes,
    });
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `⏳ Age Calculator Pro Report\n` +
                 `📅 Birth Date: ${birthDate}\n\n` +
                 `✨ Exact Age: ${result.years} Years, ${result.months} Months, ${result.days} Days\n` +
                 `✨ Total Time: ${result.totalDays} Days (${result.totalWeeks} Weeks / ${result.totalHours} Hours)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#f3f4f6' }}>
            Age Calculator Pro ⏳
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Calculate exact years, months, days, and total hours passed
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Enter Birth Date
          </label>
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          onClick={calculateAge}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7000ff)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)' }}
        >
          Calculate Exact Age ✨
        </button>

        {result && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
              <h3 style={{ borderBottom: '1px solid #2a2a3c', paddingBottom: '12px', marginTop: 0, marginBottom: '16px', textAlign: 'center', color: '#00f0ff', fontSize: '16px', fontWeight: '600' }}>
                {result.years} Years, {result.months} Months, {result.days} Days
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{result.totalWeeks}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Total Weeks</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{result.totalDays}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Total Days</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{result.totalHours}</span>
                  <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Total Hours</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#38bdf8' }}>{result.totalMinutes}</span>
                  <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Total Minutes</span>
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
                {copied ? '✅ Result Copied to Clipboard!' : '📋 Copy Report'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculatorPro;
