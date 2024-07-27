
import { getCurrentLocale } from './i18n-utils'

// It will be available as decodeProxy()
export function decodeProxy (response : any) {
    return JSON.parse(JSON.stringify(response));
}
// It will be available as decodeProxy()
export function getSlugByLang (slug : any) {
    const locale = getCurrentLocale();
    console.log('local value', getCurrentLocale());
    if (locale === 'en') {
        return slug.en
    } else {
       return slug.ar
    }
}
// API HEADER
export function API_HEADER() {
  try {
    const locale = getCurrentLocale()
    return {
        'lang': locale,
        Accept: 'application/json',
    }
  } catch (error) {
    console.error('Error getting locale:', error)
  }
}  
export function buildUrl(url: string, params: any) {
  const query = new URLSearchParams(params);
  return `${url}?${query.toString()}`;
}