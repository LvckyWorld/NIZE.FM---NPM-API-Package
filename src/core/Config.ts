/*
 * ©2016-2023 LvckyWorld - by LvckyAPI all Rights reserved
 * Licensed to Iven Schlenther, Lukas Oetken, Julia Kreutler and Michal Oblong
 * Project: npm-api-package
 */

import * as main_config from "../config/main.json";
    
export class Config {
    public static getConfig() {
        return main_config;
    }

    public static getApiEndpoint() {
        return this.getConfig().main_config["API-ENDPOINT"];
    }
}