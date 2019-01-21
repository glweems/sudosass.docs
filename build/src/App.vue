<template>
	<div id="app">
		<nav class="navbar between">
			<router-link to="/" class="logo">sudo sass</router-link>
			<nav>
				<router-link to="/colors">colors</router-link>
				<router-link to="/typography">typography</router-link>
				<router-link to="/grid">grid</router-link>
			</nav>
		</nav>
		<router-view/>
	</div>
</template>

<style lang="scss">
	// @import "../../../node-packages/sudosass/scss/app.scss";
</style>
