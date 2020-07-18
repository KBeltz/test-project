import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { AddressFormComponent } from './common/address-form/address-form.component';
import { ShippingAddressComponent } from './test-form/shipping-address/shipping-address.component';
import { BillingAddressComponent } from './test-form/billing-address/billing-address.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    AddressFormComponent,
    ShippingAddressComponent,
    BillingAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
