import { Component } from '@angular/core';
import axios from 'src/app/axios';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events:any;
  ngOnInit(): void {
    this.fetchData()
  }
  async fetchData() {
    try {
      const response = await axios.get(`https://www.eventbriteapi.com/v3/users/me/?token=UW54HWESMNE2F7K2X2XU`);
      const data = response.data;
      console.log("Fetched data event:", data);

      this.events = data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}
