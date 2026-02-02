import type { ImageMetadata } from "astro";

export type MediaType = 'image' | 'video';

export interface MediaItem {
    type: MediaType;
    source: ImageMetadata | string; 
    alt?: string;
}

export interface ServiceBlock {
    title: string;
    gallery: MediaItem[];
}