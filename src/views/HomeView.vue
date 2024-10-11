<template>
    <AdminLayout>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardBoxWidget 
          v-for="(card, index) in cardsData" 
          :key="index" 
          :number="card.number" 
          :label="card.label" 
          :circleColor="card.circleColor" 
          :percentage="card.percentage" 
        />
      </div>
  
      <!-- Graphs Section -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-4 2xl:gap-7.5 mt-8">
        <div class="col-span-1 md:col-span-1 xl:col-span-3 bg-white shadow-md p-6">
          <ApplicationsChart />
        </div>
        <div class="col-span-1 md:col-span-1 xl:col-span-1 bg-white shadow-md p-6">
          <JobChart />
        </div>
      </div>
    </AdminLayout>
  </template>
  
  
  <script setup>
  import AdminLayout from "@/layouts/AdminLayout.vue";
  import CardBoxWidget from "@/components/CardWidget.vue"; 
  import ApplicationsChart from "@/components/charts/ApplicationsChart.vue";
  import JobChart from "@/components/charts/JobChart.vue";
  
  // Array of card data
  const cardsData = [
    {
      number: 75000,
      label: "Total Applications",
      circleColor: "text-green-500",
      percentage: 85,
    },
    {
      number: 12000,
      label: "Active Applications",
      circleColor: "text-blue-500",
      percentage: 70,
    },
    {
      number: 5000,
      label: "Pending Reviews",
      circleColor: "text-yellow-500",
      percentage: 50,
    },
    {
      number: 25000,
      label: "Completed Applications",
      circleColor: "text-red-500",
      percentage: 90,
    },
  ];
  </script>
  