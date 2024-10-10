
<template>
   <div
    :class="{
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded
    }"
   >
   <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-100 "
    >

    <NavBar
        :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      >
      <NavBarItemPlain
         display="flex lg:hidden"
         @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
         >
         <button
            aria-expanded="true"
            aria-controls="sidebar"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
         >
            <svg
               class="w-[18px] h-[18px]"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 17 14"
            >
               <path
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M1 1h15M1 7h15M1 13h15"
               />
            </svg>
            <span class="sr-only">Toggle sidebar</span>
         </button>
         </NavBarItemPlain>

       
      </NavBar>
    <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="sideBar"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      
  <div class="p-6">
   <slot />
   </div>
   </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import sideBar from '@/sideBar.js'
import { useRouter } from 'vue-router'
import AsideMenu from '@/components/AdminMenu/AsideMenu.vue'
import NavBar from '@/components/AdminNavBar/NavBar.vue'
import NavBarItemPlain from '@/components/AdminNavBar/NavBarItemPlain.vue'


const layoutAsidePadding = 'xl:pl-60'
const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)

const router = useRouter()

router.beforeEach(() => {
   isAsideMobileExpanded.value = false
   isAsideLgActive.value = false
})



</script>
