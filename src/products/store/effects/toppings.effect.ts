import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingActions from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffect {
  constructor(
    private actions$: Actions,
    private toppingService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingService.getToppings().pipe(
        map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingActions.LoadToppingsFail(error)))
      )
    })
  );
}
