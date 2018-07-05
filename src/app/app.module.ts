import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './core/MaterialModule';
// import { CoreModule } from './core/CoreModules';
import { AuthService } from './_service/auth/auth.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'environments/environment';

// App Routes
import { AppRouting } from 'app/app.routing';

// Pipes
import { CurrencyFormatPipe } from './_pipe/currency-format.pipe';
import { RatingFormatPipe } from './_pipe/rating-format.pipe';
import { KeysPipe } from './_pipe/keys.pipe';

// Services
import { UserService } from './_service/user/user.service';
import { BusinessService } from './_service/business/business.service';
import { NotificacaoService } from './_service/notificacao/notificacao.service';

// Telas
import { AppComponent } from './app.component';

// Components - Elementos
import { SearchComponent } from './components/search/search.component';

// Paginas Padrao
import { MenuComponent } from './pages/menu/menu.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';
import { MensagemComponent } from './pages/notificacao/mensagem/mensagem.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

// Empresa
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeEmpresaComponent } from './empresa/home-empresa/home-empresa.component';
import { CarteiraComponent } from './empresa/carteira/carteira.component';
import { ConfigPerfilEmpresaComponent } from './empresa/config-perfil-empresa/config-perfil-empresa.component';




import { HttpClientModule } from '@angular/common/http';
import { RecebiveisComponent } from './empresa/recebiveis/recebiveis.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe,
    CarteiraComponent,
    SearchComponent,
    RatingFormatPipe,
    LoginComponent,
    NotificacaoComponent,
    MensagemComponent,
    UserConfigComponent,
    EmpresaComponent,
    HomeEmpresaComponent,
    ConfigPerfilEmpresaComponent,
    MenuComponent,
    KeysPipe,
    ConfiguracaoComponent,
    CadastroComponent,
    RecebiveisComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule,
    CommonModule
  ],
  providers: [
    AuthService,
    UserService,
    NotificacaoService,
    BusinessService
  ],
  entryComponents: [
    MensagemComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
