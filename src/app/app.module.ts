import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ReposgridComponent } from './reposgrid/reposgrid.component';
import { ApiService } from './services/api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.Component';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    ReposgridComponent,
    PaginatorComponent,
    TopicsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }