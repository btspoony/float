import type { EventType } from '../event/even-type.type';

export interface FLOAT {
	id: string;
	dateReceived: string;
	eventDescription: string;
	eventHost: string;
	eventId: string;
	eventImage: string;
	eventName: string;
	originalRecipient: string;
	serial: string;
	totalSupply: string | null;
	transferrable: boolean;
	// needed for the UI
	eventType: EventType;
}
