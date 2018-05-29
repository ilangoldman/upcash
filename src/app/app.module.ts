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
import { Routes, RouterModule } from '@angular/router';
import { AppRouting } from 'app/app.routing';
// Pipes
import { CurrencyFormatPipe } from './_pipe/currency-format.pipe';
import { RatingFormatPipe } from './_pipe/rating-format.pipe';

// Services
import { UserService } from './_service/user/user.service';
import { LoginService } from './_service/login/login.service';
import { InvestimentoService } from './_service/investimento/investimento.service';
import { NotificacaoService } from './_service/notificacao/notificacao.service';

// Telas
import { AppComponent } from './app.component';

// Components - Elementos
import { SearchComponent } from './components/search/search.component';

// Paginas Padrao
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';
import { MensagemComponent } from './pages/notificacao/mensagem/mensagem.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';

import { LoginComponent } from './pages/login/login.component';
// TODO -> Cadastro (Signup)

// Investidor
import { InvestidorComponent } from './investidor/investidor.component';
import { HomeInvestidorComponent } from './investidor/home-investidor/home-investidor.component';
import { CarteiraComponent } from './investidor/carteira/carteira.component';
import { InvestimentoComponent } from './investidor/investimento/investimento.component';
import { InvestirComponent } from './investidor/investimento/investir/investir.component';

import { PerfilInvestidorComponent } from './investidor/perfil/perfil.component';
import { PontuacaoDialogComponent } from './investidor/perfil/pontuacao-dialog/pontuacao-dialog.component';
import { ConfigPerfilInvestidorComponent } from './investidor/config-perfil-investidor/config-perfil-investidor.component';

// Empresa
import { EmpresaComponent } from './empresa/empresa.component';
import { EmprestimoComponent } from './empresa/emprestimo/emprestimo.component';
import { HomeEmpresaComponent } from './empresa/home-empresa/home-empresa.component';
import { TransferenciasComponent } from './empresa/transferencias/transferencias.component';

import { ConfigPerfilEmpresaComponent } from './empresa/config-perfil-empresa/config-perfil-empresa.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DetalheEmprestimoComponent } from './investidor/investimento/detalhe-emprestimo/detalhe-emprestimo.component';
import { EmprestimoService } from './_service/emprestimo/emprestimo.service';
import { SolicitacaoComponent } from './empresa/solicitacao/solicitacao.component';
import { CardEmprestimoComponent } from './components/card-emprestimo/card-emprestimo.component';
import { MovimentacaoComponent } from './investidor/carteira/movimentacao/movimentacao.component';
import { FiltroMovimentacaoComponent } from './investidor/carteira/movimentacao/filtro-movimentacao/filtro-movimentacao.component';
import { AcompanharEmpresasComponent } from './investidor/carteira/acompanhar-empresas/acompanhar-empresas.component';
import { ParcelasComponent } from './investidor/carteira/parcelas/parcelas.component';
import { KeysPipe } from './_pipe/keys.pipe';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe,
    InvestidorComponent,
    CarteiraComponent,
    InvestimentoComponent,
    SearchComponent,
    RatingFormatPipe,
    LoginComponent,
    PerfilInvestidorComponent,
    NotificacaoComponent,
    PontuacaoDialogComponent,
    InvestirComponent,
    MensagemComponent,
    UserConfigComponent,
    EmpresaComponent,
    EmprestimoComponent,
    HomeEmpresaComponent,
    HomeInvestidorComponent,
    TransferenciasComponent,
    ConfigPerfilEmpresaComponent,
    ConfigPerfilInvestidorComponent,
    MenuComponent,
    DetalheEmprestimoComponent,
    SolicitacaoComponent,
    CardEmprestimoComponent,
    MovimentacaoComponent,
    FiltroMovimentacaoComponent,
    AcompanharEmpresasComponent,
    ParcelasComponent,
    KeysPipe,
    ConfiguracaoComponent,
    CadastroComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule
  ],
  providers: [
    UserService,
    LoginService,
    InvestimentoService,
    NotificacaoService,
    EmprestimoService,
    AuthService
  ],
  entryComponents: [
    PontuacaoDialogComponent,
    InvestirComponent,
    MensagemComponent,
    SolicitacaoComponent,
    FiltroMovimentacaoComponent,
    DetalheEmprestimoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
