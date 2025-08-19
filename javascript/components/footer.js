document.addEventListener("DOMContentLoaded", function () {
  const routeRef = document.location.pathname;
  const hoverColor = "black";
  const domain = "boanaatlanticastudios.com";
  const instaURL = "https://www.instagram.com/boanaatlanticastudios/";
  const youtubeURL = "https://www.youtube.com/@Boana-Atlantica-Studios";
  const xURL = "https://x.com/BoanaAStudios";

  const footer = document.getElementById("footer");
  footer.innerHTML = `<div class="grid grid-cols-2 gap-4 md:flex md:gap-y-0 gap-y-2 items-center ">
            <div class="md:flex-1 order-1 md:order-none justify-start">
                <div class="flex flex-col items-center">
                    <h2 class="text-3xl text-center pb-2">Follow us!</h2>
                    <div class="flex gap-x-6 justify-center items-center">
            
                    <a href="${xURL}">
                            <svg class="w-8 hover:text-${hoverColor}" viewBox="0 0 48 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 2.99997C44.0848 4.35092 41.9642 5.38419 39.72 6.05997C38.5155 4.67499 36.9147 3.69335 35.1341 3.24782C33.3535 2.80229 31.479 2.91436 29.7642 3.56888C28.0493 4.22339 26.5769 5.38877 25.546 6.9074C24.515 8.42603 23.9754 10.2246 24 12.06V14.06C20.4853 14.1511 17.0025 13.3716 13.862 11.7909C10.7215 10.2101 8.02063 7.87724 6 4.99997C6 4.99997 -2 23 16 31C11.8811 33.7959 6.97431 35.1978 2 35C20 45 42 35 42 12C41.9982 11.4429 41.9446 10.8872 41.84 10.34C43.8812 8.32696 45.3217 5.7854 46 2.99997Z"
                                    stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                        <a href="${instaURL}">
                            <svg class="w-8 hover:text-${hoverColor}" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35 13H35.02M14 4H34C39.5228 4 44 8.47715 44 14V34C44 39.5228 39.5228 44 34 44H14C8.47715 44 4 39.5228 4 34V14C4 8.47715 8.47715 4 14 4ZM32 22.74C32.2468 24.4045 31.9625 26.1044 31.1875 27.598C30.4125 29.0916 29.1863 30.3028 27.6833 31.0593C26.1802 31.8159 24.4769 32.0792 22.8156 31.8119C21.1543 31.5445 19.6195 30.7602 18.4297 29.5703C17.2398 28.3805 16.4555 26.8457 16.1881 25.1844C15.9208 23.5231 16.1841 21.8198 16.9407 20.3167C17.6972 18.8137 18.9084 17.5875 20.402 16.8125C21.8956 16.0375 23.5955 15.7532 25.26 16C26.9578 16.2518 28.5297 17.0429 29.7434 18.2566C30.9571 19.4703 31.7482 21.0422 32 22.74Z"
                                    stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                        <a href="${youtubeURL}">
                            <svg class="w-8   hover:text-${hoverColor}" viewBox="0 0 48 35" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45.08 6.84C44.8424 5.89082 44.3586 5.02114 43.6773 4.31881C42.996 3.61648 42.1415 3.10637 41.2 2.84C37.76 2 24 2 24 2C24 2 10.24 2 6.8 2.92C5.85849 3.18637 5.00395 3.69648 4.32269 4.39881C3.64143 5.10114 3.15758 5.97082 2.92 6.92C2.29043 10.4111 1.98247 13.9526 2 17.5C1.97756 21.0741 2.28553 24.6426 2.92 28.16C3.18192 29.0797 3.67661 29.9163 4.35629 30.589C5.03596 31.2616 5.87764 31.7476 6.8 32C10.24 32.92 24 32.92 24 32.92C24 32.92 37.76 32.92 41.2 32C42.1415 31.7336 42.996 31.2235 43.6773 30.5212C44.3586 29.8189 44.8424 28.9492 45.08 28C45.7047 24.5352 46.0127 21.0207 46 17.5C46.0224 13.9259 45.7145 10.3574 45.08 6.84Z"
                                    stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.5 24.04L31 17.5L19.5 10.96V24.04Z" stroke="currentColor" stroke-width="4"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="md:flex-1 order-3 md:order-none col-span-2 md:col-span-auto">
                <img class="aspect-auto w-40 mx-auto" src="${
                  routeRef === "/"
                    ? "assets/imgs/icon.png"
                    : "../assets/imgs/icon.png"
                }" alt="boana icon">
                <h3 class="text-2xl tracking-tight text-center">
                   Copyright © 2025. All rights reserved
                </h3>
            </div >
            
            <div class="text-center flex-1 order-2 md:order-none">
                <h3 class="text-3xl text-center w-full">
                    Contact us
                </h3>
                <a class="md:text-xl text-sm text-center" href="mailto:contact@${domain
                  .split(" ")
                  .join("")}.com" class="text-sm tracking-tight">
                    contact@${domain.split(" ").join("")}
                </a>
            </div>
        </div>`;
});
