/** Terms mapper. */
import { TermsDto } from '../dtos';
import { Terms } from '../../models';

/**
 * Create text group.
 * @param {Object} dto The dto.
 * @param {string} filterValue The filter value.
 * @returns {Array<string>} The text group.
 */
const createTextGroup = (dto, filterValue) => {
  return Object.entries(dto)
    .filter(([key]) => key.startsWith(filterValue))
    .map(([key, value]) => [Number(key.split('_').at(-1)), value])
    .sort((a, b) => a[0] - b[0])
    .map(([_, value]) => value);
};

/** Terms mapper. */
class TermsMapper {
  /**
   * From dto to model.
   * @param {TermsDto} dto The dto.
   * @returns {Terms} The model.
   */
  fromDto(dto) {
    if (!(dto instanceof TermsDto)) {
      throw new Error('Invalid terms dto!');
    }
    const labels = {
      close: dto.close,
      terms: dto.terms,
    };
    const textStartGroup = createTextGroup(dto, 'terms_text_start_');
    const textMiddleGroup = createTextGroup(dto, 'terms_text_middle_');
    const textEndGroup = createTextGroup(dto, 'terms_text_end_');
    return new Terms({ labels, textStartGroup, textMiddleGroup, textEndGroup });
  }
}

/** Terms mapper. */
export const termsMapper = new TermsMapper();
