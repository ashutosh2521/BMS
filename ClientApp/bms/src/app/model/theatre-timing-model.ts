export class Theatre {
  //Field
  Id : number
  theatreId: number
  name : string
  movieId : number
  timing : number
  theatreName : string

  constructor (Id:number,theatreId: number,name: string,movieId: number,timing:number,theatreName:string){
    this.Id = Id;
    this.theatreId  = theatreId;
    this.movieId  =movieId;
    this.name = name;
    this.timing = timing;
    this.theatreName = theatreName;
  }
}
