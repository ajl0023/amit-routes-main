<!-- routify:options index=0 -->
<script>
  import { params } from "@roxi/routify";
  import { pageLayoutMaster } from "../../../pageLayout";
  import MainPageHeader from "../_components/MainPageHeader.svelte";
  import { marqueeHandlerStore } from "../_stores/marqueeHandlerStore";

  function customTransition() {
    return {
      duration: 2000,
      css: (t, u) => {
        return `transform: translateY(${100 * u}vh);`;
      },
    };
  }
  let Component;
  const imports = {
    "private-homes": async () => {
      return import("./_components/ArchiGallery/ArchiGallery.svelte");
    },
    "multi-units": async () => {
      return import("./_components/ArchiGallery/ArchiGallery.svelte");
    },
    concept: async () => {
      return import("./_components/ArchiGallery/ArchiGallery.svelte");
    },
    Art: async () => {
      return import("./_components/Masonry/Masonry.svelte");
    },
    "meet-amit-apel": async () => {
      return import("./_components/MeetAmitApel/MeetAmitApel.svelte");
    },
    "meet-the-team": async () => {
      return import("./_components/MeetTheTeam/MeetTheTeam.svelte");
    },
    press: async () => {
      return import("./_components/Press/Press.svelte");
    },
    contact: async () => {
      return import("./_components/Contact/Contact.svelte");
    },
    furniture: async () => {
      return import("./_components/Masonry/Masonry.svelte");
    },
    "malibu-rebuild": async () => {
      return import("./_components/MalibuRebuild/MalibuRebuild.svelte");
    },
    "what-we-do": async () => {
      return import("./_components/WhatWeDo/WhatWeDo.svelte");
    },
    aviator: async () => {
      return import("./_components/Developments/Developments.svelte");
    },
    maliview: async () => {
      return import("./_components/Developments/Developments.svelte");
    },
  };
  const loadComponent = async (title) => {
    marqueeHandlerStore.setPage(title);
    let comp = pageLayoutMaster["pages"]["byTitle"][title].component;

    Component = (await imports[title]()).default;
  };
  $: page = $params.pages;
  $: loadComponent(page);
</script>

<div
  transition:customTransition|local
  on:introend={() => {
    $marqueeHandlerStore.shouldLoadImages = true;
  }}
  class="page-content-container page-content-container-anim"
>
  <MainPageHeader />
  <div class="page-container">
    <svelte:component this={Component} />
  </div>
</div>

<style lang="scss">
  .page-content-container {
    width: 100%;

    z-index: 3;
    height: 100%;

    top: 0;

    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }
  .main-page-container {
    overflow: auto;
    width: 100vw;
    height: 100%;
  }
  .meetPage {
    overflow: unset;
  }
  .press {
    overflow: hidden;
  }
  .page-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
