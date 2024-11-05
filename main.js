$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/antonyrf';

    const profNome = document.querySelector('#prof-nome');
    const profUser = document.querySelector('#prof-username');
    const profAvatar = document.querySelector('#prof-avatar');
    const profFollowers = document.querySelector('#prof-followers');
    const profFollowing = document.querySelector('#prof-following');
    const profRepo = document.querySelector('#prof-repo');
    const profLink = document.querySelector('#prof-link')

    fetch('https://api.github.com/users/antonyrf')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            profNome.innerText = json.name;
            profUser.innerText = json.login;
            profAvatar.src = json.avatar_url;
            profFollowers.innerText = json.followers;
            profFollowing.innerText = json.following;
            profRepo.innerText = json.public_repos;
            profLink.href = json.html_url;
        })
})