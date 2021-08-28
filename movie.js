fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
.then(res => res.json())
.then(data => displayMovie(data.results))


displayMovie = (movies) => {
    const takeDiv = document.getElementById('movie-container');
    
    for(const movie of movies){
        const makeDiv = document.createElement('div')
        makeDiv.classList.add('col-md-3')
        const movieImg = "https://image.tmdb.org/t/p/original" + movie.poster_path;
       
        makeDiv.innerHTML = `
            <div class="shadow rounded p-3 m-2">
            <img class="img-fluid rounded" onclick = "showDetais()" src='${movieImg}'>
                <h5>${movie.title}</h5>
                <p>${movie.overview.slice(0,150)}</p>
                <button onclick="loadMovieDetais('${movie.id}')" class="btn btn-danger ">See Details</button>
            </div>
        `
        takeDiv.appendChild(makeDiv);
       
    }
}

const loadMovieDetais = (movieDetais) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieDetais}?api_key=f96ac62d92ada173838748fa0f087eef
    `)
    .then(res => res.json())
    .then(movieData => displayMovieD(movieData))

}

const displayMovieD = (allDetails) => {
    
    const movieDetailsDiv = document.getElementById('movie-details');
    movieDetailsDiv.innerHTML = "";
    const makeDiv2 = document.createElement('div');
    makeDiv2.innerHTML = `
        <h4> Name : ${allDetails.original_title}</h4>
        <h5> Country : ${allDetails.original_language}</h5>
        <h5> Popularity : ${allDetails.popularity}</h5>
        <h5> Budget : ${allDetails.budget}</h5>
        <h5> Revenue : ${allDetails.revenue}</h5>
        <h5> Runtime : ${allDetails.runtime}</h5>

    `
    movieDetailsDiv.appendChild(makeDiv2);
}
    
 