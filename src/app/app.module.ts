import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pipes
import { CurrencyFormatPipe } from './_pipe/currency-format.pipe';
import { RatingFormatPipe } from './_pipe/rating-format.pipe';

// App Routes
import { Routes, RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';

// Material
import { MatMenuModule } from '@angular/material/menu';
import * as MD from '@angular/material';
import { MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatTabsModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatSnackBarModule,
  MatStepperModule} from '@angular/material';

// Services
import { UserService } from './_service/user/user.service';
import { LoginService } from './_service/login/login.service';
import { InvestimentoService } from './_service/investimento/investimento.service';

// Components
import { AppComponent } from './app.component';
import { InvestidorComponent } from './investidor/investidor.component';
import { HomeComponent } from './investidor/home/home.component';
import { CarteiraComponent } from './investidor/carteira/carteira.component';
import { InvestimentoComponent } from './investidor/investimento/investimento.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PerfilComponent } from './investidor/perfil/perfil.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { ConfiguracaoComponent } from './investidor/configuracao/configuracao.component';
import { NotificacaoComponent } from './investidor/notificacao/notificacao.component';
import { PontuacaoDialogComponent } from './investidor/perfil/pontuacao-dialog/pontuacao-dialog.component';
import { InvestirComponent } from './investidor/investir/investir.component';
import { NotificacaoService } from './_service/notificacao/notificacao.service';
import { MensagemComponent } from './investidor/notificacao/mensagem/mensagem.component';
import { UserConfigComponent } from './components/user-config/user-config.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe,
    InvestidorComponent,
    HomeComponent,
    CarteiraComponent,
    InvestimentoComponent,
    SearchComponent,
    RatingFormatPipe,
    LoginComponent,
    LandingPageComponent,
    PerfilComponent,
    PerfilEmpresaComponent,
    ConfiguracaoComponent,
    NotificacaoComponent,
    PontuacaoDialogComponent,
    InvestirComponent,
    MensagemComponent,
    UserConfigComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  providers: [
    UserService,
    LoginService,
    InvestimentoService,
    NotificacaoService
  ],
  entryComponents: [
    PontuacaoDialogComponent,
    InvestirComponent,
    MensagemComponent,
    PerfilEmpresaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
