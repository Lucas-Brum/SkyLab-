axios.get('https://api.github.com/users/Lucas-Brum')
           
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })