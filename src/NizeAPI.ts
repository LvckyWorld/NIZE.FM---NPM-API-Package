/*
 * ©2016-2023 LvckyWorld - by LvckyAPI all Rights reserved
 * Licensed to Iven Schlenther, Lukas Oetken, Julia Kreutler and Michal Oblong
 * Project: npm-api-package
 */
    
    
import {Request} from "./core/Request";
import {StationData} from "./interface/stations/StationData";

export class NizeAPI {
    public static async getStation(): Promise<StationData> {
        return (await Request.fetchStations()).data.stations["1"];
    }
}