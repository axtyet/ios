// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,force_optimize_code_size,long_type_number,output_javascript
// @generated from protobuf file "src/protobuf/get_watch.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/get_watch
 *
 * @generated from protobuf message getWatchResponse
 */
export interface getWatchResponse {
    /**
     * @generated from protobuf field: repeated Contents contents = 1;
     */
    contents: Contents[];
}
/**
 * @generated from protobuf message Contents
 */
export interface Contents {
    /**
     * @generated from protobuf field: optional Player playerResponse = 2;
     */
    playerResponse?: Player;
    /**
     * @generated from protobuf field: optional Player playerConfig = 3;
     */
    playerConfig?: Player;
    /**
     * @generated from protobuf field: bool playerAds = 7;
     */
    playerAds: boolean;
    /**
     * @generated from protobuf field: bool adPlacements = 10;
     */
    adPlacements: boolean;
}
/**
 * Context responseContext = 1;
 * PlaybackTracking playbackTracking = 9;
 * StreamingData streamingData = 4;
 * PlaybackTracking playbackTracking = 9;
 * HeartbeatParams heartbeatParams = 6;
 * Captions captions = 10;
 * VideoDetails videoDetails = 11;
 * repeated Annotations annotations = 13;
 * Storyboards storyboards = 16;
 * Attestation attestation = 22;
 * Endscreen endscreen = 32;
 *
 * @generated from protobuf message Player
 */
export interface Player {
}
declare class getWatchResponse$Type extends MessageType<getWatchResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message getWatchResponse
 */
export declare const getWatchResponse: getWatchResponse$Type;
declare class Contents$Type extends MessageType<Contents> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Contents
 */
export declare const Contents: Contents$Type;
declare class Player$Type extends MessageType<Player> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Player
 */
export declare const Player: Player$Type;
export {};