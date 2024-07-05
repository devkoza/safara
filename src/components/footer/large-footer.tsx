import { footerLinks } from '@/constants'
import Link from 'next/link';


type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => {
  return (
    <div className='footer_column '>
          <h4 className='font-semibold text-lg text-slate-50'>{title}</h4>
          <ul className='flex flex-col gap-1 font-normal text-slate-100 '>{links.map((link) => <Link href='/' key={link}>{link}</Link>)}
              
          </ul>
    </div>
  )
}



const LargeFooter = () => {
  return (
    <footer className='flexstart footer '>
          <div className='flex flex-col gap-12 w-full'>
              <div className='flex items-start flex-col'>

            
              </div>
              <div className='flex flex-wrap gap-12 mb-3 '>
                  <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                  <div className='flex-1 flex flex-col gap-4'>
                      <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                      
                  </div>
                  <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                  
                  <div className='flex-1 flex flex-col gap-4'>
                      <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                      
                  </div>
                  
              </div>
          </div>

          <div className='flexBetween mt-6 footer_copyright text-slate-300'>
              <p>@ 2024 Ocean Safaris</p>
              <p className='text-slate-400'>
                  Developer | <span className='text-slate-400 font-semibold'>CHN</span> STUDIOS
              </p>
              
          </div>
    </footer>  

  )
}

export default LargeFooter