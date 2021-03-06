import { Action } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESSS = '[Products] Load Toppings Success';

export const VISUALISE_TOPPINGS = "[Products] Visualize Toppings";

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESSS;
  constructor(public payload: Topping[]) {}
}

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}

export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess
  | VisualiseToppings;
