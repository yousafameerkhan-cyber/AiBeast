import React, { useState } from 'react';

const nationsList = [
  { name: 'Afghanistan 🇦🇫', date: '1919-08-19' },
  { name: 'Albania 🇦🇱', date: '1912-11-28' },
  { name: 'Algeria 🇩🇿', date: '1962-07-05' },
  { name: 'Andorra 🇦🇩', date: '1278-09-08' },
  { name: 'Angola 🇦🇴', date: '1975-11-11' },
  { name: 'Argentina 🇦🇷', date: '1816-07-09' },
  { name: 'Armenia 🇦🇲', date: '1991-09-21' },
  { name: 'Australia 🇦🇺', date: '1901-01-01' },
  { name: 'Austria 🇦🇹', date: '1955-07-27' },
  { name: 'Azerbaijan 🇦🇿', date: '1991-10-18' },
  { name: 'Bahamas 🇧🇸', date: '1973-07-10' },
  { name: 'Bahrain 🇧🇭', date: '1971-08-15' },
  { name: 'Bangladesh 🇧🇩', date: '1971-03-26' },
  { name: 'Barbados 🇧🇧', date: '1966-11-30' },
  { name: 'Belarus 🇧🇾', date: '1991-08-25' },
  { name: 'Belgium 🇧🇪', date: '1830-10-04' },
  { name: 'Belize 🇧🇿', date: '1981-09-21' },
  { name: 'Benin 🇧🇯', date: '1960-08-01' },
  { name: 'Bhutan 🇧🇹', date: '1907-12-17' },
  { name: 'Bolivia 🇧🇴', date: '1825-08-06' },
  { name: 'Bosnia and Herzegovina 🇧🇦', date: '1992-03-01' },
  { name: 'Botswana 🇧🇼', date: '1966-09-30' },
  { name: 'Brazil 🇧🇷', date: '1822-09-07' },
  { name: 'Brunei 🇧🇳', date: '1984-01-01' },
  { name: 'Bulgaria 🇧🇬', date: '1908-09-22' },
  { name: 'Burkina Faso 🇧🇫', date: '1960-08-05' },
  { name: 'Burundi 🇧🇮', date: '1962-07-01' },
  { name: 'Cambodia 🇰🇭', date: '1953-11-09' },
  { name: 'Cameroon 🇨🇲', date: '1960-01-01' },
  { name: 'Canada 🇨🇦', date: '1867-07-01' },
  { name: 'Cape Verde 🇨🇻', date: '1975-07-05' },
  { name: 'Central African Republic 🇨🇫', date: '1960-08-13' },
  { name: 'Chad 🇹🇩', date: '1960-08-11' },
  { name: 'Chile 🇨🇱', date: '1818-02-12' },
  { name: 'China 🇨🇳', date: '1949-10-01' },
  { name: 'Colombia 🇨🇴', date: '1810-07-20' },
  { name: 'Comoros 🇰🇲', date: '1975-07-06' },
  { name: 'Congo 🇨🇬', date: '1960-08-15' },
  { name: 'Costa Rica 🇨🇷', date: '1821-09-15' },
  { name: 'Croatia 🇭🇷', date: '1991-06-25' },
  { name: 'Cuba 🇨🇺', date: '1902-05-20' },
  { name: 'Cyprus 🇨🇾', date: '1960-08-16' },
  { name: 'Czech Republic 🇨🇿', date: '1993-01-01' },
  { name: 'Denmark 🇩🇰', date: '0800-01-01' },
  { name: 'Djibouti 🇩🇯', date: '1977-06-27' },
  { name: 'Dominica 🇩🇲', date: '1978-11-03' },
  { name: 'Dominican Republic 🇩🇴', date: '1844-02-27' },
  { name: 'Ecuador 🇪🇨', date: '1830-05-13' },
  { name: 'Egypt 🇪🇬', date: '1922-02-28' },
  { name: 'El Salvador 🇸🇻', date: '1821-09-15' },
  { name: 'Equatorial Guinea 🇬🇶', date: '1968-10-12' },
  { name: 'Eritrea 🇪🇷', date: '1993-05-24' },
  { name: 'Estonia 🇪🇪', date: '1991-08-20' },
  { name: 'Eswatini 🇸🇿', date: '1968-09-06' },
  { name: 'Ethiopia 🇪🇹', date: '1941-05-05' },
  { name: 'Fiji 🇫🇯', date: '1970-10-10' },
  { name: 'Finland 🇫🇮', date: '1917-12-06' },
  { name: 'France 🇫🇷', date: '1792-09-21' },
  { name: 'Gabon 🇬🇦', date: '1960-08-17' },
  { name: 'Gambia 🇬🇲', date: '1965-02-18' },
  { name: 'Georgia 🇬🇪', date: '1991-04-09' },
  { name: 'Germany 🇩🇪', date: '1990-10-03' },
  { name: 'Ghana 🇬🇭', date: '1957-03-06' },
  { name: 'Greece 🇬🇷', date: '1821-03-25' },
  { name: 'Grenada 🇬🇩', date: '1974-02-07' },
  { name: 'Guatemala 🇬🇹', date: '1821-09-15' },
  { name: 'Guinea 🇬🇳', date: '1958-10-02' },
  { name: 'Guinea-Bissau 🇬🇼', date: '1973-09-24' },
  { name: 'Guyana 🇬🇾', date: '1966-05-26' },
  { name: 'Haiti 🇭🇹', date: '1804-01-01' },
  { name: 'Honduras 🇭🇳', date: '1821-09-15' },
  { name: 'Hungary 🇭🇺', date: '1918-11-16' },
  { name: 'Iceland 🇮🇸', date: '1944-06-17' },
  { name: 'India 🇮🇳', date: '1947-08-15' },
  { name: 'Indonesia 🇮🇩', date: '1945-08-17' },
  { name: 'Iran 🇮🇷', date: '1979-04-01' },
  { name: 'Iraq 🇮🇶', date: '1932-10-03' },
  { name: 'Ireland 🇮🇪', date: '1922-12-06' },
  { name: 'Israel 🇮🇱', date: '1948-05-14' },
  { name: 'Italy 🇮🇹', date: '1861-03-17' },
  { name: 'Jamaica 🇯🇲', date: '1962-08-06' },
  { name: 'Japan 🇯🇵', date: '0660-02-11' },
  { name: 'Jordan 🇯🇴', date: '1946-05-25' },
  { name: 'Kazakhstan 🇰🇿', date: '1991-12-16' },
  { name: 'Kenya 🇰🇪', date: '1963-12-12' },
  { name: 'Kiribati 🇰🇮', date: '1979-07-12' },
  { name: 'Kuwait 🇰🇼', date: '1961-06-19' },
  { name: 'Kyrgyzstan 🇰🇬', date: '1991-08-31' },
  { name: 'Laos 🇱🇦', date: '1953-10-22' },
  { name: 'Latvia 🇱🇻', date: '1991-08-21' },
  { name: 'Lebanon 🇱🇧', date: '1943-11-22' },
  { name: 'Lesotho 🇱🇸', date: '1966-10-04' },
  { name: 'Liberia 🇱🇷', date: '1847-07-26' },
  { name: 'Libya 🇱🇾', date: '1951-12-24' },
  { name: 'Liechtenstein 🇱🇮', date: '1866-07-12' },
  { name: 'Lithuania 🇱🇹', date: '1990-03-11' },
  { name: 'Luxembourg 🇱🇺', date: '1839-04-19' },
  { name: 'Madagascar 🇲🇬', date: '1960-06-26' },
  { name: 'Malawi 🇲🇼', date: '1964-07-06' },
  { name: 'Malaysia 🇲🇾', date: '1957-08-31' },
  { name: 'Maldives 🇲🇻', date: '1965-07-26' },
  { name: 'Mali 🇲🇱', date: '1960-09-22' },
  { name: 'Malta 🇲🇹', date: '1964-09-21' },
  { name: 'Marshall Islands 🇲🇭', date: '1986-10-21' },
  { name: 'Mauritania 🇲🇷', date: '1960-11-28' },
  { name: 'Mauritius 🇲🇺', date: '1968-03-12' },
  { name: 'Mexico 🇲🇽', date: '1810-09-16' },
  { name: 'Micronesia 🇫🇲', date: '1986-11-03' },
  { name: 'Moldova 🇲🇩', date: '1991-08-27' },
  { name: 'Monaco 🇲🇨', date: '1419-01-08' },
  { name: 'Mongolia 🇲🇳', date: '1911-12-29' },
  { name: 'Montenegro 🇲🇪', date: '2006-06-03' },
  { name: 'Morocco 🇲🇦', date: '1956-03-02' },
  { name: 'Mozambique 🇲🇿', date: '1975-06-25' },
  { name: 'Myanmar 🇲🇲', date: '1948-01-04' },
  { name: 'Namibia 🇳🇦', date: '1990-03-21' },
  { name: 'Nauru 🇳🇷', date: '1968-01-31' },
  { name: 'Nepal 🇳🇵', date: '1768-12-21' },
  { name: 'Netherlands 🇳🇱', date: '1581-07-26' },
  { name: 'New Zealand 🇳🇿', date: '1907-09-26' },
  { name: 'Nicaragua 🇳🇮', date: '1821-09-15' },
  { name: 'Niger 🇳🇪', date: '1960-08-03' },
  { name: 'Nigeria 🇳🇬', date: '1960-10-01' },
  { name: 'North Korea 🇰🇵', date: '1948-09-09' },
  { name: 'North Macedonia 🇲🇰', date: '1991-09-08' },
  { name: 'Norway 🇳🇴', date: '1905-06-07' },
  { name: 'Oman 🇴🇲', date: '1650-01-01' },
  { name: 'Pakistan 🇵🇰', date: '1947-08-14' },
  { name: 'Palau 🇵🇼', date: '1994-10-01' },
  { name: 'Palestine 🇵🇸', date: '1988-11-15' },
  { name: 'Panama 🇵🇦', date: '1903-11-03' },
  { name: 'Papua New Guinea 🇵🇬', date: '1975-09-16' },
  { name: 'Paraguay 🇵🇾', date: '1811-05-14' },
  { name: 'Peru 🇵🇪', date: '1821-07-28' },
  { name: 'Philippines 🇵🇭', date: '1898-06-12' },
  { name: 'Poland 🇵🇱', date: '1918-11-11' },
  { name: 'Portugal 🇵🇹', date: '1139-07-25' },
  { name: 'Qatar 🇶🇦', date: '1971-09-03' },
  { name: 'Romania 🇷🇴', date: '1877-05-09' },
  { name: 'Russia 🇷🇺', date: '1991-12-25' },
  { name: 'Rwanda 🇷🇼', date: '1962-07-01' },
  { name: 'Saint Kitts and Nevis 🇰🇳', date: '1983-09-19' },
  { name: 'Saint Lucia 🇱🇨', date: '1979-02-22' },
  { name: 'Saint Vincent and the Grenadines 🇻🇨', date: '1979-10-27' },
  { name: 'Samoa 🇼🇸', date: '1962-01-01' },
  { name: 'San Marino 🇸🇲', date: '0301-09-03' },
  { name: 'Sao Tome and Principe 🇸🇹', date: '1975-07-12' },
  { name: 'Saudi Arabia 🇸🇦', date: '1932-09-23' },
  { name: 'Senegal 🇸🇳', date: '1960-04-04' },
  { name: 'Serbia 🇷🇸', date: '2006-06-05' },
  { name: 'Seychelles 🇸🇨', date: '1976-06-29' },
  { name: 'Sierra Leone 🇸🇱', date: '1961-04-27' },
  { name: 'Singapore 🇸🇬', date: '1965-08-09' },
  { name: 'Slovakia 🇸🇰', date: '1993-01-01' },
  { name: 'Slovenia 🇸🇮', date: '1991-06-25' },
  { name: 'Solomon Islands 🇸🇧', date: '1978-07-07' },
  { name: 'Somalia 🇸🇴', date: '1960-07-01' },
  { name: 'South Africa 🇿🇦', date: '1910-05-31' },
  { name: 'South Korea 🇰🇷', date: '1945-08-15' },
  { name: 'South Sudan 🇸🇸', date: '2011-07-09' },
  { name: 'Spain 🇪🇸', date: '1492-01-02' },
  { name: 'Sri Lanka 🇱🇰', date: '1948-02-04' },
  { name: 'Sudan 🇸🇩', date: '1956-01-01' },
  { name: 'Suriname 🇸🇷', date: '1975-11-25' },
  { name: 'Sweden 🇸🇪', date: '1523-06-06' },
  { name: 'Switzerland 🇨🇭', date: '1291-08-01' },
  { name: 'Syria 🇸🇾', date: '1946-04-17' },
  { name: 'Taiwan 🇹🇼', date: '1912-01-01' },
  { name: 'Tajikistan 🇹🇯', date: '1991-09-09' },
  { name: 'Tanzania 🇹🇿', date: '1964-04-26' },
  { name: 'Thailand 🇹🇭', date: '1238-01-01' },
  { name: 'Timor-Leste 🇹🇱', date: '2002-05-20' },
  { name: 'Togo 🇹🇬', date: '1960-04-27' },
  { name: 'Tonga 🇹🇴', date: '1970-06-04' },
  { name: 'Trinidad and Tobago 🇹🇹', date: '1962-08-31' },
  { name: 'Tunisia 🇹🇳', date: '1956-03-20' },
  { name: 'Turkey 🇹🇷', date: '1923-10-29' },
  { name: 'Turkmenistan 🇹🇲', date: '1991-10-27' },
  { name: 'Tuvalu 🇹🇻', date: '1978-10-01' },
  { name: 'Uganda 🇺🇬', date: '1962-10-09' },
  { name: 'Ukraine 🇺🇦', date: '1991-08-24' },
  { name: 'United Arab Emirates 🇦🇪', date: '1971-12-02' },
  { name: 'United Kingdom 🇬🇧', date: '1707-05-01' },
  { name: 'United States 🇺🇸', date: '1776-07-04' },
  { name: 'Uruguay 🇺🇾', date: '1825-08-25' },
  { name: 'Uzbekistan 🇺🇿', date: '1991-09-01' },
  { name: 'Vanuatu 🇻🇺', date: '1980-07-30' },
  { name: 'Vatican City 🇻🇦', date: '1929-02-11' },
  { name: 'Venezuela 🇻🇪', date: '1811-07-05' },
  { name: 'Vietnam 🇻🇳', date: '1945-09-02' },
  { name: 'Yemen 🇾🇪', date: '1990-05-22' },
  { name: 'Zambia 🇿🇲', date: '1964-10-24' },
  { name: 'Zimbabwe 🇿🇼', date: '1980-04-18' }
];

const NationIndependenceCalculator = () => {
  const pakistanObj = nationsList.find(n => n.name.includes('Pakistan')) || nationsList[112];
  const [selectedNation, setSelectedNation] = useState(pakistanObj.name);
  const [customDate, setCustomDate] = useState(pakistanObj.date);
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredNations = nationsList.filter(n => 
    n.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    const matched = nationsList.filter(n => n.name.toLowerCase().includes(query.toLowerCase()));
    if (matched.length > 0) {
      setSelectedNation(matched[0].name);
      setCustomDate(matched[0].date);
    }
  };

  const handleNationChange = (e) => {
    const nationName = e.target.value;
    setSelectedNation(nationName);
    const found = nationsList.find(n => n.name === nationName);
    if (found) {
      setCustomDate(found.date);
    }
  };

  const calculateAge = () => {
    if (!customDate) return;

    const start = new Date(customDate);
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
    const text = `🌍 Nation Independence Age Report (${selectedNation})\n` +
                 `📅 Independence Date: ${customDate}\n\n` +
                 `✨ Duration: ${result.years} Years, ${result.months} Months, ${result.days} Days\n` +
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
            Nation Independence Age 🏛️
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>
            Calculate exact years & time passed since independence
          </p>
        </div>

        {/* Search Bar Input */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Search Nation ({filteredNations.length} / {nationsList.length} Countries)
          </label>
          <input 
            type="text"
            placeholder="Type country name (e.g., Pakistan)..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* Country Select Dropdown */}
        <div style={{ marginBottom: '16px' }}>
          <select 
            value={selectedNation} 
            onChange={handleNationChange}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#00f0ff', fontSize: '14px', outline: 'none', fontWeight: '600', cursor: 'pointer', boxSizing: 'border-box' }}
          >
            {filteredNations.length > 0 ? (
              filteredNations.map((n) => (
                <option key={n.name} value={n.name}>{n.name}</option>
              ))
            ) : (
              <option disabled value="">No country found</option>
            )}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '500', color: '#d1d5db' }}>
            Independence Foundation Date
          </label>
          <input 
            type="date" 
            value={customDate} 
            onChange={(e) => setCustomDate(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #2a2a3c', background: '#1a1a24', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          onClick={calculateAge}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7000ff)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 240, 255, 0.3)' }}
        >
          Calculate Nation Age ✨
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

export default NationIndependenceCalculator;
