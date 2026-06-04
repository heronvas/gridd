import { chromium } from 'playwright';
import path from 'path';

const dir = 'C:/Users/heron/AppData/Local/Temp/gridd_v3';
const browser = await chromium.launch({ headless: true });

async function shot(url, name, scrolls = []) {
  const p = await browser.newPage();
  await p.setViewportSize({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await p.waitForTimeout(1500);
  for (const y of scrolls) { await p.evaluate(s => window.scrollTo(0, s), y); await p.waitForTimeout(400); }
  await p.screenshot({ path: path.join(dir, name + '.png') });
  await p.close();
}

// Home pricing - check modal trigger
const home = await browser.newPage();
await home.setViewportSize({ width: 1440, height: 900 });
await home.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await home.waitForTimeout(1500);
for (const y of [900, 1800, 2700, 3600, 4500, 5200]) { await home.evaluate(s => window.scrollTo(0, s), y); await home.waitForTimeout(300); }
await home.screenshot({ path: path.join(dir, 'pricing_section.png') });

// Click "Start Free Trial" on Starter card
const starterBtn = home.locator('button:has-text("Start Free Trial")').first();
await starterBtn.click();
await home.waitForTimeout(600);
await home.screenshot({ path: path.join(dir, 'modal_open.png') });

// Fill form  
await home.fill('input[placeholder="Alex Johnson"]', 'Jane Smith');
await home.fill('input[placeholder="alex@company.com"]', 'jane@example.com');
await home.fill('input[placeholder="Acme Inc."]', 'TechCorp');
await home.screenshot({ path: path.join(dir, 'modal_filled.png') });

// Submit
await home.click('button[type="submit"]');
await home.waitForTimeout(1800);
await home.screenshot({ path: path.join(dir, 'modal_success.png') });
await home.close();

// Inner pages
await shot('http://localhost:5173/about', 'page_about');
await shot('http://localhost:5173/blog', 'page_blog');
await shot('http://localhost:5173/careers', 'page_careers');
await shot('http://localhost:5173/legal', 'page_legal');
await shot('http://localhost:5173/integrations', 'page_integrations');
await shot('http://localhost:5173/api-docs', 'page_apidocs');

// Check navbar — no Sign In
const navCheck = await browser.newPage();
await navCheck.setViewportSize({ width: 1440, height: 900 });
await navCheck.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
const signInVisible = await navCheck.locator('text=Sign in').isVisible().catch(() => false);
console.log('Sign in still visible:', signInVisible); // should be false
await navCheck.screenshot({ path: path.join(dir, 'navbar_no_signin.png'), clip: { x: 0, y: 0, width: 1440, height: 70 } });
await navCheck.close();

await browser.close();
console.log('Done:', dir);
