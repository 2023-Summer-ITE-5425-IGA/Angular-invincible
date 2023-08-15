import { Component, OnInit } from '@angular/core';
import axios from 'axios'; // Importing axios directly

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any;

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    // Provided API options
    const options = {
      method: 'GET',
      url: 'https://chicmi.p.rapidapi.com/calendar_in_city/',
      params: {
        city: 'london',
        days: '5',
        max_results: '3'
      },
      headers: {
        'X-RapidAPI-Key': 'ebc3c9ea22msha6fdc66c3bcac79p10e332jsn88cb60266546',
        'X-RapidAPI-Host': 'chicmi.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log("Fetched events:", response.data);

      this.events = response.data; // Assign the response data to the events property
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }
}
