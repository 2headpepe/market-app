import { Dispatch } from "@reduxjs/toolkit";
import { ILoginRequest, IUserProfile } from "../../api/auth/types";
import { loadProfileFailure, loadProfileStart, loadProfileSuccess, loginFailure, loginStart, loginSuccess, logoutSuccess } from "./authReducer";

import api from "../../api";

export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await api.auth.login(data)
        // const res = {data:{accessToken:"234"}}

        dispatch(loginSuccess(res.data.accessToken))
        // dispatch(getProfile())
        
      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

    export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
      try {
        // await api.auth.logout()

        dispatch(logoutSuccess())

        // history.push('/')
      } catch (e) {
          console.error(e)
      }
  }

  export const getProfile = () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart())

      // const res = await api.auth.getProfile()
      const res = {data:{
        "id": 0,
        "firstname": "string",
        "lastname": "string",
        "email": "string",
        "password": "string",
        "registrationDate": new Date(),
        "balance": 0,
        "rating": 0
      }}

      dispatch(loadProfileSuccess(res.data as IUserProfile))
    } catch (e: any) {
      console.error(e)

      dispatch(loadProfileFailure(e.message))
    }
  }