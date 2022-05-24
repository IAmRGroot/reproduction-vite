<template>
    <div>
        {{ ip }}
        <div>
            {{value}}
        </div>
    </div>
</template>

<script lang="ts">
import { useIp } from '@/compositions/ip';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: [Number, String],
            required: true,
        },
    },
    setup() {
        const { ip } = useIp();

        return { ip }
    }
})
</script>