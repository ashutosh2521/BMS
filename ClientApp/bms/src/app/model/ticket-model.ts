export class Ticket {
   movieId : number
   theatreId:number
   seatCode : string
   customerName : string

   constructor(movieId:number,seatCode:string,customerName:string,theatreId:number)
   {
     this.movieId = movieId;
     this.seatCode = seatCode;
     this.customerName = customerName;
     this.theatreId = theatreId;
   }

}
