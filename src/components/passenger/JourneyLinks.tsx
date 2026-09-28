import Link from 'next/link';
import {T} from './Locale';
const journeys=[['Ride with GrabMe','اركب مع GrabMe','/ride-types'],['Apply as a driver','قدّم طلباً كسائق','/drivers#driver-application'],['Business travel','تنقّل الشركات','/corporate'],['Students','للطلاب','/students'],['Airport journeys','رحلات المطار','/airport'],['GrabMe Connect','GrabMe Connect','/grabme-connect']];
export function JourneyLinks(){return <div className="two-grid info-cards">{journeys.map(([en,ar,href])=><Link key={href} className="feature-panel" href={href}><h2><T en={en} ar={ar}/></h2><span aria-hidden="true">↗</span></Link>)}</div>}
