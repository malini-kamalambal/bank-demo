<script>
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<svelte:head>
  <title>Login - Reel Bank</title>
</svelte:head>

<section class="mt-8">

  <div class="flex justify-center">

    <form class="bg-gray-50 rounded-lg shadow-lg p-4 text-center mb-8" method="POST">
      <h1 class="text-2xl font-bold pt-2">Login To Your Account</h1>
      <p class="mt-4">Please enter your username and password to login to your account.</p>

      {#if form?.status == 400}
        <div class="my-4 bg-red-300 rounded-lg py-4 font-bold text-red-900 underline">
          <p>{form?.body?.error}</p>
        </div>
      {/if}

      <input
        type="text"
        class="mt-4 border border-gray-300 rounded-lg p-2 px-4 py-4 w-full"
        placeholder="Username"
        name="username"
      />

      <input
        type="password"
        class="mt-4 border border-gray-300 rounded-lg p-2 px-4 py-4 w-full"
        placeholder="Password"
        name="password"
      />

      <button
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</section>
