import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.name$ = this.store.select(fromStore.getFriendlyName);
  }

}
