import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['corporate'].title[0],description:pages['corporate'].intro[0],alternates:{canonical:'/corporate'}};
export default function Page(){return <InfoPage slug="corporate"/>}
