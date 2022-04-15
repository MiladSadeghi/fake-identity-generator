const showPlace = document.querySelector(".right-content");
      showRes = document.createElement("div");
      showRes.classList.add('showRes')
      submitForm = document.querySelector("form")
      country = document.querySelector("#country");
      gender = document.querySelector("#gender");


document.addEventListener("DOMContentLoaded", ()=> {
  submitForm.addEventListener('submit', loadData)
})

async function getDataFromAPI(LINK) {
  let url = `https://miladsdgh.ir/cors`;
  let body = {
    urlToGet: LINK ,
    Params: "none" 
  }
  let response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  let result = await response.json();
  return result
}


function loadData(e) {
  e.preventDefault();
  let url = "https://api.namefake.com/";
  switch(country.value){
    case "":
      url += "random/";
      break;
    default:
      url += `${country.value}/`;
      break
  }
  switch(gender.value){
    case "":
      url += "random/";
      break;
    default:
      url += `${gender.value}/`;
      break
  }
  
  getDataFromAPI(url).then(response=> {
    showRes.innerHTML = `
      <div class="fw-600">${response.name}</div>
      <div class="margin-top-10">${response.address}</div>
      <div class="inbl fw-600-marginT-5 width-50"">Geo coordinates</div>
      <div class="inbl">${response.latitude.toFixed(6)} &nbsp,&nbsp${response.longitude.toFixed(6)}</div>
      <div class="inbl fw-600-marginT-5 margin-d-12 width-50">Mother's maiden name</div>
      <div class="inbl">${response.maiden_name}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Birthday</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50"">Date</div>
      <div class="inbl margin-d-12">${response.birth_data}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Phone</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Home Phone</div>
      <div class="inbl">${response.phone_h}</div>
      <div class="inbl fw-600-marginT-5 width-50">Work Phone</div>
      <div class="inbl margin-d-12">${response.phone_w}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Internet</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Email address</div>
      <div class="inbl"><a target="_blank" href="${response.email_url}">${response.email_u}@${response.email_d}</a></div>
      <div class="inbl fw-600-marginT-5 width-50">Username</div>
      <div class="inbl">${response.username}</div>
      <div class="inbl fw-600-marginT-5 width-50">Password</div>
      <div class="inbl">${response.password}</div>
      <div class="inbl fw-600-marginT-5 width-50">Website</div>
      <div class="inbl"><a target="_blank" href="${response.domain_url}">${response.domain}</a></div>
      <div class="inbl fw-600-marginT-5 width-50">Browser user agent</div>
      <div class="inbl">${response.useragent}</div>
      <div class="inbl fw-600-marginT-5 width-50">IPv4</div>
      <div class="inbl"><a target="_blank" href="${response.ipv4_url}">${response.ipv4}</a></div>
      <div class="inbl fw-600-marginT-5 width-50">MAC Address</div>
      <div class="inbl margin-d-12">${response.macaddress}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Plastic card</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Discount number</div>
      <div class="inbl">${response.plasticcard}</div>
      <div class="inbl fw-600-marginT-5 width-50">Expires</div>
      <div class="inbl">${response.cardexpir}</div>
      <div class="inbl fw-600-marginT-5 width-50">Bonus</div>
      <div class="inbl margin-d-12">${response.bonus}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Work</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Company</div>
      <div class="inbl margin-d-12">${response.company}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Body features</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Height</div>
      <div class="inbl">${response.height}</div>
      <div class="inbl fw-600-marginT-5 width-50">Weight</div>
      <div class="inbl">${response.weight}</div>
      <div class="inbl fw-600-marginT-5 width-50">Eye color</div>
      <div class="inbl">${response.eye}</div>
      <div class="inbl fw-600-marginT-5 width-50">Blood type</div>
      <div class="inbl">${response.blood}</div>
      <div class="inbl fw-600-marginT-5 width-50">Hair</div>
      <div class="inbl margin-d-12">${response.hair}</div>
  
      <div class="inbl width-50 fw-600-marginT-5">Other</div>
      <hr class="hr">
      <div class="inbl fw-600-marginT-5 width-50">Favorite sport</div>
      <div class="inbl">${response.sport}</div>
      <div class="inbl fw-600-marginT-5 width-50">Favorite color</div>
      <div class="inbl">${response.color}</div>
      <div class="inbl fw-600-marginT-5 width-50">GUID</div>
      <div class="inbl">${response.uuid}</div>
      <div class="inbl fw-600-marginT-5 width-50">URL</div>
      <div class="inbl margin-d-12"><a target="_blank" href="${response.url}">${response.url}</a></div>
    `;
  
    showPlace.appendChild(showRes);
  })


}
