
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
// BaseURL
export const baseURL = 'http://127.0.0.1:9000/'
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
export function dateTimeFormatter(timeStamp: any) {
	return timeStamp && timeStamp.substring(0, timeStamp.lastIndexOf(' ')).split('T').join(' ');
}
export function dateDayFormatter(timeStamp: any) {
  const d = new Date(timeStamp);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = d.getDay();
	return weekday[day];
}