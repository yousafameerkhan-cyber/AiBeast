with open('src/App.jsx', 'r') as file:
    content = file.read()

old_code = '<a href="https://github.com/yousafameerkhan-cyber/AiBeast/blob/main/PRIVACY.md" target="_blank" className="menu-item">🔒 Privacy Policy</a>'

new_code = '''              <a 
                href="https://github.com/yousafameerkhan-cyber/AiBeast/blob/main/PRIVACY.md" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#d1d5db',
                  background: 'transparent',
                  borderBottom: '1px solid #1a1a24',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                🔒 Privacy Policy
              </a>'''

if old_code in content:
    content = content.replace(old_code, new_code)
    with open('src/App.jsx', 'w') as file:
        file.write(content)
    print("Successfully styled privacy policy link!")
else:
    print("Old code block not found.")
