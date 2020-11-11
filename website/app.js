/* Global Variables */
const apiKey = '&units=imperials&appid=03cd3f71e1c9a821467394a03f4b9644'
const baseURL='http://api.openweathermap.org/data/2.5/weather?q='
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

var City ;

//let d = new Date();
//let url=`http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperials&appid=03cd3f71e1c9a821467394a03f4b9644`
//let url ="http://api.openweathermap.org/data/2.5/weather?id=4566966&APPID=bd7c9be239bc196112dd11ef3bbb4cdf"



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  City=document.getElementById("City").value;

const feelings =document.getElementById("feelings").value;

    getWeather(baseURL+City+apiKey)
    .then(function(data){
  var obj = {temp:data.main.temp,
      date:newDate,
      feeling:feelings};
  //  obj= JSON.stringify(obj);
 postData('/api/',obj);

    });

}
const getWeather = async (url)=>
{

         const data = await fetch(url)
                   try {
                        const res = await data.json();
                         console.log(res);
                        return res;
                        }
          catch(error) {   // appropriately handle the error
                        console.log("error", error);
                      }


}
const postData = async ( url = ' ', data = {})=>
{
         console.log(data);

    const response = await fetch(url,{
    method: "POST",
    credentials:"same-origin",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

    //  try {
            // const newData=await response.text();
             //console.log("new data"+newData);
             //return newData;

            // }
     //catch (error)
      //     {
        //console.log(error);

  //    }
};

// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
