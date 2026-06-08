async function searchMovie(){

    const movieName =
        document.getElementById("movieInput").value;

    const apiKey = "11aeda13";

    const url =
        `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.Response === "False"){

            document.getElementById("movieResult")
                .innerHTML = "Movie not found!";

            return;
        }

        document.getElementById("movieResult")
            .innerHTML = `
                <h2>${data.Title}</h2>

                <img src="${data.Poster}" alt="Poster">

                <p><b>Year:</b> ${data.Year}</p>

                <p><b>Genre:</b> ${data.Genre}</p>

                <p><b>IMDb Rating:</b> ${data.imdbRating}</p>

                <p><b>Plot:</b> ${data.Plot}</p>
            `;

    }
    catch(error){

        document.getElementById("movieResult")
            .innerHTML =
            "Error fetching movie data";
    }
}