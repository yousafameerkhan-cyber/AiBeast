with open('src/App.jsx', 'r') as file:
    content = file.read()

# 1. Purana ghalat jagah wala link remove karo
old_code = '''              <a 
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

content = content.replace(old_code, '')

# 2. Neechay footer/copyright area mein professionally add karo
footer_target = '</footer>' if '</footer>' in content else '</div>'

new_footer = '''
<div style={{ textAlign: 'center', padding: '20px 0', fontSize: '13px', color: '#9ca3af', borderTop: '1px solid #1a1a24', marginTop: '30px' }}>
  <p>© 2026 Mr.Brain. All rights reserved.</p>
  <a 
    href="https://github.com/yousafameerkhan-cyber/AiBeast/blob/main/PRIVACY.md" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#00f0ff', textDecoration: 'none', fontWeight: '500', display: 'inline-block', marginTop: '6px' }}
  >
    🔒 Privacy Policy
  </a>
</div>
'''

if footer_target in content:
    content = content.replace(footer_target, new_footer + '\n' + footer_target, 1)
    with open('src/App.jsx', 'w') as file:
        file.write(content)
    print("Successfully moved Privacy Policy to footer!")
else:
    print("Footer target not found.")
