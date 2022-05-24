<template>
    <div v-if="ip">
        <Test 
            :value="ip"
        />

        {{ ip }} {{ edit_me_second }}
    </div>
</template>

<script lang="ts">
import { useIp } from '@/compositions/ip';
import { defineComponent, watch } from '@vue/composition-api';
import Test from './Test.vue';

export default defineComponent({
    components: { Test },
    setup() {
        const { ip } = useIp();
        const edit_me_second = 'edit_me';

        watch(() => ip.value, () => {
            console.log(ip.value)
        }, {
            immediate: true,
        });
        return { edit_me_second, ip }
    }
})
</script>