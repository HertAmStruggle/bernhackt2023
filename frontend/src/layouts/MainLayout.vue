<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Swiss City Stats </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <NavigationItemVue
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="app-container">
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationItemVue, {
  NavigationItemProps,
} from 'src/components/NavigationItem.vue';

const links: NavigationItemProps[] = [
  {
    title: 'Startseite',
    caption: '',
    icon: 'home',
    link: '/home',
  },
  {
    title: 'Gemeinden',
    caption: '',
    icon: 'public',
    link: '/gemeinden',
  },
  {
    title: 'Umfrage',
    caption: '',
    icon: 'question_answer',
    link: '/umfrage',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
.app-container {
  margin: 2% 2% 2% 2%;
}
</style>
