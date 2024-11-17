<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Experience {
		title: string;
		company: string;
		type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
		startDate: string; // YYYY-MM
		endDate: string | null; // YYYY-MM or null for present
		location: string;
		description?: string;
		skills: string[];
	}

	const experiences: Experience[] = [
		{
			title: 'Frontend Web Developer',
			company: 'Self - Employed',
			type: 'Freelance',
			startDate: '2023',
			endDate: null,
			location: 'Remote',
			skills: ['ReactJS', 'NextJS', 'NodeJS', 'Typescript/Javascript', 'Tailwind', 'Github', 'Git']
		},
		{
			title: 'VexIQ Team Manager',
			company: 'Hillcrest Christian College',
			type: 'Extra - Curricular',
			startDate: '2022',
			endDate: 2023,
			location: 'Melbourne',
			skills: ['C', 'C+', 'C++', 'Python']
		},
	];
</script>

{#each experiences as experience}
	<div
		class="flex flex-col md:flex-row items-start md:items-center border rounded-xl p-6 border-base-300/60 bg-base-200 backdrop-blur-md mb-6 shadow-lg"
	>
		<div class="flex-1">
			<h3 class="text-lg font-bold mb-1">
				{experience.title}
			</h3>
			<p class="text-sm text-base-content/70 mb-2">
				{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
			</p>
			<p class="text-sm text-base-content/70 mb-2">{experience.location}</p>
			{#if experience.description}
				<p class="text-sm text-base-content/80 mb-2">{experience.description}</p>
			{/if}
			<p class="text-sm text-base-content/80">
				<strong>Skills:</strong>
				{experience.skills.join(', ')}
			</p>
		</div>
	</div>
{/each}
