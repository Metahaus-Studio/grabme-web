import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['drivers'].title[0],description:pages['drivers'].intro[0],alternates:{canonical:'/drivers'}};
export default function Page(){return <InfoPage slug="drivers"/>}
