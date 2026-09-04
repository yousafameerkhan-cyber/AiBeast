with open('src/App.jsx', 'r') as file:
    content = file.read()

# Purane GitHub link ko render ke direct text page se replace karna
content = content.replace(
    'https://github.com/yousafameerkhan-cyber/AiBeast/blob/main/PRIVACY.md',
    '/privacy.html'
)

with open('src/App.jsx', 'w') as file:
    file.write(content)
print("Updated link to direct text page!")
