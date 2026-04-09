import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { infoArray } from "./arrays/infoArray"
export default function Info() {
  return (
    <section id={'info-bg'} className={` relative py-20 z-10`}>
      <div className={`absolute inset-0 bg-light-blue opacity-[0.8] z-[-1]`}></div>
      <div className={`max-w-300 mx-auto px-8`}>

        {/* row */}
        <div className={`grid-cols-4 grid max-[580px]:grid-cols-1 max-[580px]:gap-10 gap-4 max-[1000px]:grid-cols-2 text-white`}>
          {infoArray.map((item) => {
            return (
              <div className={`max-[580px]:pl-10 flex bg-amdber-300  gap-4`} key={item.id}>
                <div className={` text-3xl p-5 rounded-[50%] hover:bg-white hover:text-light-blue cursor-pointer duration-300  border-2 border-white`}><FontAwesomeIcon icon={item.icona}></FontAwesomeIcon></div>
                <div className={``}>
                  <span className={`text-3xl font-medium`}>{item.number}</span>
                  <p className={`text-white!`}>{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}