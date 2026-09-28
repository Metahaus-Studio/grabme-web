import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['partners'].title[0],description:pages['partners'].intro[0],alternates:{canonical:'/partners'}};
export default function Page(){return <InfoPage slug="partners"/>}
