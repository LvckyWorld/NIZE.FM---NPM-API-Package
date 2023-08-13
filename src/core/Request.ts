/*
 * ©2016-2023 LvckyWorld - by LvckyAPI all Rights reserved
 * Licensed to Iven Schlenther, Lukas Oetken, Julia Kreutler and Michal Oblong
 * Project: npm-api-package
 */


import * as axios from "axios";
import {Config} from "./Config";
import {Station} from "../interface/stations/Station";

export class Request {
    public static async fetchStations(): Promise<Station> {
        return await axios.default.get(Config.getApiEndpoint() + "/data/stations").then((response: { data: any; }) => {
            return response.data as Station;
        });
    }
}