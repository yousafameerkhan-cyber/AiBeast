import React, { useState } from 'react';
import Home from './Home';
import AgeCalculator from './AgeCalculator';
import DateIntervalCalculator from './DateIntervalCalculator';
import TimeUnitConverter from './TimeUnitConverter';
import NationIndependenceCalculator from './NationIndependenceCalculator';

const App = () => {
  const [activeTool, setActiveTool] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (tool) => {
    setActiveTool(tool);
    setMenuOpen(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0c', 
      color: '#ffffff', 
      fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      <header style={{ 
        background: '#121216', 
        borderBottom: '1px solid #22222d', 
        padding: '10px 16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div 
          onClick={() => handleSelect('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ width: '34px', height: '34px', objectFit: 'contain' }} 
          />
          <span style={{ 
            fontWeight: '800', 
            fontSize: '17px', 
            background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.5px'
          }}>
            AiBeast
          </span>
        </div>

        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              background: menuOpen ? '#1e1e2c' : '#171721', 
              color: '#00f0ff', 
              border: '1px solid #2a2a3c', 
              padding: '8px 12px', 
              borderRadius: '8px', 
              fontSize: '18px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ☰
          </button>

          {menuOpen && (
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              top: '46px', 
              background: '#121216', 
              border: '1px solid #2a2a3c', 
              borderRadius: '12px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)', 
              width: '240px', 
              overflow: 'hidden',
              zIndex: 1100
            }}>
              <div 
                onClick={() => handleSelect('home')}
                style={{ 
                  padding: '12px 16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: activeTool === 'home' ? '#00f0ff' : '#d1d5db', 
                  background: activeTool === 'home' ? '#1a1a24' : 'transparent',
                  borderBottom: '1px solid #1a1a24',
                  cursor: 'pointer'
                }}
              >
                🏠 Home
              </div>
              <div 
                onClick={() => handleSelect('age-calculator')}
                style={{ 
                  padding: '12px 16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: activeTool === 'age-calculator' ? '#00f0ff' : '#d1d5db', 
                  background: activeTool === 'age-calculator' ? '#1a1a24' : 'transparent',
                  borderBottom: '1px solid #1a1a24',
                  cursor: 'pointer'
                }}
              >
                ⏳ Age Calculator Pro
              </div>
              <div 
                onClick={() => handleSelect('date-difference')}
                style={{ 
                  padding: '12px 16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: activeTool === 'date-difference' ? '#00f0ff' : '#d1d5db', 
                  background: activeTool === 'date-difference' ? '#1a1a24' : 'transparent',
                  borderBottom: '1px solid #1a1a24',
                  cursor: 'pointer'
                }}
              >
                💖 Partner Comparator
              </div>
              <div 
                onClick={() => handleSelect('unit-converter')}
                style={{ 
                  padding: '12px 16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: activeTool === 'unit-converter' ? '#00f0ff' : '#d1d5db', 
                  background: activeTool === 'unit-converter' ? '#1a1a24' : 'transparent',
                  borderBottom: '1px solid #1a1a24',
                  cursor: 'pointer'
                }}
              >
                ⏱️ Time Unit Converter
              </div>
              <div 
                onClick={() => handleSelect('nation-age')}
                style={{ 
                  padding: '12px 16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: activeTool === 'nation-age' ? '#00f0ff' : '#d1d5db', 
                  background: activeTool === 'nation-age' ? '#1a1a24' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                🏛️ Nation Independence Age
              </div>
            </div>
          )}
        </div>
      </header>

      <main style={{ flex: 1, padding: '24px 16px' }} onClick={() => menuOpen && setMenuOpen(false)}>
        {activeTool === 'home' && <Home setActiveTool={setActiveTool} />}
        {activeTool === 'age-calculator' && <AgeCalculator />}
        {activeTool === 'date-difference' && <DateIntervalCalculator />}
        {activeTool === 'unit-converter' && <TimeUnitConverter />}
        {activeTool === 'nation-age' && <NationIndependenceCalculator />}
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '16px', 
        fontSize: '12px', 
        color: '#9ca3af', 
        borderTop: '1px solid #1a1a24',
        background: '#121216',
        lineHeight: '1.5'
      }}>
        Developed with ❤️ by Hyfal Technologies <br />
        <span style={{ fontWeight: '600', color: '#00f0ff' }}>© AiBeast</span> All rights reserved.
      </footer>

    </div>
  );
};

export default App;
