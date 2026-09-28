import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['features'].title[0],description:pages['features'].intro[0],alternates:{canonical:'/features'}};
export default function Page(){return <InfoPage slug="features"/>}
