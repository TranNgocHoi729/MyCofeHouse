import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { StoryComponent } from './story/story.component';
import { FeatureMugsComponent } from './feature-mugs/feature-mugs.component';
import { MoreProductComponent } from './more-product/more-product.component';
import { CoffeMagazineComponent } from './coffe-magazine/coffe-magazine.component';
import { LifeStyleStoriesComponent } from './life-style-stories/life-style-stories.component';
import { SubcribeUsComponent } from './subcribe-us/subcribe-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    StoryComponent,
    FeatureMugsComponent,
    MoreProductComponent,
    CoffeMagazineComponent,
    LifeStyleStoriesComponent,
    SubcribeUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
