export default function Avartar({src}:{src:string}) {
  return (
    <div className="size-16 aspect-square overflow-hidden rounded-full">
      <img 
        src={src} 
        alt="" />
    </div>
  );
}