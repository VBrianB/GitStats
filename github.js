

let userINPUT = 'VBrianB';


async function getData(){
        const Promisse = await fetch(`https://api.github.com/users/${userINPUT}`)
        const Response = await Promisse.json();
        const UserGIT = {
            user: Response.login,
            name: Response.name,
            profilePic: Response.avatar_url,
            bio: Response.bio,
            location: Response.location,
            blog: Response.blog,
            repos: Response.public_repos,

        };
        
}
getData();


