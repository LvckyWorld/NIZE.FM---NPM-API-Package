"use strict";
/*
 * ©2016-2023 LvckyWorld - by LvckyAPI all Rights reserved
 * Licensed to Iven Schlenther, Lukas Oetken, Julia Kreutler and Michal Oblong
 * Project: npm-api-package
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var main_config = require("../config/main.json");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.getConfig = function () {
        return main_config;
    };
    Config.getApiEndpoint = function () {
        return this.getConfig().main_config["API-ENDPOINT"];
    };
    return Config;
}());
exports.Config = Config;
