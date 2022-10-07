fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
.then(response => response,json())
.then(data => console.log(data))