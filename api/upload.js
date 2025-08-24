import { put } from "@vercel/blob";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // important for file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload error" });
    }

    const file = files.file;
    const stream = fs.createReadStream(file.filepath);

    // Save to Vercel Blob
    const { url } = await put(file.originalFilename, stream, {
      access: "public",
    });

    res.status(200).json({ url });
  });
}
