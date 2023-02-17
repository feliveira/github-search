import Link from "next/link";

export default function NotFound( )
{
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-[#161a1d]">
            <h1 className="mb-6 text-4xl md:text-5xl text-offWhite text-center">Oops, profile not found.</h1>
            <Link className="text-2xl md:text-4xl text-offWhite border border-offWhite px-6 pt-2 pb-3 hover:text-[#161a1d] hover:bg-offWhite transition-all delay-100 rounded-lg" href="/">Try again</Link>
        </div>
    )
}