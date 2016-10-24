function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var incValues = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = incValues.length; i < l; i++) {
    incValues[i].innerHTML = (i + n).toString()
  }
  return incValues
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
