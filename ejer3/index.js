//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}
document.body.appendChild(ul)
//1.2
const fnremove = document.querySelector('.fn-remove-me')
fnremove.remove()
//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const ulCars = document.createElement('ul')

for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  li.setAttribute('data-function', 'printHere')
  ulCars.appendChild(li)
}

document.body.appendChild(ulCars)
//1.4
const countries1 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (const country1 of countries1) {
  const divc = document.createElement('div')
  divc.className = 'imge'
  const h4 = document.createElement('h4')
  h4.textContent = country1.title
  const img = document.createElement('img')
  img.src = country1.imgUrl
  divc.appendChild(h4)
  divc.appendChild(img)
  document.body.appendChild(divc)
}
//1.5

const button = document.createElement('button')
button.textContent = 'delete last'

button.addEventListener(
  'click',
  (delete1 = () => {
    const alldiv = document.querySelectorAll('.imge')
    alldiv[alldiv.length - 1].remove()
  })
)
document.body.appendChild(button)
//1.6
const createbutton = () => {
  const imgdivs = document.querySelectorAll('.imge')
  for (const imgdiv of imgdivs) {
    const deletebton = document.createElement('button')
    deletebton.textContent = 'delete me'
    deletebton.addEventListener(
      'click',
      (elimi = () => {
        imgdiv.remove()
      })
    )
    imgdiv.appendChild(deletebton)
  }
}
createbutton()
