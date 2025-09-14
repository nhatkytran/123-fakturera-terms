import supabase from '@/shared/config/supabase';
import { TranslationsDto } from '../dtos';
import { translationMapper } from '../mappers/translationMapper';

/**
 * Reformat data.
 * @param {Object} data The data to reformat.
 * @returns {Object} The reformatted data.
 */
function reformatData(data) {
  const result = {};

  data.forEach(row => {
    const ns = row.translation_keys.namespaces.type_name;
    const key = row.translation_keys.key;
    const val = row.text;
    if (!result[ns]) result[ns] = {};
    result[ns][key] = val;
  });

  return result;
}

/**
 * Get translations.
 * @param {string} languageCode The language code.
 */
export async function getTranslations(languageCode = 'en') {
  const { data, error } = await supabase
    .from('translations')
    .select(
      `
        text,
        language_code,
        translation_keys (
          key,
          namespaces (type_name)
        )
      `,
    )
    .eq('language_code', languageCode);

  if (error) {
    console.error(error);
    throw new Error('Something went wrong!');
  }

  const translationsDto = new TranslationsDto(reformatData(data));
  return translationMapper.fromDto(translationsDto);
}
