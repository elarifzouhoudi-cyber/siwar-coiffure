page = open('app/page.jsx').read()
# Replace all REVIEWS with clean double-quoted versions without apostrophes
old = """const REVIEWS = [
  { text:"Une coloriste exceptionnelle. Une femme chaleureuse et de tres bons conseils. Depuis 6 ans je ne vais plus ailleurs.", name:"Fatima M.", src:"Google" },
  { text:"Je suis ressortie toute emue. C'est la premiere fois qu'une coiffeuse me fait des meches d'une telle qualite.", name:"Sophie L.", src:"Google" },
  { text:"Elle ma fait un lissage bresilien de qualite et une coupe a tres bon prix. Une veritable magicienne.", name:"Nadia B.", src:"Pages Jaunes" },
  { text:"C est une femme qui a des mains en or. Mes cheveux sont tres difficiles et elle reussit toujours a les rendre beaux.", name:"Isabelle P.", src:"Google" },
  { text:"Siwar sort du lot. Le prix est correct, le resultat toujours au rendez-vous.", name:"Karima D.", src:"Pages Jaunes" },
  { text:"J ai enfin trouve une coiffeuse talentueuse et a l ecoute. Je recommande vivement ce salon.", name:"Marie C.", src:"Google" },
];"""
# Find and replace the entire REVIEWS block
import re
new_reviews = '''const REVIEWS = [
  { text:"Une coloriste exceptionnelle, chaleureuse et de tres bons conseils. Depuis 6 ans je ne vais plus ailleurs.", name:"Fatima M.", src:"Google" },
  { text:"Je suis ressortie toute emue. Jamais eu des meches d une telle qualite. Je le conseille a tout le monde.", name:"Sophie L.", src:"Google" },
  { text:"Un lissage bresilien de qualite et une coupe a tres bon prix. Une veritable magicienne des cheveux.", name:"Nadia B.", src:"Pages Jaunes" },
  { text:"Une femme aux mains en or. Mes cheveux sont tres difficiles et elle reussit toujours a les rendre beaux.", name:"Isabelle P.", src:"Google" },
  { text:"Siwar sort du lot. Le prix est correct, le resultat toujours au rendez-vous.", name:"Karima D.", src:"Pages Jaunes" },
  { text:"J ai enfin trouve une coiffeuse talentueuse et a l ecoute. Je recommande vivement ce salon.", name:"Marie C.", src:"Google" },
];'''
result = re.sub(r'const REVIEWS = \[.*?\];', new_reviews, page, flags=re.DOTALL)
open('app/page.jsx', 'w').write(result)
print('OK')
