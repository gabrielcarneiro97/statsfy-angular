import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import pt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* AntD */
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';

/* App */
import { HeaderComponent } from './layout/header/header.component';
import { NavMenuComponent } from './layout/header/nav-menu/nav-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { TrackListItemComponent } from './components/list/track-list-item/track-list-item.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { NavSignBtnComponent } from './layout/header/nav-sign-btn/nav-sign-btn.component';
import { AuthGuardService } from './guards/auth.service';
import { ArtistListItemComponent } from './components/list/artist-list-item/artist-list-item.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    MainComponent,
    ListComponent,
    TrackListItemComponent,
    LoginComponent,
    LoginFormComponent,
    TokensComponent,
    NavSignBtnComponent,
    ArtistListItemComponent,
    TopListComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'tokens',
        component: TokensComponent,
      },
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,

    FontAwesomeModule,

    /* AntD */
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzListModule,
    NzPaginationModule,
    NzDividerModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
