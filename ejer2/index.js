//1.1
const divvacio = document.createElement('div')
document.body.appendChild(divvacio)
//1.2
const divp = document.createElement('div')
const p = document.createElement('p')
document.body.appendChild(divp)
divp.appendChild(p)
//1.3
const div_p = document.createElement('div')
for (let i = 0; i <= 6; i++) {
  const para = document.createElement('p')
  div_p.appendChild(p)
}
document.body.appendChild(div_p)
//1.4
const soyp = document.createElement('p')
soyp.textContent = 'soy dinamico'
//1.5
const h2 = document.querySelector('.fn-insert-here')

h2.textContent = "'Wubba Lubba dub dub"
//1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)
console.log(ul)
//1.7
const rems = document.querySelectorAll('.fn-remove-me')

for (const rem of rems) {
  rem.remove()
}
//1.8
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const pm = document.createElement('p')
pm.textContent = 'voy medio'
document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.insertBefore(pm, div2)

console.log(pm)
//1.9
const alldivs = document.querySelectorAll('.fn-insert-here')
for (const alldiv of alldivs) {
  const dep = document.createElement('p')
  p.textContent = 'voy dentro'
  alldiv.appendChild(dep)
}
