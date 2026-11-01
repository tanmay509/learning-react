import { useLoaderData } from "react-router-dom";

export function GithubCard(){
    const d = useLoaderData();
    return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-950 px-4 py-10">
        <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                GitHub profile
            </p>
            <img
                src={d.avatar_url}
                alt={`${d.login} avatar`}
                className="mx-auto h-28 w-28 rounded-full border-4 border-orange-500 object-cover shadow-lg shadow-orange-500/20"
            />
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {d.login}
            </h1>
            {d.name ? (
                <p className="mt-1 text-sm text-slate-400">{d.name}</p>
            ) : null}
            <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Followers
                    </p>
                    <p className="mt-1 text-lg font-semibold text-orange-400">
                        {d.followers}
                    </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Following
                    </p>
                    <p className="mt-1 text-lg font-semibold text-orange-400">
                        {d.following}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GithubCard;
