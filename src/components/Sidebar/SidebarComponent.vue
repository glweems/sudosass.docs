<template>
	<div>
		<my-component :is="show"/>
	</div>
</template>

<script>
import SidebarOpen from "#/Sidebar/SidebarOpen";
import SidebarClose from "#/Sidebar/SidebarClose";
import { mapState, mapMutations } from "vuex";
	export default {
		name:"SidebarComponent", 
		props: {
			show: {type: Object}
		},
		components: {
			SidebarOpen,
			SidebarClose
		},
		computed: {
			...mapState(["SidebarComponent"])
		},
	}
</script>

<style scoped>

</style>