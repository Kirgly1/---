class Movie {
    constructor(name) {
      this.name = name;
      this.director = undefined;
      this.date = undefined;
    }
  
    addDirector(director) {
      this.director = director;
    }
  
    addDate(date) {
      this.date = date;
    }
  
    hasCompleteInfo() {
      return this.name !== '' && this.director !== '' && this.date !== '';
    }
  
    toJSON() {
      return JSON.stringify({
        name: this.name,
        director: this.director,
        date: this.date,
      });
    }
  }
  
  class MovieDatabase {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movieName) {
      const movie = new Movie(movieName);
      this.movies.push(movie);
    }
  
    findMovie(movieName) {
      return this.movies.find(movie => movie.name === movieName);
    }
  
    processCommand(command) {
      const addMovieRegex = /^addMovie (.+)$/; 
      const actionRegex = /^(.+) (directedBy|onDate) (.+)$/;
  
      const addMovieMatch = command.match(addMovieRegex);
      const actionMatch = command.match(actionRegex);
  
      if (addMovieMatch) {
        this.addMovie(addMovieMatch[1]);
      } else if (actionMatch) {
        const movieName = actionMatch[1];
        const action = actionMatch[2];
        const value = actionMatch[3];
  
        const movie = this.findMovie(movieName);
  
        if (movie) {
          if (action === 'directedBy') {
            movie.addDirector(value);
          } else if (action === 'onDate') {
            movie.addDate(value);
          }
        }
      }
    }
  
    getCompleteMovies() {
      return this.movies.filter(movie => movie.hasCompleteInfo()).map(movie => movie.toJSON());
    }
  }
  
  const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather jh',
    'Inception directedBy Christopher Nolan',
    'Godfather jh directedBy Francis Ford Coppola',
    'Godfather jh onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ];
  
  const movieDatabase = new MovieDatabase();
  
  commands.forEach(command => movieDatabase.processCommand(command));
  
  const completeMovies = movieDatabase.getCompleteMovies();
  console.log(completeMovies);  