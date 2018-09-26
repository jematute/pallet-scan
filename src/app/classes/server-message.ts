export interface ServerMessage {
    Type: MessageType,
    Message: string,
}

export enum MessageType {
    GETCASEDATA,
    GETALARM,
}