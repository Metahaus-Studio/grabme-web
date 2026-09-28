import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','ride-types','membership','corporate','partners','contact','download','students','airport','grabme-connect','features','about','drivers','privacy','terms','account-deletion'].map(route=>({url:`https://www.grabmeapp.com/${route}`,changeFrequency:'monthly',priority:route?0.7:1}))}
