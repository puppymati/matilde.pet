export const site = {
	name: 'Matilde',
	rssTitle: "Mati's Blog",
	rssDescription: "systems programming, Rust, and whatever else I'm building",
};

export type AccentColor = 'peach' | 'lavender' | 'pink';

export const contacts = {
	github: {
		name: 'GitHub',
		handle: '@puppymati',
		href: 'https://github.com/puppymati',
		color: 'peach' as AccentColor,
	},
	bluesky: {
		name: 'Bluesky',
		handle: '@matilde.pet',
		href: 'https://bsky.app/profile/matilde.pet',
		color: 'lavender' as AccentColor,
	},
	fediverse: {
		name: 'Fediverse',
		handle: '@matilde@tech.lgbt',
		href: 'https://tech.lgbt/@matilde',
		color: 'lavender' as AccentColor,
	},
	discord: {
		name: 'Discord',
		handle: '@milksheep',
		href: 'https://discord.com',
		color: 'lavender' as AccentColor,
	},
	twitter: {
		name: 'Twitter',
		handle: '@puppymati',
		href: 'https://x.com/puppymati',
		color: 'peach' as AccentColor,
	},
	email: {
		name: 'Email',
		handle: 'contact@morrone.dev',
		href: 'mailto:contact@morrone.dev',
		color: 'pink' as AccentColor,
	},
};

export const projects = [
	{
		name: 'verdi',
		description:
			'An elegant Wayland compositor built from scratch, along with a full ecosystem of Rust libraries powering it.',
		tags: ['Rust', 'Wayland', 'Compositor'],
		href: 'https://verdi.rocks',
		color: 'lavender' as AccentColor,
	},
	{
		name: 'sap',
		description: 'A small, simple and sweet argument parser for Rust.',
		tags: ['Rust', 'CLI', 'Library'],
		href: 'https://github.com/tailwags/sap',
		color: 'peach' as AccentColor,
	},
	// {
	// 	name: 'blossom',
	// 	description: 'A delightful package manager for Linux.',
	// 	tags: ['Rust', 'Linux', 'Systems'],
	// 	href: 'https://github.com/tailwags/blossom',
	// 	color: 'pink' as AccentColor,
	// },
	{
		name: 'bread',
		description: 'A modern UEFI bootloader for the Linux kernel.',
		tags: ['Rust', 'UEFI', 'Linux'],
		href: 'https://github.com/tailwags/bread',
		color: 'peach' as AccentColor,
	},
	{
		name: 'puppyutils',
		description:
			'A Rust reimplementation of coreutils, util-linux, and find-utils.',
		tags: ['Rust', 'Linux', 'Systems'],
		href: 'https://puppyutils.org/',
		color: 'peach' as AccentColor,
	},
	{
		name: 'maple',
		description: 'A new Linux environment written in Rust.',
		tags: ['Rust', 'Linux'],
		href: 'https://github.com/tailwags/maple',
		color: 'lavender' as AccentColor,
	},
	// {
	// 	name: 'cake',
	// 	description: 'The Portal ending screen, running in your browser.',
	// 	tags: ['TypeScript', 'Web'],
	// 	href: 'https://cake.morrone.dev/',
	// 	color: 'pink' as AccentColor,
	// },
	{
		name: 'podzol',
		description: 'A modern package manager for Minecraft modpacks.',
		tags: ['Rust', 'Minecraft', 'CLI'],
		href: 'https://github.com/puppymati/podzol',
		color: 'lavender' as AccentColor,
	},
];

export const rings = [
	{
		name: 'nix webring',
		member: 'matilde',
		base: 'https://nixwebr.ing',
		random: true,
	},
	// {
	// 	name: "pet webring",
	// 	member: "matilde",
	// 	base: "https://example.com",
	// 	random: true,
	// },
];
