<template>
  <div>
    <apexchart 
      width="100%" 
      height="400" 
      type="line" 
      :options="lineOptions" 
      :series="lineSeries">
    </apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productSales = [500, 700, 800, 600, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500]; 
const stockLevels = [2000, 1800, 1700, 1900, 1600, 1500, 1400, 1300, 1200, 1100, 1000, 900];

const lineSeries = ref([
  {
    name: 'Product Sales',
    data: productSales
  },
  {
    name: 'Stock Levels',
    data: stockLevels
  }
]);

const lineOptions = {
  chart: {
    id: 'product-sales-chart'
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May",
      "Jun", "Jul", "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ]
  },
  title: {
    text: 'Monthly Product Sales and Stock Levels',
    align: 'left', 
    floating: false, 
    style: {
      fontSize: '20px',
      color: '#333',
      fontWeight: 'bold' 
    }
  },
  colors: ['#6f42c1', '#28a745'],
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    line: {
      curve: 'smooth'
    }
  },
  theme: {
    mode: 'light'
  }
}

</script>

<style scoped>
.apexcharts-title-text {
  text-align: left !important; 
}
</style>
