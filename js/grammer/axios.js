
function fetchMovies() {
    let imgList = document.querySelector('.img-list');
    let html = '';
    axios
        .get('https://yts.mx/api/v2/list_movies.json')
        .then((response) => {
            const stringify = JSON.stringify(response);
            let movies = response.data.data.movies;

            /* 
                innerHTML 사용
                movies.forEach((movie) => {
                    html += `
                        <li class="img">
                            <img src="${movie.medium_cover_image}" alt="${movie.title}">
                            <h3>${movie.title}</h3>
                        </li>
                `;
                });
                let gavegeTag = imgList.innerHTML = html;
                gavegeTag.appendChild(imgList); 
            
            */
           
           
                //createElement 사용 append
                movies.forEach(function(v)  {
                    let li = document.createElement('li');  
                    let img = document.createElement('img');
                    let h3 = document.createElement('h3');
                    img.src = v.medium_cover_image;
                    img.alt = v.title;
                    h3.textContent = v.title;
                    li.append(img);
                    li.append(h3);
                    imgList.appendChild(li);
                }) 
           
            
        })
}

fetchMovies();
