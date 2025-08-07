document.addEventListener("DOMContentLoaded", function () {
  const title = "Boana Interactive";
  const routeRef =
    document.location.pathname === "/index.html"
      ? "/home.html"
      : document.location.pathname;
  const routes = ["Home", "Projects", "About"];

  function toPath(route) {
    if (route === "Home") {
      return "/index.html";
    } else {
      return `/${route.toLowerCase()}.html`;
    }
  }

  function getRouteHTML(route) {
    return `<a href="${toPath(
      route
    )}" class="hover:underline hover:text-black text-2xl capitalize mx-12">${route}</a>`;
  }

  const header = document.getElementById("header");
  header.innerHTML = `<header class="bg-white backdrop-blur-2xl z-10 text-black">
            <div class="w-full h-24 p-4 flex justify-between items-center relative">
                <img class="h-24" src="assets/imgs/icon.png" alt="boana icon">

                <div class="link absolute start-1/2 -translate-x-1/2">
                </div>

                <div class="flex">
                    <button class="cursor-pointer" id="menuButton">
                        <svg class="w-8 fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        <div id="sideMenu"
            class="text-black absolute w-[35vw] translate-x-[100vw] flex flex-col bg-white/50 backdrop-blur-2xl top-0 h-dvh z-40 transition-all duration-150 ease-in-out">
            <div class="h-16 p-4 flex items-center ">
                <button class="cursor-pointer" id="openMenuButton">
                    <svg class="w-8 fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </button>
            </div>
            <section class="flex-1 flex flex-col items-center px-16 link gap-y-4">
            </section>
        </div>`;
  Array.from(document.getElementsByClassName("link")).forEach((e) => {
    e.innerHTML = routes
      .filter((route) => !route.includes(routeRef.match(/\/(\w+)\.html/)[1]))
      .map((route) => getRouteHTML(route))
      .join("");
  });
  const sideMenu = document.getElementById("sideMenu");
  const menuButton = document.getElementById("menuButton");
  const openMenuButton = document.getElementById("openMenuButton");
  menuButton.addEventListener("click", () => {
    sideMenu.classList.remove("opacity-0");
    sideMenu.classList.remove("translate-x-[100vw]");
    sideMenu.classList.add("translate-x-[calc(100vw-35vw)]");
  });
  openMenuButton.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-[calc(100vw-35vw)]");
    sideMenu.classList.add("translate-x-[100vw]");
    sideMenu.classList.add("opacity-0");
  });
});
