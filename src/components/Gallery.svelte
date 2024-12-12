<script>
  import photos from '../data/photos.json';

  export let category = 'homepage';
  const filteredPhotos = photos.filter(photo => photo.category === category);

  let mainPhoto = filteredPhotos[0];

  function updateMainPhoto(photo) {
    mainPhoto = photo;
  }
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="flex items-stretch bg-white rounded-lg shadow-lg max-w-[1000px] w-full mx-6">
    <!-- Main Photo -->
    <div class="flex-1 w-full h-[500px]">
      <img
        src={mainPhoto.url}
        alt={mainPhoto.description}
        class="object-cover w-full h-full rounded-l-lg"
      />
    </div>

    <!-- Vertical Thumbnails with Scroll -->
    <div class="flex flex-col overflow-y-auto max-h-[500px] w-[120px] p-2 space-y-2">
      {#each filteredPhotos as photo}
        <img
          src={photo.url}
          alt={photo.description}
          class="cursor-pointer w-[100px] h-[100px] object-cover flex-shrink-0 rounded hover:scale-105 transition-transform"
          on:click={() => updateMainPhoto(photo)}
        />
      {/each}
    </div>
  </div>
</div>
