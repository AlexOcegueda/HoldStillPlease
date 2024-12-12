<script>
  import photos from '../../../data/photos.json';
  const funeralPhotos = photos.filter(photo => photo.category === "wedding");
  let selectedPhoto = null;

  function selectPhoto(photo) {
    selectedPhoto = photo;
  }
</script>

<section class="p-4">
  <h1 class="text-2xl">Wedding Photos</h1>
  <div class="grid grid-cols-5 gap-4">
    {#each funeralPhotos as photo}
      <img
        src={photo.url}
        alt={photo.description}
        class="rounded shadow-lg cursor-pointer"
        on:click={() => selectPhoto(photo)}
      />
    {/each}
  </div>
  {#if selectedPhoto}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div>
        <button on:click={() => (selectedPhoto = null)}>✕</button>
        <img src={selectedPhoto.url} alt={selectedPhoto.description} />
      </div>
    </div>
  {/if}
</section>
