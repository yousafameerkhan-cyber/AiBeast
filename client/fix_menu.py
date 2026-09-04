with open('src/App.jsx', 'r') as file:
    content = file.read()

link_code = '\n<a href="https://github.com/yousafameerkhan-cyber/AiBeast/blob/main/PRIVACY.md" target="_blank" className="menu-item">🔒 Privacy Policy</a>'

if 'Age Calculator Pro' in content and 'PRIVACY.md' not in content:
    content = content.replace('Age Calculator Pro', 'Age Calculator Pro' + link_code)
    with open('src/App.jsx', 'w') as file:
        file.write(content)
    print("Successfully added Privacy Policy to src/App.jsx!")
else:
    print("Already added or target not found.")
