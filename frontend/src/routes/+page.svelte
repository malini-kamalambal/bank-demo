<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Reel Bank</title>
</svelte:head>

{#if $page.data?.motd && $page.data.motd.length > 0}
  <div class="bg-cyan-700 rounded-2xl py-5 text-white text-center">
    <p class="text-xl font-bold">{ $page.data.motd }</p>
  </div>
{/if}

<section class="bg-white dark:bg-gray-900">
  <div class="grid max-w-screen-xl px-4 pt-2 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="mr-auto place-self-center lg:col-span-7">
      <h1
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      >
        Empowering your financial future
      </h1>
      <p
        class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
      >
        Our modern bank is dedicated to empowering our customers to achieve their financial goals
        through a wide range of innovative and user-friendly services.
      </p>
      <a
        href="/account/transactions"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Get Started Today
      </a>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/laptop.jpg" alt="mockup" class="rounded-2xl" />
    </div>
  </div>
</section>

<section>
  <div class="bg-gray-100 sm:py-32 lg:pt-8 rounded-xl">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
          veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/globe-alt -->
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">
                Competitive exchange rates
              </p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/scale -->
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">No hidden fees</p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/bolt -->
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">Transfers are instant</p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/device-phone-mobile -->
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">Mobile notifications</p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
