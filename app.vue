<script setup lang="ts">
import '~/assets/flag.css';
import '~/assets/style.css';

useSeoMeta({
  title: 'OnlyMaya - Food 🍕',
  ogTitle: 'OnlyMaya - Food 🍕',
  description: 'Food and Friends is the best combo, don\'t waste time!',
  ogDescription: 'Food and Friends is the best combo, don\'t waste time!',
  ogImage: 'https://www.onlymaya.it/open.jpg',
  twitterCard: 'summary_large_image',
})

interface Places {
  id: number;
  name: string;
  city: string;
  flag: string;
  total: number;
  photo: string;
  photoBlack?: boolean;
  votes: {
    price: number;
    location: number;
    service: number;
    food: number;
  };
  link: string;
  when: string;
}

const places = ref<Places[]>([]);

const search = ref('');
const dinner = ref(true);
const lunch = ref(true);

const filteredContacts = computed(() => {
  let res = places.value;

  if (!lunch.value) {
    res = res.filter((item) => {
      return item.when !== 'lunch';
    });
  }

  if (!dinner.value) {
    res = res.filter((item) => {
      return item.when !== 'dinner';
    });
  }

  if (!search.value) {
    return res;
  }

  const filterRe = new RegExp(search.value, 'i');
  return res.filter((item) => {
    return [item.name, item.city].some(item =>
      item.match(filterRe),
    );
  });
});

places.value = usePlaces().value;
</script>

<template>
  <div class="min-h-screen">
    <div class="text-center">
      <h1 class="mt-0 pt-4 mb-2 text-4xl font-bold text-primary">
        OnlyMaya - Food 🍕
      </h1>
      <p class="font-sans text-lg text-slate-500">
        List of place where I eat with my friends 🐼
      </p>
    </div>
    <div class="flex justify-content-center mb-4 align-items-center">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="search"
          placeholder="Search"
          autocomplete="off"
        />
      </IconField>
    </div>
    <div class="flex justify-content-center mb-6 align-items-center">
      <InputSwitch
        v-model="dinner"
        input-id="dinner"
        class="ml-4 mr-2"
      />
      <label for="dinner">Dinner&nbsp;</label><i class="pi pi-moon" />
      <InputSwitch
        v-model="lunch"
        input-id="lunch"
        class="ml-4 mr-2"
      />
      <label for="lunch">Lunch&nbsp;</label><i class="pi pi-sun" />
    </div>

    <div>
      <div
        v-if="filteredContacts.length === 0"
        class="flex justify-content-center"
      >
        <Message
          :closable="false"
          severity="secondary"
          icon="pi pi-wave-pulse"
        >
          Sorry, no places matching your search criteria.
        </Message>
      </div>
      <div
        v-else
        class="flex flex-wrap justify-content-center gap-6 mb-6"
      >
        <TransitionGroup
          enter-active-class="transform-gpu"
          enter-from-class="opacity-0 -translate-x-full"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="absolute transform-gpu"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-full"
        >
          <div
            v-for="contact in filteredContacts"
            :key="contact.id"
            class="border-primary border-3 border-round p-3 transition-all duration-300 w-10 md:w-3"
          >
            <!-- Photo -->
            <div
              style="height: 80px;"
              class="align-content-center"
            >
              <div class="flex justify-content-center">
                <img
                  v-if="contact.photoBlack"
                  class=" bg-black-alpha-50"
                  style="max-height: 80px; max-width: 200px"
                  :src="contact.photo"
                  :alt="contact.name"
                >
                <img
                  v-else
                 style="max-height: 80px;max-width: 200px"
                  :src="contact.photo"
                  :alt="contact.name"
                >
              </div>
            </div>
            <!-- Name -->
            <div class="text-center mt-4">
              <a
                :href="`${contact.link}`"
                target="_blank"
                class="no-underline text-primary"
              >
                <h4 class="text-lg font-medium text-slate-700 mb-2">
                  {{ contact.name }}
                </h4>
              </a>
              <p class="text-sm text-slate-400">
                {{ contact.city }}   <img
                  :alt="contact.city"
                  src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                  :class="`mr-2 flag flag-${contact.flag.toLowerCase()}`"
                  style="width: 18px"
                >
              </p>
            </div>
            <!-- Points -->
            <div class="flex justify-content-evenly align-items-center">
              <div class="w-full">
                <div class="m-0 flex ">
                  <p class="my-2 font-semibold">
                    Location:&nbsp;
                  </p><p class="my-2">
                    {{ contact.votes.location }}/10
                  </p>
                </div>
                <div class="m-0 flex ">
                  <p class="my-2 font-semibold">
                    Service:&nbsp;
                  </p><p class="my-2">
                    {{ contact.votes.service }}/10
                  </p>
                </div>
                <div class="m-0 flex ">
                  <p class="my-2 font-semibold">
                    Food:&nbsp;
                  </p><p class="my-2">
                    {{ contact.votes.food }}/10
                  </p>
                </div>
                <div class="m-0 flex">
                  <p class="my-2 font-semibold">
                    Price:&nbsp;
                  </p><p class="my-2">
                    {{ contact.votes.price }}/10
                  </p>
                </div>
              </div>
              <div class="w-full text-center">
                <Knob
                  v-model="contact.total"
                  readonly
                />
              </div>
            </div>
            <!-- Chip -->
            <div class="mt-2">
              <Chip
                v-if="contact.when === 'lunch'"
                label="Lunch"
                icon="pi pi-clock"
                class="bg-orange-500 text-white"
              />
              <Chip
                v-if="contact.when === 'dinner'"
                label="Dinner"
                icon="pi pi-moon"
                class="bg-blue-800 text-white"
              />
            </div>
          </div>
        </TransitionGroup>
        <Message
          :closable="false"
          severity="secondary"
          icon="pi pi-wave-pulse"
          class="w-full mx-4"
        >
          Total records {{ filteredContacts.length }}
        </Message>
        <ScrollTop />
      </div>
      <FooterUnicorne/>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
}
</style>
