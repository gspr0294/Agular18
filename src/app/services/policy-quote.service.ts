import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyQuoteService {
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService.get('data-endpoint')
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
  }

  policyQuote(){
    return {
      inforceData:[
        {
          number: "1452981",
          name:"Robert Walker1"
        },
        {
          number: "1452945",
          name:"Robert Walker2"
        },
        {
          number: "1452982",
          name:"Robert Walker3"
        },
        {
          number: "1452946",
          name:"Robert Walker4"
        },
      ],
      premiumData:[
        {
          value: "$350",
          name:"New Premium"
        },
        {
          value: "$230",
          name:"Old Premium"
        },
        {
          value: "$XXXX",
          name:"Replacement Factor"
        }
      ],
      quoteData:{
        data :[
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 32 },
        { id: 3, name: 'Michael Johnson', age: 45 }
      ],
    
      columns :[
        { header: 'ID', field: 'id' },
        { header: 'Name', field: 'name' },
        { header: 'Age', field: 'age' }
      ]
    }
    }
  }
}
