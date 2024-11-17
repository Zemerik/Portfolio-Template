<script lang="ts">

	const MAJOR: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: 'Portfolio',
			description: 'My Professional Portfolio',
			link: 'https://github.com/Zemerik/Portfolio-v2',
		},
		{
			name: 'ZemProfiles',
			description: 'Discover & Connect with Developers',
			link: 'https://github.com/Zemerik/ZemProfiles',
		},
		{
			name: 'ZemPosts',
			description: 'Post & Connect with Developers',
			link: 'https://github.com/Zemerik/ZemPosts'
		},
		{
			name: 'ZemShowcase',
			description: 'Showcase & Connect with Developers',
			link: 'https://github.com/Zemerik/ZemShowcase'
		},
	];
</script>

<div class="grid mt-4 gap-4 sm:grid-cols-2">
	{#each MAJOR as project}
		<div
			class="col-span-1 overflow-hidden transition-all card bg-base-100 shadow-xl border border-base-300"
		>
			{#if project.img}
				<Img src={project.img} alt={project.name} />
			{/if}

			<div class="card-body px-4">
				<h1 class="card-title">{project.name}</h1>

				<p class="opacity-60">{project.description}</p>
			</div>

			<div class="card-actions px-4 mb-6">
				{#if project.link}
					<a href={project.link} use:ripple class="btn w-full btn-primary mr-auto" target="_blank">
						Visit
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
