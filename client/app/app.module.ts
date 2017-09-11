import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule} from './home/home.module';
import { FeaturesModule } from './features/features.module';
import { SuccessStoriesModule } from './success-stories/success-stories.module';
import { PricingModule } from './pricing/pricing.module';
import { MaterialsModule } from './materials/materials.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'octa-ssr'}),
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    FeaturesModule,
    SuccessStoriesModule,
    PricingModule,
    MaterialsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
