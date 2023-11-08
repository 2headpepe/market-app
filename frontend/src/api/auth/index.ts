import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginRequest, ILoginResponse, IUserProfile } from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>{
  return  axiosInstance.post(Endpoints.AUTH.LOGIN, params);
}

export const getProfile = (): AxiosPromise<IUserProfile> => axiosInstance.get(Endpoints.AUTH.PROFILE)
