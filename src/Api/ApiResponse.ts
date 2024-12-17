export interface ApiResponseType {
    data: {
      success: boolean;
      data: any;
      message: string;
      error?: any;
    };
  }
  
  export interface ApiFunctionReturnType {
    success: boolean;
    data: any;
    message: string;
  }