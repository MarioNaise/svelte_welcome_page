<script>
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

<h1>{greeting}</h1>

<style>
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
    padding: 0.5rem;
    font-weight: 200;
    border-style: solid;
    border-image: linear-gradient(
        90deg,
        transparent 20%,
        white 40%,
        white 60%,
        transparent 80%
      )
      1;
  }
</style>
