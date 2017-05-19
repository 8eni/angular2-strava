import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StravaService } from './strava.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;

  constructor(private http: Http, private stravaService: StravaService) {}

  ngOnInit() {
    this.getAthlete();
  }

  getAthlete() {
    this.stravaService.getAthlete()
                      .subscribe(
                        athlete =>  {
                          this.athlete = athlete;
                          this.getStats(athlete.id);
                          this.getFriends(athlete.id);
                        },
                        error => this.errorMessage = <any>error);
  }

  getStats(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getStats(id)
                      .subscribe(
                        stats => this.stats = stats,
                        error => this.errorMessage = <any>error);
    });
  }

  getFriends(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getFriends(id)
                      .subscribe(
                        friends => this.friends = friends,
                        error => this.errorMessage = <any>error);
    });
  }
}
