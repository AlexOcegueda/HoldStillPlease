<script>
  import Navbar from '../components/Navbar.svelte';
  import '../app.css';
</script>

<header class="bg-gray-800 text-white p-4">
  <Navbar />
</header>
<main class="p-4">
  <slot />
</main>
<footer class="bg-gray-800 text-white text-center p-4">
  <p>© 2024 Hold Still Photography</p>
</footer>
