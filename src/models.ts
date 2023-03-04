export type EventType = {
    date: string
    text: string;
}

export interface EventsModel {
    title: string,
    items: EventType[];
}