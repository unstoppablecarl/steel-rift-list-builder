<script setup>
import {storeToRefs} from 'pinia';
import {useSecondaryAgendaStore} from '../store/secondary-agenda-store.js';

const {secondary_agendas} = storeToRefs(useSecondaryAgendaStore());
</script>
<template>

  <div class="card" v-if="secondary_agendas.length">
    <div class="card-header fw-bold">
      Secondary Agendas
    </div>
    <div class="card-body">
      <div v-for="item in secondary_agendas">
        <div>
          <span class="fw-bold">
            {{ item.display_name }}
          </span>

          <span class="btn btn-sm btn-light btn-fake ms-2">
            <strong>{{ item.type }}:</strong> {{item.type_display_name}}
          </span>
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>

</template>
