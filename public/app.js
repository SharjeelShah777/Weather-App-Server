window.getWeather = ()=>{
    let c_name = document.querySelector("#cityname").value
    let lowerc_name = c_name.toLowerCase()
    let myApiKey = "a7dbc0c7fae4fc00acc8a74bea741742"
    let sirApiKey = "ecf07bafe5f67fa8a66abd728beb563b"
    axios.get(`/weather/${c_name}`)
    .then((res)=>{
       

        // console.log(res.data)
        let cityname0 = c_name[0]
        let cityname1 = c_name.slice(1)
        let citynamecaps = cityname0.toUpperCase()
        let newCityName  = citynamecaps+cityname1

        document.querySelector('#weathercity').innerHTML = newCityName + "&nbsp; &nbsp;"
        document.querySelector("#temp").innerHTML = res.data.temp + "&nbsp;&deg;C"
        document.querySelector("#feels").innerHTML = res.data.feels_like + "&nbsp;&deg;C"
        document.querySelector("#humidity").innerHTML = res.data.humidity + "&percnt;"
        document.querySelector("#pressure").innerHTML = res.data.pressure + "hPa"



        console.log(res.data)
        
       
       
   
    })
    .catch((err)=>{
        console.log(err)
        let cityname0 = c_name[0]
        let cityname1 = c_name.slice(1)
        let citynamecaps = cityname0.toUpperCase()
        let newCityName  = citynamecaps+cityname1
        document.querySelector('#weathercity').innerHTML = newCityName + "&nbsp;not found"
        document.querySelector("#temp").innerHTML =  "N/A"
        document.querySelector("#feels").innerHTML = "N/A"
        document.querySelector("#humidity").innerHTML = "N/A"
        document.querySelector("#pressure").innerHTML = "N/A"

        
        document.querySelector("#modalText").innerHTML =  `The city (${c_name})  is not available in our data. <br> Available Cities: Karachi, Lahore, Islamabad, Quetta, Peshawar`

        let modal = ()=>{
            document.getElementById('modalButton').click();
          }

          modal()


    })
}