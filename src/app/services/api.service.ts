import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  async searchGoogle() {
    const options = {
      method: 'GET',
      url: 'https://google-search-api8.p.rapidapi.com/',
      params: {
        query: 'best laptop to buy?',
        hl: 'en',
        gl: 'gb',
        page: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'ebc3c9ea22msha6fdc66c3bcac79p10e332jsn88cb60266546',
        'X-RapidAPI-Host': 'google-search-api8.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
