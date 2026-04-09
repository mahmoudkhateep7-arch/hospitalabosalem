export default function TitleLine({ title }: { title: string }) {
  return (
    <div>
      <h3 className={`text-[22px] pb-2 text-white!`}>{title}</h3>
      <hr className={`w-12  h-0.75  bg-white border-0`} />
    </div>
  )
}