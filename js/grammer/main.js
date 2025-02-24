import { mathMax } from './export.js';
import random from './export.js';
import axios from 'axios';

console.log(random());
console.log(mathMax(1,2)); // 2

function fetchMovies() {
    axios
        .get('https://yts.mx/api/v2/list_movies.json')
        .then((response) => {
            console.log(response);
        })
}

fetchMovies()
