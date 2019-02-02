<template>
	<div id="app">
		<nav class="navbar between">
			<router-link to="/" class="logo">sudo sass</router-link>
			<nav>
				<router-link
					v-for="route in this.$router.options.routes"
					:key="route.name"
					:to="route.path"
				>{{ route.name }}</router-link>
			</nav>
		</nav>
		<router-view/>
	</div>
</template>

<script>
// import routes from "@/router";
export default {
	data() {
		return {
			// routes: this.$router.options
		};
	}
};
</script>


<style lang="scss">
	@import "../../../node-packages/sudosass/scss/app.scss";
</style>

