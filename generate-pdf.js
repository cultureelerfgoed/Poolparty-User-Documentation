const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://<your-github-pages-url>', { waitUntil: 'networkidle0' });

  // Specify the PDF output
  await page.pdf({
    path: 'output/documentation.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();
