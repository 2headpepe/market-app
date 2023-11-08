import { Dispatch } from "@reduxjs/toolkit"
import { OrdersAction, getBuysFailure, getBuysStart, getBuysSuccess, getSellsFailure, getSellsStart, getSellsSuccess } from "./ordersReducer"
import { IListings } from "../../api/listings/types";

export const getMySells = () =>
async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(getSellsStart({}));

    // const res = await api.auth.getMyListings()
    const res = [{
        "id": 0,
        "title": "string",
        "text": "string",
        "categoryId": "string",
        "price": 0,
        "city": "string",
        "postDate": "2023-11-06T09:48:04.526Z",
        "sold": true,
        "userId": 0
      },{
        "id": 1,
        "title": "string",
        "text": "string",
        "categoryId": "string",
        "price": 0,
        "city": "string",
        "postDate": "2023-11-06T09:48:04.526Z",
        "sold": true,
        "userId": 0
      }] as IListings;

    dispatch(getSellsSuccess({listings:res}))
  } catch (e: any) {
    console.error(e)

    dispatch(getSellsFailure({error:e.message}))
  }
}

export const getMyBuys = () =>
async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(getBuysStart({id:-1} as OrdersAction));

    // const res = await api.auth.getMyListings()
    const res = [{
        "id": 0,
        "title": "string",
        "text": "string",
        "categoryId": "string",
        "price": 0,
        "city": "string",
        "postDate": "2023-11-06T09:48:04.526Z",
        "sold": true,
        "userId": 0
      },{
        "id": 1,
        "title": "string",
        "text": "string",
        "categoryId": "string",
        "price": 0,
        "city": "string",
        "postDate": "2023-11-06T09:48:04.526Z",
        "sold": true,
        "userId": 0
      }] as IListings;

    dispatch(getBuysSuccess({listings:res}))
  } catch (e: any) {
    console.error(e)

    dispatch(getBuysFailure({error:e.message}))
  }
}