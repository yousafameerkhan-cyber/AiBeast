import React, { useState } from 'react';

const zodiacSigns = [
  { name: 'Capricorn ♑', dates: 'Dec 22 - Jan 19', element: 'Earth', planet: 'Saturn', stone: 'Garnet', trait: 'Ambitious, disciplined, and practical.' },
  { name: 'Aquarius ♒', dates: 'Jan 20 - Feb 18', element: 'Air', planet: 'Uranus', stone: 'Amethyst', trait: 'Progressive, original, and humanitarian.' },
  { name: 'Pisces ♓', dates: 'Feb 19 - Mar 20', element: 'Water', planet: 'Neptune', stone: 'Aquamarine', trait: 'Compassionate, artistic, and intuitive.' },
  { name: 'Aries ♈', dates: 'Mar 21 - Apr 19', element: 'Fire', planet: 'Mars', stone: 'Diamond', trait: 'Courageous, determined, and confident.' },
  { name: 'Taurus ♉', dates: 'Apr 20 - May 20', element: 'Earth', planet: 'Venus', stone: 'Emerald', trait: 'Reliable, patient, and devoted.' },
  { name: 'Gemini ♊', dates: 'May 21 - Jun 20', element: 'Air', planet: 'Mercury', stone: 'Pearl', trait: 'Gentle, affectionate, and curious.' },
  { name: 'Cancer ♋', dates: 'Jun 21 - Jul 22', element: 'Water', planet: 'Moon', stone: 'Ruby', trait: 'Tenacious, highly imaginative, and loyal.' },
  { name: 'Leo ♌', dates: 'Jul 23 - Aug 22', element: 'Fire', planet: 'Sun', stone: 'Peridot', trait: 'Creative, passionate, and generous.' },
  { name: 'Virgo ♍', dates: 'Aug 23 - Sep 22', element: 'Earth', planet: 'Mercury', stone: 'Sapphire', trait: 'Loyal, analytical, and hardworking.' },
  { name: 'Libra ♎', dates: 'Sep 23 - Oct 22', element: 'Air', planet: 'Venus', stone: 'Opal', trait: 'Cooperative, diplomatic, and fair-minded.' },
  { name: 'Scorpio ♏', dates: 'Oct 23 - Nov 21', element: 'Water', planet: 'Pluto', stone: 'Topaz', trait: 'Resourceful, brave, and passionate.' },
  { name: 'Sagittarius ♐', dates: 'Nov 22 - Dec 21', element: 'Fire', planet: 'Jupiter', stone: 'Turquoise', trait: 'Generous, idealistic, and great sense of humor.' }
];

const ZodiacCalculator = () => {
  const [birthDate, setBirthDate] = useState('1995-06-15');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const findZodiac = () => {
    if (!birthDate) return;
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let sign = zodiacSigns[0];

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = zodiacSigns[1];
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) sign = zodiacSigns[2];
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = zodiacSigns[3];
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = zodiacSigns[4];
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = zodiacSigns[5];
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = zodiacSigns[6];
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = zodiacSigns[7];
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = zodiacSigns[8];
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = zodiacSigns[9];
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = zodiacSigns[10];
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = zodiacSigns[11];
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = zodiacSigns[0];

    setResult(sign);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `✨ Zodiac & Birthstone Report ✨\n` +
                 `📅 Birth Date: ${birthDate}\n` +
                 `⭐ Zodiac Sign: ${result.name}\n` +
                 `🌍 Element: ${result.element}\n` +
                 `🪐 Ruling Planet: ${result.planet}\n` +
                 `💎 Birthstone: ${result.stone}\n` +
                 `💡 Traits: ${result.trait}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#f3f4f6' }}>
            Zodiac & Birthstone ✨
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Discover your zodiac sign, ruling planet & lucky stone
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Select Your Birth Date
          </label>
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          onClick={findZodiac}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7000ff)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)' }}
        >
          Explore Zodiac Profile 🌟
        </button>

        {result && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
              <h3 style={{ borderBottom: '1px solid #2a2a3c', paddingBottom: '12px', marginTop: 0, marginBottom: '16px', textAlign: 'center', color: '#00f0ff', fontSize: '18px', fontWeight: '700' }}>
                {result.name}
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>{result.element}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Element</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>{result.planet}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Ruling Planet</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#38bdf8' }}>{result.stone}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Birthstone</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#38bdf8' }}>{result.dates}</span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Date Range</span>
                </div>
              </div>

              <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #262638', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af', marginBottom: '4px' }}>Key Personality Traits</span>
                <span style={{ fontSize: '13px', color: '#e5e7eb', fontWeight: '500' }}>{result.trait}</span>
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
                {copied ? '✅ Report Copied!' : '📋 Copy Zodiac Report'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZodiacCalculator;
