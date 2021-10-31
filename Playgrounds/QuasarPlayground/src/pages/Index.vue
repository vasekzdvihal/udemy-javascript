<template>
  <q-page class="flex flex-center">
    <section>
      <q-card class="q-pa-lg q-ma-lg flex column flex-center">
        <span class="text-h6">Colors</span>
        <q-btn class="q-ma-xs full-width" color="primary">Primary</q-btn>
        <q-btn class="q-ma-xs full-width" color="secondary">Secondary</q-btn>
        <q-btn class="q-ma-xs full-width" color="accent">Accent</q-btn>
        <q-btn class="q-ma-xs full-width" color="dark">Dark</q-btn>
        <q-btn class="q-ma-xs full-width" color="positive">Positive</q-btn>
        <q-btn class="q-ma-xs full-width" color="negative">Negative</q-btn>
        <q-btn class="q-ma-xs full-width" color="info">Info</q-btn>
        <q-btn class="q-ma-xs full-width" color="warning">Warning</q-btn>
      </q-card>
    </section>
    <section>
      <q-card class="q-pa-lg q-ma-lg flex column flex-center">
        <span class="text-h6">Backgrounds</span>
        <div class="q-ma-xs q-pa-lg bg-primary">
          <span>This is Primary background</span>
        </div>
        <div class="q-ma-xs q-pa-lg bg-secondary">
          <span>This is Primary background</span>
        </div>
        <div class="q-ma-xs q-pa-lg bg-accent">
          <span>This is Primary background</span>
        </div>
        <div class="q-ma-xs q-pa-lg bg-dark text-white">
          <span>This is Dark background with white text</span>
        </div>
      </q-card>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>
