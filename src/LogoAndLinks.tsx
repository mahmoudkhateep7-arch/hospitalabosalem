import { useLayoutEffect, useRef } from 'react'
import imgLogo from './imgs/logo.png'
import { useDispatch } from 'react-redux'
import { setNavbarHeight, type AppDispatch } from './hieghtRedux'
const logoAndLinksArray = ['home', 'about', 'services', 'doctors', 'blogs', 'contact']

export default function LogoAndLinks() {
  const dispatch: AppDispatch = useDispatch()
  const divRef = useRef(null)
  useLayoutEffect(() => {
    if (divRef.current) {

      const resizeObserver = new ResizeObserver((entries) => {
        for (let item of entries) {
          dispatch(setNavbarHeight(item.contentRect.height))
        }
      })
      resizeObserver.observe(divRef.current)
    }
  })
  return (

    <div ref={divRef} className={`fixed z-50 top-0 w-full shadow-sm bg-white`}>
      {/* container */}
      <div className={`max-w-300 mx-auto`}>
        {/* parent of logo and links */}
        <div className={` p-8 flex min-h-25 max-[650px]:flex-col max-[650px]:gap-4  justify-between items-center`}>

          <div><a href="#home"><img className={`w-62.5 max-[950px]:w-40`} src={imgLogo} alt="logo" /></a></div>

          <div className={` grid grid-cols-6 gap-4 max-[810px]:gap-2 max-[530px]:grid-cols-3`}>
            {logoAndLinksArray.map((item) => {
              return (
                <a className={'text-dark-gray font-medium hover:text-light-blue duration-300  capitalize'} key={item} href={`#${item}`}>{item}</a>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}