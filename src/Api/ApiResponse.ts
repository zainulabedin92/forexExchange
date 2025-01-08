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

  export interface WalletsDTO{
    id: any,
    userId: any,
    balance: string,
    accountNo: string,
    currencySign: string,
    isActive: boolean
  }