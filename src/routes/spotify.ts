interface Timestamps {
	start: number;
	end: number;
}

interface SpotifyData {
	track_id: string;
	timestamps: Timestamps;
	album: string;
	album_art_url: string;
	artist: string;
	song: string;
}

interface DiscordUser {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	bot: boolean;
	global_name: string;
	avatar_decoration_data: null | any; // Replace 'any' with the actual type if known
	display_name: string;
	public_flags: number;
}

interface Activity {
	flags: number;
	id: string;
	name: string;
	type: number;
	state: string;
	session_id: string;
	details: string;
	timestamps: Timestamps;
	assets: {
		large_image: string;
		large_text: string;
	};
	sync_id: string;
	created_at: number;
	party: {
		id: string;
	};
}

export interface UserData {
	data: {
		kv: Record<string, any>; // Replace 'any' with the actual type if known
		spotify?: SpotifyData;
		discord_user: DiscordUser;
		activities: Activity[];
		discord_status: string;
		active_on_discord_web: boolean;
		active_on_discord_desktop: boolean;
		active_on_discord_mobile: boolean;
		listening_to_spotify: boolean;
	};
	success: boolean;
}

const API_URL = 'https://api.lanyard.rest/v1/users/1018816958587748383';

export async function getSpotifyData() {
	//@ts-ignore
	if (typeof window === 'undefined') return { data: null };
	const response = await fetch(API_URL + '?__cacheIgnore=' + Math.random());
	const data: UserData = await response.json();

	return data;
}
