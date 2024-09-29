import { Routes } from '@angular/router';
import { PolicyQuoteFormComponent } from './components/policy-quote-form/policy-quote-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

export const routes: Routes = [
    {path:"policy", component:PolicyQuoteFormComponent},
    {path:"quote", component:QuoteDetailsComponent},
    {path:'', redirectTo:"policy", pathMatch:'full'}
];
