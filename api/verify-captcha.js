export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { token } = req.body;

    // ✅ Check token exists
    if (!token) {
      return res.status(400).json({ success: false });
    }

    const secret = process.env.RECAPTCHA_SECRET;

    // ✅ Check secret exists
    if (!secret) {
      console.error("Missing RECAPTCHA_SECRET");
      return res.status(500).json({ success: false });
    }

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const data = await response.json();

    // ✅ Always return 200 (important)
    return res.status(200).json({ success: data.success });

  } catch (error) {
    console.error("Captcha API Error:", error);
    return res.status(500).json({ success: false });
  }
}