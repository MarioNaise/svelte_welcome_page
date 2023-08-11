<script>
  const name = "Edwin";
  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  })();
</script>

<h1>{greeting}, {name}</h1>

<style>
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
    font-weight: 200;
  }
</style>