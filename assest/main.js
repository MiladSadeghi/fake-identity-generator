document.querySelector('form').addEventListener('submit', loadData)

function loadData(e) {
  e.preventDefault()
  const country = document.querySelector('#country').value
  const gender = document.querySelector('#gender').value

  let url = 'https://api.namefake.com/'

  if(country === '') {
    url += 'random/' 
  } else {
    url += `${country}/`
  }
  if(gender === '') {
    url += 'random/' 
  } else {
    url += `${gender}/`
  }
  
}


