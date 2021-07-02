import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('projects')
    .valueChanges()
    .subscribe (projects => {
      this.projects = projects;
    })
  }

}