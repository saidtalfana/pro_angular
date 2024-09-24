import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/Main/main/main.component';

const routes: Routes = [
  {path: 'main',
    loadChildren: () => import('src/app/Component/Main/main.module').then(m => m.MainModule)
  },
  {path: 'admin',
    loadChildren: () => import('src/app/Component/Admin/admin.module').then(m => m.AdminModule)
  },
  {path: 'provider',
    loadChildren: () => import('src/app/Component/Provider/provider.module').then(m => m.ProviderModule)
  },
  {path: 'user',
    loadChildren: () => import('src/app/Component/User/user.module').then(m => m.UserModule)
  },

  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
