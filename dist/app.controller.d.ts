import { PusherService } from './pusher/pusher.service';
export declare class AppController {
    private pusherservice;
    constructor(pusherservice: PusherService);
    messages(username: string, message: string): Promise<string>;
}
