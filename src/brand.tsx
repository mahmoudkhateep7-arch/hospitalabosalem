import img1 from './imgs/brand-1.png'
import img2 from './imgs/brand-2.png'
import img3 from './imgs/brand-3.png'
import img4 from './imgs/brand-4.png'

export default function Brand() {
  return (
    <section id={`brand-bg`} className={`py-20 bg-amber-300 relative z-1`}>
      <div className={`absolute z-[-1] inset-0 bg-light-blue opacity-[0.8]`}></div>
      <div className={`max-w-300 mx-auto px-8`}>
        {/* row */}
        <div className={`grid grid-cols-4 gap-4 max-[630px]:pl-10 max-[630px]:grid-cols-1 max-[630px]:gap-10  max-[1000px]:grid-cols-2  `}>
          <div className={`flex  `}><img className={`w-50 min-w-50 max-w-50`} src={img1} alt="brand img" /></div>
          <div className={`flex  `}><img className={`w-50 min-w-50 max-w-50`} src={img2} alt="brand img" /></div>
          <div className={`flex  `}><img className={`w-50 min-w-50 max-w-50`} src={img3} alt="brand img" /></div>
          <div className={`flex  `}><img className={`w-50 min-w-50 max-w-50`} src={img4} alt="brand img" /></div>

        </div>
      </div>
    </section>
  )
}