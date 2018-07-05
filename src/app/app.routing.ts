import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';

// Paginas da Empresa
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeEmpresaComponent } from './empresa/home-empresa/home-empresa.component';

import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecebiveisComponent } from './empresa/recebiveis/recebiveis.component';
import { CarteiraComponent } from './empresa/carteira/carteira.component';


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
    {
        path: 'login',
        component: LoginComponent,
        // data: { state: 'login' }
    },
    {
        path: 'cadastro',
        component: CadastroComponent
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
                path: 'recebiveis',
                component: RecebiveisComponent
            },
            {
                path: 'carteira',
                component: CarteiraComponent
            },
            {
                path: 'notificacoes',
                component: NotificacaoComponent
            },
            {
                path: 'configuracao',
                component: ConfiguracaoComponent,
            }
        ]
    }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false
});
