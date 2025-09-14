/** Terms. */
export class Terms {
  /**
   * Terms constructor.
   * @param {Object} data The data.
   * @param {Object} data.labels The labels.
   * @param {Array<string>} data.textStartGroup The text start group.
   * @param {Array<string>} data.textMiddleGroup The text middle group.
   * @param {Array<string>} data.textEndGroup The text end group.
   */
  constructor(data) {
    this.labels = data.labels;
    this.textStartGroup = data.textStartGroup;
    this.textMiddleGroup = data.textMiddleGroup;
    this.textEndGroup = data.textEndGroup;
  }
}
