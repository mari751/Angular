import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, finalize, of, Subject, takeUntil, tap } from 'rxjs';
import { GetRooms } from './services/getRooms';
import { getRooms } from './models/rooms.interface';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
})
export class Rooms implements OnInit, OnDestroy{
  private destroy$ = new Subject<void>();
  private roomService = inject(GetRooms)
  public hasError = false
  public Rooms: getRooms[] = [];

  ngOnInit(): void {
    this.roomService.getRooms()
    .pipe(
      takeUntil(this.destroy$),
      tap((data: getRooms[])=>{
        this.Rooms = data;
      }),
      catchError((err) => {
          this.hasError = true;
          console.error(err);
          return of([]);        
      })
    )
    .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
