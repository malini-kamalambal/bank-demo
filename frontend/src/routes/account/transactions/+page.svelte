<script language="ts">
  /** @type {import('./$types').PageServerData} */
  export let data;

  import moment from 'moment';
</script>

<svelte:head>
  <title>Transactions - Reel Bank</title>
</svelte:head>

<section class="mt-8 m-4">
  <h1 class="text-2xl font-bold">Recent Transactions</h1>
  <p>
    Here, you can view a list of all the transactions that have been made on your account in the
    past 30 days. You can filter the transactions by date range, account type, and transaction type.
  </p>
</section>


<section class="m-4">
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-gray-200 border-b">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  #
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Date
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Description
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {#each data.transactions as { date, description, amount }, i}
                <tr
                  class="bg-gray-50 border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >{i + 1}</td
                  >
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {moment(date).format("MMM Do, YYYY")}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {description}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {amount}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="bg-gray-100 sm:py-32 lg:pt-8 rounded-xl">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Learn More About Your Transactions
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
                Credit Card Payments
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
              <p class="text-lg font-semibold leading-8 text-gray-900">Scheduled Payments</p>
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
              <p class="text-lg font-semibold leading-8 text-gray-900">Safety When Travelling</p>
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