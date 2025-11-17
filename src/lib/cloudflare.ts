import 'server-only';
import {
  ListObjectsV2Command,
  HeadObjectCommand,
  S3Client,
  GetObjectCommand
} from "@aws-sdk/client-s3";

const BUCKET = process.env.CLOUDFLARE_BUCKET;
const FALLBACK_KEY = process.env.FALLBACK_KEY;
export const cfClient = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
  },
  forcePathStyle: true
});

export async function listObjects(prefix: string) {
  const cmd = new ListObjectsV2Command({
    Bucket: BUCKET,
    Delimiter: "/",
    Prefix: prefix
  })
  return cfClient.send(cmd);
}

export async function getObject(key: string) {
  try {
    const head = new HeadObjectCommand({ Bucket: BUCKET, Key: key });
    await cfClient.send(head);
    const cmd = new GetObjectCommand({ Bucket: BUCKET, Key: key });
    return cfClient.send(cmd);
  } catch (err) {
    const fallbackCmd = new GetObjectCommand({ Bucket: BUCKET, Key: FALLBACK_KEY });
    return cfClient.send(fallbackCmd);
  }
}