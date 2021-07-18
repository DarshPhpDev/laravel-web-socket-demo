<template>
	<div>
		System says: {{ notification }}
	</div>
</template>

<script>
	export default{
		name: "HomeComponent",
		data(){
			return {
				notification: ""
			}
		},
		mounted(){
			window.Echo.channel('Notification').listen('NotificationRecieved', event => {
				this.notification = event.notification
			})
		}
	}
</script>