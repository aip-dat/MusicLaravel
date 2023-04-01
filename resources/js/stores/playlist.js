import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePlaylistStore = defineStore("playlist", () => {
    // Define reactive variables for the playlist state
    const nowPlaying = ref(null);
    const list = ref([]);
    const position = ref(0);

    // Define computed properties to check if the playlist can go back or forward
    const isBackable = computed(() => position.value > 0);
    const isNextable = computed(() => position.value < list.value.length - 1);

    // Define functions to set and manipulate the playlist state
    function setList(trackList) {
        list.value = trackList;
        if (nowPlaying.value) {
            const index = list.value.findIndex(
                (t) => t.id === nowPlaying.value.id
            );
            if (index >= 0) {
                position.value = index;
            }
        } else {
            nowPlaying.value = trackList[0] || null;
        }
    }

    function play(track) {
        const index = list.value.findIndex((t) => t.id === track.id);
        if (index >= 0) {
            position.value = index;
        } else {
            list.value = [];
        }

        nowPlaying.value = track;

        console.log(nowPlaying.value.seconds);
    }

    function back() {
        if (isBackable.value) {
            nowPlaying.value = list.value[--position.value];
        }
    }

    function next() {
        if (isNextable.value) {
            nowPlaying.value = list.value[++position.value];
        }
    }

    // Return the playlist state and functions as an object
    return {
        back,
        isBackable,
        isNextable,
        next,
        nowPlaying,
        position,
        play,
        setList,
    };
});
