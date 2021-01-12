<template>
	<Container>
		<!-- Use the native modifier on the click handler to bind to the root element in the component,
				 in this case, the wrapper div
	
	       The : is shorthand for v-bind -->
		<AppHeading :message="message" @click.native="handleClick" />

		<AppNav />

		<AppSection />

		<AppFooter :path="$route.path" />
	</Container>
</template>

<!-- These styles will be global -->
<style lang="scss">
  $black: #343a40;

	body {
		background: $black;
		margin-top: 30px;
	}
</style>

<script lang="ts">
	// You must use a namespace import with Vue (when using TypeScript)
	import * as Vue from 'vue';
	import { Component } from 'vue-property-decorator';

	import * as Container from '../primitives/Container';
	import * as AppHeading from './AppHeading';
	import * as AppNav from './AppNav';
	import * as AppSection from './AppSection';
	import * as AppFooter from './AppFooter';

	// Class components need to be registered locally since we didn't use Vue.component to register globally
	const components: object = { Container, AppHeading, AppNav, AppSection, AppFooter };

	@Component({ components })
  class App extends Vue {
		public message: string = 'Hello World';

		public handleClick (): void {
			this.message = this.message === 'Hello World' ? 'Good Bye World' : 'Hello World';
		}
	}

	export default App;
</script>
