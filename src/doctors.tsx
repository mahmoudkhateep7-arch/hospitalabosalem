import { useSelector } from 'react-redux'
import sectionImg from './imgs/section-img.png'
import type { RootState } from './hieghtRedux'
import { doctorsArray } from './arrays/doctorsArray'

export default function Doctors() {
  const { navbarHeight } = useSelector((state: RootState) => { return state.layout })
  return (
    <section style={{ scrollMarginTop: navbarHeight }} id={'doctors'} className={`py-20 bg-bg-white`}>
      <div className={`max-w-300 mx-auto px-8`}>

        {/* stable component h2 img p */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>Meet Our Experienced Doctors</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>Our team of board-certified specialists is dedicated to providing compassionate, world-class healthcare tailored to your unique needs. </p>
        </div>

        {/* row */}
        <div className={`grid grid-cols-3 gap-14 text-center max-[900px]:grid-cols-2 max-[600px]:grid-cols-1`}>
          {doctorsArray.map((item) => {
            return (
              <div className={`flex flex-col bg-white`} key={item.id}>
                <div><img className={`w-full h-75 `} src={item.imgUrl} alt={item.name} /></div>
                <div className={`py-8 flex flex-col`}>
                  <h3 className={`text-2xl`}>{item.name}</h3>
                  <p className={`pt-2 pb-4 text-light-blue font-medium`}>{item.specialty}</p>
                  <a className={`cursor-pointer w-fit mx-auto  py-2.5 px-6 text-[14px] rounded-[20px] bg-light-blue text-white font-medium hover:bg-[#135fa1] duration-300`} href="#">Detaild</a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}