<script lang="ts">
	import { run } from 'svelte/legacy';

	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import clsx from 'clsx';

	interface Props {
		text?: string;
		speed?: number;
	}

	let { text = '', speed = 10 }: Props = $props();

	let textArray = [...text];
	let textLength = textArray.length;
	let textIndex = $state(0);
	let textInterval: NodeJS.Timeout;

	onMount(() => {
		textInterval = setInterval(() => {
			if (textIndex < textLength) {
				textIndex++;
			} else {
				clearInterval(textInterval);
			}
		}, speed);
	});

	onDestroy(() => {
		clearInterval(textInterval);
	});
</script>

{#each text as letter, i}
	<span class={textIndex > i ? 'in' : 'opacity-0'}>
		{@html letter === ' ' ? '&nbsp;' : letter}
	</span>
{/each}

<style>
	.in {
		opacity: 0;
		display: inline-block;
		transform: translateY(0px);
		animation: fadeIn 0.5s ease-in-out forwards;
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(-2px);
			opacity: 0;
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
</style>
