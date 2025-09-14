/** Navigation dto. */
export class NavigationDto {
  /**
   * Navigation dto constructor.
   * @param {Object} dto The dto.
   * @param {string} dto.home The home.
   * @param {string} dto.order The order.
   * @param {string} dto.our_customer The our customer.
   * @param {string} dto.about_us The about us.
   * @param {string} dto.contact_us The contact us.
   */
  constructor(dto) {
    this.home = dto.home;
    this.order = dto.order;
    this.our_customer = dto.our_customer;
    this.about_us = dto.about_us;
    this.contact_us = dto.contact_us;
  }
}
