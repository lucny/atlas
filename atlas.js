const countriesList = document.getElementById('countries-list');
fetch('https://restcountries.com/v3.1/region/europe')
.then(res => res.json())
.then(data => {
    data.forEach(country => {
        console.log(country);
        let blockCountry = 
        `<div class="col-xl-1 col-lg-2 col-md-3 col-sm-6 mt-3">
        <p><img src="${country.flags.png}" class="img-fluid" 
        alt="${country.translations.ces.common}"></p>
        <h5><a href="${country.maps.googleMaps}">
        ${country.translations.ces.common}</a>
        </h5>
        <p class="small">Počet obyvatel: ${country.population}<p>
        <p class="small">Hlavní město: ${country.capital}<p>   
        </div>`;
        countriesList.innerHTML += blockCountry;  
    });
})

