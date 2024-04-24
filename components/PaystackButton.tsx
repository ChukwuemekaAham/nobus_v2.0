import { useEffect } from 'react';
import { PaystackButton as PaystackButtonSDK } from 'react-paystack';
import { z } from 'zod';

// Define the schema for the Paystack options
const PaystackOptionsSchema = z.object({
  amount: z.number(),
  email: z.string(),
  publicKey: z.string(),
  onSuccess: z.function(),
  onClose: z.function()
});

type PaystackOptions = z.infer<typeof PaystackOptionsSchema>;

const PaystackButton: React.FC<PaystackOptions> = (props) => {
  useEffect(() => {
    // Validate the options using Zod
    const options = PaystackOptionsSchema.parse(props);

    // Load the Paystack script dynamically
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Paystack with the provided options
    script.onload = () => {
      const paystack = (window as any).Paystack;
      paystack && paystack.init(options);
    };

    // Clean up the script tag on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [props]);

  return (
    <PaystackButtonSDK
      text="Pay Now"
      {...props}
    />
  );
};

export default PaystackButton;