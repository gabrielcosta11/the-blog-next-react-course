import clsx from "clsx";

type ContainerProps = {
    children: React.ReactNode
}

export default async function Container({children}: ContainerProps) {

  return (
    <div className={clsx('text-slate-900', 'bg-slate-100', 'min-h-screen')}>
      <div className={clsx('max-w-5xl', 'mx-auto', 'px-8')}>
        {children}
      </div>
    </div>
  );
}
