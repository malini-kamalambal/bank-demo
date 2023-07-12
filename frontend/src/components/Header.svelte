<script>
  import { page } from '$app/stores';

  const activeLink =
    'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0';
  const inactiveLink =
    'block py-2 pr-4 pl-3 border-b border-gray-100lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700';
</script>

<header>
  <nav class="bg-teal-900 border-gray-200 px-4 lg:px-6 py-2.5 rounded-xl">
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <div class="py-2 justify-between items-center w-full flex lg:order-1">
        <a href="/" class="text-teal-200 front-bold text-xl w-32" aria-current="page">Reel Bank</a>
        <ul class="flex mt-4 font-medium flex-row w-full lg:mt-0">
          {#if $page.data.user}
            <li class="px-4">
              <a
                href="/"
                class={$page.url.pathname == '/' ? activeLink : inactiveLink}
                aria-current="page">Home</a
              >
            </li>
            <li class="px-4">
              <a
                href="/account/transactions"
                class={$page.url.pathname == '/account/transactions' ? activeLink : inactiveLink}
                >Transactions</a
              >
            </li>
            <li class="px-4">
              <a
                href="/account/savings"
                class={$page.url.pathname == '/account/savings' ? activeLink : inactiveLink}
                >Savings</a
              >
            </li>
            <li class="ml-auto mr-4">
              <a data-sveltekit-reload href="/logout" class={activeLink}>Logout</a>
            </li>
          {/if}
          {#if !$page.data.user}
            <li class="ml-auto mr-4">
              <a href="/login" class={activeLink}>Login</a>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>
</header>
