import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
http.createServer((req,res)=>{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);return res.end()}const target=[file,file+'.html',path.join(file,'index.html')].find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());if(!target){res.writeHead(404);return res.end('Not found')}const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.json':'application/json','.xml':'application/xml'}[path.extname(target)]||'text/plain';res.writeHead(200,{'Content-Type':type});fs.createReadStream(target).pipe(res)}).listen(3190,'127.0.0.1',()=>console.log('GrabMe preview: http://127.0.0.1:3190'));
