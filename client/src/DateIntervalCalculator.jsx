import React, { useState } from 'react';

const DateIntervalCalculator = () => {
  const [name1, setName1] = useState('');
  const [date1, setDate1] = useState('');
  
  const [name2, setName2] = useState('');
  const [date2, setDate2] = useState('');
  
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculateComparison = () => {
    if (!name1 || !date1 || !name2 || !date2) {
      alert('Brah! Please sabhi names aur dates enter karein.');
      return;
    }

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Determine older and younger
    const older = d1 < d2 ? { name: name1, date: d1 } : { name: name2, date: d2 };
    const younger = d1 < d2 ? { name: name2, date: d2 } : { name: name1, date: d1 };

    const diffTime = Math.abs(d2 - d1);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.436875);
    const totalYears = (totalDays / 365.25).toFixed(1);

    let years = younger.date.getFullYear() - older.date.getFullYear();
    let months = younger.date.getMonth() - older.date.getMonth();
    let days = younger.date.getDate() - older.date.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(younger.date.getFullYear(), younger.date.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      older: older.name,
      younger: younger.name,
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalYears
    });
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `❤️ Partner Age Comparison Results ❤️\n` +
                 `• ${name1}: ${date1}\n` +
                 `• ${name2}: ${date2}\n\n` +
                 `✨ Difference: ${result.years} Years, ${result.months} Months, ${result.days} Days\n` +
                 `✨ Total Days Gap: ${result.totalDays} Days (${result.totalWeeks} Weeks)\n` +
                 `👑 ${result.older} is older than ${result.younger}!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#f3f4f6' }}>
            Partner Age Comparator 💕
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Compare ages and find exact time gap between you & your partner
          </p>
        </div>
        
        {/* Person 1 */}
        <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #2a2a3c', marginBottom: '14px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#00f0ff', fontWeight: '600' }}>👤 Person 1</h4>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Enter Name (e.g. Ali)" 
              value={name1} 
              onChange={(e) => setName1(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <input 
              type="date" 
              value={date1} 
              onChange={(e) => setDate1(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {/* Person 2 */}
        <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #2a2a3c', marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#ff007f', fontWeight: '600' }}>💖 Partner / Person 2</h4>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Enter Partner Name (e.g. Sara)" 
              value={name2} 
              onChange={(e) => setName2(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <input 
              type="date" 
              value={date2} 
              onChange={(e) => setDate2(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <button 
          onClick={calculateComparison}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7000ff)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)' }}
        >
          Compare Ages ✨
        </button>

        {result && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
              <h3 style={{ borderBottom: '1px solid #2a2a3c', paddingBottom: '10px', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#00f0ff', fontSize: '15px', fontWeight: '600' }}>
                👑 {result.older} is older than {result.younger} by:
              </h3>
              
              <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: '700', color: '#f3f4f6', marginBottom: '16px', background: '#1e1e2c', padding: '12px', borderRadius: '8px', border: '1px solid #262638' }}>
                {result.years} Years, {result.months} Months, {result.days} Days
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{result.totalDays}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af' }}>Total Days Gap</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{result.totalWeeks}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af' }}>Total Weeks Gap</span>
                </div>
              </div>

              {/* Copy Button */}
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
                {copied ? '✅ Result Copied to Clipboard!' : '📋 Copy Result'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateIntervalCalculator;
