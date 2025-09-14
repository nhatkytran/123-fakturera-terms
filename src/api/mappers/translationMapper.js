import { navigationMapper } from './navigationMapper';
import { termsMapper } from './termsMapper';
import { TranslationsDto } from '../dtos';
import { NavigationDto } from '../dtos/navigationDto';
import { TermsDto } from '../dtos/termsDto';
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
    const navigation = navigationMapper.fromDto(new NavigationDto(dto.navigation));
    const terms = termsMapper.fromDto(new TermsDto(dto.terms));
    return new Translations({ navigation, terms });
  }
}

/** Translation mapper. */
export const translationMapper = new TranslationMapper();
