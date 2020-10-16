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

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';

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
import { MusicListComponent } from './components/music-list/music-list.component';
import { ItemComponent } from './components/music-list/item/item.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    MainComponent,
    MusicListComponent,
    ItemComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
      },
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    /* Firebase */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,

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
    { provide: REGION, useValue: 'southamerica-east1' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }