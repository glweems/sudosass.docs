<template>
	<div class="container">
		<h1 class="heading">Grid</h1>
		<h2>Half</h2>
		<div class="grid half">
			<div class="bg-success rounded">
				<div class="container">
					<p>1/2</p>
				</div>
			</div>
			<div class="bg-danger rounded">
				<div class="container">
					<p>1/2</p>
				</div>
			</div>
		</div>
		<h2>Thirds</h2>
		<div id="grid">
			<div class="bg-success rounded">
				<div class="container">
					<p>1/3</p>
				</div>
			</div>
			<div class="bg-danger rounded">
				<div class="container">
					<p>1/3</p>
				</div>
			</div>
			<div class="bg-warning rounded">
				<div class="container">
					<p>1/3</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "grid"
};
</script>
