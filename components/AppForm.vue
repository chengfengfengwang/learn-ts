<template>
  <form @submit.prevent="handleSubmit" onsubmit="this.reset()">
    <input class="form-control" type="text" placeholder="Type something..." v-model="value" />
    <small>Press ENTER to submit.</small>
  </form>
</template>

<style lang="scss" scoped>
  $gray: #868e96;

  small {
    display: block;
    margin-top: 0.25rem;
    color: $gray;
    font-style: italic;
    text-align: left;
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class AppForm extends Vue {
    public value: string = '';

		public handleSubmit (): void {
			const log = (value: string): void => { console.log({ value }); };

			// Options to pass to the Notification constructor
			const options: Array<string|object> = [
				'Vue TypeScript Demo',
				{
					body: this.value,
					icon: 'https://vuejs.org/images/logo.png'
				}
			];

			// If the browser doesn't support Notifications, just log it to console
			if (window.Notification) {
				const { Notification } = window;
				let notification: any;

				// If the user has already granted permission to use Notifications
				if (Notification.permission === 'granted') {
					notification = new Notification(...options);
				// Otherwise, ask for permission (don't bug them for permission if they previously denied it)
				} else if (Notification.permission !== 'denied') {
					Notification.requestPermission(permission => {
						if (permission === 'granted') {
							notification = new Notification(...options);
						} else {
							log(this.value);
						}
					});
				} else {
				  log(this.value);
				}
			} else {
				log(this.value);
			}
		}
  }

  export default AppForm;
</script>
