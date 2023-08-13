import { SongData } from "./SongData";
export interface StationData {
    "id": string;
    "showstate": {
        "show_state": string;
        "show_name": string;
        "show_moderator": string;
        "show_moderator_name": string;
    };
    "station_name": string;
    "station_description": string;
    "current_listeners": number;
    "playlist": {
        "now": SongData;
        "next": {
            "1": SongData;
            "2": SongData;
            "3": SongData;
        };
    };
    "history": string;
}
