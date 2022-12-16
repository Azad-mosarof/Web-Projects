let loct=document.getElementById("loc");
let image=document.getElementById("im");
let tem=document.getElementById("temp");
let climate=document.getElementById("cli");
let c=document.getElementsByClassName("city_name")[1]
let cityn=document.getElementById("fname");
let input_sarch=document.getElementById("bt");

input_sarch.addEventListener("click" ,(e)=>{

    e.preventDefault();
    getWeather(cityn.value);
    cityn.value="";
    tem,value="";
    
});

// function myfunction(){
    
//         getWeather(cityn.textContent);
//     }
     
//     //loct.textContent=city_name.value;
//     //city_name.value="";



const getWeather=async(cityn) =>{

    try{
        const responce=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityn}&appid=ec36446c9e0b45583618f97dea0d9761`);

        const weatherData=await responce.json();
        console.log(weatherData);
        const {name}=weatherData;
        const {feels_like}=weatherData.main;
        const {id,main}=weatherData.weather[0];
        loct.innerHTML=name;
        climate.innerHTML=main;
        tem.innerHTML=Math.round(feels_like-273);

    }
    catch(error){
       alert("city is not found");
    }
}
    