import { NavigationDto } from '../dtos';
import { Navigation } from '../models';

/** Navigation mapper. */
class NavigationMapper {
  /**
   * From dto to model.
   * @param {NavigationDto} dto The dto.
   * @returns {Navigation} The model.
   */
  fromDto(dto) {
    if (!(dto instanceof NavigationDto)) {
      throw new Error('Invalid navigation dto!');
    }
    return new Navigation(dto);
  }
}

/** Navigation mapper. */
export const navigationMapper = new NavigationMapper();
