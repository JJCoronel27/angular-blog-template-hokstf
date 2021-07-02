import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';




const pages = [{
  path:'',
  component: HomePageComponent
},{
  path: 'projects',
  component: ProjectsPageComponent
}
];



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(pages),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyDChstIha0DhtCkgn313DeYahCJCWnNeZs",
    authDomain: "alien-site-51c8c.firebaseapp.com",
    databaseURL: "https://alien-site-51c8c.firebaseio.com",
    projectId: "alien-site-51c8c",
    storageBucket: "alien-site-51c8c.appspot.com",
    messagingSenderId: "448517330416",
    appId: "1:448517330416:web:992a3d099c96ec9ec8f935"
    }), 
    AngularFirestoreModule
       ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, ProjectComponent, HomePageComponent, ProjectsPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
