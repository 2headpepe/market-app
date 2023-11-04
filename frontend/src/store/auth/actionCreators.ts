import { Dispatch } from "@reduxjs/toolkit";
import { ILoginRequest } from "../../api/auth/types";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./authReducer";

import api from "../../api";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());
      console.log(data)
      const response = await api.auth.login(data);
      // const response = { data: { accessToken: "hiii" } };
      dispatch(loginSuccess(response.data.accessToken));
      //   dispatch(getProfile());
    } catch (e: any) {
      console.log('sfdsfsd');

      console.error(e);

      dispatch(loginFailure(e.message));
    }
  };
export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(logoutSuccess());
  };
