/** Translations dto. */
export class TranslationsDto {
  /**
   * Translations dto constructor.
   * @param {Object} dto The dto.
   * @param {Object} dto.navigation The navigation.
   * @param {Object} dto.terms The terms.
   */
  constructor(dto) {
    this.navigation = dto.navigation;
    this.terms = dto.terms;
  }
}
