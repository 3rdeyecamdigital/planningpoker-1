import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SessionComponent } from './session/session.component';
import { TicketComponent } from './ticket/ticket.component';
// tslint:disable-next-line:max-line-length
import { VoteButtonComponent } from './ticket/vote-button/vote-button.component';
import { ResultsComponent } from './ticket/results/results.component';
import { ChartComponent } from './ticket/results/chart/chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareComponent } from './session/share/share.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        SessionComponent,
        TicketComponent,
        VoteButtonComponent,
        ResultsComponent,
        ChartComponent,
        ShareComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [Title],
    bootstrap: [AppComponent],
})
export class AppModule {}
