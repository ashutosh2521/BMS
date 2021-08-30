export class Seat {
  //Fields
   id : number
   seatCode :string
   isBooked :number
   theaterId :number
public isActive : number =0

  constructor (id: number,seatCode: string,isBooked:number, theaterId:number){
    this.id = id;
    this.seatCode = seatCode;
    this.isBooked = isBooked;
    this.theaterId  =theaterId;
  }}
