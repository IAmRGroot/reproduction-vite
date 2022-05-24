<template>
    <Wrapper />
</template>

<script lang="ts">
import { useIp } from '@/compositions/ip';
import { defineComponent } from '@vue/composition-api';
import Wrapper from './components/Wrapper.vue';

const { fetchIp } = useIp();

void fetchIp();

export default defineComponent({
    components: { Wrapper },
    setup() {
        const { fetchIp } = useIp();

        void fetchIp();

        return { }
    }
})
</script>