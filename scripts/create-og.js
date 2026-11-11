const sharp = require('sharp');
const path = require('path');

async function createCenteredOgImage() {
  const width = 1200;
  const height = 630;

  const markPath = path.join(__dirname, '..', 'public', 'brand', 'iki-mark.png');

  // Resize mark to 240x240
  const markSize = 240;
  const markBuffer = await sharp(markPath)
    .resize(markSize, markSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const markX = Math.round((width - markSize) / 2);
  const markY = 90;

  const svgCard = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#FAFAFA"/>
    <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="16" fill="#FFFFFF" stroke="#EAEAEA" stroke-width="2"/>
    
    <!-- Centered Brand Typography below Logo -->
    <text x="${width / 2}" y="390" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" letter-spacing="-1.5" fill="#111215" text-anchor="middle">iki</text>
    
    <text x="${width / 2}" y="430" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" letter-spacing="3.5" fill="#2563EB" text-anchor="middle">UI/UX DESIGN &amp; WEB DEVELOPMENT</text>
    
    <text x="${width / 2}" y="475" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#555761" text-anchor="middle">Clean UI/UX design and modern websites for companies, studios, and businesses.</text>
    
    <!-- Top & Bottom Minimal Swiss Datum lines -->
    <line x1="80" y1="525" x2="${width - 80}" y2="525" stroke="#F0F0F0" stroke-width="1"/>
    
    <text x="${width / 2}" y="555" font-family="monospace" font-size="11" font-weight="500" letter-spacing="2" fill="#8E919C" text-anchor="middle">LAGOS / WORLDWIDE &#183; SELECTED WORK</text>
  </svg>
  `;

  const outputPath = path.join(__dirname, '..', 'public', 'brand', 'og-share.png');
  
  await sharp(Buffer.from(svgCard))
    .composite([
      {
        input: markBuffer,
        top: markY,
        left: markX,
      }
    ])
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log('Regenerated centered OG image with logo at:', outputPath);
}

createCenteredOgImage().catch(err => {
  console.error(err);
  process.exit(1);
});
