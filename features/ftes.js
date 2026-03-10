export class ProductPage {


    constructor(page) {
        this.title = page.locator('div.product-name h1');
        this.addToCartBtn = page.getByRole('button', { name: /Add to cart/i });
        this.barNotification = page.locator('.bar-notification.success');
    }

    async open(slug) {
        await this.page.goto(slug);
        await expect(this.title).toBeVisible();
    }

    async configure(steps) {
        for (const step of steps) await step(this.page);
    }

    async addToCart() {
        await this.addToCartBtn.first().click();
        await expect(this.barNotification).toBeVisible();

    }
}