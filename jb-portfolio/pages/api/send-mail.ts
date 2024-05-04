import type { NextApiRequest, NextApiResponse } from 'next';
import axios from '../../src/app/utils/axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { serviceId, templateId, templateParams, userId } = req.body;

    console.log(`Trying to send post with service_id: ${process.env.USER_ID}, template_id: ${process.env.TEMPLATE_ID}, user_id: ${process.env.USER_ID}`)
    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.USER_ID,
        template_params: templateParams,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });  
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);

      // Type guard to check if the error object has a toString method
      if (typeof error === 'object' && error !== null && typeof error.toString === 'function') {
        res.status(500).json({ message: 'Error sending email', error: error.toString() });
      } else {
        res.status(500).json({ message: 'Error sending email', error: 'Unknown error' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
