import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['contact'].title[0],description:pages['contact'].intro[0],alternates:{canonical:'/contact'}};
export default function Page(){return <InfoPage slug="contact"/>}
