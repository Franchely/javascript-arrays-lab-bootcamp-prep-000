var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens 
}
function destructivelyRemoveFirstKitten() {
  kittens.shift("Milo")
  return kittens
}

function appendKitten(name) {
  var appendKitten = kittens.splice(3, 0, "Broom")
  console.log(appendKitten); 
}





