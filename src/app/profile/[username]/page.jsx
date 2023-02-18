import RepoItem from '@/components/RepoItem';
import { notFound } from 'next/navigation';

export const metadata = {
    title: "Profile"
}

export default async function Profile( { params } )
{

        const fetchUser = await fetch(`https://api.github.com/users/${params.username}`, {
        cache: "no-store"
        })

        const user = await fetchUser.json()
        if( user.message && user.message === 'Not Found' )
        {
            notFound( )
        }

        const fetchRepos = await fetch(user.repos_url, {
            cache: "no-store"
        })
        const repos = await fetchRepos.json()

    return (
        <main className="flex flex-col text-center items-center justify-center w-full min-h-screen text-offWhite bg-[#161a1d]">
            <a href={ user.html_url }><img src={ user.avatar_url } className="w-36 h-36 rounded-full mx-auto" /></a>
            <h1>{ user.name } | { user.login }</h1>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                { user.location && <p>{ user.location }</p> }
            </div>

            { user.bio && <p>{user.bio}</p> }
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p>{ user.followers } followers · { user.following } following</p>
            </div>
            
            <p className='text-lg mt-4'>Repos</p>
            <p>Number of public repos: { repos.length }</p>

            <p className='text-lg my-4'>Most recent repos</p>
            {repos.length > 0 && 
                <div className='mt-3 flex flex-col md:flex-row flex-wrap w-[80%] items-center justify-center'>
                    { 
                        (
                            repos.length > 1 ? 
                            repos.sort(( a, b) => new Date(b.updated_at).getTime( ) - new Date(a.updated_at).getTime( ) ).slice(0, 6) : 
                            repos
                        ).map( repo => <RepoItem key={repo.id} repo={repo} /> )
                    }
                </div>
            }
        </main>
    )
}