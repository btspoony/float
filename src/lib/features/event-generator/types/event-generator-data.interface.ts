import type { EventType } from '$lib/types/event/even-type.type';

export interface EventGeneratorData {
	description: string;
	eventId: string;
	host: string;
	image: string;
	name: string;
	totalSupply: string;
	transferrable: boolean;
	eventType: EventType;
}
