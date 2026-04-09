import TitleLine from "./titleLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter, faVimeoV, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight, faCopyright, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const quickLinks = ['home', 'about', 'services', 'doctors', 'blogs', 'contact']
const socilaMedia = [
  { icon: faFacebookF, url: "https://facebook.com" },
  { icon: faGooglePlusG, url: "https://google.com" },
  { icon: faTwitter, url: "https://twitter.com" },
  { icon: faVimeoV, url: "https://vimeo.com" },
  { icon: faPinterestP, url: "https://pinterest.com" },
];


export default function Footer() {
  return (
    <section className={`pt-20 bg-light-blue flex flex-col gap-20 text-white!`}>
      <div className={` px-8`}>
        {/* row */}

        <div className={`grid grid-cols-[1.5fr_1fr_1.5fr_1.5fr] max-[740px]:grid-cols-1 gap-x-12 gap-y-16 max-[1100px]:grid-cols-2`}>

          <div className={`brder flex flex-col gap-8`}>
            <TitleLine title={'About us'}></TitleLine>
            <p className={`text-white!`}>Providing world-class medical care with a patient-first approach. Our dedicated team of specialists is committed to your health and well-being through advanced technology and compassionate service.</p>
            <div className={`flex   gap-2`}>
              {socilaMedia.map((item) => {
                return (
                  <a className={`text-[14px]  w-8 hover:bg-white hover:text-light-blue duration-300 h-8 border border-white flex justify-center items-center rounded-full`} key={item.url} href={item.url}><FontAwesomeIcon icon={item.icon}></FontAwesomeIcon></a>
                )
              })}
            </div>
          </div>

          <div className={` flex flex-col gap-8`}>
            <TitleLine title={'Quick Links'}></TitleLine>
            <div className={`flex flex-col gap-2.5`}>
              {quickLinks.map((item) => {
                return (
                  <a key={item} href={`#${item}`} className={`flex items-center gap-2.5 hover:translate-x-2.5 duration-150`}>
                    <FontAwesomeIcon className={`text-white`} icon={faCaretRight}></FontAwesomeIcon>
                    <span>{item}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className={`[&_p]:text-white!   flex flex-col gap-8   `}>
            <TitleLine title={'Open Hours'}></TitleLine>
            <p>We are here for you when you need us most. Please note our standard operating hours below. For emergency care outside of these times, please visit our 24/7 urgent care center</p>
            <div className={`flex flex-col gap-2.5`}>
              <p>Monday - Thursday 8.00 - 20.00</p>
              <p>Friday 9.00 - 15.00</p>
              <p>Saturday 9.00 - 18.30</p>
            </div>


          </div>

          <div className={`  flex flex-col gap-8 `}>
            <TitleLine title={'Newsletter'}></TitleLine>
            <p className={`text-white!`}>Stay informed about the latest health tips, hospital news, and medical breakthroughs. Subscribe to our monthly newsletter to get expert wellness advice delivered straight to your inbox.</p>
            <div className={`flex`}>
              <input className={`p-3.5 flex-1  rounded-[10px_0px_0px_10px] border border-white  outline-none`} placeholder={'emial address'} type="email" />
              <button className={` p-3.5 right-0 rounded-[0px_10px_10px_0]  text-light-blue text-[16px] cursor-pointer hover:text-light-gray outline-none duration-150 bg-white`}><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
            </div>

          </div>
        </div>



      </div>

      <div className={`bg-[#135fa1] py-10 max-[420px]:text-sm!`}>
        <div className={`bg-acmber-300 max-w-300 mx-auto flex justify-center text-center  items-center  gap-1`}>
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          all rights preserved | made by mahmoud khateep
        </div>
      </div>
    </section >
  )
}