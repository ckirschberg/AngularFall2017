import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BeanieComponent } from './beanie/beanie.component';
import { Routes, RouterModule } from '@angular/router';
import { BeanieListComponent } from './beanie-list/beanie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'beanies', component: BeanieListComponent },
  { path: 'beanie/:id', component: BeanieComponent, canActivate: [AuthGuard] },
  { path: 'beanie', component: BeanieComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  
  { path: '',
    redirectTo: '/beanies', // Where to go when no route is specified
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BeanieComponent,
    BeanieListComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
