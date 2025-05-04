<template>
    <div>
        <div class="hidden md:flex fixed z-20 top-7 left-1/2 transform -translate-x-1/2">
            <div
                class="flex items-center justify-center gap-6 sm:gap-10 rounded-full p-2 card-nav bg-opacity-80 backdrop-blur-2xl">
                <div v-for="item in items" :key="item.name">
                    <NuxtLink :to="item.path" class="flex items-center justify-center cursor-pointer" :class="[
                        route.path === item.path
                            ? 'text-header font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card-nav-item'
                            : 'text-header-2 font-medium pt-2 pb-2 pl-4 pr-4 hover:text-header transition-all duration-300 border-none',
                    ]" :aria-label="'Go to ' + item.name + ' profile'">
                        <component :is="item.icon" class="w-7 h-7" />
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="md:hidden fixed z-20 bottom-2 left-1/2 transform -translate-x-1/2">
            <div
                class="flex items-center justify-center gap-6 sm:gap-10 rounded-full p-2 card-nav bg-opacity-80 backdrop-blur-2xl">
                <div v-for="item in items" :key="item.name">
                    <NuxtLink :to="item.path" class="flex items-center justify-center cursor-pointer" :class="[
                        route.path === item.path
                            ? 'text-header font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card-nav-item'
                            : 'text-header-2 font-medium pt-2 pb-2 pl-4 pr-4 hover:text-header transition-all duration-300 border-none',
                    ]" :aria-label="'Go to ' + item.name + ' profile'">
                        <component :is="item.icon" class="w-7 h-7" />
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { HomeIcon, PencilIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

const items = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Projects', path: '/projects', icon: PencilIcon },
    { name: 'About', path: '/about', icon: UserIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
]

const route = useRoute()

/*
        <div class="md:hidden fixed bottom-0 left-0 z-20">
            <div
                class="flex items-center justify-center gap-6 sm:gap-10 rounded-full p-2 card-nav bg-opacity-50 backdrop-blur-2xl mb-3 mx-5">
                <div v-for="item in items" :key="item.name">
                    <NuxtLink :to="item.path" class="flex items-center justify-center cursor-pointer" :class="[
                        route.path === item.path
                            ? 'text-primary-color font-bold pt-2 pb-2 pl-4 pr-4 rounded-full card-nav-item'
                            : 'text-primary-color/70 font-medium pt-2 pb-2 pl-4 pr-4 hover:text-primary-color transition-all duration-300 border-none',
                    ]" :aria-label="'Go to ' + item.name + ' profile'">
                        <span class="sr-only">Go to {{ item.name }} profile</span>
                        <component :is="item.icon" class="w-7 h-7" />
                    </NuxtLink>
                </div>
            </div>
        </div>
*/
</script>
