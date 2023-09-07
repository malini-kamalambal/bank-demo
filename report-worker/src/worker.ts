import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { setTimeout } from "timers/promises";

// Hack to make docker container quit on ctrl-c
['SIGTERM', 'SIGINT'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
})

const isDryRun = () => {
  return (process.env.DRY_RUN || '').toLowerCase() !== 'false'
}

const bucketName = process.env.AWS_BUCKET_NAME

async function generateReport(client: S3Client) {
  if (isDryRun()) {
    console.log(`DRY_RUN != false, doing nothing.`);
    return
  }

  const key = "report.txt"
  const response = await client.send(new PutObjectCommand({
    "Body": "Interesting financial statements",
    "Bucket": bucketName,
    "Key":key
  }));

  console.log(`Report generated, s3://${bucketName}/${key} (version id ${response.VersionId})`)
}

async function main() {
  const client = new S3Client({});

  while (true) {
    await generateReport(client);
    await setTimeout(5000);
  }
}

main();
