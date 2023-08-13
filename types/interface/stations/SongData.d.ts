export interface SongData {
    "id": string;
    "artist": string;
    "title": string;
    "info": {
        "duration": string;
        "started_at": string;
        "end_at": string;
        "duration_enable": string;
        "isrc": string;
        "release_date": string;
        "last_played": string;
        "genre": string;
        "new_song": number;
    };
    "artwork_urls": {
        "500x500": string;
        "250x250": string;
    };
    "preview": string;
}
