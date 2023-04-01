<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import Empty from "@/Components/Empty.vue";
import Track from "@/Components/Track.vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { usePlaylistStore } from "@/stores/playlist";

const props = defineProps(["tracks"]);

const store = usePlaylistStore();

dayjs.extend(relativeTime);
function evPlay() {
    store.setList(props.tracks);
}
</script>

<template>
    <Head title="Create a new playlist" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Tracks
            </h2>
        </template>

        <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div class="p-2 my-2 bg-white rounded-lg">
                <h3 class="px-2 font-xl font-semibold">All tracks</h3>
                <Track
                    v-for="track in tracks"
                    :key="track.id"
                    :track="track"
                    @play="evPlay"
                />
                <Empty :collection="tracks" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
