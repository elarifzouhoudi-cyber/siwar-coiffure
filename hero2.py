with open('app/page.jsx', 'r') as f:
    c = f.read()

old = '"https://lh5.googleusercontent.com/p/AF1QipOqnHkxAL4ZeGdg2NreQXK96N7OW0piS2Owrxb4=w1600-h1000-k-no",'
new = '"https://lh3.googleusercontent.com/gps-cs-s/APNQkAE49CXHH0jCyGqV7K4A8PUYlnlfi3ttJ7RnWCQEPbHKvH_HMOWDuFkoPjA_pjO811Wg-ebOv6V-nlB3Oi3pBSET6o1j58-bvmQBvI60w7yHoSkQTIoXoRkaK1RJlcEduDbWgr0=w1600-h1000-k-no",'

c = c.replace(old, new)
with open('app/page.jsx', 'w') as f:
    f.write(c)
print('OK')
