import { useSelector } from "react-redux"
import type { RootState } from "./hieghtRedux"
import sectionImg from './imgs/section-img.png'
import medicalServices from "./arrays/aboutArray"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg from './imgs/about-img.jpeg'

export default function About() {

  const { navbarHeight } = useSelector((state: RootState) => { return state.layout })
  return (
    <section style={{ scrollMarginTop: navbarHeight }} id={`about`} className={`py-20 bg-white`}>

      <div className={`max-w-300 mx-auto px-8`}>

        {/* stable component h2 img p */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>Why pick us</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>Our medical center provides comprehensive healthcare services designed to support every member of your family.
            From routine check-ups to specialized treatments, we are committed to delivering compassionate care and
            clinical excellence in a welcoming environment. </p>

        </div>

        {/* row */}
        <div className={` grid  grid-cols-[1fr_1fr] gap-16 items-center max-[900px]:grid-cols-1 `}>

          <div className={` flex flex-col gap-2.5`}>
            <h3 className={`text-[25px]`}>Who We Are</h3>
            <hr className={`w-15  h-0.75  bg-light-blue border-0`} />

            <p className={`text-[16px]! pb-4`}>We take health care personally at MedStar hospital. Because excellence in health care is about more than just medicine, technology, tests and treatments.</p>
            <p className={`text-[16px]! pb-4`}>It is about really caring for people with dignity and respect. Thats what we do. We are dedicated to providing the best care to meet the needs of people for our community, for our patients -- for you.</p>
            <div className={`grid grid-cols-2  max-[630px]:grid-cols-1 max-[630px]:gap-3 max-[1100px]:grid-cols-1 max-[900px]:grid-cols-2 gap-x-n6 gap-y-2 `}>
              {medicalServices.map((item) => {
                return (
                  <div className={`w-full   flex items-center gap-2`} key={item.id}>
                    <FontAwesomeIcon className={`text-light-blue`} icon={item.icon}></FontAwesomeIcon>
                    <span className={``}>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={` flex justify-center items-center`}><img className={`w`} src={aboutImg} alt="" /></div>

        </div>

      </div>
    </section>
  )
}