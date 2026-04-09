import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
export default function Call() {
  return (
    <section id={'call-bg'} className={` relative py-20 z-10`}>
      <div className={`absolute inset-0 bg-light-blue opacity-[0.8] z-[-1]`}></div>
      <div className={`max-w-300 mx-auto p-8`}>

        <div className={` text-center max-w-150 mx-auto flex flex-col gap-5`}>
          <h2 className={`text-4xl text-white!`}>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
          <p className={`text-white!`}>Our team of dedicated professionals is available 24/7 to provide immediate assistance. Your health and safety are our top priorities.</p>
          <div className={`flex justify-center items-center  gap-5 `}>
            <a className={`text-light-blue bg-white hover:text-white border border-white cursor-pointer hover:bg-light-blue duration-300 px-5 py-2`} href="#">Contact Now</a>
            <a className={`px-5 hover:bg-white flex justify-center items-center gap-1 hover:text-dark-gray duration-300 py-2 bg-transparent text-white cursor-pointer border border-white`} href="#">Learn More<FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></a>

          </div>

        </div>

      </div>
    </section>
  )
}