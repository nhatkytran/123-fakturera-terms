import { NavigationDto } from '../dtos';
import { Navigation } from '../../models';

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
    return new Navigation({
      home: dto.home,
      order: dto.order,
      ourCustomer: dto.our_customer,
      aboutUs: dto.about_us,
      contactUs: dto.contact_us,
    });
  }
}

/** Navigation mapper. */
export const navigationMapper = new NavigationMapper();
