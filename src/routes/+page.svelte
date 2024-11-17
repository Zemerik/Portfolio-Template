<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import TypingComponent from './TypingComponent.svelte';
	import { ripple } from 'svelte-ripple-action';
	import { getSpotifyData, type UserData } from './spotify';
	import Work from './Work.svelte';
	import SvelteSeo from 'svelte-seo';

	let spotifyData: UserData['data'] | null = $state(null);
	let refreshInterval: NodeJS.Timeout;

	onDestroy(() => {
		clearInterval(refreshInterval);
	});

	onMount(async () => {
		spotifyData = (await getSpotifyData()).data;

		refreshInterval = setInterval(async () => {
			spotifyData = (await getSpotifyData()).data;
		}, 10000); //10 seconds - less than 1kb of data per request so it's fine ig
	});
</script>

<SvelteSeo title="Easy Portfolio Template" />

<div class="md:flex mt-2 md:mt-20 relative z-10">
	<div class="flex-1 flex flex-col justify-center md:items-start items-center">
		<h2 class="text-3xl opacity-60 font-light">Hi, I'm</h2>

		<h1 class="text-6xl my-4 font-medium text-white md:ml-0 ml-4 md:max-w-none max-w-[260px] md:text-left text-center">
			<TypingComponent text="Hemang," />
		</h1>

		<h2 class="text-2xl opacity-40">Frontend Developer</h2>

		<p>
			<a href = "https://zemeriksresume.vercel.app" target = "_blank" class="btn btn-primary mt-4" use:ripple>Resume</a>
			<a href = "https://zemeriksterminal.vercel.app" target = "_blank" class = "btn btn-primary mt-4" use:ripple>Terminal</a>
			<a href = "https://zemerikslinks.vercel.app" target = "_blank" class = "btn btn-primary mt-4" use:ripple>Linktree</a>
		</p>
	</div>

	<div class="col-span-1 mt-10 md:mt-auto flex justify-center md:justify-end">
		<img
			src="https://avatars.githubusercontent.com/u/133865660?v=4"
			alt="Profile"
			style="animation-duration: 20s;"
			class="rounded-full w-48 h-48 animate-spin"
		/>
	</div>
</div>

<h2 class="mt-32 mb-8 text-2xl font-semibold">About me</h2>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1 mb-4">
	<div class="col-span-1 flex flex-col gap-4">
		<div
			class="bg-base-200 flex-1 rounded-xl p-6 relative transition-all group-hover:translate-y-2 group-hover:scale-95"
		>
			<span class="text-base-content/40 text-2xl mb-4 block font-medium">Spotify</span>

			{#if spotifyData?.listening_to_spotify}
				<p class="text-lg font-bold">
					Listening to
					<a href="https://open.spotify.com/track/{spotifyData?.spotify?.track_id}"
						>{spotifyData?.spotify?.song}</a
					>
					by
					{spotifyData?.spotify?.artist}
				</p>
				<img
					src={spotifyData?.spotify?.album_art_url}
					alt="Album art"
					class="rounded-lg size-12 inline-block absolute right-4 top-4"
				/>
			{:else}
				<p class="text-lg font-bold">Not listening to anything right now</p>
			{/if}
		</div>

		<div class="bg-base-200 rounded-xl p-6 flex-1">
			<h2 class="text-base-content/40 text-2xl mb-2 font-medium">From</h2>

			<p class="text-3xl font-bold">Melbourne, Australia</p>
		</div>
	</div>

	<div
		class="md:col-span-2 col-span-1 leading-8 bg-base-300 px-5 py-4 rounded-xl text-lg relative z-10"
	>
		<p>
			As a 15-year-old high school student, I am driven by an unwavering passion for pursuing a career as a front-end software developer. 
			With a knack for transforming concepts into tangible realities, I possess a strong command of Frontend & Backend Development along with several API's, 
			enabling me to bring ideas to life through coding expertise.
		</p>

	</div>
</div>

<h2 class="mt-16 mb-8 text-2xl font-semibold">Projects</h2>

<Work />

<h2 class="mt-16 mb-8 text-2xl font-semibold">Contact me</h2>

<div class=" bg-base-200 p-4 rounded-lg leading-8" id="contact">
	<p>
		Contact me at <a href="mailto:zemeriky@gmail.com" class="link-hover">
			zemerikY@gmail.com</a
		>. Also, you can find me on social media using the links below.
	</p>
</div>
