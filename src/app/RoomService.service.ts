
export class RoomService{

    getPrice(numberOfNights: number,pricePerNight : number){

        return numberOfNights * pricePerNight;
    }

}