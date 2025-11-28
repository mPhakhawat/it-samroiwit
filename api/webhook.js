// api/webhook.js - LINE Webhook สำหรับ it-samroiwit
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const body = req.body;
  console.log('LINE Webhook ได้รับ:', body); // เช็ค log ใน Vercel

  // TODO: เชื่อมกับ dashboard แจ้งซ่อม (เช่น บันทึกข้อมูลลง Google Sheets หรือ DB)
  // ตัวอย่าง: ถ้าเป็น message จาก LINE
  if (body.events && body.events[0]) {
    const event = body.events[0];
    if (event.type === 'message' && event.message.type === 'text') {
      console.log('ข้อความแจ้งซ่อม:', event.message.text);
      // ที่นี่: ส่งข้อมูลไป dashboard หรือ reply กลับ user
    }
  }

  res.status(200).json({ status: 'success', bot: 'it-samroiwit ready!' });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};
