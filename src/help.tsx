import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { helpArray } from './arrays/helpArray'
import sectionImg from './imgs/section-img.png'

export default function Help() {
  return (
    <section className={`bg-white py-20`} >
      <div className={`max-w-300 mx-auto px-8`}>
        {/* stable component h2 img p */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}> We Are Always Ready To Help You & Your Family</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}> Our dedicated team combines advanced medical technology with a compassionate approach to ensure you receive the highest quality care tailored to your unique needs.</p>
        </div>

        {/* row */}
        <div className={`grid grid-cols-3  max-[800px]:grid-cols-2 max-[630px]:grid-cols-1  p-3 gap-14 text-center bgc-amber-400`}>
          {helpArray.map((item) => {
            return (
              <div className={` py-2 flex flex-col gap-5 relative last:max-[800px]:col-span-2 last:max-[630px]:col-span-1`} key={item.id}>
                <div className={`text-3xl text-light-blue p-6 border  hover:bg-light-blue hover:text-white cursor-pointer duration-300   w-fit mx-auto rounded-full`}><FontAwesomeIcon icon={item.icona}></FontAwesomeIcon></div>
                <h3>{item.te}</h3>
                <p>{item.longTe}</p>
                {item.id < 3 &&
                  <div className={`absolute max-[830px]:hidden -right-20 top-10 border-dotted border-t-4  text-light-blue  w-1/3`}></div>

                }

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}