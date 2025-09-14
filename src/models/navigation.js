/** Navigation. */
export class Navigation {
  /**
   * Navigation constructor.
   * @param {Object} data The data.
   * @param {string} data.home The home.
   * @param {string} data.order The order.
   * @param {string} data.ourCustomer The our customer.
   * @param {string} data.aboutUs The about us.
   * @param {string} data.contactUs The contact us.
   */
  constructor(data) {
    this.home = data.home;
    this.order = data.order;
    this.ourCustomer = data.ourCustomer;
    this.aboutUs = data.aboutUs;
    this.contactUs = data.contactUs;
  }
}
