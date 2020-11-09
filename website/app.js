/* Global Variables */
const apiKey = ' gb&APPID =03cd3f71e1c9a821467394a03f4b9644'
const baseURL='https://api.openweathermap.org/data/2.5/weather?zip='

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
     const zip=document.getElementById("zip").value;
     alert(baseURL+zip+apiKey);
     getData(baseURL,zip, apiKey)
     alert('hiiiiiiiiii')
     alert(zip);
}
const getData = async (baseURL, zip, key)=>{
        console.log(baseURL+zip+key);
         const res = await fetch(baseURL+zip+key)

          try {
                   const data = await res.json();
                  console.log(data)
                 return data;
             }
             catch(error) {
              console.log("error", error);
    // appropriately handle the error
  }
}


// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
