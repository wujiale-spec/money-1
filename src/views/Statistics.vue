<template>
  <Layout>
    <Tabs :data-source="recordTypeList" class-prefix="type" :value.sync="type"/>
    <Tabs :data-source="intervalList" class-prefix="interval" :value.sync="interval"/>
    <div>
      {{ type }}
      <br>
      {{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;
  intervalList = intervalList;
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item{
   height: 48px;
 }
</style>