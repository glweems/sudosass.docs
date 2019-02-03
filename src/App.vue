<template>
	<div id="app">
		<NavbarComponent :pages="pages" logoText="SUDO" :between="true"/>
		<router-view class="hasStickyNav"/>
		<SidebarComponent :show="sidebarComponent"></SidebarComponent>
	</div>
</template>

<script>
import SidebarComponent from "#/Sidebar/SidebarComponent";
import { mapState, mapMutations } from "vuex";
import routes from "@/router";
export default {
	name: "SudoSass",
	components: {
		SidebarComponent
	},
	methods: {},
	computed: {
		...mapState(["title", "pages", "sidebarComponent"])
	}
};
</script>


<style lang="scss">
	@import "../../../node-packages/sudosass/scss/app.scss";
	.hasStickyNav {
		padding-top: 5em;
	}
</style>

