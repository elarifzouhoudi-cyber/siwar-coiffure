import re
with open('app/page.jsx', 'r') as f:
    c = f.read()
c = c.replace("Techniques d'excellence", "Techniques d excellence")
c = c.replace("l'Hôtel de Ville, idéal", "l Hotel de Ville, ideal")
c = c.replace("L'excellence", "L excellence")
with open('app/page.jsx', 'w') as f:
    f.write(c)
print('OK')
