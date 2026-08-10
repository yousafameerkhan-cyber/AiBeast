import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  
  const [person2Dob, setPerson2Dob] = useState('');
  const [ageResult, setAgeResult] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [zodiacInfo, setZodiacInfo] = useState(null);
  const [funFacts, setFunFacts] = useState(null);
  const [bornDay, setBornDay] = useState('');
  const [planetaryAges, setPlanetaryAges] = useState(null);
  const [copied, setCopied] = useState(false);

  const getZodiacSign = (day, month) => {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: 'Aries ♈', stone: 'Diamond' };
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: 'Taurus ♉', stone: 'Emerald' };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { sign: 'Gemini ♊', stone: 'Pearl' };
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { sign: 'Cancer ♋', stone: 'Ruby' };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: 'Leo ♌', stone: 'Peridot' };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: 'Virgo ♍', stone: 'Sapphire' };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { sign: 'Libra ♎', stone: 'Opal' };
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { sign: 'Scorpio ♏', stone: 'Topaz' };
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: 'Sagittarius ♐', stone: 'Turquoise' };
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: 'Capricorn ♑', stone: 'Garnet' };
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: 'Aquarius ♒', stone: 'Amethyst' };
    return { sign: 'Pisces ♓', stone: 'Aquamarine' };
  };

  const calculateAge = () => {
    if (!dob || !currentDate) return;

    const birthDate = new Date(dob);
    const targetDate = new Date(currentDate);

    if (birthDate > targetDate) {
      alert('Date of Birth current date se bari nahi ho sakti!');
      return;
    }

    let years = targetDate.getFullYear() - birthDate.getFullYear();
    let months = targetDate.getMonth() - birthDate.getMonth();
    let days = targetDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(targetDate - birthDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalMonths = (years * 12) + months + (days / 30);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffTime / (1000 * 60));
    const totalSeconds = Math.floor(diffTime / 1000);

    setAgeResult({
      years,
      months,
      days,
      totalMonths: totalMonths.toFixed(1),
      totalWeeks,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });

    const options = { weekday: 'long' };
    setBornDay(birthDate.toLocaleDateString('en-US', options));

    const earthYears = totalDays / 365.25;
    setPlanetaryAges({
      mercury: (earthYears / 0.2408467).toFixed(1),
      venus: (earthYears / 0.61519726).toFixed(1),
      mars: (earthYears / 1.8808158).toFixed(1),
      jupiter: (earthYears / 11.862615).toFixed(1),
      saturn: (earthYears / 29.447498).toFixed(1),
    });

    const bMonth = birthDate.getMonth() + 1;
    const bDay = birthDate.getDate();
    setZodiacInfo(getZodiacSign(bDay, bMonth));

    setFunFacts({
      sleepHours: Math.floor(totalHours * 0.33),
      heartBeats: (totalMinutes * 80).toLocaleString(),
      breaths: (totalMinutes * 16).toLocaleString(),
    });

    const nextBday = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBday < targetDate) {
      nextBday.setFullYear(targetDate.getFullYear() + 1);
    }
    const bdayDiff = nextBday - targetDate;
    const bdayDays = Math.floor(bdayDiff / (1000 * 60 * 60 * 24));
    const bdayHours = Math.floor((bdayDiff / (1000 * 60 * 60)) % 24);
    setCountdown({ days: bdayDays, hours: bdayHours });

    if (person2Dob) {
      const p2Date = new Date(person2Dob);
      const earlierDate = birthDate < p2Date ? birthDate : p2Date;
      const laterDate = birthDate < p2Date ? p2Date : birthDate;

      let compYears = laterDate.getFullYear() - earlierDate.getFullYear();
      let compMonths = laterDate.getMonth() - earlierDate.getMonth();
      let compDays = laterDate.getDate() - earlierDate.getDate();

      if (compDays < 0) {
        compMonths--;
        const prevMonth = new Date(laterDate.getFullYear(), laterDate.getMonth(), 0);
        compDays += prevMonth.getDate();
      }

      if (compMonths < 0) {
        compYears--;
        compMonths += 12;
      }

      let olderYounger = '';
      if (birthDate < p2Date) {
        olderYounger = 'Person 1 is older by';
      } else if (birthDate > p2Date) {
        olderYounger = 'Person 2 is older by';
      } else {
        olderYounger = 'Both were born on the same day!';
      }
      setComparisonResult({ text: olderYounger, years: compYears, months: compMonths, days: compDays });
    } else {
      setComparisonResult(null);
    }
  };

  const copyResults = () => {
    if (!ageResult) return;
    const text = `Age: ${ageResult.years} Years, ${ageResult.months} Months, ${ageResult.days} Days\nBorn on: ${bornDay}\nTotal Days: ${ageResult.totalDays}\nZodiac: ${zodiacInfo?.sign}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    calculateAge();
  }, [dob, currentDate, person2Dob]);

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <div style={{ background: '#121216', border: '1px solid #22222d', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700', letterSpacing: '0.5px', color: '#f3f4f6' }}>
            Age Calculator Pro
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Advanced Time & Age Analyzer
          </p>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Date of Birth (DOB)
          </label>
          <input 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Current / Target Date
          </label>
          <input 
            type="date" 
            value={currentDate} 
            onChange={(e) => setCurrentDate(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#9ca3af' }}>
            Compare with 2nd Person DOB (Optional)
          </label>
          <input 
            type="date" 
            value={person2Dob} 
            onChange={(e) => setPerson2Dob(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          onClick={calculateAge}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)' }}
        >
          Calculate Age
        </button>

        {ageResult && (
          <div style={{ marginTop: '24px' }}>
            <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
              <h3 style={{ borderBottom: '1px solid #2a2a3c', paddingBottom: '12px', marginTop: 0, marginBottom: '16px', textAlign: 'center', color: '#818cf8', fontSize: '16px', fontWeight: '600' }}>
                {ageResult.years} Years, {ageResult.months} Months, {ageResult.days} Days
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '16px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalMonths}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Months</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '16px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalWeeks}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Weeks</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '16px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalDays}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Days</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '16px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalHours}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Hours</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalMinutes}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Minutes</span>
                </div>
                <div style={{ background: '#1e1e2c', padding: '12px', borderRadius: '8px', textAlign: 'center', border: '1px solid #262638' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#38bdf8' }}>{ageResult.totalSeconds}</span>
                  <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Total Seconds</span>
                </div>
              </div>
            </div>

            {bornDay && (
              <div style={{ background: '#171721', padding: '14px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>Day of Birth 📅</span>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#38bdf8' }}>You were born on a {bornDay}</span>
              </div>
            )}

            {planetaryAges && (
              <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#818cf8', textAlign: 'center' }}>Your Age on Other Planets 🪐</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#d1d5db' }}>
                  <div style={{ background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af' }}>Mercury</span>
                    <strong style={{ color: '#f59e0b' }}>{planetaryAges.mercury} yrs</strong>
                  </div>
                  <div style={{ background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af' }}>Venus</span>
                    <strong style={{ color: '#ec4899' }}>{planetaryAges.venus} yrs</strong>
                  </div>
                  <div style={{ background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af' }}>Mars</span>
                    <strong style={{ color: '#f43f5e' }}>{planetaryAges.mars} yrs</strong>
                  </div>
                  <div style={{ background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '11px', color: '#9ca3af' }}>Jupiter</span>
                    <strong style={{ color: '#10b981' }}>{planetaryAges.jupiter} yrs</strong>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <button 
                onClick={copyResults}
                style={{ width: '100%', padding: '12px', background: '#1e1e2c', color: copied ? '#10b981' : '#818cf8', border: '1px solid #2a2a3c', borderRadius: '8px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {copied ? '✅ Results Copied to Clipboard!' : '📋 Copy / Export Results'}
              </button>
            </div>

            {comparisonResult && (
              <div style={{ background: '#171721', padding: '14px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>Age Comparison</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#f43f5e' }}>{comparisonResult.text}</span>
                <span style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#fff', marginTop: '4px' }}>
                  {comparisonResult.years} Years, {comparisonResult.months} Months, {comparisonResult.days} Days
                </span>
              </div>
            )}

            {countdown && (
              <div style={{ background: '#171721', padding: '14px', borderRadius: '12px', border: '1px solid #22222d', marginBottom: '16px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>Next Birthday Countdown 🎉</span>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>
                  {countdown.days} Days, {countdown.hours} Hours Left
                </span>
              </div>
            )}

            {zodiacInfo && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#171721', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid #22222d' }}>
                  <span style={{ display: 'block', fontSize: '12px', color: '#9ca3af' }}>Zodiac Sign</span>
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#f59e0b', marginTop: '2px', display: 'block' }}>{zodiacInfo.sign}</span>
                </div>
                <div style={{ background: '#171721', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid #22222d' }}>
                  <span style={{ display: 'block', fontSize: '12px', color: '#9ca3af' }}>Birthstone</span>
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#ec4899', marginTop: '2px', display: 'block' }}>{zodiacInfo.stone}</span>
                </div>
              </div>
            )}

            {funFacts && (
              <div style={{ background: '#171721', padding: '16px', borderRadius: '12px', border: '1px solid #22222d' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#818cf8', textAlign: 'center' }}>Life Milestones & Fun Facts 🧠</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#d1d5db' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px' }}>
                    <span>💤 Total Sleep Time:</span>
                    <strong style={{ color: '#38bdf8' }}>~{funFacts.sleepHours.toLocaleString()} Hours</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px' }}>
                    <span>💓 Heart Beats:</span>
                    <strong style={{ color: '#f43f5e' }}>~{funFacts.heartBeats}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1e1e2c', padding: '8px 12px', borderRadius: '6px' }}>
                    <span>🫁 Breaths Taken:</span>
                    <strong style={{ color: '#10b981' }}>~{funFacts.breaths}</strong>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
