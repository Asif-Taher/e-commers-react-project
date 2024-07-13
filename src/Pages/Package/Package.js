import React from 'react'
import './Package.css';
import PackageHero from '../../Compontents/Packagehero/PackageHero';
import PopularDescription from '../../Compontents/PopularDescription/PopularDescription';
import PackageBanner from '../../Compontents/PackageBanner/PackageBanner';
import TipArtical from '../../Compontents/TipArtical/TipArtical';
export default function Package() {
  return (
    <div className='package'>
     <PackageHero></PackageHero>
     <PopularDescription></PopularDescription>
     <PackageBanner></PackageBanner>
     <TipArtical></TipArtical>
    </div>
  )
}
