// api/webhook.js
export const config = {
  api: {
    bodyParser: true, // สำคัญ! ต้องเปิด
  },
};

export default function handler(req, res) {
  // ต้องรับเฉพาะ POST เท่านั้น
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  console.log('ได้รับ webhook จาก LINE:', req.body);

  // TODO: วางโค้ดตอบกลับ LINE Messaging API ที่นี่ในอนาคต
  // เช่น reply message, push message ฯลฯ

  // สำคัญที่สุด: ต้องตอบ 200 ภายใน 5 วินาที
  res.status(200).json({ status: 'ok' });
}