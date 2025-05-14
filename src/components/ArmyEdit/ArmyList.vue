<script setup>
import Faction from './ArmyList/Faction.vue';
import ArmyListSize from './ArmyList/ArmyListSize.vue';
import ArmyListSupportAssetCount from './ArmyList/ArmyListSupportAssetCount.vue';
import WeaponSupportAssets from './ArmyList/ArmyListSupportAssets/WeaponSupportAssets.vue';
import ArmyListTeams from './ArmyList/ArmyListTeams.vue';
</script>
<template>
  <div class="card text-bg-light card-army-list">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <ArmyListSize/>
          <div class="row g-1">
            <div class="col">
              <ArmyListSupportAssetCount/>
            </div>
            <div class="col">
              <ArmyListTeams/>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <WeaponSupportAssets/>
        </div>
        <div class="col-md-3">
          <Faction/>
        </div>
      </div>
    </div>
  </div>
</template>