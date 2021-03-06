import {  PostFormComponent } from './components/post-form//post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthGuard } from './shared/security/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';


const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'upload',
        canActivate: [AuthGuard],
        component: UploadFormComponent
    },
    {
        path: 'post',
        // canActivate: [AuthGuard],
        component: PostFormComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);