//rename variables mamaya
var button = document.querySelector(".button");
var inputValue =document.querySelector(".inputValue");
var name = document.querySelector(".name");
var temp = document.querySelector(".temp");

//here be the magic

button.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+',&appid=7cdb1f852a5b25549b5b38ba2b3aecca')
    .then(response => response.json())
    .then(data => 
        {
            var nameValue = data['name']
            var tempValue = data["main"]['temp']
            var descValue = data['weather'][0]['description']
            console.log(data)

            name.innerHTML = nameValue;
            temp.innerHTML = "this is the temp: " + tempValue;
            desc.innerHTML = descValue;
        })
    
    
    //.catch(err=> alert("IDk what's happening"))
})

