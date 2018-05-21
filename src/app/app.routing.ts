import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';

// Paginas do Investidor
import { InvestidorComponent } from './investidor/investidor.component';
import { InvestimentoComponent } from './investidor/investimento/investimento.component';
import { CarteiraComponent } from './investidor/carteira/carteira.component';
import { PerfilInvestidorComponent } from './investidor/perfil/perfil.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { HomeInvestidorComponent } from './investidor/home-investidor/home-investidor.component';
import { ConfigPerfilInvestidorComponent } from './investidor/config-perfil-investidor/config-perfil-investidor.component';

// Paginas da Empresa
import { EmpresaComponent } from './empresa/empresa.component';
import { EmprestimoComponent } from './empresa/emprestimo/emprestimo.component';
import { HomeEmpresaComponent } from './empresa/home-empresa/home-empresa.component';
import { TransferenciasComponent } from './empresa/transferencias/transferencias.component';
import { ConfigPerfilEmpresaComponent } from './empresa/config-perfil-empresa/config-perfil-empresa.component';
import { PerfilEmpresaComponent } from './empresa/perfil-empresa/perfil-empresa.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MovimentacaoComponent } from './investidor/carteira/movimentacao/movimentacao.component';
import { AcompanharEmpresasComponent } from './investidor/carteira/acompanhar-empresas/acompanhar-empresas.component';
import { ParcelasComponent } from './investidor/carteira/parcelas/parcelas.component';



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
        // data: { state: 'login' }
    },
    {
        path: 'empresa',
        component: EmpresaComponent,
        // redirectTo: '/investidor/home',
        // data: { state: 'empresa' },
        children: [
            {
                path: 'home',
                component: HomeEmpresaComponent
            },
            {
                path: 'emprestimos',
                component: EmprestimoComponent
            },
            {
                path: 'transferencias',
                component: TransferenciasComponent
            },
            {
                path: 'perfil',
                component: PerfilEmpresaComponent
            },
            {
                path: 'configuracao',
                redirectTo: 'configuracao/perfil'
            },
                {
                    path: 'configuracao/perfil',
                    component: ConfigPerfilEmpresaComponent,
                },
                {
                    path: 'configuracao/acesso',
                    component: UserConfigComponent
                },
            {
                path: 'notificacoes',
                component: NotificacaoComponent
            }
        ]
    },
    {
        path: 'investidor',
        component: InvestidorComponent,
        // redirectTo: '/investidor/home',
        // data: { state: 'investidor' },
        children: [
            {
                path: 'home',
                component: HomeInvestidorComponent
            },
            {
                path: 'carteira',
                component: CarteiraComponent
            },
                {
                    path: 'movimentacao',
                    component: MovimentacaoComponent
                },
                {
                    path: 'empresas-investidas',
                    component: AcompanharEmpresasComponent
                },
                {
                    path: 'parcelas',
                    component: ParcelasComponent
                },
            {
                path: 'investimento',
                component: InvestimentoComponent
            },
            {
                path: 'perfil',
                component: PerfilInvestidorComponent
            },
            // {
            //     path: 'empresa/:id',
            //     component: PerfilEmpresaComponent,
            //     data: { state: 'empresa' }
            // },
            {
                path: 'configuracao',
                redirectTo: 'configuracao/perfil'
            },
                {
                    path: 'configuracao/perfil',
                    component: ConfigPerfilInvestidorComponent,
                },
                {
                    path: 'configuracao/acesso',
                    component: UserConfigComponent
                },
            {
                path: 'notificacoes',
                component: NotificacaoComponent
            }
        ]
    }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false
});
