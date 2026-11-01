
const GitPloader = async ({ params }) => {
    const { username } = params;

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("GitHub user not found or request failed");
    }


    return response.json();
};

export default GitPloader;
