import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditDataComponent } from './edit/edit-data.component';
import { ViewDataComponent } from './view/view-data.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { Service } from './shared/service/service';
import { SearchViewComponent } from './search/search-view.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'edit/:id',
    component: EditDataComponent
  },
  {
    path: 'search', component: SearchViewComponent
  },
  {
    path: 'view', component: ViewDataComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditDataComponent,
    ViewDataComponent,
    SearchViewComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule {
  public pageTitle = 'Test Application';
}
