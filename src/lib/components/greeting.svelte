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
    background-color: #2e2e2e;
    border-style: solid;
    border-image: linear-gradient(
        90deg,
        rgba(46, 46, 46, 1) 20%,
        rgba(255, 255, 255, 1) 40%,
        rgba(241, 241, 241, 1) 60%,
        rgba(46, 46, 46, 1) 80%
      )
      1;
  }
</style>
