
export interface RoomImage {
  id: number;
  source: string;
  roomId: number;
}

export interface getRooms{
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  roomTypeId: number;
  images: RoomImage[];
}