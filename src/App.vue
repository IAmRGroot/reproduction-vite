<template>
    <Wrapper />
</template>

<script lang="ts">
import { useIp } from '@/compositions/ip';
import { defineComponent } from 'vue';
import Wrapper from './components/Wrapper.vue';

export default defineComponent({
    components: { Wrapper },
    setup() {
        const { fetchIp } = useIp();

        void fetchIp();

        return { }
    }
})
</script>