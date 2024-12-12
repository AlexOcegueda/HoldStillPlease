<script>
  import Gallery from '../components/Gallery.svelte';
  import photos from '../data/photos.json';

  const homepagePhotos = photos.filter(photo => photo.category === 'homepage');
</script>

<main>
  <Gallery photos={homepagePhotos} />
</main>
