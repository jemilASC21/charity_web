function onClick(){
    fetch("https://charityapi.p.rapidapi.com/organizations/474262060", {
        "method": "GET",
        "headers": {
            "user_key": "d467aa12b2msh7af0e36fc9e086ap177a9djsn287c58d0ab7d",
            "x-rapidapi-host": "charityapi.p.rapidapi.com"
        }
    })
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(function(returnedJson){
        console.log(returnedJson);
    
    });
}

