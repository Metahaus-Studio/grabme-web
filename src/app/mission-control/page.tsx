import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['mission-control'].title[0],description:pages['mission-control'].intro[0],alternates:{canonical:'/mission-control'}};
export default function Page(){return <InfoPage slug="mission-control"/>}
