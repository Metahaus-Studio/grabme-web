"use client";
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {T,useLocale} from './Locale';
export type Scene='city'|'people'|'cabin';
const assets={city:'city-white',people:'people-black',cabin:'cabin'};
const descriptions={city:['A white electric sedan beside the Beirut waterfront.','سيارة سيدان كهربائية بيضاء بجانب الواجهة البحرية في بيروت.'],people:['A driver holds the rear door of a black electric sedan while a passenger gets in.','سائق يمسك الباب الخلفي لسيارة سيدان كهربائية سوداء بينما تدخل الراكبة.'],cabin:['A light-filled connected passenger cabin.','مقصورة ركاب متصلة ومضيئة.']};
export function EditorialImage({scene='city',href,label=['Explore your journey','اكتشف رحلتك'],priority=false}:{scene?:Scene;href?:string;label?:string[];priority?:boolean}){
 const {ar}=useLocale();
 const photo=<><Image src={`/images/${assets[scene]}.webp`} alt={descriptions[scene][ar?1:0]} width={1440} height={960} sizes="(max-width: 650px) 100vw, 50vw" priority={priority}/>{href && <span className="photo-link-label"><T en={label[0]} ar={label[1]}/><ArrowUpRight size={19}/></span>}</>;
 return <figure className={`editorial-image scene-${scene}`}>{href?<Link href={href} aria-label={label[ar?1:0]}>{photo}</Link>:photo}<figcaption><T en="Illustrative imagery. Vehicles and services may vary." ar="صور توضيحية. قد تختلف السيارات والخدمات."/></figcaption></figure>;
}
