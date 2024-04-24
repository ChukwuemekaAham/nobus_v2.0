import { emailVerificationSchema } from "../../schema";
// import { NextResponse, NextRequest } from "next/server";

import { NextApiRequest, NextApiResponse } from 'next';

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code as string;
  console.log(code)
  const data = emailVerificationSchema.safeParse(code);

  try {
    // Perform email verification logic using the code

    if (data) {
      // Verification successful
      res.status(204).json(data);
    } else {
      // Verification failed
      res.status(400).end();
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).end();
  }
};

export default verifyHandler;
