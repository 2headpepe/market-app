import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { IGetListingsResponse, IListings } from "./types";


export const getMyListings = (): AxiosPromise<IGetListingsResponse> => axiosInstance.get(Endpoints.LISTINGS.MY_LISTINGS)
