with open('app/page.jsx', 'r') as f:
    c = f.read()

# Replace devanture with Google Maps Street View photo
old = 'devanture: WIX + "1fe871bf139c4c8892c591944e708241.jpg",'
new = 'devanture: "https://lh5.googleusercontent.com/p/AF1QipOqnHkxAL4ZeGdg2NreQXK96N7OW0piS2Owrxb4=w1600-h1000-k-no",'

c = c.replace(old, new)

with open('app/page.jsx', 'w') as f:
    f.write(c)
print('OK')
