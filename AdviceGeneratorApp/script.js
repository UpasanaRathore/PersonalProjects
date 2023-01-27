let url = "	https://api.adviceslip.com/advice"
let response = fetch(url)
let id;
let advice;
response.then((v) => {
  return v.json()
}).then((adviceslip) => {
  console.log(adviceslip)
  
  for (item in adviceslip) {
    id = adviceslip[item].id;
   advice = adviceslip[item].advice;
  } 

  document.getElementById("head").innerText = "ADVICE #" + id;
  document.getElementById("advice").innerText = `"${advice}"`;


})


