// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let getDucks = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/ducks') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            return json
        })
}

let getDuck = function(id) {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/ducks/'+id) // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            return json
        })
}

let createDuck = function(duck) {
  return fetch(BASE + '/ducks', {
    body: JSON.stringify(duck),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

export {getDucks, getDuck, createDuck}
