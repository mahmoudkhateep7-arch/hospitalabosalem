import sectionImg from './imgs/section-img.png'
import contactImg from './imgs/contact.jpg'
import { useSelector } from 'react-redux'
import type { RootState } from './hieghtRedux'
const departments = ["Department", "Dental", "Ophthalmology", "Surgery", "Childbirth", "Intensive Care", "Lab"]
const doctors = ["Doctor", "Zyad Ali", "Mazen Osama", 'Aisha Mostafa']

export default function Contact() {
  const { navbarHeight } = useSelector((state: RootState) => { return state.layout })

  return (
    <section style={{ scrollMarginTop: navbarHeight }} id={`contact`} className={`bg-bg-white py-20`}>
      <div className={`max-w-300 mx-auto px-8`}>

        {/* stable component h2 img p */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>We Are Always Ready To Help You. Book An Appointment</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>Our team of dedicated specialists is here to provide personalized care tailored to your needs. Schedule your visit today for a healthier tomorrow."</p>
        </div>

        {/* row */}
        <div className={`grid grid-cols-2  max-[920px]:grid-cols-1  pd-3 gap-14 items-center`}>

          {/*form  */}
          <div id={`form`} className={` text-light-gray   `}>
            <div className={` grid  grid-cols-2 gap-7 pb-5`}>
              <input className={`border `} type="text" placeholder={'Name'} />
              <input className={`border `} type="email" placeholder={'Email'} />
            </div>

            <div className={`grid  grid-cols-2 gap-7 pb-5`}>
              <input type="number" placeholder={'phone'} />
              <select name="department" >
                {departments.map((item) => {
                  return (
                    <option key={item} style={{ display: item == 'Department' ? 'none' : 'flex' }} value={item}>{item}</option>
                  )
                })}
              </select>
            </div>

            <div className={`grid  grid-cols-2 gap-7 pb-5`}>
              <select className={``} name="doctors" >
                {doctors.map((item) => {
                  return (
                    <option key={item} style={{ display: item == 'Dcotor' ? 'none' : 'flex' }} value={item}>{item}</option>
                  )
                })}
              </select>
              <input type="date" />
            </div>

            <div><textarea rows={6} className={`resize-none w-full`} placeholder={'write yor message here'}></textarea></div>
            <div className={`pt-6`}><button className={`py-3 px-7 bg-light-blue text-white`}>Book an appointment</button></div>
          </div>

          {/* img */}
          <div className={` flex justify-end   max-[920px]:justify-center`}><img className={`max-[920px]:w-4/5 max-[920px]:`} src={contactImg} alt="contact" /></div>
        </div>



      </div>
    </section>
  )
}