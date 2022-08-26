
 function CheckInput(){
    let btn = document.querySelector('#btn-void');
    let input = document.getElementById('user');

    
    if(input.value !== ''){
    btn.classList.remove('void');
    }
    else{
        btn.classList.add('void')
    }

    if(input.classList('void')){
        btn.preventDeafult();
    }
 } 
  


/* Onclick Functions */
document.querySelector('.closeErr').addEventListener('click',()=>{

    let Modal = document.querySelector('.modalErrServer');
    let InputScreen = document.querySelector('.input-screen');
    
    Modal.style.top = '-50%'
    Modal.style.opacity = '0';
    setTimeout(()=>{
        Modal.style.display = 'none'
    },300)

    document.getElementById('user').value='';
    animationIn(InputScreen);
    CheckInput();
   
    
})

document.querySelector('#ChangeUser').addEventListener('click',()=>{
    let cookie = true
    let StatsScreen = document.querySelector('.container');
    let InputScreen = document.querySelector('.input-screen');
   
    animationOut(StatsScreen);
    setTimeout(() => {
        animationIn(InputScreen);
        animationIn(document.querySelector('.chat-box'));
       
    }, 500)
    document.getElementById('user').value='';
    document.querySelector('.chat-box span').innerHTML = 'Glad you liked, keep using GitStats!'
    CheckInput();
    
})

document.querySelector('.btn-start-git').addEventListener('click', () => {
    let ScreenW = document.querySelector('.container-welcome');
    let InputScreen = document.querySelector('.input-screen');

    animationOut(ScreenW);
    setTimeout(() => {
        animationIn(InputScreen);
    }, 500)
    
});

document.querySelector('#user').addEventListener('input', ()=>{
    CheckInput();
});

document.querySelector('.btn-start-git-stats').addEventListener('click', () => {
    getData();
});



/* connecting the API and creating the interface */

async function getData() {

    try {
        let User = document.querySelector('#user').value;
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
        if (blogText.length > 25) {
            blogText = blogText.substring(0, 25) + '...'
        }
        let BlogText = document.getElementById('blog').innerHTML = blogText;

        // Interface - Stats

        let RepositoriesNumber = document.getElementById('Repositories-Number').textContent = await user.public_repos;
        let Followers = document.getElementById('Followers').textContent = await user.followers;
        let Following = document.getElementById('Following').textContent = await user.following;
        let imgContribuitions = document.getElementById('stats-img-contribuitions').src = `https://github-readme-stats.vercel.app/api?username=${User}&show_icons=true&theme=radical&include_all_commits=true&count_private=true&title_color=#ffffff`;
        let imgLanguages = document.getElementById('stats-img-languages').src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${User}&layout=compact&langs_count=7&theme=radical`;
        let ProfileViews = document.getElementById('profile_views').src = `https://komarev.com/ghpvc/?username=${User}&color=red`;
        let company = await user.company;
        if (company !== null) {
            document.getElementById('company_h3').textContent = company
        }
        let ReadMe = document.getElementById('README_').src = `https://github-readme-stats.vercel.app/api/pin/?username=${User}&repo=${User}&theme=radical`
        let LinkRead = document.getElementById('link_read').href = `https://github.com/${User}/${User}`

        // Animation screen appearing

        let InputScreen = document.querySelector('.input-screen');
        let StatsScreen = document.querySelector('.container');
        animationOut(InputScreen);
        setTimeout(() => {
            StatsScreen.style.display = 'flex'
            setTimeout(() => {
                StatsScreen.style.opacity = '1'
            }, 300)
        }, 500)
    }


    // Err 404 

    catch (e) {
    
    let InputScreen = document.querySelector('.input-screen');
    let Modal = document.querySelector('.modalErrServer');

    animationOut(InputScreen);
    Modal.style.display = 'flex'
    setTimeout(()=>{
        Modal.style.top = '50%'
        Modal.style.opacity = '1';
    },100)
   
    }


}

/* Animations */

function animationOut(item) {

    item.style.opacity = '0'
    setTimeout(() => {
        item.style.display = 'none'
    }, 200)
}
function animationIn(item) {


    item.style.display = 'block'
    setTimeout(() => {
        item.style.opacity = '1'
    }, 300)

}
