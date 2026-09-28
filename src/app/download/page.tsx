import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['download'].title[0],description:pages['download'].intro[0],alternates:{canonical:'/download'}};
export default function Page(){return <InfoPage slug="download"/>}
