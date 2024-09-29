import { Component, OnInit } from '@angular/core';
import { PolicyQuoteFormComponent } from "../policy-quote-form/policy-quote-form.component";
import { PolicyQuoteService } from '../../services/policy-quote.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [PolicyQuoteFormComponent,RouterModule],
  templateUrl: './quote-details.component.html',
  styleUrl: './quote-details.component.scss'
})
export class QuoteDetailsComponent implements OnInit {
  data: Record<string, any>[] = []; // Array of objects with string keys
  columns: { header: string; field: string }[] = [];
  policyQuote: any;
  inforceDetails: any[] | undefined;
  premiumDetails: any[] | undefined;
  // data = [
  //   { id: 1, name: 'John Doe', age: 28 },
  //   { id: 2, name: 'Jane Smith', age: 32 },
  //   { id: 3, name: 'Michael Johnson', age: 45 }
  // ];

  // columns = [
  //   { header: 'ID', field: 'id' },
  //   { header: 'Name', field: 'name' },
  //   { header: 'Age', field: 'age' }
  // ];
  // inforceDetails:any[] = [
  //   {
  //     number: "1452981",
  //     name:"Robert Walker1"
  //   },
  //   {
  //     number: "1452945",
  //     name:"Robert Walker2"
  //   },
  // ];
  // premiumDetails:any[] = [
  //   {
  //     value: "$350",
  //     name:"New Premium"
  //   },
  //   {
  //     value: "$230",
  //     name:"Old Premium"
  //   },
  //   {
  //     value: "$XXXX",
  //     name:"Replacement Factor"
  //   }
  // ];

  constructor(private policyService: PolicyQuoteService) {}

  ngOnInit(): void {
    this.policyQuote = this.policyService.policyQuote();
    this.columns = this.policyQuote?.quoteData?.columns;
    this.data = this.policyQuote?.quoteData?.data;
    this.inforceDetails = this.policyQuote?.inforceData;
    this.premiumDetails = this.policyQuote?.premiumData;
  }
}
