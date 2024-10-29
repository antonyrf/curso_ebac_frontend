$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/antonyrf';

    const profNome = document.querySelector('#prof-nome');
    const profUser = document.querySelector('#prof-username');
    const profAvatar = document.querySelector('#prof-avatar');
    const profFollowers = document.querySelector('#prof-followers');
    const profFollowing = document.querySelector('#prof-following');
    const profRepo = document.querySelector('#prof-repo');
    const profLink = document.querySelector('#prof-link')

    $.ajax(endpoint).done(function(resposta){
        profNome.innerText = resposta.name;
        profUser.innerText = resposta.login;
        profAvatar.src = resposta.avatar_url;
        profFollowers.innerText = resposta.followers;
        profFollowing.innerText = resposta.following;
        profRepo.innerText = resposta.public_repos;
        profLink.href = resposta.html_url;
    })
})