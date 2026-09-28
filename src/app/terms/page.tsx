import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['terms'].title[0],description:pages['terms'].intro[0],alternates:{canonical:'/terms'}};
export default function Page(){return <InfoPage slug="terms"/>}
