<script setup lang="ts">
import '~/assets/flag.css';

interface Places {
  id: number;
  name: string;
  city: string;
  flag: string;
  total: number;
  photo: string;
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

const filteredContacts = computed(() => {
  if (!search.value) {
    return places.value;
  }

  const filterRe = new RegExp(search.value, 'i');
  return places.value.filter((item) => {
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
    <div class="flex justify-content-center mb-6">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="search"
          placeholder="Search"
          autocomplete="off"
        />
      </IconField>
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
            <div class="flex justify-content-center">
              <img
                class="w-8 h-8"
                :src="contact.photo"
                :alt="contact.name"
              >
            </div>
            <!-- Name -->
            <div class="text-center mt-4">
              <a
                :href="`mailto:${contact.link}`"
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
                    {{contact.votes.location}}/10
                  </p>
                </div>
                <div class="m-0 flex ">
                  <p class="my-2 font-semibold">
                    Service:&nbsp;
                  </p><p class="my-2">
                    {{contact.votes.service}}/10
                  </p>
                </div>
                <div class="m-0 flex ">
                  <p class="my-2 font-semibold">
                    Food:&nbsp;
                  </p><p class="my-2">
                    {{contact.votes.food}}/10
                  </p>
                </div>
                <div class="m-0 flex">
                  <p class="my-2 font-semibold">
                    Price:&nbsp;
                  </p><p class="my-2">
                    {{contact.votes.price}}/10
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
      </div>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
}
</style>
