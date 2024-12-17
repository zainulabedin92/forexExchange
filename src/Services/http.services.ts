import { ApiFunctionReturnType,ApiResponseType } from "../Api/ApiResponse"
import axios from "axios"

export const get = async (url: string,headers: Record<string, any> = {}
): Promise<ApiFunctionReturnType> => {
    try {
        const res: ApiResponseType = await axios.get(url, {headers});
        return {
            success:res.data.success,
            data: res.data,
            message: res.data.message,
        };
    }
    catch(error: any){
        return {
            success:false,
            data: null,
            message: error.message || 'An error occurred',
        }
    }

};