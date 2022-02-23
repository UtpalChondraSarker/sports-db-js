const searchSport=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value; 
    //console.log(searchText);
    searchField.value='';

    if(searchText.length==0){
      alert('no mach')
    }
    else{
      const url=`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${searchText}`
    fetch(url)
    //console.log(url);
     .then(res=>res.json())
     .then(data=>displaySport(data.countrys))
    }

}
const displaySport=(meals)=>{
  console.log(meals);
    const searchResult=document.getElementById('search-result')
    meals.forEach(meal=>{
        console.log(meal);
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div onclick="displaySportId(${meal.idLeague})" class="card h-100">
        <img  src="${meal.strBadge}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strLeagueAlternate}</h5>
          <p class="card-text">${meal.strDescriptionEN.slice(0,200)}</p>
        </div>
      </div>
      `;
      searchResult.appendChild(div)

    })
}
const displaySportId=sportId=>{
  //console.log(sportId);
  const url=`https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=${sportId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>dispalyDetails(data))
  
}
const dispalyDetails=sport=>{
  console.log(sport);
  const searchId=document.getElementById('search-id')
  const div=document.createElement('div')
  div.classList.add('col')
  div.innerHTML=`
              <div class="card h-100">
                <img src="${sport.strBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${sport.strLeagueAlternate}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>;
  `
  searchId.appendChild(div)
  
 }

