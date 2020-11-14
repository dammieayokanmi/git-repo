
const app = document.getElementById('fetchedRepos')


// const repo = document.createElement('div')
// repo.setAttribute('class', 'repo')

// app.appendChild(repo)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/dammieayokanmi/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    data.forEach((repo) => {
      const repository = document.createElement('div')
      repository.setAttribute('class', 'repo')

      const head = document.createElement('div')
      head.setAttribute('class', 'head flex')

      const repoDescription = document.createElement('p')
      repoDescription.setAttribute('class', 'repo-description')
if(repo.description !== null){
      repoDescription.textContent = `${repo.description}`
}
      const bottom = document.createElement('div')
      bottom.setAttribute('class', 'bottom flex')

      const bottomRhs = document.createElement('div')
      bottomRhs.setAttribute('class', 'repo-rhs flex')

      const bottomRhsP =document.createElement('p')
      bottomRhsP.setAttribute('class', 'with-dot mr-16 flex')
      
     
      const bottomRhsPSpan = document.createElement('span')
      const bottomRhsPSpan2 =document.createElement('span')
     if(repo.language !== null){
      bottomRhsPSpan2.textContent=`${repo.language}`}

      if(repo.language !== null){
       if(repo.language === 'JavaScript'){
        bottomRhsPSpan.setAttribute('class', 'dotLang yellow')
      }
      else if(repo.language === 'HTML'){
        bottomRhsPSpan.setAttribute('class', 'dotLang red');
      }
      else if (repo.language === 'CSS'){
        bottomRhsPSpan.setAttribute('class', 'dotLang purple')
      }
    }

     
      
      

      bottom.appendChild(bottomRhs)
      bottomRhs.appendChild(bottomRhsP)
      bottomRhsP.appendChild(bottomRhsPSpan)
      bottomRhsP.appendChild(bottomRhsPSpan2)
      
      const bottomRhsA =document.createElement('a')
      bottomRhsA.setAttribute('class', 'mr-16 flex')
      
      const bottomRhsASvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      bottomRhsASvg.setAttribute("height", "16");
      bottomRhsASvg.setAttribute("viewBox", "0 0 16 16");
      bottomRhsASvg.setAttribute("role", "img");
      bottomRhsASvg.setAttribute("class", "octicon-repo-forked");
      bottomRhsASvg.setAttribute("version", "1.1");
      bottomRhsASvg.setAttribute("width", "16");
      bottomRhsASvg.setAttribute("aria-label", "fork");
      const bottomRhsASvgSvg = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
      bottomRhsASvgSvg.setAttribute("d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"); //Set path's data
      bottomRhsASvgSvg.style.fillRule = "evenodd"; //Set stroke colour
      
      const bottomRhsASpan =document.createElement('span')
      bottomRhsASpan.textContent="1"

      bottomRhsASvg.appendChild(bottomRhsASvgSvg)
      bottomRhsA.appendChild(bottomRhsASvg)
      bottomRhsA.appendChild(bottomRhsASpan)
      bottomRhs.appendChild(bottomRhsA)

      

      const repoLhs = document.createElement('div')
      repoLhs.setAttribute('class', 'repo-lhs flex')

      const buttonLhs = document.createElement('button')
      buttonLhs.setAttribute('class', 'flex')

      head.appendChild(repoLhs)
      head.appendChild(buttonLhs)

      const title = document.createElement('a')
      title.setAttribute('class', 'title')
   
      repoLhs.appendChild(title)

      title.textContent = `${repo.name}`


      const buttonLhsSpan = document.createElement('span')
      const buttonLhsSpan2 = document.createElement('span')
      buttonLhs.appendChild(buttonLhsSpan)
      buttonLhs.appendChild(buttonLhsSpan2)

      const buttonLhsSpanSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      buttonLhsSpanSvg.setAttribute("height", "16");
      buttonLhsSpanSvg.setAttribute("viewBox", "0 0 16 16");
      buttonLhsSpanSvg.setAttribute("class", "star");
      buttonLhsSpanSvg.setAttribute("version", "1.1");
      buttonLhsSpanSvg.setAttribute("width", "16");
      buttonLhsSpanSvg.setAttribute("aria-hidden", "true");
      const buttonLhsSpanSvgSvg = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
      buttonLhsSpanSvgSvg.setAttribute("d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"); //Set path's data
      buttonLhsSpanSvgSvg.style.fillRule = "evenodd"; //Set stroke colour
      
      buttonLhsSpanSvg.appendChild(buttonLhsSpanSvgSvg)
      buttonLhsSpan.appendChild(buttonLhsSpanSvg)
      buttonLhsSpan2.textContent = `Star`

      

      const buttonMitSpan = document.createElement('span')
      buttonMitSpan.setAttribute('class', 'mr-16 flex')
      


      const buttonMitSpanSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      buttonMitSpanSvg.setAttribute("height", "16");
      buttonMitSpanSvg.setAttribute("viewBox", "0 0 16 16");
      buttonMitSpanSvg.setAttribute("version", "1.1");
      buttonMitSpanSvg.setAttribute("class", "octicon-law ");
      buttonMitSpanSvg.setAttribute("width", "16");
      buttonMitSpanSvg.setAttribute("aria-hidden", "true");
      const buttonMitSpanSvgSvg = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
      buttonMitSpanSvgSvg.setAttribute("d","M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"); //Set path's data
      buttonMitSpanSvgSvg.style.fillRule = "evenodd"; //Set stroke colour
      
     

      const buttonMitSpanChild = document.createElement('span')
      if(repo.license !== null){
       buttonMitSpanChild.textContent=`${repo.license.name}`
      } else{
       buttonMitSpanChild.textContent=`Other`
      }

      buttonMitSpanSvg.appendChild(buttonMitSpanSvgSvg)
      buttonMitSpan.appendChild(buttonMitSpanSvg)
      buttonMitSpan.appendChild(buttonMitSpanChild)
      bottomRhs.appendChild(buttonMitSpan)

      const bottomLastP = document.createElement('p')
      bottomLastP.setAttribute('class', 'mr-16')
      
var updatedAtMonth = repo.updated_at.slice(5, 7);
var updatedAtDay = repo.updated_at.slice(8, 10);
console.log(repo.language)
var month_name = function(dt){
  mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    return mlist[dt.getMonth()];
  };
    bottomLastP.textContent =`Updated on ${month_name(new Date(`${updatedAtMonth}`))} ${updatedAtDay}`
      bottomRhs.appendChild(bottomLastP)
      


      app.appendChild(repository)
      repository.appendChild(head)
      repository.appendChild(repoDescription)
      repository.appendChild(bottom)

    })
  } else {
    console.log('error')
  }
}


// Send request
request.send()