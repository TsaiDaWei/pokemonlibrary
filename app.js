//圖片url https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector(".container");
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for ( let i=1; i<=151; i++){
    const pokemonDiv = document.createElement("div");
    const pokemonImg = document.createElement("img");
    const pokemonNum = document.createElement("p");
    pokemonImg.src = `${url}${i}.png`;
    pokemonNum.innerText = `No.${i}`;

    container.appendChild(pokemonDiv);
    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonNum)



}