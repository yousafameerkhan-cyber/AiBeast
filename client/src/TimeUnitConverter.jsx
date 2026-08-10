import React, { useState } from 'react';

const TimeUnitConverter = () => {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('years');

  const num = parseFloat(value) || 0;

  // Convert everything down to seconds as base
  let seconds = 0;
  if (unit === 'centuries') seconds = num * 100 * 365.25 * 24 * 3600;
  else if (unit === 'decades') seconds = num * 10 * 365.25 * 24 * 3600;
  else if (unit === 'years') seconds = num * 365.25 * 24 * 3600;
  else if (unit === 'months') seconds = num * 30.436875 * 24 * 3600;
  else if (unit === 'weeks') seconds = num * 7 * 24 * 3600;
  else if (unit === 'days') seconds = num * 24 * 3600;
  else if (unit === 'hours') seconds = num * 3600;
  else if (unit === 'minutes') seconds = num * 60;
  else if (unit === 'seconds') seconds = num;

  const resYears = (seconds / (365.25 * 24 * 3600)).toFixed(4);
  const resMonths = (seconds / (30.436875 * 24 * 3600)).toFixed(2);
  const resWeeks = (seconds / (7 * 24 * 3600)).toFixed(2);
  const resDays = (seconds / (24 * 3600)).toFixed(2);
  const resHours = (seconds / 3600).toFixed(1);
  const resMinutes = (seconds / 60).toFixed(0);
  const resSeconds = seconds.toFixed(0);

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#f3f4f6' }}>
            Time Unit Converter ⏱️
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Convert time units instantly across scales
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="number" 
            placeholder="Enter value" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '15px', outline: 'none' }}
          />
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)}
            style={{ width: '130px', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#00f0ff', fontSize: '14px', outline: 'none', fontWeight: '600', cursor: 'pointer' }}
          >
            <option value="centuries">Centuries</option>
            <option value="decades">Decades</option>
            <option value="years">Years</option>
            <option value="months">Months</option>
            <option value="weeks">Weeks</option>
            <option value="days">Days</option>
            <option value="hours">Hours</option>
            <option value="minutes">Minutes</option>
            <option value="seconds">Seconds</option>
          </select>
        </div>

        <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#818cf8', textAlign: 'center' }}>Converted Results</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resYears}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Years</span>
            </div>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resMonths}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Months</span>
            </div>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resWeeks}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Weeks</span>
            </div>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resDays}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Days</span>
            </div>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resHours}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Hours</span>
            </div>
            <div style={{ background: '#1e1e2c', padding: '10px', borderRadius: '8px', border: '1px solid #262638' }}>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#00f0ff' }}>{resMinutes}</span>
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>Minutes</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeUnitConverter;
