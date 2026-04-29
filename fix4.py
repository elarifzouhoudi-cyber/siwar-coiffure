with open('app/page.jsx', 'r') as f:
    c = f.read()
fixes = [
    ("C'est la premiere", "C est la premiere"),
    ("qu'une coiffeuse", "qu une coiffeuse"),
    ("d'une telle", "d une telle"),
    ("Elle m'a fait", "Elle ma fait"),
    ("C'est une femme", "C est une femme"),
    ("l'Hotel de Ville, ideal", "l Hotel de Ville, ideal"),
    ("l'Hotel de Ville, idéal", "l Hotel de Ville"),
]
for old, new in fixes:
    c = c.replace(old, new)
with open('app/page.jsx', 'w') as f:
    f.write(c)
print('OK')
