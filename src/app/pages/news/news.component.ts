import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsData:any = [];
  ngOnInit(): void {
    this.fetchData([])
  }
  async fetchData(items: any) {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fc1fd273cf064a09a3ccc58d5b72e7b2');
      const data = response.data;
      console.log("Fetched data:", data.articles);

      data.articles.map((e: any) => {
        // items.find((item: any) => {
        //   if (item._id === e._id) {
        //     e.quantity = item.quantity
        //   }
        // })
        this.newsData.push(e)
      })
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}
