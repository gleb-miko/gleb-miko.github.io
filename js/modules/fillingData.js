



// Заполнение жанров и стран
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
    method: 'GET',
    headers: {
        'X-API-KEY': '7153c994-ae3c-4eba-bb98-96b870841437',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => {
        const sort = document.querySelector(".sort");
        
        const genreSortDiv = sort.querySelector(".sort__genre");
        const genreSelect = genreSortDiv.querySelector(".choice-field__select");

        const countrySortDiv = sort.querySelector(".sort__country");
        const countrySelect = countrySortDiv.querySelector(".choice-field__select");

        json.genres.forEach((el) => {
            const genreOption = document.createElement("option");
            if (el.id != 25)
            {genreOption.value = el.id;
            genreOption.text = el.genre;
            genreOption.className = "choice-field__option";    
            genreSelect.append(genreOption); 
            } 
        });

        json.countries.forEach((el) => {
            if (el.id != 54)
            {
            const countryOption = document.createElement("option");
            countryOption.value = el.id;
            countryOption.text = el.country;
            countryOption.className = "choice-field__option";    
            countrySelect.append(countryOption); 
            } 
            });
    })
    .catch(err => console.log(err))

    
