import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['account'].title[0],description:pages['account'].intro[0],alternates:{canonical:'/account'}};
export default function Page(){return <InfoPage slug="account"/>}
