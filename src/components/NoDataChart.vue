<template>
    <div class="chart">
      <h4 class="chart__title">{{ $t("chart.noData") }}</h4>
    </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss">

  .chart {
    background: #f1f1f1;
    width: 100%;
    height: 100%;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      font-weight: 500;
      font-size: 16px;
    }
  }

@media screen and (max-width: 1370px) {
    
}
</style>
