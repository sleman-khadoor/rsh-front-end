
import { getCurrentLocale } from './i18n-utils'

// It will be available as decodeProxy()
export function decodeProxy (response : any) {
    return JSON.parse(JSON.stringify(response));
}
// It will be available as decodeProxy()
export function getSlugByLang (slug : any) {
    const locale = getCurrentLocale();
    if (locale === 'en') {
        return slug.en
    } else {
       return slug.ar
    }
}
// BaseURL
export const baseURL = 'http://127.0.0.1:8000/'
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
export function dateDayFormatter(timeStamp: any, lang: string) {
  const d = new Date(timeStamp);
  const weekday_en = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const weekday_ar = ["الأحد","الاثنين","الثلاثاء","الإربعاء","الخميس","الجمعة","السبت"];
  let day = d.getDay();
	return lang === 'ar' ? weekday_ar[day] :  weekday_en[day];
}