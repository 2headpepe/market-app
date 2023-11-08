import { Dispatch } from "@reduxjs/toolkit"
import { ListingsAction, getMyFailure, getMyStart, getMySuccess } from "./listingsReducer"
import { IListings } from "../../api/listings/types";
import api from "../../api";

export const getMyListings = () =>
async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(getMyStart({id:-1} as ListingsAction));

    const result = api.listings.getMyListings();
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

    dispatch(getMySuccess({id:-1,listings:res}))
  } catch (e: any) {
    console.error(e)

    dispatch(getMyFailure({id:-1,error:e.message}))
  }
}