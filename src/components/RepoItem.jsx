export default function RepoItem( { repo } )
{
    const lastUpdate = new Date(repo.updated_at)
    const formatedDate = `${lastUpdate.getDate( )}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear( )}`

    return (
        <a href={repo.html_url}>
            <div className="rounded-lg text-offWhite bg-[#343a40] w-56 h-24 flex flex-col hover:opacity-90 transition-opacity delay-100 shadow-md m-2 items-center justify-center">
                <p>{repo.name.length > 10 ? `${repo.name.substring(0, 11)}...` : repo.name}</p>
                <p>Last Update</p>
                <p>{formatedDate}</p>
            </div>
        </a>
    )
}