import { NextApiRequest, NextApiResponse } from 'next';
import { tokenSchema } from '../../schema';

// import jwt, { JwtPayload } from 'jsonwebtoken'; // Or your preferred JWT library

// interface UserData {
//   userId: string;
//   // Add any other user data properties here
// }

// async function fetchUserData(userId: string): Promise<UserData | null> {
//   // Replace with your actual user fetching logic
//   if (userId === 'valid-user-id') {
//     return {
//       userId,
//       // Add any other user data properties here
//     };
//   }
//   return null;
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
        const data = tokenSchema.parse(req.body);
        console.log(data)

        // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as JwtPayload;
        // const user = await fetchUserData(decoded.userId);

        // if (user) {
        //   // Generate session or authentication cookie
        //   res.status(200).json({ user, message: 'Login successful' });
        if (data) {
            const userData = {
                user: {
                    id: "653364",
                    email: "onyedikachi.erugo@nkponani.com",
                    first_name: "Onyedikachi",
                    last_name: "Erugo",
                    is_active: true,
                    is_admin: true,
                    email_verified: true
                },
                company: {
                    name: "Nobus",
                    phone_number: "+2348181286926",
                    address: "Nkponani Guest House",
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
                    name: "sandbox",
                    swift_quota: 1,
                    current_swift_quota: 1,
                    bandwidth: 1,
                    current_bandwidth: 1,
                    id: "19e83fb-f948e-fie83-3f9nvi994",
                    date_created: "2024-03-29T16:55:04.583Z",
                    updated_at: "2024-03-29T16:55:04.583Z"
                    }
                ],
                token: data.token
                }
        // Generate session or authentication cookie
            res.status(200).json(userData);
        } else {
            res.status(401).json({ message: 'Invalid token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
    }
}

export default handler;