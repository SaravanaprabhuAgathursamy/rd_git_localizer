import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { MainComponent } from "./components/Main/Main.component";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
