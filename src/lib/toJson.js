const fs = require('fs')
const path = require('path')

const base_url = path.resolve(__dirname, '../../packages')
console.log(base_url)

let files = fs.readdirSync(base_url, { withFileTypes: true })

files = files.filter(i => i.isDirectory()).map(i => i.name)

let json = {}
files.forEach((v, k) => {
  const key = kebab2Pascal(v)
  json[key] = `../packages/${v}/index.js`
})

fs.writeFile(`${base_url}/components.json`, JSON.stringify(json), (err, data) => {
  console.log(err)
})

// card-item => CardItem
function kebab2Pascal (str) {
  const Camel = str.replace(/-([a-z])/g, ($, $1) => {
    return $1.toUpperCase()
  })
  return Camel ? Camel[0].toUpperCase() + Camel.slice(1) : ''
}