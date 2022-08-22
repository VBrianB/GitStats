

async function pegardados(){

try{    
        let User = 'maykbrito';
        const response = await fetch(`https://api.github.com/users/${User}`)
   
       
        const user = await response.json();
        

        // Interface - Profile

        let profilePic = document.getElementById('profile-img').src = await user.avatar_url;
        let nameIrl = document.getElementById('name-irl').textContent = await user.name;
        let userName = document.getElementById('user-name').textContent = await user.login;
        let Bio = document.getElementById('bio-text').textContent = await user.bio;
        let Localization = document.getElementById('localization').textContent = await user.location;
        let Blog = document.getElementById('blog').href = await user.blog;
        let blogText = await user.blog
        if(blogText.length > 25){
            blogText = blogText.substring(0, 25)+'...'
        }
        let BlogText = document.getElementById('blog').innerHTML = blogText;

        // Interface - Stats

        let RepositoriesNumber = document.getElementById('Repositories-Number').textContent = await user.public_repos;
        let Followers = document.getElementById('Followers').textContent = await user.followers;
        let Following = document.getElementById('Following').textContent = await user.following;
        let imgContribuitions = document.getElementById('stats-img-contribuitions').src = `https://github-readme-stats.vercel.app/api?username=${User}&show_icons=true&theme=radical&include_all_commits=true&count_private=true`
        let imgLanguages = document.getElementById('stats-img-languages').src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${User}&layout=compact&langs_count=7&theme=radical`;
}





catch(e){
    console.log(e)
}

    
}
pegardados();
