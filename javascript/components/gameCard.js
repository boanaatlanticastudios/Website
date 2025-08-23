export function gameCard(id, desc, img, teaser) {
  return `
        <div id="${id}">
            <a href="${teaser}">
                <div
                    class="w-full md:rounded-[50px] aspect-[10/5] bg-[url(${img})] bg-cover bg-center px-12 flex flex-col justify-end items-center">
                </div>
            </a>
            <div class="h-24   flex justify-center items-center">
                <h2 class="text-2xl md:text-3xl text-center">${desc}</h2>
            </div>
        </div>
  `;
}

export function simpleGameCard(id, title, img) {
  return `<div id="${id}" class="w-full aspect-[10/5] md:rounded-[50px] bg-white bg-[url(${img})] bg-cover bg-center">  
        </div><h1 class="md:text-6xl text-xl text-center mt-4 mb-16">${title}</h1>`;
}
