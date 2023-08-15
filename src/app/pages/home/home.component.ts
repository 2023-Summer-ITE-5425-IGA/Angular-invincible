import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = null;

  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.data = await this.apiService.searchGoogle();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
