import SearchBar from "@/components/SearchBar"

export const metadata = {
  title: "Home"
}

export default function Home( )
{
  return (
    <div className="flex flex-col pt-64 items-center w-screen min-h-screen bg-[#161a1d]">
      <h1 className="text-center mb-4 text-5xl md:text-6xl text-white">Github Profile</h1>
      <SearchBar />
    </div>
  )
}