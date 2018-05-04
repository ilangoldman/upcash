import { Routes, RouterModule } from '@angular/router';

// Paginas do Investidor
import { InvestidorComponent } from './investidor/investidor.component';
import { HomeComponent } from './investidor/home/home.component';
import { InvestimentoComponent } from './investidor/investimento/investimento.component';
import { CarteiraComponent } from './investidor/carteira/carteira.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './investidor/perfil/perfil.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { ConfiguracaoComponent } from './investidor/configuracao/configuracao.component';
import { NotificacaoComponent } from './investidor/notificacao/notificacao.component';
import { UserConfigComponent } from './components/user-config/user-config.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     component: NotFound
    // },
    // {
    //     path: 'main',
    //     redirectTo: '/investidor/home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'home',
    //     component: LandingPageComponent,
    //     data: { state: 'home' },
    //     children: [
    //         {
    //             path: 'invest',
    //             component: InvestComponent,
    //             data: { state: 'invest' }
    //         },
    //         {
    //             path: 'borrow',
    //             component: BorrowComponent,
    //             data: { state: 'borrow' }
    //         }
    //     ]
    // },
    {
        path: 'login',
        component: LoginComponent,
        data: { state: 'login' }
    },
    {
        path: 'investidor',
        component: InvestidorComponent,
        // redirectTo: '/investidor/home',
        data: { state: 'investidor' },
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: { state: 'home' }
            },
            {
                path: 'carteira',
                component: CarteiraComponent,
                data: { state: 'carteira' }
            },
            {
                path: 'investimento',
                component: InvestimentoComponent,
                data: { state: 'investimento' }
            },
            {
                path: 'perfil',
                component: PerfilComponent,
                data: { state: 'perfil' }
            },
            {
                path: 'empresa/:id',
                component: PerfilEmpresaComponent,
                data: { state: 'empresa' }
            },
            {
                path: 'configuracao',
                redirectTo: 'configuracao/perfil'
            },
            {
                path: 'configuracao/perfil',
                component: ConfiguracaoComponent,
            },
            {
                path: 'configuracao/acesso',
                component: UserConfigComponent
            },
            {
                path: 'notificacoes',
                component: NotificacaoComponent,
                data: { state: 'notificacoes' }
            }
        ]
    }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false
});
