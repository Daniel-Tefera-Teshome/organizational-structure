import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ContactComponent } from './pages/contact/contact.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceService } from './pages/service/service.service';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './pages/view/view.component';
import { WelcomesComponent } from './pages/welcomes/welcomes.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TreeViewComponent } from './pages/tree-view/tree-view.component';
//import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { DetailComponent } from './pages/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from './pages/update/update.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    ViewComponent,
    WelcomesComponent,
    TreeViewComponent,
    DetailComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,ReactiveFormsModule,NzTableModule,MatTreeModule,MatIconModule,MatDialogModule
        
  ],
  providers: [ServiceService, ViewComponent,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
