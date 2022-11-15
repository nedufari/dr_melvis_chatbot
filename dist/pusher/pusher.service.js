"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PusherService = void 0;
const common_1 = require("@nestjs/common");
const pusher_1 = require("pusher");
let PusherService = class PusherService {
    constructor() {
        this.pusher = new pusher_1.default({
            appId: "1502903",
            key: "74c16799acbb86e511ae",
            secret: "1ebb816d6da9d318c904",
            cluster: "mt1",
            useTLS: true
        });
    }
    async trigger(channel, my_event, data) {
        await this.pusher.trigger(channel, my_event, data);
    }
};
PusherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PusherService);
exports.PusherService = PusherService;
//# sourceMappingURL=pusher.service.js.map