import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['ride-types'].title[0],description:pages['ride-types'].intro[0],alternates:{canonical:'/ride-types'}};
export default function Page(){return <InfoPage slug="ride-types"/>}
