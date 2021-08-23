export class Movie {

  //Fields
  movieId: Number
  movieName : String
  duration : Number
  rating : Number
  movieUrl: String
  language : String
  dateOfRelease : String
  genre : String

  constructor (movieId: Number,movieName: String,duration: Number,rating: Number,movieUrl: String,language: String,dateOfRelease: String,genre:String){
    this.movieId = movieId,
    this.movieName = movieName,
    this.duration = duration,
    this.rating = rating,
    this.movieUrl = movieUrl,
    this.language = language,
    this.dateOfRelease = dateOfRelease,
    this.genre=genre

  }}
