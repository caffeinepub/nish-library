import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    title: string;
    date: string;
    description: string;
}
export interface LibraryResource {
    url: string;
    name: string;
    description: string;
    category: string;
}
export interface LibraryInfo {
    contact: string;
    hours: string;
    name: string;
    address: string;
}
export interface backendInterface {
    addAnnouncement(title: string, description: string, date: string): Promise<void>;
    getAnnouncements(): Promise<Array<Announcement>>;
    getLibraryInfo(): Promise<LibraryInfo>;
    getLibraryResources(): Promise<Array<LibraryResource>>;
    setLibraryInfo(info: LibraryInfo): Promise<void>;
    setLibraryResources(_resources: Array<LibraryResource>): Promise<void>;
}
