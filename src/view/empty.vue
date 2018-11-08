<template>
  <my-slot-tree :setTreeFromParent="myData"></my-slot-tree>
</template>

<script>

import mySlotTree from '@/view/my_slot_tree'
import api from '@/resource/api'

export default {
  name: 'emptyslot-tree',
  components: { mySlotTree },
  data() {
    return {
      myData: api.treelist
    }
  },
  methods: {}
}

</script>
