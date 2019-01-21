<template>
	<div class="container">
		<h1 class="heading">Colors</h1>
		<h2>Text Classes</h2>

		<h3 class="text-dark">dark</h3>
		<h3 class="text-light">light</h3>
		<h3 class="text-muted">muted</h3>
		<h3 class="text-secondary">secondary</h3>
		<h3 class="text-primary">primary</h3>
		<h3 class="text-primary">success</h3>
		<h3 class="text-danger">danger</h3>
		<h3 class="text-info">info</h3>
		<h3 class="text-warning">warning</h3>

		<h2>Backgrounds</h2>

		<div class="container bg-dark rounded">
			<p class="text-light">bg-dark</p>
		</div>

		<div class="container bg-light rounded">
			<p class="text-dark">bg-light</p>
		</div>

		<div class="container bg-primary rounded">
			<p class="text-dark">bg-primary</p>
		</div>

		<div class="container bg-secondary rounded">
			<p class="text-dark">bg-secondary</p>
		</div>

		<div class="container bg-success rounded">
			<p class="text-dark">bg-success</p>
		</div>

		<div class="container bg-danger rounded">
			<p class="text-dark">bg-danger</p>
		</div>

		<div class="container bg-info rounded">
			<p class="text-dark">bg-info</p>
		</div>

		<div class="container bg-warning rounded">
			<p class="text-dark">bg-info</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "colors"
};
</script>
