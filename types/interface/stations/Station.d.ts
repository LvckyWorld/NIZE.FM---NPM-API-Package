import { StationData } from "./StationData";
export interface Station {
    "success": boolean;
    "data": {
        "listeners": {
            "all_listeners": number;
            "webstream": number;
            "discord": number;
            "smartspeaker": number;
        };
        "stations": {
            "1": StationData;
        };
    };
}
