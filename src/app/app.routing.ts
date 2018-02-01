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
        component: UploadFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);