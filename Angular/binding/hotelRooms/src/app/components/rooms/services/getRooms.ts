import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getRooms } from "../models/rooms.interface";


@Injectable({ providedIn: 'root' })
export class GetRooms{
  private http = inject(HttpClient)

  getRooms(){
    return this.http.get<getRooms[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }
}
