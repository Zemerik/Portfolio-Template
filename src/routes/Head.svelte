<script lang="ts">
	import { page } from '$app/stores';
	import { ripple } from 'svelte-ripple-action';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import clsx from 'clsx';
	import { cubicInOut } from 'svelte/easing';

	const topAppBarHeight = 76;

	let lastScrollPosition = 0;
	let currentAppBarOffsetTop = $state(0);

	const update = () => {
		const currentScrollPosition = Math.max(window.scrollY, 0);
		const diff = currentScrollPosition - lastScrollPosition;
		lastScrollPosition = currentScrollPosition;

		currentAppBarOffsetTop -= diff;

		if (currentAppBarOffsetTop > 0) {
			currentAppBarOffsetTop = 0;
		} else if (Math.abs(currentAppBarOffsetTop) > topAppBarHeight) {
			currentAppBarOffsetTop = -topAppBarHeight;
		}
	};

	let menuOpen = $state(false);

	const menuItems = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Experiences',
			link: '/hire'
		},
		{
			name: 'Blogs',
			link: 'https://zemerik.hashnode.dev'
		},
		{
			name: 'Use Template',
			link: 'https://github.com/Zemerik/Portfolio-Template'
		}
	];

	let activePagePath = $derived($page.url.pathname);

	onMount(update);
</script>

<svelte:window onscroll={update} />

<div
	class="fixed flex items-center justify-center z-50 w-full top-4 left-0"
	style="transform: translateY({currentAppBarOffsetTop}px); "
>
	<div class="bg-white/5 md:flex hidden backdrop-blur-md rounded-full p-2 shadow-floating-xl">
		{#each menuItems as item}
			<a
				class={clsx(
					'px-4 transition-all py-2 transition- rounded-full',
					activePagePath === item.link ? 'bg-white/5' : 'hover:bg-white/5'
				)}
				href={item.link}
				use:ripple
				target={item.link.startsWith('http') ? '_blank' : undefined}
			>
				{item.name}
			</a>
		{/each}
	</div>
</div>

{#if menuOpen}
	<div
		class="fixed inset-0 bg-black/70 z-40"
		onclick={() => (menuOpen = false)}
		aria-hidden="true"
		transition:fade={{ duration: 200 }}
	></div>
{/if}

{#if menuOpen}
	<div
		class="fixed top-0 right-0 w-64 h-full bg-[#2b2b2b] backdrop-blur-sm z-50 shadow-lg p-4 overflow-y-auto"
		transition:fly={{ duration: 200, x: 10, easing: cubicInOut }}
	>
		<button
			class="absolute top-4 right-4 p-2 rounded-full bg-white/5"
			onclick={() => (menuOpen = false)}
		>
		</button>

		<ul class="mt-8 space-y-4">
			{#each menuItems as item}
				<li>
					<a
						class={clsx(
							'block px-4 py-2 rounded-md transition-all text-white',
							activePagePath === item.link ? 'bg-white/5' : 'hover:bg-white/5'
						)}
						href={item.link}
						onclick={() => (menuOpen = false)}
						target={item.link.startsWith('http') ? '_blank' : undefined}
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
