import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { priciesArray } from './arrays/pricesArray'
import sectionImg from './imgs/section-img.png'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
export default function Prices() {

  return (
    <section className={`py-20 bg-bg-white`}>
      <div className={`max-w-300 px-8 mx-auto`}>

        {/* stable */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>We Provide You The Best TreatmentIn Reasonable Price</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>Delivering world-class medical expertise and compassionate care at rates that make quality healthcare accessible to everyone."
          </p>
        </div>

        {/* row */}
        <div className={`grid grid-cols-3 gap-8 max-[1100px]:grid-cols-2 max-[730px]:grid-cols-1`}>
          {priciesArray.map((item) => {
            return (
              <div className={`bg-white px-8 py-14 border border-[#ddd]`} key={item.name}>

                <div className={`text-center flex flex-col  pb-8`}>
                  <div><FontAwesomeIcon style={{ rotate: item.id == 3 ? '270deg' : '0deg' }} className={` text-[60px] text-light-blue`} icon={item.icon}></FontAwesomeIcon></div>
                  <h3 className={`text-2xl font-medium! pt-8`}>{item.name}</h3>
                  <p className={`text-4xl! text-light-blue! font-semibold`}>${item.price} <span className={`text-[16px] text-light-gray font-light`}>/ visit</span></p>
                </div>

                <div className={`[&_div]:flex [&_.fa-circle-check]:text-light-blue [&_div]:justify-between flex flex-col gap-3 [&_div]:text-light-gray`}>
                  {item.id == 1 && <>
                    <div>Professional Consultation<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Laser Whitening Session<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Post-Care Kit Included<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                    <div>Up to 8 Shades Lighter<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                    <div>Sensitivity Treatment<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                  </>}
                  {item.id == 2 && <>
                    <div>Pre-operative Screening<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Minimally Invasive Options<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Advanced Cardiac Imaging<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>24/7 Nursing Support<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                    <div>Follow-up Consultations<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                  </>}
                  {item.id == 3 && <>
                    <div>Specialist Consultation<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>General Anesthesia<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Post-Op Recovery Plan<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Non-Invasive Alternatives<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                    <div>Certified Surgical Facility<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></div>
                  </>}

                </div>

                <div className={`flex pt-7`}>
                  <a className={`cursor-pointer w-full text-center py-2.5 px-6 text-[14px] rounded-[5px] bg-light-blue text-white font-medium hover:bg-[#135fa1] duration-300`} href="#contact">Book Now</a>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}