import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { useParams } from "react-router-dom"
import GitPloader from "./GitPloader.jsx"

export default function Github(){
    
    
    const data = useLoaderData();
    console.log("Hiiiii");
    
    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
            <article className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-6">
                    <img
                        src={data.avatar_url}
                        alt={`${data.login} avatar`}
                        className="h-28 w-28 rounded-full object-cover ring-4 ring-slate-100"
                    />
                    <div className="mt-5 sm:mt-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                            GitHub profile
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                            {data.name || data.login}
                        </h1>
                        <p className="mt-1 text-base text-slate-500">@{data.login}</p>
                        {data.bio && (
                            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                                {data.bio}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                        <p className="text-2xl font-semibold text-slate-900">{data.followers}</p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Followers</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                        <p className="text-2xl font-semibold text-slate-900">{data.following}</p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Following</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                        <p className="text-2xl font-semibold text-slate-900">{data.public_repos}</p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Repos</p>
                    </div>
                </div>

                {data.html_url && (
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        View on GitHub
                    </a>
                )}
            </article>
        </section>
    )
}
export const githubLoader=async()=>{
    
    const data = await fetch('https://api.github.com/users/tanmay509');
    return data.json();
}


