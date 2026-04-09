export default function News() {
  return (
    <section className={`py-20 bg-bg-newsLetter`}>
      <div className={`max-w-300 mx-auto`}>
        {/* row */}
        <div className={`grid grid-cols-2 max-[820px]:grid-cols-1 px-8 gap-14 items-center`}>

          <div className={`flex flex-col gap-2.5  `}>
            <h2 className={`text-2xl`}>Sign up for newsletter</h2>
            <p>Join our community to receive health tips, wellness updates, and exclusive clinic news directly in your inbox.</p>
          </div>

          <div className={` grid grid-cols-[2fr_1fr] max-[420px]:grid-cols-1 items-center justify-center gap-8`}>
            <input className={`p-3.5  rounded-xl bg-white border outline-none `} type="email" placeholder={'your email address'} />
            <button className={`py-3 px-7 bg-light-blue text-white`}>Subscribe</button>

          </div>

        </div>
      </div>

    </section>
  )
}