import clsx from "clsx";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <footer className='text-center mt-auto'>
                <p className={clsx('py-8')}>
                    <span>Copyright &copy; {new Date().getFullYear()} - </span>
                    <Link href='/'>The Blog</Link>
                </p>
            </footer>
        </>
    )
}