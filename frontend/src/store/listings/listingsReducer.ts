import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListings } from "../../api/listings/types";

export interface ListingsState {
  myListings: {
    listings: IListings | null;
    isLoading: boolean;
    error: string | null;
  };
  [key:string] :{
    listings: IListings | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: ListingsState = {
  myListings: {
    listings: null,
    isLoading: false,
    error: null,
  },
}

export interface ListingsAction{
    id:number;
    listings?:IListings;
    error?:string;
}

export const listingsReducer = createSlice({
  name: "listings",
  initialState,
  reducers: {
    getStart: (state,action:PayloadAction<ListingsAction>): ListingsState=> ({
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        isLoading: true,
      },
    }),
    getSuccess: (state, action: PayloadAction<ListingsAction>): ListingsState=> ({
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listings:action.payload.listings,
          isLoading: false,
          error: null,
        },
      }),
    getFailure: (state, action: PayloadAction<ListingsAction>): ListingsState => ({
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        isLoading: false,
        error: action.payload.error,
      },
    }),
    getMyStart: (state,action:PayloadAction<ListingsAction>): ListingsState=> ({
        ...state,
        myListings: {
          ...state.myListings,
          isLoading: true,
        },
      }),
      getMySuccess: (state, action: PayloadAction<ListingsAction>): ListingsState=> ({
          ...state,
          myListings: {
            ...state.myListings,
            listings:action.payload.listings!,
            isLoading: false,
            error: null,
          },
        }),
      getMyFailure: (state, action: PayloadAction<ListingsAction>): ListingsState => ({
        ...state,
        myListings: {
          ...state.myListings,
          isLoading: false,
          error: action.payload.error!,
        },
      }),
  },
});

export const {
    getStart,
    getSuccess,
    getFailure,
    getMyStart,
    getMySuccess,
    getMyFailure
} = listingsReducer.actions;

export default listingsReducer.reducer;
