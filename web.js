const LoadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>displayCountries(data))
}
LoadCountries()
const displayCountries = counties=>{
    const countriesDiv = document.getElementById('countries')
    counties.forEach(country=>{
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h3>${country.name.common}</h3>
        <p> ${country.capital}</p>
        <button onclick="loadCountryName('${country.name.common}')">button</button>
        `;
       countriesDiv.appendChild(div)
    })
    
}

const loadCountryName=(name)=>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetels(data[0]))
}

const displayCountryDetels = country =>{
    console.log(country);
    const countrydetils = document.getElementById('country-detail')
    countrydetils.innerHTML = `<h4 class="heading">${country.name.common}</h4>
    <p class="para">${country.population}</p>
    <img src="${country.flags.png}">
    
    `

}