import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

/* AntD */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { TesteComponent } from './teste/teste.component';
import { RouterModule } from '@angular/router';
import { Teste2Component } from './teste2/teste2.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    Teste2Component,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TesteComponent,
      },
      {
        path: 'teste',
        component: Teste2Component
      }
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent],
})
export class AppModule { }
