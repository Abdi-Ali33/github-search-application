import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RoutingModule } from './routing/routing.module';
import { BoldenPipe } from './bolded.pipe';
import { HighlightDirective } from './highlight.directive';
import { IntroductionComponent } from './introduction/introduction.component';
import { GitsearchService } from './service/gitsearch.service';


@NgModule({
  declarations: [
    AppComponent, 
    GitsearchComponent, 
    IntroductionComponent,
    BoldenPipe,
    HighlightDirective,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }