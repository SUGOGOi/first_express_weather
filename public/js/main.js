const cityName = document.getElementById("cityName");
const submitBtn =document.getElementById("submitBtn")
const cit_name = document.getElementById("out");
const temp = document.getElementById("temp");
const statu = document.getElementById("statu");


const getInfo = async(event)=>{
    event.preventDefault();
    // alert("hii");
    let cityVal = cityName.value;
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=82acdbef02b20d0428667ef9e6e3773a`
    if(cityVal ===""){
        cit_name.innerText = `plz eneter a city name`;
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=82acdbef02b20d0428667ef9e6e3773a`
        const response =  await fetch(url);
        const data = await response.json();
        const arrData = [data];
        console.log(data);
        cit_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country } `;
        temp.innerText = arrData[0].main.temp;
        statu.innerText = arrData[0].weather[0].main;
        // document.write(response);
    }catch{
        cit_name.innerText = `plz eneter a city name properley`;
    }
    }
}

submitBtn.addEventListener("click",getInfo);