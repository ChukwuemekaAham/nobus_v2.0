import { NextApiRequest, NextApiResponse } from 'next';
import { registerSchema } from "../../schema";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data  = registerSchema.parse(req.body);
      console.log(data);
        
      if (data) {
        const userData = {
            user: {
                id: "9827003-9287",
                email: data.email,
                first_name: "Chukwuemeka",
                last_name: "Aham",
                is_active: true,
                is_admin: true,
                email_verified: true
            },
            company: {
                name: "Nobus",
                phone_number: "+2348181286926",
                address: "34 Raliat Memudu",
                state: "Lagos",
                country: "Nigeria",
                billing: "Monthly Billing",
                payment_gateway: "paystack",
                discount: 0,
                accepted_contract: true,
                added_payment_details: true,
                is_active: true
            },
            project: [
                {
                name: "nobus-test",
                swift_quota: 1,
                current_swift_quota: 1,
                bandwidth: 1,
                current_bandwidth: 1,
                id: "1",
                date_created: "2024-03-29T16:55:04.583Z",
                updated_at: "2024-03-29T16:55:04.583Z"
                }
            ],
            token: "863bfj2192ndmm@h9k40ewh8379"
            }
    
          res.status(201).json(userData);

      }
      
    } catch (error) {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;