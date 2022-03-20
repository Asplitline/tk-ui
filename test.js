const arr = [
  'card-item',
  'a-b-c',
  'c-d',
]

function kebab2Pascal (str) {
  const Camel = str.replace(/-([a-z])/g, ($, $1) => {
    return $1.toUpperCase()
  })
  return Camel ? Camel[0].toUpperCase() + Camel.slice(1) : ''
}
arr.forEach(i => {
  const res = kebab2Pascal(i)
  console.log(res)
})