

const GithubScraper = async({params})=>{
    const { username } = params;

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("GitHub user not found or request failed");
        
       

    }
    console.log(response);
    return response.json();
} 

export default GithubScraper;