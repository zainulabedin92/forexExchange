import { get, post } from "../Services/http.services";
import { ApiFunctionReturnType } from "./ApiResponse";

export const getrAllUsers = (): Promise<ApiFunctionReturnType> => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': '', 
        'Request-Header-Data': '' 
      };
    return get(`https://localhost:7183/api/Users/GetAllUsers`, headers);
  };

  export const createNewUSer = (formData: Record<string, any>):Promise<ApiFunctionReturnType> => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '', 
      'Request-Header-Data': '' 
    };
    return post(`https://localhost:7183/api/Users/CreateUser`, headers, formData);
  }

  export const getAllWallets = (): Promise<ApiFunctionReturnType> => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '', 
      'Request-Header-Data': '' 
    };
  return get(`https://localhost:7183/api/Wallets/GetAllWallets`, headers);
  }

  export const createNewWallet = (formData: Record<string, any>):Promise<ApiFunctionReturnType> => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '', 
      'Request-Header-Data': '' 
    };
    return post(`https://localhost:7183/api/Wallets/CreateWallet`, headers, formData);
  }