import { get } from "../Services/http.services";
import { ApiFunctionReturnType } from "./ApiResponse";

export const getrAllUsers = (): Promise<ApiFunctionReturnType> => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': '', 
        'Request-Header-Data': '' 
      };
    return get(`https://localhost:7183/api/Users/GetAllUsers`, headers);
  };