import puppeteer from 'puppeteer';

async function fetchDescription() {
    const browser = await puppeteer.launch({
        headless: "new" // Opt-in to the new Headless mode
    });    
    const page = await browser.newPage();
    await page.goto('https://mangadex.org/title/801513ba-a712-498c-8f57-cae55b38cc92/berserk', { waitUntil: 'networkidle0' }); // Waits until no new network connections are made within a timeframe
    const description = await page.evaluate(() => {
        const el = document.querySelector('.md-md-container p');
        return el ? el.textContent : 'Description not found';
    });
    console.log(description);
    await browser.close();
}

fetchDescription();

