import { useContext } from "react";
import userContext from "../context/userContext";
import "./User.css";

export default function User(){
    const {user}=useContext(userContext);
    if(!user) return null

    const profile = user.login || user.avatar_url ? user : user.d ?? user
    const login = profile.login || profile.username
    const avatar = profile.avatar_url || (login ? `https://github.com/${login}.png` : "")

    return(
        <article className="gh-card">
            <div className="gh-banner" />
            <div className="gh-body">
                {avatar ? (
                    <img className="gh-avatar" src={avatar} alt={`${login || "GitHub"} avatar`} />
                ) : null}
                <h1 className="gh-name">{profile.name || login || "GitHub user"}</h1>
                {login ? <p className="gh-login">@{login}</p> : null}
                {profile.bio ? <p className="gh-bio">{profile.bio}</p> : null}
                {profile.location ? <p className="gh-meta">{profile.location}</p> : null}
                {profile.message && !profile.login ? (
                    <p className="gh-error">{profile.message}</p>
                ) : (
                    <div className="gh-stats">
                        <div className="gh-stat">
                            <span>Repos</span>
                            <strong>{profile.public_repos ?? "—"}</strong>
                        </div>
                        <div className="gh-stat">
                            <span>Followers</span>
                            <strong>{profile.followers ?? "—"}</strong>
                        </div>
                        <div className="gh-stat">
                            <span>Following</span>
                            <strong>{profile.following ?? "—"}</strong>
                        </div>
                    </div>
                )}
                {profile.html_url ? (
                    <a className="gh-link" href={profile.html_url} target="_blank" rel="noreferrer">
                        View on GitHub
                    </a>
                ) : null}
            </div>
        </article>
    )
}
