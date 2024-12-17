import { get } from "../Services/http.services";
import { ApiFunctionReturnType } from "./ApiResponse";
import { BASE_URL } from "../Utilities/RoutesPath";

export const getrAllUsers = (): Promise<ApiFunctionReturnType> => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': '', // Example token
        'Request-Header-Data': ''  // Add other custom headers if needed
      };
    return get(`${BASE_URL}/Users/GetUsers`, headers);
  };