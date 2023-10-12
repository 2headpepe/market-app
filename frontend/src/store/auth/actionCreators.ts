import { Dispatch } from "@reduxjs/toolkit";
import { ILoginRequest } from "../../api/auth/types";
import { loginFailure, loginStart, loginSuccess } from "./authReducer";

import api from "../../api";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      //   const response = await api.auth.login(data);
      const response = { data: { accessToken: "hiii" } };

      dispatch(loginSuccess(response.data.accessToken));
      //   dispatch(getProfile());
    } catch (e: any) {
      console.error(e);

      dispatch(loginFailure(e.message));
    }
  };
