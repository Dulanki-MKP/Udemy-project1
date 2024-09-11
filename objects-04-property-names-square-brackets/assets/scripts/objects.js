"use strict"
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if(movies.length === 0){
    movieList.classList.remove('visible'); 
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  
  const filteredMovies = !filter 
  ? movies 
  : movies.filter(movie => movie.info.title.includes(filter));
  
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const {info, ...otherProps} = movie;
    console.log(otherProps);
    // const { title: movieTitle} = info;
    const { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + ' - ';
    for(const key in info){
      if(key !== 'title' && key !== '_title'){
        text = text + `${key} : ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if( 
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ){
    return;
  }

  const newMovie = {
    info: {
      set title(val){
        if(val.trim() === ''){
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title(){
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log("this : ",this);
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);
  

  movies.push(newMovie);
  renderMovies();
  console.log(movies);
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTErm = document.getElementById('filter-title').value;
  renderMovies(filterTErm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// const movieList = document.getElementById('movie-list');

// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// let person = {
//   'first name': 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   [userChosenKeyName]: '...',
//   greet: function() {
//     alert('Hi there!');
//   },
//   1.5: 'hello'
// };

// // ...

// // person.age = 31;
// delete person.age;
// // person.age = undefined;
// // person.age = null;
// person.isAdmin = true;

// const keyName = 'first name';

// console.log(person[keyName]);
// console.log(person['first name']);
// console.log(person[1.5]);
// console.log(person);


