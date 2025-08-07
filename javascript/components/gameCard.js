export function gameCard(id, title, desc, alignEnd) {
  return `<div id="${id}" class="w-full aspect-[10/5] rounded-[50px] bg-[#2C2C2C] p-12 flex flex-col justify-end ${
    alignEnd ? "items-end" : ""
  }">
            <h1 class="text-4xl">${title}</h1>
            <h2 class="text-2xl">${desc}</h2>
        </div>`;
}
