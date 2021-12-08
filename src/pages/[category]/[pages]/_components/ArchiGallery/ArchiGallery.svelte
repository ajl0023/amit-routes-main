<script>
  import { params } from "@roxi/routify";
  import ArchiGalleryImage from "./ArchiGalleryImage.svelte";
  import { layout } from "./layout.js";

  export let shouldLoadImages;

  let thumbs = layout[$params.pages].thumbs;
  let nestedArr = [];
</script>

<ul
  class="masonry-image-list mdc-image-list mdc-image-list--masonry my-masonry-image-list"
>
  {#each thumbs as img}
    <ArchiGalleryImage {img} />
  {/each}
</ul>

<style lang="scss">
  .masonry-image-list {
    -webkit-column-count: 4;
    column-count: 4;
    -webkit-column-gap: 16px;
    column-gap: 16px;
    max-width: 1800px;
    @media screen and (max-width: 820px) {
      column-count: 3;
    }
    @media screen and (max-width: 620px) {
      column-count: 2;
    }
    @media screen and (max-width: 450px) {
      column-count: 1;
    }
  }
</style>
