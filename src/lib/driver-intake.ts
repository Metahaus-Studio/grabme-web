// Original table and bucket contract. Enable after staging verification.
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const driverIntakeEnabled=process.env.NEXT_PUBLIC_DRIVER_INTAKE_ENABLED==='true' && Boolean(url && key);
const documents=[['driver_license_file','driver-licenses'],['public_license_file','public-licenses'],['id_document_file','id-documents'],['selfie_file','selfies']] as const;
const fields=['full_name','phone','whatsapp','email','nationality','age','city','vehicle_type','vehicle_brand','vehicle_model','vehicle_year','own_vehicle','electric_vehicle','interested_in_grabme_ev','ev_purchase_plan_interest','driving_license','public_service_license','experience_years','availability','current_occupation','notes'];
export async function submitDriverApplication(data:FormData,language:'en'|'ar'){
 if(!driverIntakeEnabled || !url || !key)throw new Error('disabled');
 for(const [name] of documents){const file=data.get(name);if(!(file instanceof File) || !file.size){if(name!=='public_license_file')throw new Error('documents');continue;}
 if(file.size>6*1024*1024 || (!['image/jpeg','image/png','image/webp','image/heic','image/heif'].includes(file.type) && !(name!=='selfie_file' && file.type==='application/pdf')))throw new Error('documents');}
 const {createClient}=await import('@supabase/supabase-js');
 const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});
 const payload:Record<string,string>=Object.fromEntries(fields.map(name=>[name,String(data.get(name)??'').trim()]));
 payload.previous_platforms=data.getAll('previous_platforms').join(',');payload.language=language;payload.status='new';
 const batch=crypto.randomUUID();
 // No automatic retry: an interrupted insert may already have succeeded.
 for(const [name,folder] of documents){const file=data.get(name);payload[name]='';if(file instanceof File && file.size){const path=`${folder}/${batch}-${crypto.randomUUID()}`;const {error}=await client.storage.from('driver-documents').upload(path,file,{contentType:file.type,upsert:false});if(error)throw new Error('submission');payload[name]=path;}}
 const {error}=await client.from('driver_applications').insert([payload]);if(error)throw new Error('submission');
}
