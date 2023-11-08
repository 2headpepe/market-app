export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IUserProfile {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  registrationDate: Date,
  balance: number,
  rating: number
}

