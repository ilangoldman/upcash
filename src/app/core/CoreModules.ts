import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'environments/environment';

// App Routes
import { Routes, RouterModule } from '@angular/router';
import { AppRouting } from 'app/app.routing';



const core = [
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
];

@NgModule({
    imports: core,
    // exports: core
})
export class CoreModule { }
