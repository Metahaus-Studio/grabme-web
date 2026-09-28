import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(process.env.NEXT_PUBLIC_RELEASE_APPROVED==='true'?{allow:'/',disallow:['/admin/','/account/']}:{disallow:'/'})},sitemap:'https://www.grabmeapp.com/sitemap.xml'}}
