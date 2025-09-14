import { navigationMapper } from './navigationMapper';
import { termsMapper } from './termsMapper';
import { TranslationsDto } from '../dtos';
import { Translations } from '../../models';

/** Translation mapper. */
class TranslationMapper {
  /**
   * From dto to model.
   * @param {TranslationsDto} dto The dto.
   * @returns {Translations} The model.
   */
  fromDto(dto) {
    if (!(dto instanceof TranslationsDto)) {
      throw new Error('Invalid translations dto!');
    }
    const navigation = navigationMapper.fromDto(dto.navigation);
    const terms = termsMapper.fromDto(dto.terms);
    return new Translations({ navigation, terms });
  }
}

export const translationMapper = new TranslationMapper();
