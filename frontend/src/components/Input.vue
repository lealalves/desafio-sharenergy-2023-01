<template>
	<input @input='$emit("customChange", $event.target.value)' :type="type" :placeholder="placeholder" class="input-login" />
</template>
<style>
.input-login {
	margin: 15px 0 15px 0;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid whitesmoke;
	color: whitesmoke;
	padding: 5px;
}

.input-login::placeholder {
	color: white;
}
</style>
<script>
export default {
	name: "Input",
	props: {
		type: String,
		placeholder: String,
	}
}
</script>

