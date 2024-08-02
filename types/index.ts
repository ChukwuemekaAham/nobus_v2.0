export interface IUser {
    email: string
    first_name: string
    last_name: string
    is_active: boolean
    is_root: boolean
    email_verified: boolean
    is_admin: boolean
    company: {
      name: string
      phone_number: string
      address: string
      state: string
      country: string
      billing: string
      payment_gateway: string
      discount: number
    },
    project: {
      name: string
      swift_quota: number
      current_swift_quota: number
      bandwidth: number
      current_bandwidth: number
    },
    password: string
    confirmpassword: string
    
  }
  
  export interface GenericResponse {
    status: string;
    message: string;
  }
  
  export interface ILoginResponse {
    status: string;
    user: IUser;
  }
  
  export interface ILoginTokenResponse {
    user: {
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      is_active: boolean,
      is_admin: boolean,
      email_verified: boolean
    },
    company: {
      name: string,
      phone_number: string,
      address: string,
      state: string,
      country: string,
      billing: string,
      payment_gateway: string,
      discount: 0,
      accepted_contract: boolean,
      added_payment_details: boolean,
      is_active: boolean
    },
    project: [
      {
        name: string,
        swift_quota: 1,
        current_swift_quota: 1,
        bandwidth: 1,
        current_bandwidth: 1,
        id: string,
        date_created: string,
        updated_at: string
      }
    ],
    token: string
  }

   export interface errorResponse {
    error: any
  }

  