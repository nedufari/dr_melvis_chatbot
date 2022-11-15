import Pusher from 'pusher';
export declare class PusherService {
    pusher: Pusher;
    constructor();
    trigger(channel: string, my_event: string, data: any): Promise<void>;
}
