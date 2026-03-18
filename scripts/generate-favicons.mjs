import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const input = path.join(projectRoot, "public", "logo.jpeg");
const outDir = path.join(projectRoot, "public");

const targets = [
  { filename: "favicon-16.png", size: 16 },
  { filename: "favicon-32.png", size: 32 },
  { filename: "favicon-48.png", size: 48 },
  { filename: "android-chrome-192.png", size: 192 },
  { filename: "android-chrome-512.png", size: 512 },
  { filename: "apple-touch-icon.png", size: 180 },
];

const TRIM_BACKGROUND = "#ffffff";
const ZOOM = 1.18;

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(input))) {
    throw new Error(`Missing input image: ${input}`);
  }

  await mkdir(outDir, { recursive: true });

  const base = sharp(input, { failOn: "none" }).ensureAlpha();

  await Promise.all(
    targets.map(({ filename, size }) =>
      base
        .clone()
        // Make the mark appear larger at tiny sizes by removing
        // surrounding whitespace (common with logo exports).
        .trim({ background: TRIM_BACKGROUND, threshold: 10 })
        // Slightly zoom in, then crop back to target size.
        .resize(Math.round(size * ZOOM), Math.round(size * ZOOM), {
          fit: "cover",
          position: "attention",
        })
        .resize(size, size, { fit: "cover", position: "centre" })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(path.join(outDir, filename))
    )
  );

  console.log("Generated favicons:");
  for (const t of targets) console.log(`- public/${t.filename}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
