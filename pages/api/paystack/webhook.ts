import { NextApiRequest, NextApiResponse } from 'next';
import { paystackWebhookSchema } from '../../../schema';

const handlePaystackWebhook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const payload = paystackWebhookSchema.parse(req.body);

    // Extract the required information from the payload
    const { event, data } = payload;
    const { id, amount, card, customer } = data;

    // Process the webhook event data
    console.log('Received Paystack webhook event:', event);
    console.log('Payment ID:', id);
    console.log('Amount:', amount);
    console.log('Card Brand:', card.brand);
    console.log('Card Last 4 Digits:', card.last4);
    console.log('Customer Email:', customer.email);
    console.log('Customer Name:', customer.name);

    res.status(200).end();
  } catch (error) {
    console.error('Error handling Paystack webhook:', error);
    res.status(400).end();
  }
};

export default handlePaystackWebhook;