<template>
  <q-item clickable :to="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface NavigationItemProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
const props = withDefaults(defineProps<NavigationItemProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
