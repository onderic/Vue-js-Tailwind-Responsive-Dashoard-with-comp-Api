<template>
  <div>
    <apexchart 
      width="100%" 
      height="400" 
      type="bar" 
      :options="barOptions" 
      :series="barSeries">
    </apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const weeklyApplications = [50, 70, 80, 60, 90, 95, 100]; 

const barSeries = ref([
  {
    name: 'Job Applications',
    data: weeklyApplications
  }
]);

const barOptions = {
  chart: {
    id: 'weekly-job-applications-chart'
  },
  xaxis: {
    categories: [
      "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ]
  },
  title: {
    text: 'Weekly Job Applications',
    align: 'left', 
    floating: false, 
    style: {
      fontSize: '20px',
      color: '#333',
      fontWeight: 'bold' 
    }
  },
  colors: ['#6f42c1'], 
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded'
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
