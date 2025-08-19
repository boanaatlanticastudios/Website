export function gameCard(id, desc, img, teaser) {
  return `<a href="${teaser}">
  <div id="${id}" class="w-full aspect-[10/5] bg-[url(${img})] bg-cover bg-center px-12 flex flex-col justify-end items-center">  
            <div class="bg-black/50 backdrop-blur-[2px] md:w-full md:py-8 py-4 px-4 rounded-full">
              <h2 class="text-2xl text-center">${desc}</h2>
            </div>
        </div>
  </a>`;
}

export function simpleGameCard(id, img) {
  return `<div id="${id}" class="w-full aspect-[10/5] rounded-[50px] bg-[url(${img})] bg-cover bg-center p-12 flex flex-col justify-end">  
        </div>`;
}
