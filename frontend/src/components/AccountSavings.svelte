<script>
  import moment from 'moment';

  /**
   * @type {number}
   */
  export let balance;
</script>

<section class="m-4">
  <div class="flex flex-col text-center">
    <div class="rounded-xl bg-slate-200">
      <div class="rounded-xl bg-white m-2 p-2">
        <div class="flex flex-row justify-between h-64">
          <div class="border-r-2 pr-3">
            <div class="text-green-700 font-bold text-6xl my-auto bg-slate-100 rounded-xl p-4">£{balance}</div>
            <div class="text-xl font-bold mt-4">Total Balance</div>
            <div class="text-sm">As of {moment().format('DD/MM/YYYY')}</div>
          </div>
          <div class="border-r-2 mr-3">
            <div class="bg-slate-50 rounded-xl p-3 mx-4 m-auto mt-0 text-left">
              <h1 class="text-4xl bold italic">Super Deluxe Ultra Account</h1>
            </div>
            <p class="mt-3 border-t-2 pt-3 text-left p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto earum inventore natus odio molestias exercitationem repudiandae quaerat quae praesentium illum sed maxime repellat ducimus, iste rem accusantium doloribus in!
            </p>
          </div>
          <div class="m-0 flex flex-col gap-3 justify-start">
            <a href="/account/transactions" class="bg-cyan-700 text-white text-md p-4 rounded-xl">
              View Transactions
            </a>
            <a href="/account/transactions" class="bg-cyan-700 text-white text-md p-4 rounded-xl">
              Account Details
            </a>
            <a href="/account/transactions" class="bg-cyan-700 text-white text-md p-4 rounded-xl">
              Get Help
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
