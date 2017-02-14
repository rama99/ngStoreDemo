import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

import { reducer as appReducer } from './reducer';

import { AppService } from './app.service';

import { AppEffects } from './app.effects';


@NgModule({
    imports: [ BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent }
        ]),
        StoreModule.provideStore({
            books: appReducer
        }),
        EffectsModule.run(AppEffects),
        HttpModule
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    providers: [AppService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
