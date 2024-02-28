const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const myul = document.createElement('ul')
for (const album of albums) {
  const myli = document.createElement('li')
  myli.textContent = album
  myul.appendChild(myli)
}
document.body.appendChild(myul)
