const LoadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>displayCountries(data))
}
const displayCountries = counties=>{
    const countriesDiv = document.getElementById('countries')
    counties.forEach(country=>{
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h3>${country.name.official}</h3>
        <p> ${country.capital}</p>
        <button onclick="loadCountryName('ami')">button</button>
        `;
       countriesDiv.appendChild(div)
    })
    
}

const loadCountryName=(name)=>{
console.log(name);
}