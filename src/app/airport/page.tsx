import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['airport'].title[0],description:pages['airport'].intro[0],alternates:{canonical:'/airport'}};
export default function Page(){return <InfoPage slug="airport"/>}
