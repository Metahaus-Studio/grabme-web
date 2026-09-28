import json, math
from pathlib import Path
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
import pypdfium2 as pdfium

root=Path(__file__).resolve().parents[1]
out=root/'archive/current-site-2026-09-28.pdf'
c=canvas.Canvas(str(out),pagesize=(842,595))
c.setTitle('GrabMe public website visual archive - 2026-09-28')
items=json.loads((root/'archive/inventory.json').read_text())
for entry in items:
 name=entry['url'].rstrip('/').split('/')[-1]
 if name=='www.grabmeapp.com': name='home'
 for mode in ['desktop','mobile']:
  im=Image.open(root/f'archive/{name}-{mode}.png').convert('RGB')
  width=770 if mode=='desktop' else 235
  scale=width/im.width
  chunk=int(485/scale)
  for i,y in enumerate(range(0,im.height,chunk)):
   c.setFillColorRGB(.06,.13,.08);c.setFont('Helvetica-Bold',13)
   c.drawString(36,568,f'{name.upper()} | {mode} | capture segment {i+1}')
   c.setFont('Helvetica',9);c.drawString(36,549,entry['url']+' | '+entry['capturedAt'])
   crop=im.crop((0,y,im.width,min(y+chunk,im.height)))
   h=crop.height*scale
   c.drawImage(ImageReader(crop),36,535-h,width=width,height=h)
   c.setFont('Helvetica',8);c.drawString(36,20,'Public visual record only. Source backup is separate. No form submissions or private Admin data captured.')
   c.showPage()
c.save()
doc=pdfium.PdfDocument(str(out))
thumbs=[]
for i,p in enumerate(doc):
 im=p.render(scale=.35).to_pil().convert('RGB')
 thumbs.append(im)
sheet=Image.new('RGB',(thumbs[0].width*5,thumbs[0].height*math.ceil(len(thumbs)/5)), '#cccccc')
for i,im in enumerate(thumbs):sheet.paste(im,((i%5)*im.width,(i//5)*im.height))
sheet.save(root/'archive/pdf-contact-sheet.jpg')
doc[0].render(scale=1.4).to_pil().save(root/'archive/pdf-first-page.png')
print(json.dumps({'pages':len(doc),'bytes':out.stat().st_size,'output':str(out)}))
