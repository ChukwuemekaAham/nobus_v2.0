import { object, string, enum as enum_, boolean, number, } from "zod";


export const companySchema = object({
  name: string().min(1, "Company name is required").max(100),
  phone_number: string().min(1, "Phone number is required").max(20),
  address: string().min(1, "Address is required").max(100),
  state: string().min(1, "State name is required").max(100),
  country: string().min(1, "Country name is required").max(100),
  billing: enum_(['Monthly Billing', 'Quarterly Billing']),

});

export const projectSchema = object({
  name: string().min(1, "Project name is required").max(100),
});

export const registerSchema = object({
  email: string()
  .min(1, "Email address is required")
  .email("Email Address is invalid"),
  first_name: string().min(1, "First name is required").max(100),
  last_name: string().min(1, "Last name is required").max(100),
  company: companySchema,
  project: projectSchema,
  password: string()
    .regex(new RegExp(".*[A-Z].*"), "must include uppercase character")
    .regex(new RegExp(".*[a-z].*"), "must include lowercase character")
    .regex(new RegExp(".*\\d.*"), "must include number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "must include special character"
    )
    .min(1, "Password is required")
    .min(16, "Password must be at least 16 characters; including numbers, uppercase, lowercase and special characters")
    .max(32, "Password must be less than 32 characters"),
  confirmpassword: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmpassword, {
  path: ["confirmpassword"],
  message: "Passwords do not match",
});

export const emailVerificationSchema = object({
  code: string().min(6, "6 digit email verification code is required"),
});

export const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .regex(new RegExp(".*[A-Z].*"), "must include uppercase character")
    .regex(new RegExp(".*[a-z].*"), "must include lowercase character")
    .regex(new RegExp(".*\\d.*"), "must include number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "must include special character"
    )
    .min(1, "Password is required")
    .min(16, "Password must be at least 16 characters; including numbers, uppercase, lowercase and special characters")
    .max(32, "Password must be less than 32 characters"),
});

export const validate2faSchema  = object({
  code: string().min(6, "6 digit email verification code is required"),
});

export const paystackWebhookSchema = object({
  event: string(),
  data: object({
    id: string(),
    amount: number(),
    card: object({
      brand: string(),
      last4: string(),
    }),
    customer: object({
      email: string().email(),
      name: string(),
    }),
  }),
});

export const paystackSchema = object({
  amount: number().positive(),
  cardNumber: string(),
  expiryMonth: string(),
  expiryYear: string(),
  cvc: string(),
});