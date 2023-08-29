import type { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

type ResponseData = {
  qrString: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data: string = req.body.data;

  const code = await QRCode.toDataURL(data);

  res.status(200).json({ qrString: code });
}
