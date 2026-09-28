import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['about'].title[0],description:pages['about'].intro[0],alternates:{canonical:'/about'}};
export default function Page(){return <InfoPage slug="about"/>}
