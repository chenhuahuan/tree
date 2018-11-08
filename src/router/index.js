import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/view/tree'//old
import SlotTree from '@/view/slot_tree'
import mySlotTree from '@/view/empty'

Vue.use(Router)

export default new Router({
  	routes: [{
  		path: '/',
  		redirect: '/slot'
  	},{
		path: '/render',
		name: 'RenderTree',
		component: Tree
	},{
		path: '/slot',
		name: 'SlotTree',
		component: SlotTree
	},
  {
    path: '/myslot',
    name: 'mySlotTree',
    component: mySlotTree
  }]
})
