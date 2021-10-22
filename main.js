const LinkSocialMedia = {
  linkedin: '/in/francislei-galhardi-8b5628206', 
  github: 'pedrogalhardi',
  instagram: 'galhardi.pedro',
  facebook: 'pedrohenrique.galhardi'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()
