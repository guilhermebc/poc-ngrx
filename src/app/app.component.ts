import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as authActions from './store/actions/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc-ngrx';

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new authActions.LoadAuths());
  }
}
