// @ts-nocheck
/// <reference types="react" />
declare module "bridge/rtm/web/index" {
    import { ChannelAttributeOptions, RtmAttribute, RtmChannelAttribute, Subscription } from 'agora-react-native-rtm/lib/typescript/src';
    import { RtmClientEvents } from 'agora-react-native-rtm/lib/typescript/src/RtmEngine';
    interface RtmAttributePlaceholder {
    }
    export { RtmAttributePlaceholder as RtmAttribute };
    export default class RtmEngine {
        appId: string;
        client: any;
        channelMap: Map<string, any>;
        remoteInvititations: Map<string, any>;
        localInvititations: Map<string, any>;
        channelEventsMap: Map<string, any>;
        clientEventsMap: Map<string, any>;
        localInvitationEventsMap: Map<string, any>;
        remoteInvitationEventsMap: Map<string, any>;
        constructor();
        on(event: any, listener: any): void;
        createClient(APP_ID: string): void;
        login(loginParam: {
            uid: string;
            token?: string;
        }): Promise<any>;
        logout(): Promise<any>;
        joinChannel(channelId: string): Promise<any>;
        leaveChannel(channelId: string): Promise<any>;
        sendMessageByChannelId(channel: string, message: string): Promise<any>;
        destroyClient(): void;
        getChannelMembersBychannelId(channel: string): Promise<{
            members: any[];
        }>;
        queryPeersOnlineStatus(uid: Array<String>): Promise<{
            items: any[];
        }>;
        renewToken(token: string): Promise<any>;
        getUserAttributesByUid(uid: string): Promise<{}>;
        removeAllLocalUserAttributes(): Promise<any>;
        removeLocalUserAttributesByKeys(keys: string[]): Promise<any>;
        replaceLocalUserAttributes(attributes: string[]): Promise<any>;
        setLocalUserAttributes(attributes: string[]): Promise<any>;
        addOrUpdateLocalUserAttributes(attributes: RtmAttribute[]): Promise<any>;
        addOrUpdateChannelAttributes(channelId: string, attributes: RtmChannelAttribute[], option: ChannelAttributeOptions): Promise<void>;
        sendLocalInvitation(invitationProps: any): Promise<any>;
        sendMessageToPeer(AgoraPeerMessage: {
            peerId: string;
            offline: boolean;
            text: string;
        }): Promise<any>;
        acceptRemoteInvitation(remoteInvitationProps: {
            uid: string;
            response?: string;
            channelId: string;
        }): Promise<any>;
        refuseRemoteInvitation(remoteInvitationProps: {
            uid: string;
            response?: string;
            channelId: string;
        }): Promise<any>;
        cancelLocalInvitation(LocalInvitationProps: {
            uid: string;
            content?: string;
            channelId?: string;
        }): Promise<any>;
        getSdkVersion(callback: (version: string) => void): void;
        addListener<EventType extends keyof RtmClientEvents>(event: EventType, listener: RtmClientEvents[EventType]): Subscription;
    }
}
declare module "bridge/rtc/quality" {
    const quality: {
        '120p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '120p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_7': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_11': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_5': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
    };
    export default quality;
    export type VideoProfile = keyof typeof quality;
}
declare module "bridge/rtc/webNg/Types" {
    export enum VideoRenderMode {
        Hidden = 1,
        Fit = 2,
        Adaptive = 3
    }
    export enum VideoMirrorMode {
        /**
         * 0: (Default) The SDK determines the mirror mode.
         */
        Auto = 0,
        /**
         * 1: Enables mirror mode.
         */
        Enabled = 1,
        /**
         * 2: Disables mirror mode.
         */
        Disabled = 2
    }
    /**
     *
     * The latency level of an audience member in a live interactive streaming. Takes effect only when the user role is `"audience"`.
     * - `1`: Low latency.
     * - `2`: (Default) Ultra low latency.
     */
    export const enum AudienceLatencyLevelType {
        /**
         * Low latency.
         */
        AUDIENCE_LEVEL_LOW_LATENCY = 1,
        /**
         * Ultra-low latency.
         */
        AUDIENCE_LEVEL_ULTRA_LOW_LATENCY = 2,
        /**
         * @ignore
         */
        AUDIENCE_LEVEL_SYNC_LATENCY = 3
    }
    export interface ClientRoleOptions {
        /**
         * The latency level of an audience member in a live interactive streaming.
         *
         * > Note:
         * > - Takes effect only when the user role is `"audience"`.
         * > - Levels affect prices.
         */
        level: AudienceLatencyLevelType;
    }
    export enum role {
        host = "host",
        audience = "audience"
    }
    export enum mode {
        /**
         * 0: (Default) The Communication profile.
         * Use this profile in one-on-one calls or group calls, where all users can talk freely.
         */
        live = "live",
        /**
         * 1: The Live-Broadcast profile.
         * Users in a live-broadcast channel have a role as either host or audience. A host can both send and receive streams; an audience can only receive streams.
         */
        rtc = "rtc"
    }
}
declare module "src/utils/isMobileOrTablet" {
    global {
        interface Window {
            opera?: any;
        }
    }
    /**
     * Checks whether the application is running as a web application on a mobile or tablet device and returns true/false.
     * @returns function
     */
    const isMobileOrTablet: () => boolean;
    export default isMobileOrTablet;
}
declare module "bridge/rtc/webNg/RtcEngine" {
    import AgoraRTC, { IAgoraRTCClient, ILocalAudioTrack, ILocalVideoTrack, IRemoteAudioTrack, IRemoteVideoTrack, UID, ScreenVideoTrackInitConfig, ICameraVideoTrack, ClientRoleOptions } from 'agora-rtc-sdk-ng';
    import type { RtcEngineEvents, Subscription } from 'react-native-agora/lib/typescript/src/common/RtcEvents';
    import { VideoProfile } from "bridge/rtc/quality";
    import { ChannelProfile, ClientRole } from "agora-rn-uikit/src/index";
    interface MediaDeviceInfo {
        readonly deviceId: string;
        readonly label: string;
        readonly kind: string;
    }
    type callbackType = (uid?: UID) => void;
    global {
        interface Window {
            engine: RtcEngine;
            AgoraRTC: typeof AgoraRTC;
        }
    }
    export enum AREAS {
        /**
         * China.
         */
        CHINA = "CHINA",
        /**
         * Asia, excluding Mainland China.
         */
        ASIA = "ASIA",
        /**
         * North America.
         */
        NORTH_AMERICA = "NORTH_AMERICA",
        /**
         * Europe.
         */
        EUROPE = "EUROPE",
        /**
         * Japan.
         */
        JAPAN = "JAPAN",
        /**
         * India.
         */
        INDIA = "INDIA",
        /**
         * @ignore
         */
        OCEANIA = "OCEANIA",
        /**
         * @ignore
         */
        SOUTH_AMERICA = "SOUTH_AMERICA",
        /**
         * @ignore
         */
        AFRICA = "AFRICA",
        /**
         * @ignore
         */
        OVERSEA = "OVERSEA",
        /**
         * Global.
         */
        GLOBAL = "GLOBAL"
    }
    export enum RnEncryptionEnum {
        /**
         * @deprecated
         * 0: This mode is deprecated.
         */
        None = 0,
        /**
         * 1: (Default) 128-bit AES encryption, XTS mode.
         */
        AES128XTS = 1,
        /**
         * 2: 128-bit AES encryption, ECB mode.
         */
        AES128ECB = 2,
        /**
         * 3: 256-bit AES encryption, XTS mode.
         */
        AES256XTS = 3,
        /**
         * 4: 128-bit SM4 encryption, ECB mode.
         *
         * @since v3.1.2.
         */
        SM4128ECB = 4,
        /**
         * 5: 128-bit AES encryption, GCM mode.
         *
         * @since v3.3.1
         */
        AES128GCM = 5,
        /**
         * 6: 256-bit AES encryption, GCM mode.
         *
         * @since v3.3.1
         */
        AES256GCM = 6
    }
    export enum VideoStreamType {
        'HIGH' = 0,
        'LOW' = 1
    }
    interface LocalStream {
        audio?: ILocalAudioTrack;
        video?: ICameraVideoTrack;
    }
    interface ScreenStream {
        audio?: ILocalAudioTrack;
        video?: ILocalVideoTrack;
    }
    interface RemoteStream {
        audio?: IRemoteAudioTrack;
        video?: IRemoteVideoTrack;
    }
    export default class RtcEngine {
        private activeSpeakerUid;
        appId: string;
        client: any | IAgoraRTCClient;
        screenClient: any | IAgoraRTCClient;
        eventsMap: Map<string, callbackType>;
        localStream: LocalStream;
        screenStream: ScreenStream;
        remoteStreams: Map<UID, RemoteStream>;
        private inScreenshare;
        private videoProfile;
        private isPublished;
        private isAudioEnabled;
        private isVideoEnabled;
        private isAudioPublished;
        private isVideoPublished;
        private isJoined;
        private videoDeviceId;
        private audioDeviceId;
        private muteLocalVideoMutex;
        private muteLocalAudioMutex;
        private speakerDeviceId;
        private usersVolumeLevel;
        constructor(appId: string);
        static create(appId: string): Promise<RtcEngine>;
        getRemoteVideoStats(id: string): any;
        setVideoProfile(profile: VideoProfile): Promise<void>;
        enableAudio(): Promise<void>;
        enableVideo(preferredCameraId?: string, preferredMicrophoneId?: string): Promise<void>;
        enableAudioVolumeIndication(interval: any, smooth: any, isLocal: any): Promise<void>;
        publish(): Promise<void>;
        joinChannel(token: string, channelName: string, optionalInfo: string, optionalUid: number): Promise<void>;
        getUsersVolumeLevel(): any[];
        leaveChannel(): Promise<void>;
        addListener<EventType extends keyof RtcEngineEvents>(event: EventType, listener: RtcEngineEvents[EventType]): Subscription;
        muteLocalAudioStream(muted: boolean): Promise<void>;
        muteLocalVideoStream(muted: boolean): Promise<void>;
        muteRemoteAudioStream(uid: number, muted: boolean): Promise<void>;
        muteRemoteVideoStream(uid: number, muted: boolean): Promise<void>;
        getDevices(callback: (devices: Array<MediaDeviceInfo>) => void): Promise<Array<MediaDeviceInfo>>;
        setChannelProfile(profile: ChannelProfile): Promise<void>;
        setClientRole(clientRole: ClientRole, options?: ClientRoleOptions): Promise<void>;
        changeCamera(cameraId: any, callback: any, error: any): Promise<void>;
        switchCamera(): Promise<void>;
        changeMic(micId: any, callback: any, error: any): Promise<void>;
        changeSpeaker(speakerId: any, callback: any, error: any): Promise<void>;
        enableDualStreamMode(enable: boolean): Promise<any>;
        setRemoteSubscribeFallbackOption(option: 0 | 1 | 2): Promise<void>;
        getEncryptionMode: (enabled: boolean, encryptmode: RnEncryptionEnum) => "none" | "aes-128-xts" | "aes-256-xts" | "aes-128-ecb";
        enableEncryption(enabled: boolean, config: {
            encryptionMode: RnEncryptionEnum;
            encryptionKey: string;
        }): Promise<void>;
        /**
         * @deprecated
         * @param encryptionMode
         */
        setEncryptionSecret(secret: string): void;
        /**
         * @deprecated
         * @param encryptionMode
         */
        setEncryptionMode(encryptionMode: 'aes-128-xts' | 'aes-256-xts' | 'aes-128-ecb'): void;
        destroy(): Promise<void>;
        setRemoteVideoStreamType(uid: number, streamType: VideoStreamType): Promise<void>;
        isSingleTrack(x: ILocalVideoTrack | [ILocalVideoTrack, ILocalAudioTrack]): x is ILocalVideoTrack;
        startScreenshare(token: string, channelName: string, optionalInfo: string, optionalUid: number, appId: string, engine: typeof AgoraRTC, encryption: {
            screenKey: string;
            mode: RnEncryptionEnum;
        }, config?: ScreenVideoTrackInitConfig, audio?: 'enable' | 'disable' | 'auto'): Promise<void>;
    }
}
declare module "bridge/rtc/webNg/SurfaceView" {
    import { StyleProp, ViewProps, ViewStyle } from 'react-native';
    export interface RtcSurfaceViewProps extends ViewProps {
        zOrderMediaOverlay?: boolean;
        zOrderOnTop?: boolean;
        renderMode?: any;
        channelId?: string;
        mirrorMode?: any;
    }
    export interface RtcUidProps {
        uid: number;
    }
    export interface StyleProps {
        style?: StyleProp<ViewStyle>;
    }
    interface SurfaceViewInterface extends RtcSurfaceViewProps, RtcUidProps, StyleProps {
    }
    const SurfaceView: (props: SurfaceViewInterface) => JSX.Element;
    export default SurfaceView;
}
declare module "bridge/rtc/webNg/LocalView" {
    import { RtcSurfaceViewProps, StyleProps } from "bridge/rtc/webNg/SurfaceView";
    interface LocalViewInterface extends RtcSurfaceViewProps, StyleProps {
    }
    export default function LocalView(props: LocalViewInterface): JSX.Element;
}
declare module "bridge/rtc/webNg/index" {
    import RtcEngine from "bridge/rtc/webNg/RtcEngine";
    import LocalView from "bridge/rtc/webNg/LocalView";
    import * as Types from "bridge/rtc/webNg/Types";
    export const RtcLocalView: {
        SurfaceView: typeof LocalView;
        TextureView: typeof LocalView;
    };
    export const RtcRemoteView: {
        SurfaceView: any;
        TextureView: any;
    };
    export const VideoRenderMode: {
        [x: number]: string;
        Hidden: Types.VideoRenderMode.Hidden;
        Fit: Types.VideoRenderMode.Fit;
        Adaptive: Types.VideoRenderMode.Adaptive;
    };
    export const VideoMirrorMode: {
        [x: number]: string;
        Hidden: Types.VideoRenderMode.Hidden;
        Fit: Types.VideoRenderMode.Fit;
        Adaptive: Types.VideoRenderMode.Adaptive;
    };
    export { RnEncryptionEnum as EncryptionMode } from "bridge/rtc/webNg/RtcEngine";
    export { AREAS as AreaCode } from "bridge/rtc/webNg/RtcEngine";
    export default RtcEngine;
}
declare module "agora-rn-uikit/src/Utils/quality" {
    const quality: {
        '120p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '120p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_7': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_11': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_5': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
    };
    export default quality;
    export type VideoProfile = keyof typeof quality;
}
declare module "agora-rn-uikit/src/Contexts/PropsContext" {
    import React from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
    import { RtcEngineEvents } from 'react-native-agora/lib/typescript/src/common/RtcEvents';
    import { EncryptionMode } from "bridge/rtc/webNg/index";
    import { VideoProfile } from "agora-rn-uikit/src/Utils/quality";
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export enum ClientRole {
        Broadcaster = 1,
        Audience = 2
    }
    export enum ChannelProfile {
        /** 0: (Default) The Communication profile.
         *  Use this profile in one-on-one calls or group calls, where all users can talk freely. */
        Communication = 0,
        /**  1: The Live-Broadcast profile.
         *   Users in a live-broadcast channel have a role as either host or audience. A host can both send and receive streams; an audience can only receive streams. */
        LiveBroadcasting = 1
    }
    export enum ToggleState {
        disabled = 0,
        enabled = 1,
        disabling = 2,
        enabling = 3
    }
    export enum PermissionState {
        NOT_REQUESTED = 0,
        REQUESTED = 1,
        GRANTED_FOR_CAM_AND_MIC = 2,
        GRANTED_FOR_CAM_ONLY = 3,
        GRANTED_FOR_MIC_ONLY = 4,
        REJECTED = 5,
        CANCELLED = 6
    }
    export const toggleHelper: (state: ToggleState) => ToggleState.disabled | ToggleState.enabled;
    export interface DefaultRenderInterface {
        uid: UidType;
        audio: ToggleState;
        video: ToggleState;
        streamType: 'high' | 'low';
        type: 'rtc';
        permissionStatus?: PermissionState;
        parentUid?: UidType;
    }
    export interface CustomRenderInterface<T> {
        type: T extends DefaultRenderInterface['type'] ? never : T;
    }
    interface ExtenedRenderInterface extends CustomRenderInterface<string> {
        [key: string]: any;
    }
    export type RenderInterface = DefaultRenderInterface | ExtenedRenderInterface;
    interface remoteBtnStylesInterface {
        muteRemoteAudio?: StyleProp<ViewStyle>;
        muteRemoteVideo?: StyleProp<ViewStyle>;
        remoteSwap?: StyleProp<ViewStyle>;
        minCloseBtnStyles?: StyleProp<ViewStyle>;
        liveStreamHostControlBtns?: StyleProp<ViewStyle>;
    }
    interface localBtnStylesInterface {
        muteLocalAudio?: StyleProp<ViewStyle>;
        muteLocalVideo?: StyleProp<ViewStyle>;
        switchCamera?: StyleProp<ViewStyle>;
        endCall?: StyleProp<ViewStyle>;
        fullScreen?: StyleProp<ViewStyle>;
    }
    interface StylePropInterface {
        theme?: string;
        BtnTemplateStyles?: StyleProp<ViewStyle>;
        maxViewStyles?: StyleProp<ViewStyle>;
        minViewStyles?: StyleProp<ViewStyle>;
        remoteBtnStyles?: remoteBtnStylesInterface;
        remoteBtnContainer?: StyleProp<ViewStyle>;
        localBtnStyles?: localBtnStylesInterface;
        localBtnContainer?: StyleProp<ViewStyle>;
    }
    export enum DualStreamMode {
        HIGH = 0,
        LOW = 1,
        DYNAMIC = 2
    }
    export interface RtcPropsInterface {
        appId: string;
        channel: string;
        uid?: UidType;
        token?: string | null;
        dual?: boolean | null;
        profile?: VideoProfile;
        initialDualStreamMode?: DualStreamMode;
        role?: ClientRole;
        callActive?: boolean;
        encryption?: {
            key: string;
            mode: EncryptionMode.AES128XTS | EncryptionMode.AES256XTS | EncryptionMode.AES128ECB;
        };
        geoFencing?: boolean;
        audioRoom?: boolean;
        activeSpeaker?: boolean;
    }
    export interface CallbacksInterface {
        EndCall(): void;
        FullScreen(): void;
        SwitchCamera(): void;
        UpdateDualStreamMode(mode: DualStreamMode): void;
        UserJoined: RtcEngineEvents['UserJoined'];
        UserOffline: RtcEngineEvents['UserOffline'];
        SwapVideo(uid: UidType): void;
        DequeVideo(uid: UidType): void;
        UserMuteRemoteAudio(uid: UidType, muted: RenderInterface['audio']): void;
        UserMuteRemoteVideo(uid: UidType, muted: RenderInterface['video']): void;
        LocalMuteAudio(muted: ToggleState): void;
        LocalMuteVideo(muted: ToggleState): void;
        LocalPermissionState(permissionState: RenderInterface['permissionStatus']): void;
        RemoteAudioStateChanged: RtcEngineEvents['RemoteAudioStateChanged'];
        RemoteVideoStateChanged: RtcEngineEvents['RemoteVideoStateChanged'];
        ActiveSpeakerDetected: RtcEngineEvents['ActiveSpeaker'];
        JoinChannelSuccess: RtcEngineEvents['JoinChannelSuccess'];
        UpdateRenderList(uid: UidType, user: Partial<RenderInterface>): void;
        AddCustomContent(uid: UidType, data: any): void;
        UserPin(Uid: UidType): void;
    }
    export type CustomCallbacksInterface = CallbacksInterface;
    export interface PropsInterface {
        rtcProps: RtcPropsInterface;
        styleProps?: Partial<StylePropInterface>;
        callbacks?: Partial<CallbacksInterface>;
        mode?: ChannelProfile;
    }
    const PropsContext: React.Context<PropsInterface>;
    export const PropsProvider: React.Provider<PropsInterface>;
    export const PropsConsumer: React.Consumer<PropsInterface>;
    export default PropsContext;
}
declare module "agora-rn-uikit/src/Contexts/RtcContext" {
    import React from 'react';
    import { CallbacksInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import RtcEngine from "bridge/rtc/webNg/index";
    import type { DualStreamMode, RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    export type UidType = number;
    export interface RenderObjects {
        [key: number]: RenderInterface;
    }
    export interface RenderStateInterface {
        renderList: RenderObjects;
        activeUids: Array<UidType>;
        activeSpeaker?: UidType;
        pinnedUid?: UidType;
        lastJoinedUid?: UidType;
    }
    export interface ActionInterface<T extends keyof CallbacksInterface> {
        type: T;
        value: Parameters<CallbacksInterface[T]>;
    }
    export type DispatchType = <T extends keyof CallbacksInterface, V extends Parameters<CallbacksInterface[T]>>(action: {
        type: T;
        value: V;
    }) => void;
    export type ActionType<T extends keyof CallbacksInterface> = ActionInterface<T>;
    export interface RtcContextInterface {
        RtcEngine: RtcEngine;
        dispatch: DispatchType;
        setDualStreamMode: React.Dispatch<React.SetStateAction<DualStreamMode>>;
    }
    const RtcContext: React.Context<RtcContextInterface>;
    export const RtcProvider: React.Provider<RtcContextInterface>;
    export const RtcConsumer: React.Consumer<RtcContextInterface>;
    export default RtcContext;
}
declare module "agora-rn-uikit/src/Contexts/RenderContext" {
    import React from 'react';
    import { RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    const RenderContext: React.Context<RenderStateInterface>;
    export const RenderProvider: React.Provider<RenderStateInterface>;
    export const RenderConsumer: React.Consumer<RenderStateInterface>;
    export default RenderContext;
}
declare module "agora-rn-uikit/src/Utils/actionTypeGuard" {
    import { CallbacksInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ActionType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export function actionTypeGuard<T extends keyof CallbacksInterface>(_act: ActionType<keyof CallbacksInterface>, _type: T): _act is ActionType<T>;
}
declare module "agora-rn-uikit/src/Reducer/UpdateDualStreamMode" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UpdateDualStreamMode(state: RenderStateInterface, action: ActionType<'UpdateDualStreamMode'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserJoined" {
    import { DualStreamMode } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserJoined(state: RenderStateInterface, action: ActionType<'UserJoined'>, dualStreamMode: DualStreamMode, localUid: UidType): {};
}
declare module "agora-rn-uikit/src/Reducer/UserOffline" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserOffline(state: RenderStateInterface, action: ActionType<'UserOffline'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserMuteRemoteAudio" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserMuteRemoteAudio(state: RenderStateInterface, action: ActionType<'UserMuteRemoteAudio'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserMuteRemoteVideo" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserMuteRemoteVideo(state: RenderStateInterface, action: ActionType<'UserMuteRemoteVideo'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalMuteAudio" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalMuteAudio(state: RenderStateInterface, action: ActionType<'LocalMuteAudio'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalMuteVideo" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalMuteVideo(state: RenderStateInterface, action: ActionType<'LocalMuteVideo'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalPermissionState" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalPermissionState(state: RenderStateInterface, action: ActionType<'LocalPermissionState'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/RemoteAudioStateChanged" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function RemoteAudioStateChanged(state: RenderStateInterface, action: ActionType<'RemoteAudioStateChanged'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/RemoteVideoStateChanged" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function RemoteVideoStateChanged(state: RenderStateInterface, action: ActionType<'RemoteVideoStateChanged'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/ActiveSpeakerDetected" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function ActiveSpeakerDetected(state: RenderStateInterface, action: ActionType<'ActiveSpeakerDetected'>): {
        activeSpeaker: unknown;
        renderList: import("agora-rn-uikit/src/Contexts/RtcContext").RenderObjects;
        activeUids: number[];
        pinnedUid?: number;
        lastJoinedUid?: number;
    };
}
declare module "agora-rn-uikit/src/Reducer/UserPin" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserPin(state: RenderStateInterface, action: ActionType<'UserPin'>): {
        pinnedUid: string | number;
        renderList: import("agora-rn-uikit/src/Contexts/RtcContext").RenderObjects;
        activeUids: number[];
        activeSpeaker?: number;
        lastJoinedUid?: number;
    };
}
declare module "agora-rn-uikit/src/Reducer/index" {
    export { default as UpdateDualStreamMode } from "agora-rn-uikit/src/Reducer/UpdateDualStreamMode";
    export { default as UserJoined } from "agora-rn-uikit/src/Reducer/UserJoined";
    export { default as UserOffline } from "agora-rn-uikit/src/Reducer/UserOffline";
    export { default as UserMuteRemoteAudio } from "agora-rn-uikit/src/Reducer/UserMuteRemoteAudio";
    export { default as UserMuteRemoteVideo } from "agora-rn-uikit/src/Reducer/UserMuteRemoteVideo";
    export { default as LocalMuteAudio } from "agora-rn-uikit/src/Reducer/LocalMuteAudio";
    export { default as LocalMuteVideo } from "agora-rn-uikit/src/Reducer/LocalMuteVideo";
    export { default as LocalPermissionState } from "agora-rn-uikit/src/Reducer/LocalPermissionState";
    export { default as RemoteAudioStateChanged } from "agora-rn-uikit/src/Reducer/RemoteAudioStateChanged";
    export { default as RemoteVideoStateChanged } from "agora-rn-uikit/src/Reducer/RemoteVideoStateChanged";
    export { default as ActiveSpeakerDetected } from "agora-rn-uikit/src/Reducer/ActiveSpeakerDetected";
    export { default as UserPin } from "agora-rn-uikit/src/Reducer/UserPin";
}
declare module "agora-rn-uikit/src/Utils/permission" {
    /**
     * @name requestCameraAndAudioPermission
     * @description Function to request permission for Audio and Camera
     */
    export default function requestCameraAndAudioPermission(audioRoom: boolean): Promise<void>;
}
declare module "agora-rn-uikit/src/Rtc/Create" {
    import React from 'react';
    import RtcEngine from "bridge/rtc/webNg/index";
    import { DispatchType } from "agora-rn-uikit/src/Contexts/RtcContext";
    const Create: ({ dispatch, children, }: {
        dispatch: DispatchType;
        children: (engine: React.MutableRefObject<RtcEngine>, tracksReady: boolean) => JSX.Element;
    }) => JSX.Element;
    export default Create;
}
declare module "agora-rn-uikit/src/Rtc/Join" {
    import React from 'react';
    import RtcEngine from "bridge/rtc/webNg/index";
    import { RenderStateInterface, DispatchType } from "agora-rn-uikit/src/Contexts/RtcContext";
    const Join: React.FC<{
        children: React.ReactNode;
        precall: boolean;
        engineRef: React.MutableRefObject<RtcEngine>;
        uidState: RenderStateInterface;
        dispatch: DispatchType;
        tracksReady: boolean;
    }>;
    export default Join;
}
declare module "agora-rn-uikit/src/Utils/useLocalUid" {
    const useLocalUid: () => number;
    export default useLocalUid;
}
declare module "agora-rn-uikit/src/RtcConfigure" {
    import React from 'react';
    const RtcConfigure: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default RtcConfigure;
}
declare module "agora-rn-uikit/src/Style" {
    const _default: {
        max: {
            flex: number;
        };
        buttonHolder: {
            height: number;
            alignItems: "center";
            flex: number;
            flexDirection: "row";
            justifyContent: "space-evenly";
        };
        button: {
            paddingHorizontal: number;
            paddingVertical: number;
            backgroundColor: string;
            borderRadius: number;
        };
        buttonText: {
            color: string;
        };
        fullView: {
            width: number;
            height: number;
        };
        minView: {
            width: number;
            height: number;
        };
        minContainer: {
            position: "absolute";
            top: number;
            left: number;
            padding: number;
            margin: number;
            width: number;
        };
        Controls: {
            position: "absolute";
            top: number;
            left: number;
            width: number;
            height: number;
            zIndex: number;
            display: "flex";
            flexDirection: "row";
            justifyContent: "space-evenly";
            alignItems: "center";
        };
        minOverlay: {
            backgroundColor: string;
            opacity: number;
        };
        minCloseBtn: {
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: string;
            width: number;
            height: number;
            borderRadius: number;
            position: "absolute";
            right: number;
            top: number;
        };
        controlBtn: {
            width: number;
            height: number;
            backgroundColor: string;
            alignItems: "center";
            justifyContent: "center";
        };
        leftRemoteBtn: {
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderRightWidth: number;
            borderRightColor: string;
        };
        rightRemoteBtn: {
            borderTopRightRadius: number;
            borderBottomRightRadius: number;
            borderLeftWidth: number;
            borderLeftColor: string;
        };
        remoteBtnContainer: {
            width: "100%";
            display: "flex";
            marginTop: number;
            flexDirection: "row";
            justifyContent: "center";
            alignSelf: "center";
        };
        localBtn: {
            borderRadius: number;
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        endCall: {
            borderRadius: number;
            borderWidth: number;
            borderColor: string;
            width: number;
            height: number;
            backgroundColor: string;
        };
    };
    export default _default;
}
declare module "agora-rn-uikit/src/Views/MaxVideoView" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ViewStyle } from 'react-native';
    interface MaxViewInterface {
        user: RenderInterface;
        fallback?: React.ComponentType;
        containerStyle?: ViewStyle;
        landscapeMode?: boolean;
    }
    const MaxVideoView: React.FC<MaxViewInterface>;
    export default MaxVideoView;
}
declare module "agora-rn-uikit/src/Controls/Icons" {
    export interface IconsInterface {
        profile: string;
        'no-mic': string;
        'no-cam': string;
        pinnedLayout: string;
        gridLayout: string;
        'stop-recording': string;
        'demote-filled': string;
        'demote-outlined': string;
        'lower-hand': string;
        'raise-hand': string;
        'turn-off-stt': string;
        'live-caption-mode': string;
    }
    const icons: IconsInterface;
    export default icons;
}
declare module "agora-rn-uikit/src/Utils/isSafariBrowser" {
    const isSafariBrowser: () => boolean;
    export default isSafariBrowser;
}
declare module "agora-rn-uikit/src/hooks/useImageDelay" {
    function useImageDelay(elementRef: any, delay: number | null, imageName: string, tintColor?: string): void;
    export default useImageDelay;
}
declare module "agora-rn-uikit/src/Controls/types" {
    export type Only<T, U> = {
        [P in keyof T]: T[P];
    } & Omit<{
        [P in keyof U]?: never;
    }, keyof T>;
    export type Either<T, U> = Only<T, U> | Only<U, T>;
}
declare module "agora-rn-uikit/src/Controls/BtnTemplate" {
    import React from 'react';
    import { StyleProp, TouchableOpacityProps, ViewStyle, TextStyle, ImageStyle } from 'react-native';
    import { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    import { Either } from "agora-rn-uikit/src/Controls/types";
    interface BtnTemplateBasicInterface {
        onPress?: TouchableOpacityProps['onPress'];
        style?: StyleProp<ViewStyle>;
        styleText?: TextStyle;
        styleIcon?: ImageStyle;
        btnText?: string;
        disabled?: boolean;
    }
    interface BtnTemplateInterfaceWithName extends BtnTemplateBasicInterface {
        name?: keyof IconsInterface;
    }
    interface BtnTemplateInterfaceWithIcon extends BtnTemplateBasicInterface {
        icon?: any;
    }
    export type BtnTemplateInterface = Either<BtnTemplateInterfaceWithIcon, BtnTemplateInterfaceWithName>;
    const BtnTemplate: React.FC<BtnTemplateInterface>;
    export default BtnTemplate;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteAudioMute" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteAudioMuteInterface {
        user: RenderInterface;
    }
    const RemoteAudioMute: React.FC<RemoteAudioMuteInterface>;
    export default RemoteAudioMute;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteSwap" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    interface RemoteSwapInterface {
        uid: UidType;
    }
    const RemoteSwap: React.FC<RemoteSwapInterface>;
    export default RemoteSwap;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteVideoMute" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteVideoMuteInterface {
        user: RenderInterface;
        rightButton: boolean;
    }
    const RemoteVideoMute: React.FC<RemoteVideoMuteInterface>;
    export default RemoteVideoMute;
}
declare module "agora-rn-uikit/src/Controls/RemoteControls" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteControlsInterface {
        showMuteRemoteVideo?: boolean;
        showMuteRemoteAudio?: boolean;
        showRemoteSwap?: boolean;
        user: RenderInterface;
    }
    const RemoteControls: React.FC<RemoteControlsInterface>;
    export default RemoteControls;
}
declare module "agora-rn-uikit/src/Views/MinVideoView" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface MinViewInterface {
        user: RenderInterface;
        color?: string;
        showOverlay?: boolean;
    }
    const MinVideoView: React.FC<MinViewInterface>;
    export default MinVideoView;
}
declare module "agora-rn-uikit/src/Controls/Local/EndCall" {
    interface EndCallProps {
        btnText?: string;
    }
    function EndCall(props?: EndCallProps): JSX.Element;
    export default EndCall;
}
declare module "agora-rn-uikit/src/Contexts/LocalUserContext" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export const LocalContext: React.Context<RenderInterface>;
    export const LocalProvider: React.Provider<RenderInterface>;
    export const LocalConsumer: React.Consumer<RenderInterface>;
    interface LocalUserContextInterface {
        children: React.ReactNode;
        localUid: UidType;
    }
    const LocalUserContext: React.FC<LocalUserContextInterface>;
    export default LocalUserContext;
}
declare module "agora-rn-uikit/src/Controls/Local/LocalAudioMute" {
    interface LocalAudioMuteProps {
        btnText?: string;
        variant?: 'outlined' | 'text';
    }
    function LocalAudioMute(props: LocalAudioMuteProps): JSX.Element;
    export default LocalAudioMute;
}
declare module "agora-rn-uikit/src/Controls/Local/LocalVideoMute" {
    interface LocalVideoMuteProps {
        btnText?: string;
        variant?: 'outlined' | 'text';
    }
    function LocalVideoMute(props: LocalVideoMuteProps): JSX.Element;
    export default LocalVideoMute;
}
declare module "agora-rn-uikit/src/Controls/Local/SwitchCamera" {
    interface Props {
        btnText?: string;
    }
    function SwitchCamera(props?: Props): JSX.Element;
    export default SwitchCamera;
}
declare module "agora-rn-uikit/src/Controls/LocalControls" {
    interface ControlsPropsInterface {
        showButton?: boolean;
    }
    function Controls(props: ControlsPropsInterface): JSX.Element;
    export default Controls;
}
declare module "agora-rn-uikit/src/AgoraUIKit" {
    import React from 'react';
    import { PropsInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    const AgoraUIKit: React.FC<PropsInterface>;
    export default AgoraUIKit;
}
declare module "agora-rn-uikit/src/Controls/Local/FullScreen" {
    function FullScreen(): JSX.Element;
    export default FullScreen;
}
declare module "agora-rn-uikit/src/Controls/ImageIcon" {
    import React from 'react';
    import { ImageStyle } from 'react-native';
    import { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    import { Either } from "agora-rn-uikit/src/Controls/types";
    interface BaseInterface {
        tintColor?: string;
        style?: ImageStyle;
    }
    interface BaseInterfaceWithName extends BaseInterface {
        name?: keyof IconsInterface;
    }
    interface BaseInterfaceWithIcon extends BaseInterface {
        icon?: any;
    }
    type ImageIconInterface = Either<BaseInterfaceWithName, BaseInterfaceWithIcon>;
    const ImageIcon: React.FC<ImageIconInterface>;
    export default ImageIcon;
}
declare module "agora-rn-uikit/src/index" {
    export { default as default } from "agora-rn-uikit/src/AgoraUIKit";
    export { default as RtcConfigure } from "agora-rn-uikit/src/RtcConfigure";
    export { default as MaxVideoView } from "agora-rn-uikit/src/Views/MaxVideoView";
    export { default as MinVideoView } from "agora-rn-uikit/src/Views/MinVideoView";
    export { default as LocalUserContext, LocalConsumer, LocalProvider, LocalContext, } from "agora-rn-uikit/src/Contexts/LocalUserContext";
    export { default as RenderContext, RenderConsumer, RenderProvider, } from "agora-rn-uikit/src/Contexts/RenderContext";
    export { default as PropsContext, PropsConsumer, PropsProvider, } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { DualStreamMode } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { ToggleState, PermissionState } from "agora-rn-uikit/src/Contexts/PropsContext";
    export type { DefaultRenderInterface, RenderInterface, RtcPropsInterface, CallbacksInterface, CustomCallbacksInterface, PropsInterface, } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { ClientRole, ChannelProfile } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { default as RtcContext, RtcConsumer, RtcProvider, } from "agora-rn-uikit/src/Contexts/RtcContext";
    export type { UidType, RtcContextInterface, DispatchType, RenderStateInterface, ActionInterface, ActionType, } from "agora-rn-uikit/src/Contexts/RtcContext";
    export { default as BtnTemplate } from "agora-rn-uikit/src/Controls/BtnTemplate";
    export type { BtnTemplateInterface } from "agora-rn-uikit/src/Controls/BtnTemplate";
    export { default as Endcall } from "agora-rn-uikit/src/Controls/Local/EndCall";
    export { default as FullScreen } from "agora-rn-uikit/src/Controls/Local/FullScreen";
    export { default as LocalAudioMute } from "agora-rn-uikit/src/Controls/Local/LocalAudioMute";
    export { default as LocalVideoMute } from "agora-rn-uikit/src/Controls/Local/LocalVideoMute";
    export { default as SwitchCamera } from "agora-rn-uikit/src/Controls/Local/SwitchCamera";
    export { default as Controls } from "agora-rn-uikit/src/Controls/LocalControls";
    export { default as RemoteAudioMute } from "agora-rn-uikit/src/Controls/Remote/RemoteAudioMute";
    export { default as RemoteSwap } from "agora-rn-uikit/src/Controls/Remote/RemoteSwap";
    export { default as RemoteVideoMute } from "agora-rn-uikit/src/Controls/Remote/RemoteVideoMute";
    export { default as RemoteControls } from "agora-rn-uikit/src/Controls/RemoteControls";
    export { default as ImageIcon } from "agora-rn-uikit/src/Controls/ImageIcon";
    export { default as Icons } from "agora-rn-uikit/src/Controls/Icons";
    export type { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    export { default as useLocalUid } from "agora-rn-uikit/src/Utils/useLocalUid";
}
declare module "src/components/ChatContext" {
    import RtmEngine from "bridge/rtm/web/index";
    import { UidType } from "agora-rn-uikit/src/index";
    export interface ChatBubbleProps {
        isLocal: boolean;
        message: string;
        createdTimestamp: string;
        updatedTimestamp?: string;
        uid: UidType;
        msgId: string;
        isDeleted: boolean;
        isSameUser: boolean;
        render?: (isLocal: boolean, message: string, createdTimestamp: string, uid: UidType, msgId: string, isDeleted: boolean, updatedTimestamp: string, isSameUser: boolean) => JSX.Element;
    }
    export interface messageStoreInterface {
        createdTimestamp: string;
        updatedTimestamp?: string;
        uid: UidType;
        msg: string;
    }
    export enum messageActionType {
        Control = "0",
        Normal = "1"
    }
    export interface chatContext {
        hasUserJoinedRTM: boolean;
        rtmInitTimstamp: number;
        engine: RtmEngine;
        localUid: UidType;
        onlineUsersCount: number;
    }
    export enum controlMessageEnum {
        muteVideo = "1",
        muteAudio = "2",
        muteSingleVideo = "3",
        muteSingleAudio = "4",
        kickUser = "5",
        requestVideo = "6",
        requestAudio = "7",
        kickScreenshare = "9"
    }
    const ChatContext: import("react").Context<chatContext>;
    export default ChatContext;
}
declare module "src/language/default-labels/commonLabels" {
    export interface I18nCommonLabelsInterface {
    }
    export const CommonLabels: I18nCommonLabelsInterface;
}
declare module "src/language/default-labels/createScreenLabels" {
    import { I18nBaseType } from "src/language/i18nTypes";
    export interface I18nCreateScreenLabelsInterface {
        meetingNameInputPlaceholder?: I18nBaseType;
    }
    export const CreateScreenLabels: I18nCreateScreenLabelsInterface;
}
declare module "src/language/default-labels/joinScreenLabels" {
    export interface I18nJoinScreenLabelsInterface {
    }
    export const JoinScreenLabels: I18nJoinScreenLabelsInterface;
}
declare module "src/language/default-labels/shareLinkScreenLabels" {
    export interface I18nShareLinkScreenLabelsInterface {
    }
    export const ShareLinkScreenLabels: I18nShareLinkScreenLabelsInterface;
}
declare module "src/language/default-labels/videoCallScreenLabels" {
    import { I18nBaseType } from "src/language/i18nTypes";
    interface NetworkQualityStatusInterface {
        unknown?: 'Unknown';
        excellent?: 'Excellent';
        good?: 'Good';
        bad?: 'Bad';
        veryBad?: 'Very Bad';
        unpublished?: 'Unpublished';
        loading?: 'Loading';
    }
    export type NetworkQualities = keyof NetworkQualityStatusInterface;
    export interface MeetingInviteInterface {
        isHost: boolean;
        isSeparateHostLink: boolean;
        meetingName?: string;
        pstn?: {
            number: string;
            pin: string;
        };
        url?: {
            host?: string;
            attendee?: string;
        };
        id?: {
            host?: string;
            attendee?: string;
        };
    }
    export interface I18nVideoCallScreenLabelsInterface {
        pstnUserLabel?: I18nBaseType;
    }
    export const VideoCallScreenLabels: I18nVideoCallScreenLabelsInterface;
}
declare module "src/language/default-labels/precallScreenLabels" {
    import { ClientRole } from "agora-rn-uikit/src/index";
    import { I18nBaseType } from "src/language/i18nTypes";
    export interface JoinRoomButtonTextInterface {
        ready: boolean;
        role?: ClientRole;
    }
    export interface I18nPrecallScreenLabelsInterface {
        joinRoomButton?: I18nBaseType<JoinRoomButtonTextInterface>;
    }
    export const PrecallScreenLabels: I18nPrecallScreenLabelsInterface;
}
declare module "src/language/default-labels/index" {
    import { I18nCommonLabelsInterface } from "src/language/default-labels/commonLabels";
    import { I18nCreateScreenLabelsInterface } from "src/language/default-labels/createScreenLabels";
    import { I18nJoinScreenLabelsInterface } from "src/language/default-labels/joinScreenLabels";
    import { I18nShareLinkScreenLabelsInterface } from "src/language/default-labels/shareLinkScreenLabels";
    import { I18nVideoCallScreenLabelsInterface } from "src/language/default-labels/videoCallScreenLabels";
    import { I18nPrecallScreenLabelsInterface } from "src/language/default-labels/precallScreenLabels";
    export interface TextDataInterface extends I18nCommonLabelsInterface, I18nCreateScreenLabelsInterface, I18nJoinScreenLabelsInterface, I18nShareLinkScreenLabelsInterface, I18nVideoCallScreenLabelsInterface, I18nPrecallScreenLabelsInterface {
    }
    export const DEFAULT_LABELS: TextDataInterface;
}
declare module "src/language/i18nTypes" {
    import { TextDataInterface } from "src/language/default-labels/index";
    export type I18nBaseType<T = any> = string | ((template: T) => string);
    export type I18nDynamicType = I18nBaseType<string>;
    export type I18nConditionalType = I18nBaseType<boolean>;
    export interface I18nInterface {
        locale: string;
        label?: string;
        data: TextDataInterface;
    }
}
declare module "src/atoms/CustomIcon" {
    const _default_1: any;
    export default _default_1;
    export interface IconsInterface {
        'video-plus': string;
        'video-on': string;
        'video-off': string;
        'mic-on': string;
        'mic-off': string;
        'no-cam': string;
        'no-mic': string;
        clipboard: string;
        tick: string;
        'tick-fill': string;
        'arrow-down': string;
        'arrow-up': string;
        'screen-share': string;
        'stop-screen-share': string;
        recording: string;
        'stop-recording': string;
        'end-call': string;
        'raise-hand': string;
        'lower-hand': string;
        close: string;
        'back-btn': string;
        participants: string;
        chat: string;
        settings: string;
        'more-menu': string;
        share: string;
        'switch-camera': string;
        remove: string;
        info: string;
        send: string;
        'downside-triangle': string;
        profile: string;
        'link-share': string;
        'list-view': string;
        expand: string;
        collapse: string;
        'active-speaker': string;
        'connection-unsupported': string;
        'connection-bad': string;
        'connection-good': string;
        'connection-loading': string;
        'connection-very-bad': string;
        'connection-unpublished': string;
        'remove-meeting': string;
        'pencil-outlined': string;
        'pencil-filled': string;
        alert: string;
        speaker: string;
        person: string;
        pinned: string;
        grid: string;
        people: string;
        'chat-nav': string;
        'chat-filled': string;
        'chat-outlined': string;
        'demote-filled': string;
        'demote-outlined': string;
        'promote-filled': string;
        'promote-outlined': string;
        'pin-filled': string;
        'pin-outlined': string;
        'unpin-filled': string;
        'unpin-outlined': string;
        'mic-on-filled': string;
        'mic-on-outlined': string;
        'mic-off-filled': string;
        'mic-off-outlined': string;
        'video-on-filled': string;
        'video-on-outlined': string;
        'video-off-filled': string;
        'video-off-outlined': string;
        'down-arrow': string;
        'closed-caption': string;
        globe: string;
        'lang-select': string;
        search: string;
        captions: string;
        'captions-off': string;
        download: string;
        'transcript-stop': string;
        transcript: string;
        'view-last': string;
        'transcript-mode': string;
        '': string;
    }
}
declare module "src/components/ColorContext" {
    interface ColorContext {
        primaryColor: any;
    }
    const ColorContext: import("react").Context<ColorContext>;
    export default ColorContext;
}
declare module "src/subComponents/Platform" {
    const _default_2: "web";
    export default _default_2;
}
declare module "src/utils/common" {
    import React from 'react';
    const trimText: (text: string, length?: number) => string;
    const maxInputLimit = 60;
    const isValidReactComponent: <T>(Component?: React.ComponentType<T>) => boolean;
    const useHasBrandLogo: () => () => boolean;
    const shouldAuthenticate: boolean;
    const isWebInternal: () => boolean;
    /**
     * Checks whether the application is running as a web app and returns true/false.
     * @returns function
     */
    const isWeb: () => boolean;
    /**
     * Checks whether the application is running as an android app and returns true/false.
     * @returns function
     */
    const isAndroid: () => boolean;
    /**
     * Checks whether the application is running as an iOS app and returns true/false.
     * @returns function
     */
    const isIOS: () => boolean;
    /**
     * Checks whether the application is running as an electron desktop app and returns true/false.
     * @returns function
     */
    const isDesktop: () => boolean;
    /**
     * Checks whether the application is running on mobile device (user agent) and returns true/false.
     * @returns function
     */
    const isMobileUA: () => boolean;
    const isArray: (data: any[]) => boolean;
    interface calculatedPositionProps {
        px: number;
        py: number;
        localWidth: number;
        localHeight: number;
        globalWidth: number;
        globalHeight: number;
        extra?: {
            top?: number;
            bottom?: number;
            left?: number;
            right?: number;
        };
        popupWidth?: number;
    }
    const calculatePosition: (params: calculatedPositionProps) => {
        bottom: number;
        right: number;
        top?: undefined;
        left?: undefined;
    } | {
        top: number;
        right: number;
        bottom?: undefined;
        left?: undefined;
    } | {
        bottom: number;
        left: number;
        right?: undefined;
        top?: undefined;
    } | {
        top: number;
        left: number;
        bottom?: undefined;
        right?: undefined;
    };
    const BREAKPOINTS: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    const useIsDesktop: () => (from?: 'default' | 'toolbar' | 'popup') => boolean;
    const useIsSmall: () => (number?: number) => boolean;
    const useResponsive: () => (input: number) => number;
    const processDeepLinkURI: (url: string) => string;
    const getParamFromURL: (url: any, param: any) => any;
    const throttleFn: (fn: Function, wait?: number) => (this: any) => void;
    const debounceFn: (fn: Function, ms?: number) => (this: any, ...args: any[]) => void;
    const capitalizeFirstLetter: (word: string) => string;
    export { useIsDesktop, useIsSmall, BREAKPOINTS, useHasBrandLogo, isMobileUA, isAndroid, isIOS, isWebInternal, isWeb, isDesktop, shouldAuthenticate, isArray, isValidReactComponent, maxInputLimit, trimText, calculatePosition, useResponsive, processDeepLinkURI, getParamFromURL, throttleFn, debounceFn, capitalizeFirstLetter, };
}
declare module "src/utils/hexadecimalTransparency" {
    /**
     * Hexadecimal color code for transparency
     * ref https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
     */
    const hexadecimalTransparency: {
        '100%': string;
        '99%': string;
        '98%': string;
        '97%': string;
        '96%': string;
        '95%': string;
        '94%': string;
        '93%': string;
        '92%': string;
        '91%': string;
        '90%': string;
        '89%': string;
        '88%': string;
        '87%': string;
        '86%': string;
        '85%': string;
        '84%': string;
        '83%': string;
        '82%': string;
        '81%': string;
        '80%': string;
        '79%': string;
        '78%': string;
        '77%': string;
        '76%': string;
        '75%': string;
        '74%': string;
        '73%': string;
        '72%': string;
        '71%': string;
        '70%': string;
        '69%': string;
        '68%': string;
        '67%': string;
        '66%': string;
        '65%': string;
        '64%': string;
        '63%': string;
        '62%': string;
        '61%': string;
        '60%': string;
        '59%': string;
        '58%': string;
        '57%': string;
        '56%': string;
        '55%': string;
        '54%': string;
        '53%': string;
        '52%': string;
        '51%': string;
        '50%': string;
        '49%': string;
        '48%': string;
        '47%': string;
        '46%': string;
        '45%': string;
        '44%': string;
        '43%': string;
        '42%': string;
        '41%': string;
        '40%': string;
        '39%': string;
        '38%': string;
        '37%': string;
        '36%': string;
        '35%': string;
        '34%': string;
        '33%': string;
        '32%': string;
        '31%': string;
        '30%': string;
        '29%': string;
        '28%': string;
        '27%': string;
        '26%': string;
        '25%': string;
        '24%': string;
        '23%': string;
        '22%': string;
        '21%': string;
        '20%': string;
        '19%': string;
        '18%': string;
        '17%': string;
        '16%': string;
        '15%': string;
        '14%': string;
        '13%': string;
        '12%': string;
        '11%': string;
        '10%': string;
        '9%': string;
        '8%': string;
        '7%': string;
        '6%': string;
        '5%': string;
        '4%': string;
        '3%': string;
        '2%': string;
        '1%': string;
        '0%': string;
    };
    export default hexadecimalTransparency;
}
declare module "src/atoms/TextInput" {
    import { TextInputProps } from 'react-native';
    interface TextInputCustomProps extends TextInputProps {
        setRef?: (ref: any) => void;
    }
    const TextInputCustom: (props: TextInputCustomProps) => JSX.Element;
    export default TextInputCustom;
}
declare module "customization-implementation/createHook" {
    import React from 'react';
    /**
     *
     * @param context - any context data which we want to extract the data.
     * @returns useContextWithSelector in which we can pass selector function to extract data from the context that we passed.
     */
    function createHook<T>(context: React.Context<T>): {
        <U>(contextSelector: (data: T) => U): U;
        (): T;
    };
    export function createConcealedHook<T, V>(context: React.Context<T>, preselect: (data: T) => V): {
        <U>(contextSelector: (data: V) => U): U;
        (): V;
    };
    export default createHook;
}
declare module "src/components/DeviceContext" {
    interface DeviceContext {
        selectedCam: string;
        setSelectedCam: (cam: string) => Promise<any>;
        selectedMic: string;
        setSelectedMic: (mic: string) => Promise<any>;
        selectedSpeaker: string;
        setSelectedSpeaker: (speaker: string) => Promise<any>;
        deviceList: MediaDeviceInfo[];
        setDeviceList: (devices: MediaDeviceInfo[]) => void;
    }
    const DeviceContext: import("react").Context<DeviceContext>;
    export default DeviceContext;
}
declare module "src/components/useMount" {
    const useMount: (effect: () => (() => void) | void) => void;
    export default useMount;
}
declare module "src/utils/isSDK" {
    const isSDK: () => boolean;
    export default isSDK;
}
declare module "src/auth/config" {
    export const AUTH_ENDPOINT_URL: string;
    export const ENABLE_AUTH: boolean;
    export const getPlatformId: () => string;
    export const getRequestHeaders: () => {
        'X-Project-ID': string;
        'X-Platform-ID': string;
    };
    export const getIDPAuthRedirectURL: () => string;
    export const getUnauthLoginRedirectURL: () => string;
    export const getOriginURL: () => string;
    export const GET_UNAUTH_FLOW_API_ENDPOINT: () => string;
}
declare module "src/components/StorageContext" {
    import React from 'react';
    type rememberedDevicesListEntries = Record<string, 'switch-on-connect' | 'ignore-on-connect'>;
    export interface StoreInterface {
        token: string;
        displayName: string;
        selectedLanguageCode: string;
        rememberedDevicesList: Record<MediaDeviceInfo['kind'], rememberedDevicesListEntries>;
        activeDeviceId: Record<MediaDeviceInfo['kind'], string>;
    }
    export interface StorageContextInterface {
        store: StoreInterface;
        setStore: React.Dispatch<React.SetStateAction<StoreInterface>> | null;
    }
    export const initStoreValue: StoreInterface;
    const StorageContext: React.Context<StorageContextInterface>;
    export default StorageContext;
    export const StorageConsumer: React.Consumer<StorageContextInterface>;
    export const StorageProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
}
declare module "src/utils/SdkEvents" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface userEventsMapInterface {
        leave: () => void;
        create: (hostPhrase: string, attendeePhrase?: string, pstnNumer?: {
            number: string;
            pin: string;
        }) => void;
        'ready-to-join': (meetingTitle: string, devices: MediaDeviceInfo[]) => void;
        join: (meetingTitle: string, devices: MediaDeviceInfo[], isHost: boolean) => void;
        'rtc-user-published': (uid: UidType, trackType: 'audio' | 'video') => void;
        'rtc-user-unpublished': (uid: UidType, trackType: 'audio' | 'video') => void;
        'rtc-user-joined': (uid: UidType) => void;
        'rtc-user-left': (uid: UidType) => void;
        '_rtm-joined': (uid: UidType) => void;
        'devices-selected-microphone-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'devices-selected-camera-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'devices-selected-speaker-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'token-not-found': () => void;
        'will-token-expire': () => void;
        'did-token-expire': () => void;
        'token-refreshed': () => void;
    }
    const SDKEvents: import("nanoevents").Emitter<userEventsMapInterface>;
    export default SDKEvents;
}
declare module "src/components/DeviceConfigure" {
    import React from 'react';
    import { ClientRole } from "agora-rn-uikit/src/index";
    interface Props {
        userRole: ClientRole;
    }
    export type deviceInfo = MediaDeviceInfo;
    export type deviceId = deviceInfo['deviceId'];
    export type deviceKind = deviceInfo['kind'];
    const DeviceConfigure: React.FC<Props>;
    export default DeviceConfigure;
}
declare module "src/utils/SdkMethodEvents" {
    import { Emitter } from 'nanoevents';
    import { CustomizationApiInterface, MeetingInfoContextInterface } from "customization-api/index";
    import { deviceId } from "src/components/DeviceConfigure";
    export interface SdkMethodEvents {
        customize: (customization: CustomizationApiInterface) => void;
        join(roomid: string | Partial<MeetingInfoContextInterface['data']>, skipPrecall?: boolean, username?: string): MeetingInfoContextInterface['data'];
        microphoneDevice: (deviceId: deviceId) => void;
        speakerDevice: (deviceId: deviceId) => void;
        cameraDevice: (deviceId: deviceId) => void;
        muteAudio: (mute: boolean | ((currentMute: boolean) => boolean)) => void;
        muteVideo: (mute: boolean | ((currentMute: boolean) => boolean)) => void;
        login: (token: string) => void;
        logout: () => void;
    }
    type EventParameterHelper<T extends keyof SdkMethodEvents> = Parameters<SdkMethodEvents[T]>;
    type EventKeyNameHelper = keyof SdkMethodEvents;
    type injectAsync<T extends (...p: any) => any> = (res: (result?: ReturnType<T> | PromiseLike<ReturnType<T>>) => void, rej: (reason?: any) => void, ...params: Parameters<T>) => void;
    export type _InternalSDKMethodEventsMap = {
        [K in EventKeyNameHelper]: injectAsync<SdkMethodEvents[K]>;
    };
    type emitCacheType = {
        [K in EventKeyNameHelper]?: Parameters<_InternalSDKMethodEventsMap[K]>;
    };
    type emitCacheEnabledType = {
        [K in EventKeyNameHelper]?: boolean;
    };
    class SDKMethodEvents {
        constructor();
        emitter: Emitter;
        emitCache: emitCacheType;
        emitCacheDisabled: emitCacheEnabledType;
        emit<T extends EventKeyNameHelper>(event: T, ...params: EventParameterHelper<T>): Promise<ReturnType<SdkMethodEvents[T]>>;
        on<T extends EventKeyNameHelper>(event: T, callback: _InternalSDKMethodEventsMap[T]): import("nanoevents").Unsubscribe;
    }
    const SDKMethodEventsManager: SDKMethodEvents;
    export default SDKMethodEventsManager;
}
declare module "src/components/meeting-info/useMeetingInfo" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface MeetingInfoContextInterface {
        isJoinDataFetched?: boolean;
        data?: {
            isHost: boolean;
            meetingTitle: string;
            roomId: {
                attendee: string;
                host?: string;
            };
            pstn?: {
                number: string;
                pin: string;
            };
            isSeparateHostLink: boolean;
            channel?: string;
            uid?: UidType;
            token?: string;
            rtmToken?: string;
            encryptionSecret?: string;
            screenShareUid?: string;
            screenShareToken?: string;
        };
    }
    export const validateMeetingInfoData: (meetingInfo: Partial<MeetingInfoContextInterface['data']>) => boolean;
    export const MeetingInfoDefaultValue: MeetingInfoContextInterface;
    interface MeetingInfoProviderProps {
        children: React.ReactNode;
        value: MeetingInfoContextInterface;
    }
    const MeetingInfoProvider: (props: MeetingInfoProviderProps) => JSX.Element;
    /**
     * The MeetingInfo app state contains information about the active meeting.
     */
    const useMeetingInfo: {
        <U>(contextSelector: (data: MeetingInfoContextInterface) => U): U;
        (): MeetingInfoContextInterface;
    };
    export { MeetingInfoProvider, useMeetingInfo };
}
declare module "src/components/SdkApiContext" {
    import React from 'react';
    import { _InternalSDKMethodEventsMap } from "src/utils/SdkMethodEvents";
    import { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    import { CustomizationApiInterface } from "customization-api/index";
    type extractPromises<T extends (...p: any) => any> = {
        res: Parameters<T>[0];
        rej: Parameters<T>[1];
    };
    type SdkApiContextInterface = {
        enterRoom: {
            set: (p: extractPromises<_InternalSDKMethodEventsMap['join']>) => void;
            promise?: extractPromises<_InternalSDKMethodEventsMap['join']>;
        };
        join: {
            initialized: true;
            phrase: string;
            meetingDetails?: Partial<MeetingInfoContextInterface['data']>;
            userName: string;
            skipPrecall: boolean;
            promise: extractPromises<_InternalSDKMethodEventsMap['join']>;
        } | {
            initialized: false;
        };
        customize: {
            customization?: CustomizationApiInterface;
            promise?: extractPromises<_InternalSDKMethodEventsMap['customize']>;
        };
        microphoneDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['microphoneDevice']>;
        };
        speakerDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['speakerDevice']>;
        };
        cameraDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['cameraDevice']>;
        };
        onMuteAudio: (callback: _InternalSDKMethodEventsMap['muteAudio']) => void;
        onMuteVideo: (callback: _InternalSDKMethodEventsMap['muteVideo']) => void;
        clearState: (key: keyof _InternalSDKMethodEventsMap | 'enterRoom', param?: any) => void;
    };
    export const SDK_MEETING_TAG = "sdk-initiated-meeting";
    export const SdkApiContext: React.Context<SdkApiContextInterface>;
    const SdkApiContextProvider: React.FC;
    export default SdkApiContextProvider;
}
declare module "customization-implementation/useCustomization" {
    import React from 'react';
    import { CustomizationApiInterface } from "customization-api/index";
    const CustomizationProvider: React.FC;
    const useCustomization: {
        <U>(contextSelector: (data: CustomizationApiInterface) => U): U;
        (): CustomizationApiInterface;
    };
    export { useCustomization, CustomizationProvider };
}
declare module "customization-implementation/index" {
    export { default as createHook, createConcealedHook } from "customization-implementation/createHook";
    export { CustomizationProvider, useCustomization } from "customization-implementation/useCustomization";
    export type { CustomizationProviderProps } from "customization-implementation/useCustomization";
    export { default as customizationConfig } from 'customization';
}
declare module "src/language/index" {
    import { I18nInterface } from "src/language/i18nTypes";
    export const DEFAULT_I18_DATA: I18nInterface;
}
declare module "src/language/useLanguage" {
    import React from 'react';
    export interface LanguageContextInterface {
        languageCode: string;
        setLanguageCode: (code: string) => void;
    }
    export interface LanguagePropsInterface {
        children: React.ReactNode;
    }
    const LanguageProvider: (props: LanguagePropsInterface) => JSX.Element;
    const useLanguage: {
        <U>(contextSelector: (data: LanguageContextInterface) => U): U;
        (): LanguageContextInterface;
    };
    export { LanguageProvider, useLanguage };
}
declare module "src/utils/useString" {
    import { TextDataInterface } from "src/language/default-labels/index";
    export function usei18nData(selectedLanguageCode?: string): TextDataInterface;
    export function useString<T = string>(keyName: keyof TextDataInterface): (input?: T) => string;
}
declare module "src/subComponents/SidePanelEnum" {
    export enum SidePanelType {
        None = 0,
        Participants = 1,
        Chat = 2,
        Settings = 3,
        Transcript = 4
    }
}
declare module "src/rtm/RTMEngine" {
    import RtmEngine from "bridge/rtm/web/index";
    class RTMEngine {
        engine: RtmEngine;
        private localUID;
        private channelId;
        private static _instance;
        static getInstance(): RTMEngine;
        private createClientInstance;
        private destroyClientInstance;
        private constructor();
        setLocalUID(localUID: string): void;
        setChannelId(channelID: string): void;
        setLoginInfo(localUID: string, channelID: string): void;
        get localUid(): string;
        get channelUid(): string;
        destroy(): Promise<void>;
    }
    export default RTMEngine;
}
declare module "src/rtm-events-api/types" {
    import { UidType } from "agora-rn-uikit/src/index";
    export type ReceiverUid = UidType | UidType[];
    export type EventPayload = string | Record<string, never>;
    export enum EventSource {
        core = "core",
        fpe = "fpe"
    }
    export enum EventPersistLevel {
        'LEVEL1' = 1,
        'LEVEL2' = 2,
        'LEVEL3' = 3
    }
    interface EventCallbackPayload {
        payload: string;
        persistLevel: EventPersistLevel;
        sender: UidType;
        ts: number;
    }
    export type EventCallback = (args: EventCallbackPayload) => void;
}
declare module "src/rtm-events/EventUtils" {
    import { EventSource } from "src/rtm-events-api/types";
    type TListener = <T>(t: T) => void;
    type TListenerMetaData = {
        once: boolean;
        listener: TListener;
    };
    type TEventList = Map<string, TListenerMetaData[]>;
    type TEvents = Record<EventSource, TEventList> | Record<string, never>;
    const EventUtils: {
        getEvents(source: EventSource): TEvents | {};
        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         *
         * @param {String} evt Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        addListener(evt: string, listener: any, source: EventSource): object;
        /**
         * Removes a listener function from the specified event.
         *
         * @param {String} evt Name of the event to remove the listener from.
         * @param {Function} listenerToRemove Method to remove from the event.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils for chaining.
         */
        removeListener(evt: string, listenerToRemove: TListener, source: EventSource): Object;
        /**
         * Removes all listeners from a specified event.
         * If you do not specify an event then all listeners will be removed.
         * That means every event will be emptied.
         *
         * @param {String} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        removeAllListeners(evt: string, source: EventSource): object;
        /**
         * Removes all events and resets the state.
         * That means every event will be emptied.
         *
         * @param {source} source source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        removeAll(source: EventSource): object;
        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         *
         * @param {String} evt Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {Object} Current instance of EventUtils
         */
        emitEvent(evt: string, source: EventSource, args: any): object;
        clear(): void;
    };
    export default EventUtils;
}
declare module "src/rtm-events/EventsQueue" {
    interface IQueueEvent {
        data: any;
        uid: number | string;
        ts: number;
    }
    const EventsQueue: {
        enqueue(q: IQueueEvent): void;
        dequeue(): any;
        isEmpty(): boolean;
        size(): any;
        clear(): void;
    };
    export default EventsQueue;
}
declare module "src/rtm-events/constants" {
    const EventActions: {
        RECORDING_STARTED: string;
        RECORDING_STOPPED: string;
        RECORDING_STOP_REQUEST: string;
        SCREENSHARE_STARTED: string;
        SCREENSHARE_STOPPED: string;
    };
    const EventNames: {
        RECORDING_ATTRIBUTE: string;
        RAISED_ATTRIBUTE: string;
        ROLE_ATTRIBUTE: string;
        PUBLIC_CHAT_MESSAGE: string;
        PRIVATE_CHAT_MESSAGE: string;
        SCREENSHARE_ATTRIBUTE: string;
        NAME_ATTRIBUTE: string;
        VIDEO_MEETING_HOST: string;
        VIDEO_MEETING_ATTENDEE: string;
        STT_ACTIVE: string;
        STT_LANGUAGE: string;
    };
    /** ***** EVENT NAMES ENDS ***** */
    export { EventActions, EventNames };
}
declare module "src/rtm-events/index" {
    import EventUtils from "src/rtm-events/EventUtils";
    import EventsQueue from "src/rtm-events/EventsQueue";
    export * from "src/rtm-events/constants";
    export { EventUtils, EventsQueue };
}
declare module "src/rtm/utils" {
    export const hasJsonStructure: (str: string) => boolean;
    export const safeJsonParse: (str: string) => any[];
    export const adjustUID: (uid: number) => number;
    export const timeNow: () => number;
    export const getMessageTime: (ts?: number) => number;
    export const get32BitUid: (peerId: string) => number;
}
declare module "src/rtm-events-api/Events" {
    import { ReceiverUid, EventCallback, EventSource, EventPersistLevel } from "src/rtm-events-api/types";
    class Events {
        private source;
        constructor(source?: EventSource);
        /**
         * Persists the data in the local attributes of the user
         *
         * @param {String} evt  to be stored in rtm Attribute key
         * @param {String} payload to be stored in rtm Attribute value
         * @api private
         */
        private _persist;
        /**
         * event type validator.
         *
         * @api private
         * @returns {boolean}
         */
        private _validateEvt;
        /**
         * event listener validator
         *
         * @api private
         * @returns {boolean}
         */
        private _validateListener;
        /**
         * Sets the local attribute of user if persist level is 2 or 3.
         * If param 'toUid' is not provided, message is sent in the channel.
         * If param 'toUid' is provided message is sent to that individual.
         * If param 'toUid' is an array of uids is provided then message is sent to all the individual uids in loop.
         *
         * @param {Object} rtmPayload payload to be sent across
         * @param {ReceiverUid} toUid uid or uids[] of user
         * @api private
         */
        private _send;
        /**
         * Listen on a new event by eventName and listener.
         * When the specified event happens, the Events API triggers the callback that you pass.
         * The listener will not be added/listened if it is a duplicate.
         *
         * @param {String} eventName Name of the event. It must be a unique string.
         * @param {Function} listener Method to be called when the event is emitted.
         * @returns {Function} Returns function, call it and this listener will be removed from event
         * @api public
         */
        on: (eventName: string, listener: EventCallback) => Function;
        /**
         * Listen off an event by eventName and listener
         * or listen off events by eventName, when if only eventName argument is passed.
         * or listen off all events, when if no arguments are passed.
         *
         * @param {String} eventName Name of the event to remove the listener from.
         * @param {Function} listener Listener to remove from the event.
         * @api public
         */
        off: (eventName?: string, listener?: EventCallback) => void;
        /**
         * This method sends p2p or channel message depending upon the 'receiver' value.
         *  - If 'receiver' is provided this method sends p2p message.
         *  - If 'receiver' is empty this method sends channel message.
         *
         *
         * @param {String} eventName  Name of the event to send.
         * @param {String} payload (optional) Additional data to be sent along with the event.
         * @param {Enum} persistLevel (optional) set different levels of persistance. Default value is Level 1
         * @param {ReceiverUid} receiver (optional) uid or uid array. Default mode sends message in channel.
         * @api public
         * */
        send: (eventName?: string, payload?: string, persistLevel?: EventPersistLevel, receiver?: ReceiverUid) => Promise<void>;
    }
    export default Events;
}
declare module "src/rtm-events-api/index" {
    import Events from "src/rtm-events-api/Events";
    export * from "src/rtm-events-api/types";
    const events: Events;
    export default events;
}
declare module "src/components/chat-ui/useChatUIControl" {
    import React, { SetStateAction } from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface ChatUIControlInterface {
        groupActive: boolean;
        privateActive: boolean;
        selectedChatUserId: UidType;
        inputActive?: boolean;
        setGroupActive: React.Dispatch<SetStateAction<boolean>>;
        setPrivateActive: React.Dispatch<SetStateAction<boolean>>;
        setSelectedChatUserId: React.Dispatch<SetStateAction<UidType>>;
        setInputActive: React.Dispatch<SetStateAction<boolean>>;
        message: string;
        setMessage: React.Dispatch<SetStateAction<string>>;
    }
    interface ChatUIControlProviderProps {
        children: React.ReactNode;
    }
    const ChatUIControlProvider: (props: ChatUIControlProviderProps) => JSX.Element;
    /**
     * The ChatUIControl app state governs the chat ui.
     */
    const useChatUIControl: {
        <U>(contextSelector: (data: ChatUIControlInterface) => U): U;
        (): ChatUIControlInterface;
    };
    export { ChatUIControlProvider, useChatUIControl };
}
declare module "src/components/chat-notification/useChatNotification" {
    import React, { SetStateAction } from 'react';
    export interface individualUnreadMessageCount {
        [key: number]: number;
    }
    export interface ChatNotificationInterface {
        totalUnreadCount: number;
        unreadGroupMessageCount: number;
        setUnreadGroupMessageCount: React.Dispatch<SetStateAction<number>>;
        unreadPrivateMessageCount: number;
        setUnreadPrivateMessageCount: React.Dispatch<SetStateAction<number>>;
        unreadIndividualMessageCount: individualUnreadMessageCount;
        setUnreadIndividualMessageCount: React.Dispatch<SetStateAction<individualUnreadMessageCount>>;
    }
    interface ChatNotificationProviderProps {
        children: React.ReactNode;
    }
    const ChatNotificationProvider: (props: ChatNotificationProviderProps) => JSX.Element;
    const useChatNotification: {
        <U>(contextSelector: (data: ChatNotificationInterface) => U): U;
        (): ChatNotificationInterface;
    };
    export { ChatNotificationProvider, useChatNotification };
}
declare module "src/utils/useSidePanel" {
    import React, { SetStateAction } from 'react';
    import { SidePanelType } from "src/subComponents/SidePanelEnum";
    export interface SidePanelContextInterface {
        sidePanel: SidePanelType;
        setSidePanel: React.Dispatch<SetStateAction<SidePanelType>>;
    }
    interface SidePanelProviderProps {
        value: SidePanelContextInterface;
        children: React.ReactNode;
    }
    const SidePanelProvider: (props: SidePanelProviderProps) => JSX.Element;
    /**
     * The Side panel app state governs the side panel.
     */
    const useSidePanel: {
        <U>(contextSelector: (data: SidePanelContextInterface) => U): U;
        (): SidePanelContextInterface;
    };
    export { SidePanelProvider, useSidePanel };
}
declare module "src/utils/getUniqueID" {
    export default function getUniqueID(): string;
}
declare module "src/components/chat-messages/useChatMessages" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    interface ChatMessagesProviderProps {
        children: React.ReactNode;
    }
    export interface messageInterface {
        createdTimestamp: number;
        updatedTimestamp?: number;
        msg: string;
        msgId: string;
        isDeleted: boolean;
    }
    export interface messageStoreInterface extends messageInterface {
        uid: UidType;
    }
    interface ChatMessagesInterface {
        messageStore: messageStoreInterface[];
        privateMessageStore: {
            [key: string]: messageStoreInterface[];
        };
        sendChatMessage: (msg: string, toUid?: UidType) => void;
        editChatMessage: (msgId: string, msg: string, toUid?: UidType) => void;
        deleteChatMessage: (msgId: string, toUid?: UidType) => void;
        openPrivateChat: (toUid: UidType) => void;
    }
    const ChatMessagesProvider: (props: ChatMessagesProviderProps) => JSX.Element;
    const useChatMessages: {
        <U>(contextSelector: (data: ChatMessagesInterface) => U): U;
        (): ChatMessagesInterface;
    };
    export { ChatMessagesProvider, useChatMessages };
}
declare module "src/atoms/ImageIcon" {
    import { ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface ImageIconProps {
        tintColor?: string;
        name: keyof IconsInterface;
        iconSize?: number;
        iconContainerStyle?: ViewStyle;
        iconBackgroundColor?: string;
        base64?: boolean;
        base64TintColor?: string;
        iconType?: 'round' | 'plain';
        isHovered?: boolean;
        showWarningIcon?: boolean;
    }
    const ImageIcon: (props: ImageIconProps) => JSX.Element;
    export default ImageIcon;
}
declare module "src/theme/index" {
    const ThemeConfig: {
        EmphasisOpacity: {
            high: number;
            medium: number;
            disabled: number;
        };
        EmphasisPlus: {
            high: string;
            medium: string;
            disabled: string;
        };
        FontSize: {
            extraLarge: 32;
            large: 20;
            medium: 18;
            normal: 16;
            small: 14;
            tiny: 12;
        };
        FontFamily: {
            sansPro: string;
        };
        BorderRadius: {
            small: 4;
            medium: 8;
            large: 12;
            extraLarge: 20;
        };
    };
    export default ThemeConfig;
}
declare module "src/subComponents/ChatInput" {
    import React from 'react';
    export interface ChatSendButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const ChatSendButton: (props: ChatSendButtonProps) => JSX.Element;
    export interface ChatTextInputProps {
        render?: (message: string, onChangeText: (text: string) => void, onSubmitEditing: () => void, chatMessageInputPlaceholder: string) => JSX.Element;
    }
    export const ChatTextInput: (props: ChatTextInputProps) => JSX.Element;
    /**
     * Input component for the Chat interface
     */
    const ChatInput: (props: {
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
    }) => JSX.Element;
    export default ChatInput;
}
declare module "customization-api/typeDefinition" {
    import React from 'react';
    export type { ChatBubbleProps } from "src/components/ChatContext";
    import { ChatBubbleProps } from "src/components/ChatContext";
    import { RenderInterface, RenderStateInterface, UidType } from "agora-rn-uikit/src/index";
    import { I18nInterface } from "src/language/i18nTypes";
    import { IconsInterface } from "src/atoms/CustomIcon";
    export type { RenderInterface, RenderStateInterface, UidType };
    export type { ChatTextInputProps, ChatSendButtonProps, } from "src/subComponents/ChatInput";
    import { ChatTextInputProps, ChatSendButtonProps } from "src/subComponents/ChatInput";
    export const CUSTOM_ROUTES_PREFIX = "/r/";
    interface BeforeAndAfterInterface {
    }
    export interface PreCallInterface extends BeforeAndAfterInterface {
        preview?: React.ComponentType;
        audioMute?: React.ComponentType;
        videoMute?: React.ComponentType;
        meetingName?: React.ComponentType;
        deviceSelect?: React.ComponentType;
        joinButton?: React.ComponentType;
        textBox?: React.ComponentType;
    }
    export interface ChatCmpInterface {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
    }
    export interface renderComponentInterface {
        user: RenderInterface;
        isMax?: boolean;
    }
    export interface renderComponentObjectInterface {
        [key: string]: React.ComponentType<renderComponentInterface>;
    }
    export type layoutComponent = React.ComponentType<{
        renderData: RenderStateInterface['activeUids'];
    }>;
    export interface layoutObjectBase {
        name: string;
        label: string;
        component: layoutComponent;
    }
    export interface layoutObjectWithIcon extends layoutObjectBase {
        icon: string;
        iconName?: never;
    }
    export interface layoutObjectWithIconName extends layoutObjectBase {
        icon?: never;
        iconName: keyof IconsInterface;
    }
    export type layoutObjectType = layoutObjectWithIcon | layoutObjectWithIconName;
    export interface VideoCallInterface extends BeforeAndAfterInterface {
        topBar?: React.ComponentType;
        participantsPanel?: React.ComponentType;
        bottomBar?: React.ComponentType;
        chat?: ChatCmpInterface;
        customContent?: renderComponentObjectInterface;
        customLayout?: (layouts: layoutObjectType[]) => layoutObjectType[];
        useUserContext?: () => void;
    }
    export type ComponentsInterface = {
        /**
         * Custom context/api provider wrapped in root level
         */
        appRoot?: React.ComponentType;
        precall?: React.ComponentType;
        videoCall?: VideoCallInterface | React.ComponentType;
    };
    export interface CustomRoutesInterface {
        path: string;
        component: React.ComponentType;
        exact?: boolean;
        componentProps?: object;
        isPrivateRoute?: boolean;
        routeProps?: object;
        failureRedirectTo?: string;
    }
    export type CustomHookType = () => () => Promise<void>;
    export interface CustomizationApiInterface {
        /**
         * components used to replace whole screen or subcomponents
         */
        components?: ComponentsInterface;
        /**
         * custom routes used to add new page/routes
         */
        /**
         * Internationlization
         */
        i18n?: I18nInterface[];
    }
}
declare module "customization-api/customize" {
    import { CustomizationApiInterface } from "customization-api/typeDefinition";
    export const customize: (config: CustomizationApiInterface) => CustomizationApiInterface;
}
declare module "src/components/meeting-info/useSetMeetingInfo" {
    import React, { SetStateAction } from 'react';
    import { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    export interface SetMeetingInfoContextInterface {
        setMeetingInfo: React.Dispatch<SetStateAction<MeetingInfoContextInterface>>;
    }
    interface SetMeetingInfoProviderProps {
        children: React.ReactNode;
        value: SetMeetingInfoContextInterface;
    }
    const SetMeetingInfoProvider: (props: SetMeetingInfoProviderProps) => JSX.Element;
    const useSetMeetingInfo: {
        <U>(contextSelector: (data: SetMeetingInfoContextInterface) => U): U;
        (): SetMeetingInfoContextInterface;
    };
    export { SetMeetingInfoProvider, useSetMeetingInfo };
}
declare module "src/utils/useCreateMeeting" {
    /**
     * Returns an asynchronous function to create a meeting with the given options.
     */
    export default function useCreateMeeting(): (roomTitle: string, enablePSTN?: boolean, isSeparateHostLink?: boolean) => Promise<void>;
}
declare module "src/components/GraphQLProvider" {
    import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
    import React from 'react';
    export const GraphQLContext: React.Context<{
        client: ApolloClient<NormalizedCacheObject>;
    }>;
    const GraphQLProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default GraphQLProvider;
}
declare module "src/utils/useLocalShareScreenUid" {
    const useLocalScreenShareUid: () => any;
    export default useLocalScreenShareUid;
}
declare module "src/components/useUserPreference" {
    import React from 'react';
    interface UserPreferenceContextInterface {
        displayName: string;
        setDisplayName: React.Dispatch<React.SetStateAction<string>>;
        saveName: (name: string) => void;
    }
    const UserPreferenceProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const useUserPreference: {
        <U>(contextSelector: (data: UserPreferenceContextInterface) => U): U;
        (): UserPreferenceContextInterface;
    };
    export { useUserPreference, UserPreferenceProvider };
}
declare module "src/utils/useGetName" {
    function useGetName(): string;
    export default useGetName;
}
declare module "src/utils/useJoinMeeting" {
    /**
     * Returns an asynchronous function to join a meeting with the given phrase.
     */
    export default function useJoinMeeting(): (phrase: string) => Promise<Partial<{
        isHost: boolean;
        meetingTitle: string;
        roomId: {
            attendee: string;
            host?: string;
        };
        pstn?: {
            number: string;
            pin: string; /**
             * Returns an asynchronous function to join a meeting with the given phrase.
             */
        };
        isSeparateHostLink: boolean;
        channel?: string;
        uid?: number;
        token?: string;
        rtmToken?: string;
        encryptionSecret?: string;
        screenShareUid?: string;
        screenShareToken?: string;
    }>>;
}
declare module "src/components/SdkMuteToggleListener" {
    import React from 'react';
    export const SdkMuteQueueContext: React.Context<{
        videoMuteQueue: {
            current: any[];
        };
        audioMuteQueue: {
            current: any[];
        };
    }>;
    const SdkMuteToggleListener: (props: any) => JSX.Element;
    export default SdkMuteToggleListener;
}
declare module "src/utils/useMuteToggleLocal" {
    import { ToggleState } from "agora-rn-uikit/src/index";
    export enum MUTE_LOCAL_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to toggle muted state of the given track type for the local user.
     */
    function useMuteToggleLocal(): (type: MUTE_LOCAL_TYPE, _action?: ToggleState, _fromSdk?: boolean) => Promise<void>;
    export default useMuteToggleLocal;
}
declare module "src/utils/useIsPSTN" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a PSTN user and returns true/false
     * @returns function
     */
    function useIsPSTN(): (uid: UidType) => boolean;
    export default useIsPSTN;
}
declare module "src/utils/useRemoteEndCall" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function to end the call for a remote user with the given uid.
     */
    const useRemoteEndCall: () => (uid: UidType) => void;
    export default useRemoteEndCall;
}
declare module "src/utils/useMutePSTN" {
    import { UidType } from "agora-rn-uikit/src/index";
    const useMutePSTN: () => (uid: UidType) => Promise<any>;
    export default useMutePSTN;
}
declare module "src/utils/useRemoteMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    export enum MUTE_REMOTE_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to toggle muted state of the given track type for a remote user with the given uid or if no uid provided, mutes everyone else in the meeting.
     */
    function useRemoteMute(): (type: MUTE_REMOTE_TYPE, uid?: UidType) => Promise<void>;
    export default useRemoteMute;
}
declare module "customization-api/action-library" {
    export { default as useCreateMeeting } from "src/utils/useCreateMeeting";
    export { default as useJoinMeeting } from "src/utils/useJoinMeeting";
    export { MUTE_LOCAL_TYPE, default as useMuteToggleLocal, } from "src/utils/useMuteToggleLocal";
    export { default as useRemoteEndcall } from "src/utils/useRemoteEndCall";
    export { default as useRemoteMute, MUTE_REMOTE_TYPE, } from "src/utils/useRemoteMute";
    export { controlMessageEnum } from "src/components/ChatContext";
    export { ToggleState } from "agora-rn-uikit/src/Contexts/PropsContext";
}
declare module "src/app-state/useLocalUserInfo" {
    /**
     * The LocalUserInfo app state contains the local user information like uid, audio and video mute states etc.
     */
    export const useLocalUserInfo: () => import("customization-api/index").RenderInterface;
}
declare module "src/utils/useLayout" {
    import React, { SetStateAction } from 'react';
    export interface LayoutContextInterface {
        currentLayout: string;
        setLayout: React.Dispatch<SetStateAction<string>>;
    }
    interface LayoutProviderProps {
        value: LayoutContextInterface;
        children: React.ReactNode;
    }
    const LayoutProvider: (props: LayoutProviderProps) => JSX.Element;
    /**
     * The Layout app state governs the video call screen content display layout.
     */
    const useLayout: {
        <U>(contextSelector: (data: LayoutContextInterface) => U): U;
        (): LayoutContextInterface;
    };
    export { LayoutProvider, useLayout };
}
declare module "src/components/Router" {
    export { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useParams, useLocation, Prompt, } from 'react-router-dom';
}
declare module "src/subComponents/recording/useRecordingLayoutQuery" {
    import { UidType } from "agora-rn-uikit/src/index";
    function useRecordingLayoutQuery(): {
        executeNormalQuery: () => void;
        executePresenterQuery: (screenShareUid: UidType) => void;
    };
    export default useRecordingLayoutQuery;
}
declare module "src/components/contexts/ScreenShareContext" {
    import React, { Dispatch, SetStateAction } from 'react';
    export interface ScreenShareObjectInterface {
        [key: string | number]: {
            name: string;
            isActive: boolean;
            isExpanded?: boolean;
            ts: number;
        };
    }
    export interface ScreenShareContextInterface {
        screenShareData: ScreenShareObjectInterface;
        setScreenShareData: Dispatch<SetStateAction<ScreenShareObjectInterface>>;
        isScreenShareOnFullView: boolean;
        setScreenShareOnFullView: Dispatch<SetStateAction<boolean>>;
    }
    interface ScreenShareProviderProps {
        children: React.ReactNode;
    }
    const ScreenShareProvider: (props: ScreenShareProviderProps) => JSX.Element;
    const useScreenContext: {
        <U>(contextSelector: (data: ScreenShareContextInterface) => U): U;
        (): ScreenShareContextInterface;
    };
    export { useScreenContext, ScreenShareProvider };
}
declare module "src/subComponents/recording/useRecording" {
    import React, { SetStateAction } from 'react';
    export interface RecordingContextInterface {
        startRecording: () => void;
        stopRecording: () => void;
        isRecordingActive: boolean;
        inProgress: boolean;
    }
    interface RecordingProviderProps {
        children: React.ReactNode;
        value: {
            setRecordingActive: React.Dispatch<SetStateAction<boolean>>;
            isRecordingActive: boolean;
        };
    }
    /**
     * Component to start / stop Agora cloud recording.
     * Sends a control message to all users in the channel over RTM to indicate that
     * Cloud recording has started/stopped.
     */
    const RecordingProvider: (props: RecordingProviderProps) => JSX.Element;
    /**
     * The Recording app state governs the App Builder cloud recording functionality.
     */
    const useRecording: {
        <U>(contextSelector: (data: RecordingContextInterface) => U): U;
        (): RecordingContextInterface;
    };
    export { RecordingProvider, useRecording };
}
declare module "src/app-state/useMessages" {
    import { individualUnreadMessageCount } from "src/components/chat-notification/useChatNotification";
    import { messageStoreInterface } from "src/components/chat-messages/useChatMessages";
    export interface messageInterface {
        groupMessages: messageStoreInterface[];
        privateMessages: {
            [key: string]: messageStoreInterface[];
        };
        sendMessage: (msg: string, toUid?: number) => void;
        editMessage: (msgId: string, msg: string, toUid?: number) => void;
        deleteMessage: (msgId: string, toUid?: number) => void;
        groupUnreadCount: number;
        individualUnreadCount: individualUnreadMessageCount;
        setGroupUnreadCount: React.Dispatch<React.SetStateAction<number>>;
        setIndividualUnreadCount: React.Dispatch<React.SetStateAction<individualUnreadMessageCount>>;
    }
    /**
     * The Messages app state governs the chat messages.
     */
    export const useMessages: () => messageInterface;
}
declare module "src/utils/useSetName" {
    function useSetName(): import("react").Dispatch<import("react").SetStateAction<string>>;
    export default useSetName;
}
declare module "src/utils/useUserName" {
    /**
     * The UserName app state governs the local user's display name.
     */
    export default function useUserName(): [
        string,
        React.Dispatch<React.SetStateAction<string>>
    ];
}
declare module "customization-api/app-state" {
    /**
     * The RTC app state exposes the internal RtcEngine object as well as dispatch interface to perform various actions.
     */
    export const useRtc: {
        <U>(contextSelector: (data: import("agora-rn-uikit/src/Contexts/RtcContext").RtcContextInterface) => U): U;
        (): import("agora-rn-uikit/src/Contexts/RtcContext").RtcContextInterface;
    };
    /**
     * The Render app state governs the information necessary to render each user content view displayed in the videocall screen.
     */
    export const useRender: {
        <U>(contextSelector: (data: import("agora-rn-uikit/src/Contexts/RtcContext").RenderStateInterface) => U): U;
        (): import("agora-rn-uikit/src/Contexts/RtcContext").RenderStateInterface;
    };
    export { useLocalUserInfo } from "src/app-state/useLocalUserInfo";
    /**
     * UI contexts
     */
    export { useLayout } from "src/utils/useLayout";
    export type { LayoutContextInterface } from "src/utils/useLayout";
    export { useRecording } from "src/subComponents/recording/useRecording";
    export type { RecordingContextInterface } from "src/subComponents/recording/useRecording";
    export { useMeetingInfo } from "src/components/meeting-info/useMeetingInfo";
    export type { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    export { useChatUIControl } from "src/components/chat-ui/useChatUIControl";
    export type { ChatUIControlInterface } from "src/components/chat-ui/useChatUIControl";
    export { useMessages } from "src/app-state/useMessages";
    export type { messageInterface } from "src/app-state/useMessages";
    export { SidePanelType } from "src/subComponents/SidePanelEnum";
    export { useSidePanel } from "src/utils/useSidePanel";
    export { default as useUserName } from "src/utils/useUserName";
}
declare module "customization-api/customEvents" {
    import Events from "src/rtm-events-api/Events";
    const customEvents: Events;
    export { customEvents };
}
declare module "src/atoms/HorizontalRule" {
    import { ViewProps } from 'react-native';
    export default function HorizontalRule(props: ViewProps): JSX.Element;
}
declare module "src/atoms/PrimaryButton" {
    import { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface PrimaryButtonProps extends TouchableOpacityProps {
        text?: string;
        iconName?: keyof IconsInterface;
        containerStyle?: ViewStyle;
        textStyle?: TextStyle;
        iconSize?: number;
        iconColor?: string;
    }
    export default function PrimaryButton(props: PrimaryButtonProps): JSX.Element;
}
declare module "src/atoms/SecondaryButton" {
    import React from 'react';
    import { TouchableOpacityProps } from 'react-native';
    export interface SecondaryButtonProps extends TouchableOpacityProps {
        text?: string;
        children?: React.ReactNode;
    }
    export default function SecondaryButton(props: SecondaryButtonProps): JSX.Element;
}
declare module "src/utils/useGetMeetingPhrase" {
    export default function useGetMeetingPhrase(): (phrase: string) => Promise<void>;
}
declare module "src/atoms/TertiaryButton" {
    import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
    import React from 'react';
    interface ButtonProps extends TouchableOpacityProps {
        setRef?: (ref: any) => void;
        text?: string;
        children?: React.ReactNode;
        containerStyle?: ViewStyle;
        textStyle?: TextStyle;
    }
    const TertiaryButton: (props: ButtonProps) => JSX.Element;
    export default TertiaryButton;
}
declare module "src/atoms/Tooltip" {
    import React from 'react';
    import { ViewStyle } from 'react-native';
    interface TooltipProps {
        activeBgStyle?: ViewStyle;
        defaultBgStyle?: ViewStyle;
        renderContent: (isToolTipVisible: boolean, setToolTipVisible: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode;
        toolTipMessage: string;
        toolTipIcon?: React.ReactNode;
        isClickable?: boolean;
        placement?: 'top' | 'bottom' | 'left' | 'right';
        onPress?: () => void;
    }
    const Tooltip: (props: TooltipProps) => JSX.Element;
    export default Tooltip;
}
declare module "src/atoms/IconButton" {
    import React from 'react';
    import { ViewStyle, TextStyle, PressableProps } from 'react-native';
    import { ImageIconProps } from "src/atoms/ImageIcon";
    export interface BtnTextProps {
        textStyle?: TextStyle;
        textColor?: string;
        text?: string;
    }
    export interface IconButtonProps {
        setRef?: (ref: any) => void;
        onPress?: PressableProps['onPress'];
        disabled?: boolean;
        containerStyle?: ViewStyle;
        btnTextProps?: BtnTextProps;
        iconProps: ImageIconProps;
        toolTipMessage?: string;
        isToolTipVisible?: boolean;
        setToolTipVisible?: React.Dispatch<React.SetStateAction<boolean>>;
        isOnActionSheet?: boolean;
        hoverEffect?: boolean;
        hoverEffectStyle?: ViewStyle;
        placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
        isClickable?: boolean;
    }
    const IconButtonWithToolTip: (props: IconButtonProps) => JSX.Element;
    export default IconButtonWithToolTip;
}
declare module "src/subComponents/Clipboard" {
    /**
     * On web and electron web, we use the clipbord component from the react-native-web library
     */
    import { Clipboard } from 'react-native';
    export default Clipboard;
}
declare module "src/components/useShareLink" {
    import React from 'react';
    export const GetMeetingInviteURL: (baseUrl: string, isHost: boolean, roomId: {
        host?: string;
        attendee?: string;
    }, isSeparateHostLink: boolean) => {
        host: string;
        attendee: string;
    } | {
        host: string;
        attendee?: undefined;
    } | {
        attendee: string;
        host?: undefined;
    };
    export const GetMeetingInviteID: (isHost: boolean, roomId: {
        host?: string;
        attendee?: string;
    }, isSeparateHostLink: boolean) => {
        host: string;
        attendee: string;
    } | {
        host: string;
        attendee?: undefined;
    } | {
        attendee: string;
        host?: undefined;
    };
    export enum SHARE_LINK_CONTENT_TYPE {
        ATTENDEE = 1,
        HOST = 2,
        PSTN = 3,
        MEETING_INVITE = 4
    }
    export interface ShareLinkContextInterface {
        copyShareLinkToClipboard: (type: SHARE_LINK_CONTENT_TYPE) => void;
        getShareLink: (type: SHARE_LINK_CONTENT_TYPE) => string;
    }
    const ShareLinkContext: React.Context<ShareLinkContextInterface>;
    interface ShareLinkProvideProps {
        children: React.ReactNode;
    }
    const ShareLinkProvider: (props: ShareLinkProvideProps) => JSX.Element;
    const useShareLink: {
        <U>(contextSelector: (data: ShareLinkContextInterface) => U): U;
        (): ShareLinkContextInterface;
    };
    export { ShareLinkProvider, ShareLinkContext, useShareLink };
}
declare module "src/atoms/Spacer" {
    interface SpacerProps {
        size: number | string;
        horizontal?: boolean;
    }
    const Spacer: ({ size, horizontal }: SpacerProps) => JSX.Element;
    export default Spacer;
}
declare module "src/atoms/Popup" {
    import { ModalProps, ViewStyle } from 'react-native';
    import React, { SetStateAction } from 'react';
    interface PopupProps extends ModalProps {
        title?: string;
        subtitle?: string;
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        showCloseIcon?: boolean;
        children: React.ReactNode;
        contentContainerStyle?: ViewStyle;
        containerStyle?: ViewStyle;
        cancelable?: boolean;
    }
    const Popup: (props: PopupProps) => JSX.Element;
    export default Popup;
}
declare module "src/components/common/Logo" {
    import React from 'react';
    const Logo: React.FC;
    export default Logo;
}
declare module "src/atoms/Card" {
    import { ViewStyle } from 'react-native';
    import React from 'react';
    interface CardProps {
        style?: ViewStyle;
        children?: React.ReactNode;
    }
    const Card: (props: CardProps) => JSX.Element;
    export default Card;
}
declare module "src/atoms/LinkButton" {
    interface LinkButtonProps {
        onPress: () => void;
        text: string;
    }
    const LinkButton: ({ onPress, text }: LinkButtonProps) => JSX.Element;
    export default LinkButton;
}
declare module "src/auth/openIDPURL" {
    export const getIDPAuthLoginURL: (returnTo?: any) => string;
    export const enableIDPAuth: (returnTo?: any) => Promise<void>;
    export const exitApp: () => void;
}
declare module "src/auth/useTokenAuth" {
    const useTokenAuth: () => {
        enableTokenAuth: (tokenparam?: string) => Promise<unknown>;
        tokenLogout: (cookieLogout?: boolean) => Promise<unknown>;
    };
    export default useTokenAuth;
}
declare module "src/auth/useIDPAuth" {
    export const useIDPAuth: () => {
        enableIDPAuth: (returnTo?: any) => Promise<void>;
        idpLogout: (dummy: any) => Promise<unknown>;
    };
}
declare module "src/subComponents/Loading" {
    const Loading: (props: {
        text: string;
        background?: string;
        indicatorColor?: string;
        textColor?: string;
    }) => JSX.Element;
    export default Loading;
}
declare module "src/auth/UserCancelPopup" {
    import React, { SetStateAction } from 'react';
    interface UserCancelPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        login: () => void;
        exitApp: () => void;
    }
    const UserCancelPopup: (props: UserCancelPopupProps) => JSX.Element;
    export default UserCancelPopup;
}
declare module "src/auth/AuthProvider" {
    import React, { Dispatch, SetStateAction } from 'react';
    export const GET_USER: import("@apollo/client").DocumentNode;
    type AuthProviderProps = {
        enableAuth?: boolean;
        children: React.ReactNode;
    };
    interface AuthContextInterface {
        authenticated: boolean;
        setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
        authLogin: () => void;
        authLogout: () => void;
        returnTo: string;
    }
    const AuthProvider: (props: AuthProviderProps) => JSX.Element;
    const useAuth: () => AuthContextInterface;
    export { AuthProvider, useAuth };
}
declare module "src/auth/IDPLogoutComponent" {
    import { ViewStyle } from 'react-native';
    interface IDPLogoutComponentProps {
        containerStyle?: ViewStyle;
    }
    const IDPLogoutComponent: (props?: IDPLogoutComponentProps) => JSX.Element;
    export default IDPLogoutComponent;
}
declare module "src/components/Share" {
    export interface CopyMeetingInfoProps {
        showSubLabel?: boolean;
    }
    export const CopyMeetingInfo: (props?: CopyMeetingInfoProps) => JSX.Element;
    const Share: () => JSX.Element;
    export default Share;
}
declare module "src/subComponents/Error" {
    const Error: (props: {
        error: {
            name: string;
            message: string;
        };
        showBack?: boolean;
    }) => JSX.Element;
    export default Error;
}
declare module "src/components/common/Error" {
    import React from 'react';
    type ErrorType = {
        name: string;
        message: string;
    };
    type ErrorContextType = {
        error: ErrorType | undefined;
        setGlobalErrorMessage: (error: any) => void;
        resetError: () => void;
    };
    const ErrorContext: React.Context<ErrorContextType>;
    const ErrorProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const CommonError: React.FC;
    export { ErrorContext, ErrorProvider };
    export default CommonError;
}
declare module "src/components/common/index" {
    import Logo from "src/components/common/Logo";
    import Error, { ErrorProvider, ErrorContext } from "src/components/common/Error";
    export { Logo, ErrorContext, ErrorProvider, Error };
}
declare module "src/components/popups/InvitePopup" {
    const InvitePopup: () => JSX.Element;
    export default InvitePopup;
}
declare module "src/components/popups/StopRecordingPopup" {
    const StopRecordingPopup: () => JSX.Element;
    export default StopRecordingPopup;
}
declare module "src/components/popups/StartScreenSharePopup" {
    const StartScreenSharePopup: () => JSX.Element;
    export default StartScreenSharePopup;
}
declare module "src/components/popups/StopScreenSharePopup" {
    const StopScreenSharePopup: () => JSX.Element;
    export default StopScreenSharePopup;
}
declare module "src/utils/useIsLocalUserSpeaking" {
    const useIsLocalUserSpeaking: () => boolean;
    export default useIsLocalUserSpeaking;
}
declare module "src/utils/index" {
    type Entry<T> = {
        [K in keyof T]: [K, T[K]];
    }[keyof T];
    export function filterObject<T extends object>(obj: T, fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean): Partial<T>;
    export function kFormatter(num: number): string | number;
    export function numFormatter(num: number): string;
    export function isEmptyObject(obj: object): boolean;
    export const randomNameGenerator: (num: number) => string;
    export function formatAMPM(date: any): string;
}
declare module "src/utils/useFindActiveSpeaker" {
    const useFindActiveSpeaker: () => number;
    export default useFindActiveSpeaker;
}
declare module "src/components/useVideoCall" {
    import React, { SetStateAction } from 'react';
    import { UidType } from "customization-api/index";
    export interface VideoCallContextInterface {
        showInvitePopup: boolean;
        setShowInvitePopup: React.Dispatch<SetStateAction<boolean>>;
        showStopRecordingPopup: boolean;
        setShowStopRecordingPopup: React.Dispatch<SetStateAction<boolean>>;
        showLayoutOption: boolean;
        setShowLayoutOption: React.Dispatch<SetStateAction<boolean>>;
        activeSpeaker: UidType;
        showStartScreenSharePopup: boolean;
        setShowStartScreenSharePopup: React.Dispatch<SetStateAction<boolean>>;
        showStopScreenSharePopup: boolean;
        setShowStopScreenSharePopup: React.Dispatch<SetStateAction<boolean>>;
    }
    interface VideoCallProviderProps {
        children: React.ReactNode;
    }
    const VideoCallProvider: (props: VideoCallProviderProps) => JSX.Element;
    /**
     *
     */
    const useVideoCall: {
        <U>(contextSelector: (data: VideoCallContextInterface) => U): U;
        (): VideoCallContextInterface;
    };
    export { VideoCallProvider, useVideoCall };
}
declare module "src/subComponents/CopyJoinInfo" {
    export interface CopyJoinInfoProps {
        showLabel?: boolean;
        showTeritaryButton?: boolean;
        render?: (onPress: () => void) => JSX.Element;
        isOnActionSheet?: boolean;
    }
    const CopyJoinInfo: (props: CopyJoinInfoProps) => JSX.Element;
    export default CopyJoinInfo;
}
declare module "src/components/participants/ParticipantSectionTitle" {
    interface PropsInterface {
        title: string;
        count?: number;
        isOpen?: boolean;
        onPress?: () => void;
    }
    export default function ParticipantSectionTitle(props: PropsInterface): JSX.Element;
}
declare module "src/atoms/UserAvatar" {
    const UserAvatar: ({ name, containerStyle, textStyle }: {
        name: any;
        containerStyle: any;
        textStyle: any;
    }) => JSX.Element;
    export default UserAvatar;
}
declare module "src/subComponents/screenshare/useScreenshare" {
    export interface ScreenshareContextInterface {
        isScreenshareActive: boolean;
        startUserScreenshare: () => void;
        stopUserScreenShare: () => void;
    }
    export const ScreenshareContext: import("react").Context<ScreenshareContextInterface>;
    const useScreenshare: {
        <U>(contextSelector: (data: ScreenshareContextInterface) => U): U;
        (): ScreenshareContextInterface;
    };
    export { useScreenshare };
}
declare module "src/subComponents/ScreenShareNotice" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     *
     * @param uid - uid of the user
     * @returns This component display overlay message "Screen sharing is active now" if user started sharing the screen.
     * why its needed : To prevent screensharing tunneling effect
     *
     */
    function ScreenShareNotice({ uid, isMax }: {
        uid: UidType;
        isMax: boolean;
    }): JSX.Element;
    export default ScreenShareNotice;
}
declare module "src/subComponents/FallbackLogo" {
    export default function FallbackLogo(name: string, isActiveSpeaker?: boolean, hideAvatar?: boolean, isMax?: boolean, avatarSize?: number): JSX.Element;
}
declare module "src/components/NetworkQualityContext" {
    import React from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    import { NetworkQualities } from "src/language/default-labels/videoCallScreenLabels";
    /**
     * Network Icons container object with color and string mapping to network quality stat [ 0 - 8]
     * 0 - Unpublished
     * 1 - Excellent
     * 2 - Good
     * 3 - Bad
     * 4 - Bad
     * 5 - Very Bad
     * 6 - Very Bad
     * 7 - Unsupported
     * 8 - Loading
     */
    export const networkIconsObject: {
        [key: number]: {
            icon: keyof IconsInterface;
            tint: string;
            text: NetworkQualities;
        };
    };
    interface NetworkQualityStatsInterface {
        [key: number]: number;
    }
    const NetworkQualityContext: React.Context<NetworkQualityStatsInterface>;
    export default NetworkQualityContext;
    export const NetworkQualityConsumer: React.Consumer<NetworkQualityStatsInterface>;
    export const NetworkQualityProvider: React.FC;
}
declare module "src/subComponents/NetworkQualityPill" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    /**
     *
     * @param networkStat - Network quality stat [ 0 - 8 ]
     * @param primaryColor - Primary color of the project
     * @param small - Reduced fontsize for pinned view min user panel
     * @param rootStyle - CSS style override primarily used for custom placement
     * @returns This component display overlay network quality indicator with an icon that expands on
     * hover to show network quality text [ ex. Excellent, Good, Bad etc ]
     *
     */
    interface NetworkQualityPillProps {
        user: RenderInterface;
    }
    const NetworkQualityPill: (props: NetworkQualityPillProps) => JSX.Element;
    export default NetworkQualityPill;
}
declare module "src/subComponents/TextWithTooltip.native" {
    /**
     * Component showing text with tooltip on mobile native
     */
    const TextWithToolTip: (props: {
        value: string;
        style: object;
        touchable?: boolean;
    }) => JSX.Element;
    const style: {
        backDrop: {
            position: "absolute";
            top: number;
            bottom: number;
            left: number;
            right: number;
            backgroundColor: string;
        };
        textContainer: {
            position: "absolute";
            zIndex: number;
            marginRight: number;
        };
        textStyle: {
            backgroundColor: string;
            padding: number;
            margin: number;
        };
    };
    export default TextWithToolTip;
}
declare module "src/subComponents/TextWithTooltip" {
    /**
     * Web and Desktop : using the TextWithToolTip - which have the browser tooltip
     * Mobile and Mobile Web : using the TextWithToolTipNative - which have the custom tooltip using modal
     */
    const _default_3: (props: {
        touchable?: boolean;
        value: string;
        style: object;
    }) => JSX.Element;
    export default _default_3;
}
declare module "src/atoms/AnimatedActiveSpeaker" {
    interface AnimatedActiveSpeakerProps {
        isSpeaking: boolean;
    }
    const AnimatedActiveSpeaker: ({ isSpeaking }: AnimatedActiveSpeakerProps) => JSX.Element;
    export default AnimatedActiveSpeaker;
}
declare module "src/pages/video-call/NameWithMicIcon" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface NameWithMicIconProps {
        user: RenderInterface;
        isMax: boolean;
        videoTileWidth: number;
    }
    const NameWithMicIcon: (props: NameWithMicIconProps) => JSX.Element;
    export default NameWithMicIcon;
}
declare module "src/utils/useIsActiveSpeaker" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a active speaker and returns true/false
     * @returns function
     */
    function useIsActiveSpeaker(): (uid: UidType) => boolean;
    export default useIsActiveSpeaker;
}
declare module "src/pages/video-call/ZoomableWrapper" {
    const ZoomableWrapper: (props: any) => JSX.Element;
    export default ZoomableWrapper;
}
declare module "src/pages/video-call/VideoRenderer" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface VideoRendererProps {
        user: RenderInterface;
        isMax?: boolean;
    }
    const VideoRenderer: React.FC<VideoRendererProps>;
    export default VideoRenderer;
}
declare module "src/pages/video-call/RenderComponent" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export type RenderComponentType = {
        [key: string]: React.FC<any>;
    };
    interface RenderComponentProps {
        uid: UidType;
        isMax?: boolean;
    }
    const RenderComponent: ({ uid, isMax }: RenderComponentProps) => JSX.Element;
    export default RenderComponent;
}
declare module "src/components/GridVideo" {
    import { layoutComponent } from "customization-api/index";
    const GridVideo: layoutComponent;
    export default GridVideo;
}
declare module "src/components/PinnedVideo" {
    import { layoutComponent } from "customization-api/index";
    const PinnedVideo: layoutComponent;
    export default PinnedVideo;
}
declare module "src/pages/video-call/useLayoutsData" {
    /**
     * if custom layouts provided in customization api
     * @returns customLayouts array
     * else
     * @returns defaultLayouts array
     */
    function useLayoutsData(): import("customization-api/index").layoutObjectType[];
    export default useLayoutsData;
}
declare module "src/pages/video-call/DefaultLayouts" {
    import { layoutObjectType } from "customization-api/index";
    export const DefaultLayouts: layoutObjectType[];
    export const getPinnedLayoutName: () => string;
    export const getGridLayoutName: () => string;
    export const useSetPinnedLayout: () => () => void;
    export const useChangeDefaultLayout: () => () => void;
}
declare module "src/utils/useRemoteRequest" {
    import { UidType } from "agora-rn-uikit/src/index";
    export enum REQUEST_REMOTE_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to request audio/video for a remote user with the given uid or if no uid provided, request everyone else in the meeting.
     */
    function useRemoteRequest(): (type: REQUEST_REMOTE_TYPE, uid?: UidType) => Promise<void>;
    export default useRemoteRequest;
}
declare module "src/atoms/ActionMenu" {
    import { ViewStyle } from 'react-native';
    import React, { SetStateAction } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface ActionMenuItem {
        isBase64Icon?: boolean;
        icon: keyof IconsInterface;
        onHoverIcon?: keyof IconsInterface;
        iconColor: string;
        textColor: string;
        title: string;
        callback: () => void;
        onHoverCallback?: (isHovered: boolean) => void;
        onHoverContent?: JSX.Element;
        disabled?: boolean;
    }
    export interface ActionMenuProps {
        from: string;
        actionMenuVisible: boolean;
        setActionMenuVisible: React.Dispatch<SetStateAction<boolean>>;
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        items: ActionMenuItem[];
        hoverMode?: boolean;
        onHover?: (hover: boolean) => void;
        containerStyle?: ViewStyle;
    }
    const ActionMenu: (props: ActionMenuProps) => JSX.Element;
    export default ActionMenu;
}
declare module "src/components/livestream/Types" {
    import { ClientRole } from "agora-rn-uikit/src/index";
    export enum RaiseHandValue {
        TRUE = "TRUE",
        FALSE = "FALSE"
    }
    export const RaiseHandAttributeKey = "raised";
    export interface raiseHandListInterface {
        [key: string]: raiseHandItemInterface;
    }
    export interface raiseHandItemInterface {
        role: ClientRole;
        raised: RaiseHandValue;
        ts: number;
        isProcessed: boolean;
    }
    import { UidType } from "agora-rn-uikit/src/index";
    export enum requestStatus {
        AwaitingAction = "AWAITING_ACTION",
        Approved = "APPROVED",
        Cancelled = "CANCELLED"
    }
    export enum attrRequestStatus {
        RaiseHand_AwaitingAction = "AWAITING_ACTION",
        RaiseHand_Approved = "APPROVED"
    }
    export enum LiveStreamControlMessageEnum {
        raiseHandRequest = "RAISE_HAND_REQUEST",
        raiseHandRequestAccepted = "RAISE_HAND_ACCEPTED",
        raiseHandRequestRejected = "RAISE_HAND_REJECTED",
        raiseHandRequestReceived = "RAISE_HAND_RECEIVED",
        raiseHandRequestRecall = "RAISE_HAND_REQUEST_RECALL",
        raiseHandRequestRecallLocal = "RAISE_HAND_REQUEST_RECALL_LOCAL",
        raiseHandApprovedRequestRecall = "RAISE_HAND_APPROVED_REQUEST_RECALL",
        notifyAllRequestApproved = "NOTIFY_REQUEST_APPROVED",
        notifyAllRequestRejected = "NOTIFY_REQUEST_REJECTED",
        notifyHostsInChannel = "NOTIFY_HOSTS_IN_CHANNEL",
        promoteAsCoHost = "PROMOTE_AS_CO_HOST",
        coHostJoined = "CO_HOST_JOINED",
        coHostRemoved = "CO_HOST_REMOVED"
    }
    export const LSNotificationObject: {
        RAISE_HAND_REQUEST: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_RECEIVED: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_ACCEPTED: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_REJECTED: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_REQUEST_RECALL: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_REQUEST_RECALL_LOCAL: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_APPROVED_REQUEST_RECALL: {
            text1: string;
            text2: any;
        };
        PROMOTE_AS_CO_HOST: {
            text1: string;
            text2: any;
        };
    };
    export interface liveStreamPropsInterface {
        children: React.ReactNode;
        value: {
            setRtcProps: any;
            rtcProps: any;
            callActive: boolean;
        };
    }
    export interface liveStreamContext {
        setLastCheckedRequestTimestamp: (timestamp: number) => void;
        isPendingRequestToReview: boolean;
        raiseHandList: Record<string, raiseHandItemInterface>;
        hostApprovesRequestOfUID: (uid: number) => void;
        hostRejectsRequestOfUID: (uid: number) => void;
        audienceSendsRequest: () => void;
        audienceRecallsRequest: () => void;
        promoteAudienceAsCoHost: (uid: UidType) => void;
        coHostUids: UidType[];
    }
    export interface requestInterface {
        ts: number;
        status: requestStatus;
        uid: UidType;
    }
    export interface attrRequestInterface {
        status: attrRequestStatus;
        uid: UidType;
    }
}
declare module "src/components/livestream/LiveStreamContext" {
    import React from 'react';
    import { liveStreamContext, liveStreamPropsInterface } from "src/components/livestream/Types";
    const LiveStreamContext: React.Context<liveStreamContext>;
    export const LiveStreamContextConsumer: React.Consumer<liveStreamContext>;
    export const LiveStreamContextProvider: React.FC<liveStreamPropsInterface>;
    export default LiveStreamContext;
}
declare module "src/components/livestream/index" {
    import { LiveStreamControlMessageEnum, requestStatus, RaiseHandValue, raiseHandListInterface } from "src/components/livestream/Types";
    import LiveStreamContext, { LiveStreamContextProvider } from "src/components/livestream/LiveStreamContext";
    export { LiveStreamContext, LiveStreamContextProvider, LiveStreamControlMessageEnum, requestStatus, RaiseHandValue, };
    export type { raiseHandListInterface };
    export default LiveStreamContext;
}
declare module "src/components/contexts/LiveStreamDataContext" {
    import { UidType } from "agora-rn-uikit/src/index";
    import React from 'react';
    import { raiseHandListInterface } from "src/components/livestream/index";
    export interface LiveStreamDataObjectInterface {
        [key: number]: {
            role: number;
            raised: boolean;
            ts: number;
        };
    }
    export interface LiveStreamDataContextInterface {
        hostUids: UidType[];
        audienceUids: UidType[];
        liveStreamData: raiseHandListInterface;
    }
    interface ScreenShareProviderProps {
        children: React.ReactNode;
    }
    const LiveStreamDataProvider: (props: ScreenShareProviderProps) => JSX.Element;
    const useLiveStreamDataContext: {
        <U>(contextSelector: (data: LiveStreamDataContextInterface) => U): U;
        (): LiveStreamDataContextInterface;
    };
    export { useLiveStreamDataContext, LiveStreamDataProvider };
}
declare module "src/subComponents/RemoveMeetingPopup" {
    import React, { SetStateAction } from 'react';
    interface RemoveMeetingPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        removeUserFromMeeting: () => void;
        username: string;
    }
    const RemoveMeetingPopup: (props: RemoveMeetingPopupProps) => JSX.Element;
    export default RemoveMeetingPopup;
}
declare module "src/subComponents/RemoveScreensharePopup" {
    import React, { SetStateAction } from 'react';
    interface RemoveScreensharePopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        removeScreenShareFromMeeting: () => void;
        username: string;
    }
    const RemoveScreensharePopup: (props: RemoveScreensharePopupProps) => JSX.Element;
    export default RemoveScreensharePopup;
}
declare module "src/utils/useRemoteEndScreenshare" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function to end the screenshare for a remote user with the given uid.
     */
    const useRemoteEndScreenshare: () => (uid: UidType) => void;
    export default useRemoteEndScreenshare;
}
declare module "src/utils/useFocus" {
    import React, { SetStateAction } from 'react';
    export interface currentFocus {
        editName: boolean;
    }
    export interface FocusContextInterface {
        currentFocus: currentFocus;
        setFocus: React.Dispatch<SetStateAction<currentFocus>>;
    }
    interface FocusProviderProps {
        value: FocusContextInterface;
        children: React.ReactNode;
    }
    const FocusProvider: (props: FocusProviderProps) => JSX.Element;
    /**
     * The Focus app state governs the chatinput and editname.
     */
    const useFocus: {
        <U>(contextSelector: (data: FocusContextInterface) => U): U;
        (): FocusContextInterface;
    };
    export { FocusProvider, useFocus };
}
declare module "src/utils/PlatformWrapper" {
    const PlatformWrapper: ({ children }: {
        children: any;
    }) => JSX.Element;
    export default PlatformWrapper;
}
declare module "src/subComponents/RemoteMutePopup" {
    import React, { SetStateAction } from 'react';
    export interface ActionMenuProps {
        actionMenuVisible: boolean;
        setActionMenuVisible: React.Dispatch<SetStateAction<boolean>>;
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        name: string;
        onMutePress: () => void;
        type: 'video' | 'audio';
        action?: 'mute' | 'request';
    }
    const RemoteMutePopup: (props: ActionMenuProps) => JSX.Element;
    export default RemoteMutePopup;
}
declare module "src/components/participants/UserActionMenuOptions" {
    import { RenderInterface } from "customization-api/index";
    interface UserActionMenuOptionsOptionsProps {
        user: RenderInterface;
        actionMenuVisible: boolean;
        setActionMenuVisible: (actionMenuVisible: boolean) => void;
        btnRef: any;
        from: 'partcipant' | 'screenshare-participant' | 'video-tile';
    }
    export default function UserActionMenuOptionsOptions(props: UserActionMenuOptionsOptionsProps): JSX.Element;
}
declare module "src/components/participants/ScreenshareParticipants" {
    import { RenderInterface } from "customization-api/index";
    const ScreenshareParticipants: (props: {
        user: RenderInterface;
    }) => JSX.Element;
    export default ScreenshareParticipants;
}
declare module "src/components/styles" {
    const styles: {
        temp: {
            width: string;
            height: string;
            borderRadius: number;
            borderWidth: number;
        };
        bottomBar: {
            flex: number;
            paddingHorizontal: string;
            backgroundColor: string;
            flexDirection: string;
            justifyContent: string;
            position: string;
            margin: number;
            bottom: number;
        };
        localButton: {
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        actionSheetButton: {
            width: number;
            height: number;
        };
        localButtonSmall: {
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        localButtonText: {
            fontFamily: string;
            fontSize: number;
            marginTop: number;
            fontWeight: string;
        };
        localButtonWithoutBG: {
            borderRadius: number;
            borderColor: string;
            borderWidth: number;
            width: number;
            height: number;
            padding: number;
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        fullWidthButton: {
            width: string;
            height: string;
            resizeMode: string;
        };
        endCall: {
            width: number;
            height: number;
        };
        endCallContainer: {
            flexDirection: string;
            justifyContent: string;
            alignItems: string;
            paddingVertical: number;
            paddingHorizontal: number;
            backgroundColor: string;
            borderRadius: number;
        };
        endCallText: {
            color: string;
            fontFamily: string;
            fontSize: number;
            marginLeft: number;
            fontWeight: string;
        };
        remoteButton: {
            width: number;
            height: number;
            borderTopRightRadius: number;
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderBottomRightRadius: number;
            borderWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            marginHorizontal: number;
            backgroundColor: string;
        };
        liveStreamHostControlBtns: {
            width: number;
            height: number;
            borderTopRightRadius: number;
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderBottomRightRadius: number;
            borderWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            marginHorizontal: number;
            backgroundColor: string;
        };
        minCloseBtn: {
            alignItems: string;
            justifyContent: string;
            width: number;
            height: number;
            borderRadius: number;
            position: string;
            right: number;
            top: number;
        };
    };
    export default styles;
}
declare module "src/subComponents/RemoteAudioMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteAudioMuteProps {
        uid: UidType;
        audio: boolean;
        isHost: boolean;
        userContainerRef: any;
    }
    /**
     * Component to mute / unmute remote audio.
     * Sends a control message to another user over RTM if the local user is a host.
     * If the local user is not a host, it simply renders an image
     */
    const RemoteAudioMute: (props: RemoteAudioMuteProps) => JSX.Element;
    export default RemoteAudioMute;
}
declare module "src/subComponents/RemoteVideoMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Component to mute / unmute remote video.
     * Sends a control message to another user over RTM if the local user is a host.
     * If the local user is not a host, it simply renders an image
     */
    export interface RemoteVideoMuteProps {
        uid: UidType;
        video: boolean;
        isHost: boolean;
        userContainerRef: any;
    }
    const RemoteVideoMute: (props: RemoteVideoMuteProps) => JSX.Element;
    export default RemoteVideoMute;
}
declare module "src/utils/useIsHandRaised" {
    import { UidType } from "agora-rn-uikit/src/index";
    const useIsHandRaised: () => (uid: UidType) => boolean;
    export default useIsHandRaised;
}
declare module "src/subComponents/LocalVideoMute" {
    import { ImageIconProps } from "src/atoms/ImageIcon";
    /**
     * A component to mute / unmute the local video
     */
    export interface LocalVideoMuteProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        render?: (onPress: () => void, isVideoEnabled: boolean) => JSX.Element;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        iconProps?: (isVideoEnabled: boolean, isPermissionDenied: boolean) => Partial<ImageIconProps>;
        showWarningIcon?: boolean;
        isMobileView?: boolean;
    }
    function LocalVideoMute(props: LocalVideoMuteProps): JSX.Element;
    export default LocalVideoMute;
}
declare module "src/utils/useButtonTemplate" {
    import React from 'react';
    export enum ButtonTemplateName {
        topBar = 0,
        bottomBar = 1,
        actionBar = 2
    }
    export interface ButtonTemplateInferface {
        buttonTemplateName?: ButtonTemplateName;
    }
    interface ButtonTemplateProviderProps {
        value: ButtonTemplateInferface;
        children: React.ReactNode;
    }
    const ButtonTemplateProvider: (props: ButtonTemplateProviderProps) => JSX.Element;
    const useButtonTemplate: {
        <U>(contextSelector: (data: ButtonTemplateInferface) => U): U;
        (): ButtonTemplateInferface;
    };
    export { ButtonTemplateProvider, useButtonTemplate };
}
declare module "src/subComponents/LocalAudioMute" {
    import { ImageIconProps } from "src/atoms/ImageIcon";
    /**
     * A component to mute / unmute the local audio
     */
    export interface LocalAudioMuteProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        iconProps?: (isAudioEnabled: boolean, isPermissionDenied: boolean) => Partial<ImageIconProps>;
        render?: (onPress: () => void, isAudioEnabled: boolean) => JSX.Element;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        showWarningIcon?: boolean;
        isMobileView?: boolean;
    }
    function LocalAudioMute(props: LocalAudioMuteProps): JSX.Element;
    export default LocalAudioMute;
}
declare module "src/components/participants/Participant" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface ParticipantInterface {
        isLocal: boolean;
        name: string;
        user: RenderInterface;
        showControls: boolean;
        isHostUser: boolean;
        isAudienceUser: boolean;
        isMobile?: boolean;
        handleClose: () => {};
        updateActionSheet: (screenName: 'chat' | 'participants' | 'settings') => {};
    }
    const Participant: (props: ParticipantInterface) => JSX.Element;
    export default Participant;
}
declare module "src/components/contexts/VideoMeetingDataContext" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface VideoMeetingDataInterface {
        hostUids: UidType[];
        attendeeUids: UidType[];
    }
    interface VideoMeetingDataProviderProps {
        children: React.ReactNode;
    }
    const VideoMeetingDataProvider: (props: VideoMeetingDataProviderProps) => JSX.Element;
    const useVideoMeetingData: {
        <U>(contextSelector: (data: VideoMeetingDataInterface) => U): U;
        (): VideoMeetingDataInterface;
    };
    export { useVideoMeetingData, VideoMeetingDataProvider };
}
declare module "src/components/participants/AllHostParticipants" {
    export default function AllHostParticipants(props: any): JSX.Element;
}
declare module "src/components/participants/AllAudienceParticipants" {
    const AllAudienceParticipants: (props: any) => JSX.Element;
    export default AllAudienceParticipants;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamRequestApprove" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteLiveStreamControlProps {
        uid: UidType;
        toastId: number;
    }
    const RemoteLiveStreamRequestApprove: (props: RemoteLiveStreamControlProps) => JSX.Element;
    export default RemoteLiveStreamRequestApprove;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamRequestReject" {
    import { UidType } from "agora-rn-uikit/src/index";
    interface RemoteLiveStreamControlProps {
        uid: UidType;
        toastId: number;
    }
    const RemoteLiveStreamRequestReject: (props: RemoteLiveStreamControlProps) => JSX.Element;
    export default RemoteLiveStreamRequestReject;
}
declare module "src/subComponents/livestream/CurrentLiveStreamRequestsView" {
    const CurrentLiveStreamRequestsView: (props: any) => JSX.Element;
    export default CurrentLiveStreamRequestsView;
}
declare module "src/components/HostControlView" {
    export interface MuteAllAudioButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const MuteAllAudioButton: (props: MuteAllAudioButtonProps) => JSX.Element;
    export interface MuteAllVideoButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const MuteAllVideoButton: (props: MuteAllVideoButtonProps) => JSX.Element;
    const HostControlView: () => JSX.Element;
    export default HostControlView;
}
declare module "src/components/CommonStyles" {
    export const SIDE_PANEL_MAX_WIDTH = "20%";
    export const SIDE_PANEL_MIN_WIDTH = 338;
    export const SIDE_PANEL_GAP = 8;
    export const CAPTION_CONTAINER_HEIGHT = 144;
    export const MOBILE_CAPTION_CONTAINER_HEIGHT = 115;
    const CommonStyles: {
        sidePanelContainerWeb: {
            flex: number;
            maxWidth: "20%";
            minWidth: number;
            borderRadius: 4;
            marginLeft: number;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowRadius: number;
            overflow: "hidden";
        };
        sidePanelContainerNative: {
            zIndex: number;
            width: "100%";
            height: "100%";
        };
        sidePanelContainerWebMinimzed: {
            position: "absolute";
            zIndex: number;
            width: "96%";
            height: "96%";
            right: "2%";
            left: "2%";
            top: "2%";
            bottom: "2%";
            borderRadius: 4;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowRadius: number;
            overflow: "hidden";
        };
    };
    export default CommonStyles;
}
declare module "react-native-toast-message/src/styles" {
    namespace _default {
        namespace base {
            const position: "absolute";
            const alignItems: "center";
            const justifyContent: "center";
        }
        namespace top {
            const top_1: number;
            export { top_1 as top };
        }
        namespace bottom {
            const bottom_1: number;
            export { bottom_1 as bottom };
        }
    }
    export default _default;
}
declare module "src/subComponents/SidePanelHeader" {
    import React from 'react';
    import { View } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface SidePanelHeaderProps {
        centerComponent?: React.ReactNode;
        leadingIconName?: keyof IconsInterface;
        leadingIconOnPress?: () => void;
        trailingIconName?: keyof IconsInterface;
        trailingIconOnPress?: () => void;
        trailingIconName2?: keyof IconsInterface;
        trailingIconOnPress2?: () => void;
        isChat?: boolean;
        children?: React.ReactNode;
    }
    const SidePanelHeader: React.ForwardRefExoticComponent<SidePanelHeaderProps & React.RefAttributes<View>>;
    export const SidePanelStyles: {
        sidePanelHeader: {
            height: "auto" | 60;
            flexDirection: "row";
            justifyContent: "space-between";
            alignItems: "center";
            paddingHorizontal: number;
            paddingVertical: number;
            borderBottomWidth: number;
            borderBottomColor: string;
        };
        chatPadding: {
            paddingHorizontal: number;
            paddingVertical: number;
        };
        heading: {
            fontFamily: string;
            fontSize: 16;
            lineHeight: number;
            fontWeight: "600";
            color: string;
            alignSelf: "center";
        };
        alignCenterNoPadding: {
            padding: number;
            display: "flex";
            alignSelf: "center";
            alignItems: "center";
            justifyContent: "center";
        };
        row: {
            flexDirection: "row";
            justifyContent: "center";
            alignItems: "center";
            flex: number;
        };
    };
    export default SidePanelHeader;
}
declare module "src/subComponents/caption/utils" {
    import { RenderObjects } from "agora-rn-uikit/src/Contexts/RtcContext";
    import { TranscriptItem } from "src/subComponents/caption/useCaption";
    export function formatTime(timestamp: number): string;
    export type LanguageType = 'en-US' | 'hi-IN' | 'zh-CN' | 'zh-HK' | 'fr-FR' | 'de-DE' | 'ko-KR' | 'en-IN' | 'ar' | 'ja-JP' | 'pt-PT' | 'es-ES' | 'it-IT' | 'id-ID' | '';
    interface LanguageData {
        label: string;
        value: LanguageType;
    }
    export const langData: LanguageData[];
    export function getLanguageLabel(languageCode: LanguageType[]): string | undefined;
    export function formatDateWithTimeZone(date: Date): string;
    export const formatTranscriptContent: (meetingTranscript: TranscriptItem[], meetingTitle: string, renderList: RenderObjects) => string[];
}
declare module "src/subComponents/caption/useCaption" {
    import React from 'react';
    import { LanguageType } from "src/subComponents/caption/utils";
    export type TranscriptItem = {
        uid: string;
        time: number;
        text: string;
    };
    type CaptionObj = {
        [key: string]: {
            text: string;
            lastUpdated: number;
        };
    };
    export const CaptionContext: React.Context<{
        isCaptionON: boolean;
        setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
        isSTTActive: boolean;
        setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
        language: LanguageType[];
        setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
        meetingTranscript: TranscriptItem[];
        setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
        isLangChangeInProgress: boolean;
        setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
        captionObj: CaptionObj;
        setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
        isSTTListenerAdded: boolean;
        setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
        activeSpeakerRef: React.MutableRefObject<string>;
        prevSpeakerRef: React.MutableRefObject<string>;
    }>;
    const CaptionProvider: ({ children }: {
        children: any;
    }) => JSX.Element;
    const useCaption: {
        <U>(contextSelector: (data: {
            isCaptionON: boolean;
            setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
            isSTTActive: boolean;
            setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
            language: LanguageType[];
            setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
            meetingTranscript: TranscriptItem[];
            setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
            isLangChangeInProgress: boolean;
            setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
            captionObj: CaptionObj;
            setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
            isSTTListenerAdded: boolean;
            setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
            activeSpeakerRef: React.MutableRefObject<string>;
            prevSpeakerRef: React.MutableRefObject<string>;
        }) => U): U;
        (): {
            isCaptionON: boolean;
            setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
            isSTTActive: boolean;
            setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
            language: LanguageType[];
            setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
            meetingTranscript: TranscriptItem[];
            setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
            isLangChangeInProgress: boolean;
            setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
            captionObj: CaptionObj;
            setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
            isSTTListenerAdded: boolean;
            setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
            activeSpeakerRef: React.MutableRefObject<string>;
            prevSpeakerRef: React.MutableRefObject<string>;
        };
    };
    export { CaptionProvider, useCaption };
}
declare module "src/atoms/Checkbox" {
    import React from 'react';
    import { TextStyle } from 'react-native';
    interface CheckboxProps {
        label: string;
        checked: boolean;
        onChange: (checked: boolean) => void;
        labelStye?: TextStyle;
        disabled?: boolean;
    }
    const Checkbox: React.FC<CheckboxProps>;
    export default Checkbox;
}
declare module "src/atoms/DropDownMulti" {
    import React, { FC } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    import { LanguageType } from "src/subComponents/caption/utils";
    interface Props {
        icon?: keyof IconsInterface;
        error: boolean;
        setError: React.Dispatch<React.SetStateAction<boolean>>;
        selectedValues: LanguageType[];
        setSelectedValues: React.Dispatch<React.SetStateAction<LanguageType[]>>;
        defaultSelectedValues?: LanguageType[];
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
    const DropdownMulti: FC<Props>;
    export default DropdownMulti;
}
declare module "src/subComponents/caption/LanguageSelectorPopup" {
    import React, { SetStateAction } from 'react';
    import { LanguageType } from "src/subComponents/caption/utils";
    interface LanguageSelectorPopup {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        onConfirm: (param: boolean, lang: LanguageType[]) => void;
        isFirstTimePopupOpen?: boolean;
    }
    const LanguageSelectorPopup: (props: LanguageSelectorPopup) => JSX.Element;
    export default LanguageSelectorPopup;
}
declare module "src/subComponents/caption/useSTTAPI" {
    import { LanguageType } from "src/subComponents/caption/utils";
    interface IuseSTTAPI {
        start: (lang: LanguageType[]) => Promise<{
            message: string;
        } | null>;
        stop: () => Promise<void>;
        restart: (lang: LanguageType[]) => Promise<void>;
        isAuthorizedSTTUser: () => boolean;
    }
    const useSTTAPI: () => IuseSTTAPI;
    export default useSTTAPI;
}
declare module "src/subComponents/caption/proto/ptoto" {
    export = $root;
    var $root: $protobuf.Namespace;
    import $protobuf = require("protobufjs/light");
}
declare module "src/subComponents/caption/useStreamMessageUtils" {
    type StreamMessageCallback = (args: [number, Uint8Array]) => void;
    const useStreamMessageUtils: () => {
        streamMessageCallback: StreamMessageCallback;
    };
    export default useStreamMessageUtils;
}
declare module "src/subComponents/caption/useTranscriptDownload" {
    const useTranscriptDownload: () => {
        downloadTranscript: () => Promise<string | null>;
    };
    export default useTranscriptDownload;
}
declare module "src/pages/video-call/SidePanelHeader" {
    export const SettingsHeader: (props: any) => JSX.Element;
    export const PeopleHeader: () => JSX.Element;
    export const ChatHeader: () => JSX.Element;
    export const TranscriptHeader: (props: any) => JSX.Element;
}
declare module "src/subComponents/caption/useCaptionWidth" {
    interface CaptionWidthReturnType {
        isCaptionNotFullWidth: boolean;
        transcriptHeight: string;
    }
    const useCaptionWidth: () => CaptionWidthReturnType;
    export default useCaptionWidth;
}
declare module "src/components/ParticipantsView" {
    const ParticipantView: (props: any) => JSX.Element;
    export default ParticipantView;
}
declare module "src/subComponents/ChatBubble" {
    import { ChatBubbleProps } from "src/components/ChatContext";
    const ChatBubble: (props: ChatBubbleProps) => JSX.Element;
    export default ChatBubble;
}
declare module "src/subComponents/ChatContainer" {
    import React from 'react';
    import { ChatBubbleProps } from "src/components/ChatContext";
    /**
     * Chat container is the component which renders all the chat messages
     * It retrieves all the messages from the appropriate stores (Message store an provate message store)
     * and maps it to a ChatBubble
     */
    const ChatContainer: (props?: {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
    }) => JSX.Element;
    export default ChatContainer;
}
declare module "src/subComponents/chat/ChatParticipants" {
    const ChatParticipants: (props: any) => JSX.Element;
    export default ChatParticipants;
}
declare module "src/components/Chat" {
    import React from 'react';
    import { ChatBubbleProps } from "src/components/ChatContext";
    import { ChatTextInputProps, ChatSendButtonProps } from "src/subComponents/ChatInput";
    export interface ChatProps {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
        showHeader?: boolean;
    }
    const Chat: (props?: ChatProps) => JSX.Element;
    export default Chat;
}
declare module "src/components/Settings" {
    export interface SettingsIconButtonProps {
        render?: (onPress: () => void, isPanelActive: boolean) => JSX.Element;
    }
    const Settings: (props: SettingsIconButtonProps) => JSX.Element;
    export const SettingsWithViewWrapper: (props: SettingsIconButtonProps) => JSX.Element;
    export default Settings;
}
declare module "src/subComponents/LayoutIconDropdown" {
    import React, { SetStateAction } from 'react';
    interface LayoutIconDropdownProps {
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        showDropdown: boolean;
        setShowDropdown: React.Dispatch<SetStateAction<boolean>>;
        caretPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        onHoverPlaceHolder?: 'vertical' | 'horizontal';
    }
    const LayoutIconDropdown: (props: LayoutIconDropdownProps) => JSX.Element;
    export default LayoutIconDropdown;
}
declare module "src/subComponents/LayoutIconButton" {
    interface LayoutIconButtonInterface {
        render?: (onPress: () => void) => JSX.Element;
        showLabel?: boolean;
    }
    const LayoutIconButton: (props: LayoutIconButtonInterface) => JSX.Element;
    export default LayoutIconButton;
}
declare module "src/atoms/ParticipantsCount" {
    const ParticipantsCount: () => JSX.Element;
    export default ParticipantsCount;
}
declare module "src/atoms/RecordingInfo" {
    const RecordingInfo: ({ recordingLabel }: {
        recordingLabel?: string;
    }) => JSX.Element;
    export default RecordingInfo;
}
declare module "src/components/Navbar" {
    import { TextStyle } from 'react-native';
    import { SettingsIconButtonProps } from "src/components/Settings";
    import { CopyJoinInfoProps } from "src/subComponents/CopyJoinInfo";
    export const ParticipantsCountView: ({ isMobileView, }: {
        isMobileView?: boolean;
    }) => JSX.Element;
    interface ParticipantsIconButtonProps {
        liveStreamingRequestAlertIconPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        isOnActionSheet?: boolean;
        render?: (onPress: () => void, isPanelActive: boolean) => JSX.Element;
    }
    export const ParticipantsIconButton: (props: ParticipantsIconButtonProps) => JSX.Element;
    interface ChatIconButtonProps {
        badgeContainerPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        badgeTextStyle?: TextStyle;
        render?: (onPress: () => void, isPanelActive: boolean, totalUnreadCount: number) => JSX.Element;
        isMobileView?: boolean;
        isOnActionSheet?: boolean;
    }
    export const ChatIconButton: (props: ChatIconButtonProps) => JSX.Element;
    interface LayoutIconButtonProps {
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        render?: (onPress: () => void) => JSX.Element;
    }
    const Navbar: () => JSX.Element;
    type NavBarComponentsArrayProps = [
        (props: CopyJoinInfoProps) => JSX.Element,
        () => JSX.Element,
        (props: ParticipantsIconButtonProps) => JSX.Element,
        (props: ChatIconButtonProps) => JSX.Element,
        (props: LayoutIconButtonProps) => JSX.Element,
        (props: SettingsIconButtonProps) => JSX.Element
    ];
    export const NavBarComponentsArray: NavBarComponentsArrayProps;
    export default Navbar;
}
declare module "src/atoms/Dropdown" {
    import { FC } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    interface Props {
        label: string;
        icon?: keyof IconsInterface;
        data: Array<{
            label: string;
            value: string;
        }>;
        onSelect: (item: {
            label: string;
            value: string;
        }) => void;
        enabled: boolean;
        selectedValue: string;
    }
    const Dropdown: FC<Props>;
    export default Dropdown;
}
declare module "src/components/precall/usePreCall" {
    import React from 'react';
    import { ApolloError } from '@apollo/client';
    export interface PreCallContextInterface {
        callActive: boolean;
        setCallActive: React.Dispatch<React.SetStateAction<boolean>>;
        error?: ApolloError;
        isCameraAvailable?: boolean;
        setCameraAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isMicAvailable?: boolean;
        setMicAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isSpeakerAvailable?: boolean;
        setSpeakerAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isPermissionRequested: boolean;
        setIsPermissionRequested: React.Dispatch<React.SetStateAction<boolean>>;
    }
    interface PreCallProviderProps {
        value: PreCallContextInterface;
        children: React.ReactNode;
    }
    const PreCallProvider: (props: PreCallProviderProps) => JSX.Element;
    const usePreCall: {
        <U>(contextSelector: (data: PreCallContextInterface) => U): U;
        (): PreCallContextInterface;
    };
    export { PreCallProvider, usePreCall };
}
declare module "src/utils/pendingStateUpdateHelper" {
    /**
     * Wrapper around 200ms buffered updates.
     * @param action - The asynchronous action that causes update
     * @param cb - Callback method called with true if 200ms exceeded in performing
       * provided action and called with false after action completed
     */
    const pendingStateUpdateHelper: (action: () => Promise<any>, cb: (exceeded200ms: boolean) => void) => Promise<void>;
    export default pendingStateUpdateHelper;
}
declare module "src/subComponents/SelectDevice" {
    interface SelectVideoDeviceProps {
        render?: (selectedCam: string, setSelectedCam: (cam: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectAudioDeviceProps {
        render?: (selectedMic: string, setSelectedMic: (mic: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectSpeakerDeviceProps {
        render?: (selectedSpeaker: string, setSelectedSpeaker: (speaker: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectDeviceProps {
        isIconDropdown?: boolean;
    }
    const SelectDevice: (props: SelectDeviceProps) => JSX.Element;
    export const SelectDeviceComponentsArray: [
        (props: SelectVideoDeviceProps) => JSX.Element,
        (props: SelectAudioDeviceProps) => JSX.Element,
        (props: SelectSpeakerDeviceProps) => JSX.Element
    ];
    export default SelectDevice;
}
declare module "src/subComponents/LanguageSelector" {
    const LanguageSelector: () => JSX.Element;
    export default LanguageSelector;
}
declare module "src/components/SettingsView" {
    const SettingsView: (props: any) => JSX.Element;
    export default SettingsView;
}
declare module "src/subComponents/Recording" {
    export interface RecordingButtonProps {
        showLabel?: boolean;
        render?: (onPress: () => void, isRecordingActive: boolean) => JSX.Element;
        isOnActionSheet?: boolean;
    }
    const Recording: (props: RecordingButtonProps) => JSX.Element;
    export default Recording;
}
declare module "src/subComponents/LocalSwitchCamera" {
    export interface LocalSwitchCameraProps {
        showLabel?: boolean;
        render?: (onPress: () => void, isVideoEnabled: boolean) => JSX.Element;
        disabled?: boolean;
    }
    function LocalSwitchCamera(props: LocalSwitchCameraProps): JSX.Element;
    export default LocalSwitchCamera;
}
declare module "src/subComponents/screenshare/ScreenshareButton" {
    /**
     * A component to start and stop screen sharing on web clients.
     * Screen sharing is not yet implemented on mobile platforms.
     * Electron has it's own screen sharing component
     */
    export interface ScreenshareButtonProps {
        render?: (onPress: () => void, isScreenshareActive: boolean) => JSX.Element;
        showLabel?: boolean;
        isOnActionSheet?: boolean;
    }
    const ScreenshareButton: (props: ScreenshareButtonProps) => JSX.Element;
    export default ScreenshareButton;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamApprovedRequestRecall" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteLiveStreamApprovedRequestRecallProps {
        uid: UidType;
    }
    const RemoteLiveStreamApprovedRequestRecall: (props: RemoteLiveStreamApprovedRequestRecallProps) => JSX.Element;
    export default RemoteLiveStreamApprovedRequestRecall;
}
declare module "src/subComponents/livestream/controls/LocalRaiseHand" {
    interface LocalRaiseHandProps {
        showLabel?: boolean;
    }
    const LocalRaiseHand: (props: LocalRaiseHandProps) => JSX.Element;
    export default LocalRaiseHand;
}
declare module "src/subComponents/livestream/ApprovedLiveStreamControlsView" {
    const ApprovedLiveStreamControlsView: (props: {
        uid: number;
        p_styles: any;
    }) => JSX.Element;
    export default ApprovedLiveStreamControlsView;
}
declare module "src/subComponents/livestream/index" {
    import RemoteLiveStreamApprovedRequestRecall, { RemoteLiveStreamApprovedRequestRecallProps } from "src/subComponents/livestream/controls/RemoteLiveStreamApprovedRequestRecall";
    import RemoteLiveStreamRequestApprove, { RemoteLiveStreamControlProps } from "src/subComponents/livestream/controls/RemoteLiveStreamRequestApprove";
    import RemoteLiveStreamRequestReject from "src/subComponents/livestream/controls/RemoteLiveStreamRequestReject";
    import LocalRaiseHand from "src/subComponents/livestream/controls/LocalRaiseHand";
    import CurrentLiveStreamRequestsView from "src/subComponents/livestream/CurrentLiveStreamRequestsView";
    import ApprovedLiveStreamControlsView from "src/subComponents/livestream/ApprovedLiveStreamControlsView";
    export type { RemoteLiveStreamApprovedRequestRecallProps, RemoteLiveStreamControlProps, };
    export { RemoteLiveStreamApprovedRequestRecall, RemoteLiveStreamRequestApprove, RemoteLiveStreamRequestReject, LocalRaiseHand, CurrentLiveStreamRequestsView, ApprovedLiveStreamControlsView, };
}
declare module "src/components/livestream/views/LiveStreamControls" {
    export interface LiveStreamControlsProps {
        showControls: boolean;
        isDesktop: boolean;
        showLabel?: boolean;
    }
    const LiveStreamControls: (props: LiveStreamControlsProps) => JSX.Element;
    export default LiveStreamControls;
}
declare module "src/subComponents/caption/DownloadTranscriptBtn" {
    import { TextStyle, ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    interface DownloadTranscriptBtn {
        textStyle?: TextStyle;
        containerStyle?: ViewStyle;
        iconName?: keyof IconsInterface;
        text?: string;
    }
    const DownloadTranscriptBtn: (props: DownloadTranscriptBtn) => JSX.Element;
    export default DownloadTranscriptBtn;
}
declare module "src/subComponents/EndcallPopup" {
    import React, { SetStateAction } from 'react';
    interface EndcallPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        endCall: () => void;
    }
    const EndcallPopup: (props: EndcallPopupProps) => JSX.Element;
    export default EndcallPopup;
}
declare module "src/subComponents/LocalEndCall" {
    export interface LocalEndcallProps {
        showLabel?: boolean;
        isOnActionSheet?: boolean;
        render?: (onPress: () => void) => JSX.Element;
    }
    const LocalEndcall: (props: LocalEndcallProps) => JSX.Element;
    export default LocalEndcall;
}
declare module "src/components/Controls" {
    import { LocalAudioMuteProps } from "src/subComponents/LocalAudioMute";
    import { LocalVideoMuteProps } from "src/subComponents/LocalVideoMute";
    import { RecordingButtonProps } from "src/subComponents/Recording";
    import { LocalSwitchCameraProps } from "src/subComponents/LocalSwitchCamera";
    import { ScreenshareButtonProps } from "src/subComponents/screenshare/ScreenshareButton";
    import { LiveStreamControlsProps } from "src/components/livestream/views/LiveStreamControls";
    import { LocalEndcallProps } from "src/subComponents/LocalEndCall";
    const Controls: () => JSX.Element;
    type ControlsComponentsArrayProps = [
        (props: LocalAudioMuteProps) => JSX.Element,
        (props: LocalVideoMuteProps) => JSX.Element,
        (props: LocalSwitchCameraProps) => JSX.Element,
        (props: ScreenshareButtonProps) => JSX.Element,
        (props: RecordingButtonProps) => JSX.Element,
        (props: LocalEndcallProps) => JSX.Element,
        (props: LiveStreamControlsProps) => JSX.Element
    ];
    export const ControlsComponentsArray: ControlsComponentsArrayProps;
    export default Controls;
}
declare module "src/pages/video-call/index" {
    import ParticipantsView from "src/components/ParticipantsView";
    import Chat from "src/components/Chat";
    import Navbar, { NavBarComponentsArray } from "src/components/Navbar";
    import SettingsView from "src/components/SettingsView";
    import Controls, { ControlsComponentsArray } from "src/components/Controls";
    import ChatBubble from "src/subComponents/ChatBubble";
    import { ChatTextInput, ChatSendButton } from "src/subComponents/ChatInput";
    export { ParticipantsView, Chat, Navbar, NavBarComponentsArray, SettingsView, Controls, ControlsComponentsArray, ChatBubble, ChatTextInput, ChatSendButton, };
}
declare module "src/pages/video-call/VideoComponent" {
    const VideoComponent: () => JSX.Element;
    export default VideoComponent;
}
declare module "src/subComponents/caption/CaptionIcon" {
    interface CaptionIconProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        isMobileView?: boolean;
        closeActionSheet?: () => void;
    }
    const CaptionIcon: (props: CaptionIconProps) => JSX.Element;
    export default CaptionIcon;
}
declare module "src/subComponents/caption/TranscriptIcon" {
    interface TranscriptIconProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        isMobileView?: boolean;
    }
    const TranscriptIcon: (props: TranscriptIconProps) => JSX.Element;
    export default TranscriptIcon;
}
declare module "src/atoms/Carousel" {
    import React from 'react';
    interface CarouselItem {
        id: string;
        component: React.ReactNode;
    }
    interface CarouselProps {
        data: CarouselItem[];
    }
    const Carousel: React.FC<CarouselProps>;
    export default Carousel;
}
declare module "src/pages/video-call/ActionSheetContent" {
    interface ShowMoreIconProps {
        isExpanded: boolean;
        showNotification: boolean;
        onPress: () => void;
    }
    interface ChatIconProps {
        showLabel?: boolean;
    }
    interface ParticipantsIconProps {
        showNotification: boolean;
    }
    interface SwitchCameraIconProps {
        disabled: boolean;
    }
    interface SettingsIconProps {
        onPress: () => void;
    }
    interface AudioIconProps {
        isMobileView: boolean;
        isOnActionSheet: boolean;
        showLabel: boolean;
        disabled: boolean;
    }
    interface CamIconProps {
        isMobileView: boolean;
        isOnActionSheet: boolean;
        showLabel: boolean;
        disabled: boolean;
    }
    interface EndCallIconProps {
        showLabel: boolean;
        isOnActionSheet: boolean;
    }
    interface LayoutIconProps {
        showLabel?: boolean;
    }
    type ActionSheetComponentsProps = [
        (props: AudioIconProps) => JSX.Element,
        (props: CamIconProps) => JSX.Element,
        (props: EndCallIconProps) => JSX.Element,
        (props: ShowMoreIconProps) => JSX.Element,
        (props: ChatIconProps) => JSX.Element,
        (props: ParticipantsIconProps) => JSX.Element,
        (props: any) => JSX.Element,
        (props: SwitchCameraIconProps) => JSX.Element,
        (props: LayoutIconProps) => JSX.Element,
        (props: SettingsIconProps) => JSX.Element,
        (props: any) => JSX.Element
    ];
    export const ActionSheetComponentsArray: ActionSheetComponentsProps;
    const ActionSheetContent: (props: any) => JSX.Element;
    export default ActionSheetContent;
}
declare module "react-native-toast-message/src/utils/prop-types" {
    export const stylePropType: PropTypes.Requireable<NonNullable<number | object>>;
    import PropTypes from "prop-types";
}
declare module "react-native-toast-message/src/colors/index" {
    export default colors;
    namespace colors {
        const white: string;
        const blazeOrange: string;
        const mantis: string;
        const alto: string;
        const dustyGray: string;
        const lightSkyBlue: string;
        const black: string;
    }
}
declare module "react-native-toast-message/src/components/base/styles" {
    export const HEIGHT: 105;
    namespace _default {
        namespace base {
            export const flexDirection: "row";
            export { HEIGHT as height };
            export const borderRadius: number;
            export const backgroundColor: string;
            export namespace shadowOffset {
                const width: number;
                const height: number;
            }
            export const shadowOpacity: number;
            export const shadowRadius: number;
            export const elevation: number;
        }
        namespace borderTop {
            const borderTopWidth: number;
            const borderTopColor: string;
        }
        namespace contentContainer {
            export const paddingLeft: number;
            export const flex: number;
            const flexDirection_1: "row";
            export { flexDirection_1 as flexDirection };
            export const justifyContent: "flex-start";
        }
        namespace text1 {
            export const fontSize: number;
            export const fontFamily: string;
            const width_1: "100%";
            export { width_1 as width };
            export const fontWeight: "600";
            export const marginRight: number;
        }
        namespace text2 {
            const fontSize_1: number;
            export { fontSize_1 as fontSize };
            const fontFamily_1: string;
            export { fontFamily_1 as fontFamily };
            const width_2: "100%";
            export { width_2 as width };
            const fontWeight_1: "400";
            export { fontWeight_1 as fontWeight };
        }
    }
    export default _default;
}
declare module "src/subComponents/Checkbox" {
    /**
     * A checkbox component for the web and electron
     */
    const Checkbox: (props: any) => JSX.Element;
    export default Checkbox;
}
declare module "react-native-toast-message/src/components/checkbox" {
    export default BaseToast;
    function BaseToast({ leadingIcon, trailingIcon, text1, text2, onPress, style, contentContainerStyle, text1Style, text2Style, subTextStyle, activeOpacity, text1NumberOfLines, text2NumberOfLines, primaryBtn, secondaryBtn, checkbox }: {
        leadingIcon: any;
        trailingIcon: any;
        text1: any;
        text2: any;
        onPress: any;
        style: any;
        contentContainerStyle: any;
        text1Style: any;
        text2Style: any;
        subTextStyle: any;
        activeOpacity: any;
        text1NumberOfLines: any;
        text2NumberOfLines: any;
        primaryBtn: any;
        secondaryBtn: any;
        checkbox: any;
    }): JSX.Element;
    namespace BaseToast {
        export { HEIGHT };
        export namespace propTypes {
            export const leadingIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const trailingIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const text1: PropTypes.Requireable<string>;
            export const text2: PropTypes.Requireable<any>;
            export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
            export { stylePropType as style };
            export { stylePropType as contentContainerStyle };
            export { stylePropType as text1Style };
            export { stylePropType as text2Style };
            export const activeOpacity: PropTypes.Requireable<number>;
            export const text1NumberOfLines: PropTypes.Requireable<number>;
            export const text2NumberOfLines: PropTypes.Requireable<number>;
        }
        export namespace defaultProps {
            const leadingIcon_1: any;
            export { leadingIcon_1 as leadingIcon };
            const trailingIcon_1: any;
            export { trailingIcon_1 as trailingIcon };
            const text1_1: any;
            export { text1_1 as text1 };
            const text2_1: any;
            export { text2_1 as text2 };
            const onPress_1: any;
            export { onPress_1 as onPress };
            export const style: any;
            export const contentContainerStyle: any;
            export const text1Style: any;
            export const text2Style: any;
            const activeOpacity_1: number;
            export { activeOpacity_1 as activeOpacity };
            const text1NumberOfLines_1: number;
            export { text1NumberOfLines_1 as text1NumberOfLines };
            const text2NumberOfLines_1: number;
            export { text2NumberOfLines_1 as text2NumberOfLines };
        }
    }
    import { HEIGHT } from "react-native-toast-message/src/components/base/styles";
    import PropTypes from "prop-types";
    import { stylePropType } from "react-native-toast-message/src/utils/prop-types";
}
declare module "src/subComponents/ToastConfig" {
    const ToastConfig: {
        success: ({ text1, text2, props, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
        }) => JSX.Element;
        error: ({ text1, text2, props, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
        }) => JSX.Element;
        info: ({ text1, text2, props, primaryBtn, secondaryBtn, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
            primaryBtn: any;
            secondaryBtn: any;
        }) => JSX.Element;
        checked: ({ text1, text2, props, primaryBtn, secondaryBtn, checkbox, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
            primaryBtn: any;
            secondaryBtn: any;
            checkbox: any;
        }) => JSX.Element;
    };
    export default ToastConfig;
}
declare module "src/components/ToastComponent" {
    const ToastComponent: () => JSX.Element;
    export default ToastComponent;
}
declare module "src/components/useToast" {
    import React from 'react';
    interface ToastContextInterface {
        isActionSheetVisible: boolean;
        setActionSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
    }
    const ToastContext: React.Context<ToastContextInterface>;
    const ToastProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const useToast: {
        <U>(contextSelector: (data: ToastContextInterface) => U): U;
        (): ToastContextInterface;
    };
    export { useToast, ToastContext, ToastProvider };
}
declare module "src/pages/video-call/ActionSheetHandle" {
    import { SidePanelType } from "src/subComponents/SidePanelEnum";
    const ActionSheetHandle: (props: {
        sidePanel: SidePanelType;
    }) => JSX.Element;
    export default ActionSheetHandle;
}
declare module "src/subComponents/caption/TranscriptText" {
    interface TranscriptTextProps {
        user: string;
        time: number;
        value: string;
        searchQuery?: string;
    }
    export const TranscriptText: ({ user, time, value, searchQuery, }: TranscriptTextProps) => JSX.Element;
}
declare module "src/subComponents/caption/Transcript" {
    interface TranscriptProps {
        showHeader?: boolean;
    }
    const Transcript: (props: TranscriptProps) => JSX.Element;
    export default Transcript;
    export const styles: {
        contentContainer: {
            paddingHorizontal: number;
        };
        container: {
            alignItems: "flex-start";
        };
        btnContainerStyle: {
            paddingVertical: number;
            paddingHorizontal: number;
            backgroundColor: string;
            borderRadius: number;
        };
        btnContainer: {};
        btnTxtStyle: {
            fontSize: 14;
            lineHeight: 14;
            fontWeight: "600";
            textTransform: "capitalize";
        };
        showLatestBtn: {
            backgroundColor: string;
            paddingVertical: number;
            paddingLeft: number;
            paddingRight: number;
            minWidth: "auto";
            borderRadius: number;
        };
        textStyleBtn: {
            color: string;
            fontFamily: string;
            fontSize: 14;
            lineHeight: number;
            fontWeight: "400";
            textTransform: "capitalize";
        };
        searchContainer: {
            flexDirection: "row";
            alignItems: "center";
            padding: number;
            marginHorizontal: number;
            marginVertical: number;
            borderRadius: number;
            height: number;
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        searchInput: {
            outlineStyle: string;
            flex: number;
            height: number;
            borderRadius: number;
            marginRight: number;
            color: string;
            fontFamily: string;
            fontWeight: "400";
            fontSize: 14;
            lineHeight: 18;
            width: "100%";
            borderWidth: number;
        };
        inputFocused: {
            borderColor: string;
        };
        searchButton: {
            backgroundColor: string;
            borderRadius: number;
            paddingVertical: number;
            paddingHorizontal: number;
        };
        searchButtonText: {
            color: string;
            fontSize: number;
        };
        emptyMsg: {
            color: string;
            alignSelf: "center";
            fontSize: number;
            fontStyle: "italic";
        };
        langChange: {
            marginLeft: number;
            color: string;
            fontFamily: string;
            fontWeight: "400";
            fontSize: number;
            lineHeight: number;
            fontStyle: "italic";
        };
        langChangeContainer: {
            marginBottom: number;
            flexDirection: "row";
        };
        footer: {
            borderWidth: number;
            paddingVertical: number;
            borderColor: string;
            borderRadius: number;
            marginTop: "auto";
        };
        content: {
            flexGrow: number;
        };
    };
}
declare module "src/pages/video-call/ActionSheet" {
    import './ActionSheetStyles.css';
    const ActionSheet: () => JSX.Element;
    export default ActionSheet;
}
declare module "src/subComponents/caption/CaptionText" {
    import React from 'react';
    interface CaptionTextProps {
        user: string;
        value: string;
        activeSpeakersCount: number;
        isActiveSpeaker?: boolean;
        activelinesAvailable?: number;
        setActiveLinesAvailable?: React.Dispatch<React.SetStateAction<number>>;
        inActiveLinesAvailable?: number;
        setInActiveLinesAvaialble?: React.Dispatch<React.SetStateAction<number>>;
    }
    const CaptionText: ({ user, value, activeSpeakersCount, isActiveSpeaker, activelinesAvailable, setActiveLinesAvailable, inActiveLinesAvailable, setInActiveLinesAvaialble, }: CaptionTextProps) => JSX.Element;
    export default CaptionText;
}
declare module "src/subComponents/caption/Caption" {
    import React from 'react';
    const _default_4: React.NamedExoticComponent<{}>;
    export default _default_4;
}
declare module "src/subComponents/caption/CaptionContainer" {
    const CaptionContainer: () => JSX.Element;
    export default CaptionContainer;
}
declare module "src/utils/useAppState" {
    const useAppState: () => "active" | "background" | "unknown" | "inactive" | "extension";
    export default useAppState;
}
declare module "src/pages/video-call/VideoCallMobileView" {
    const VideoCallMobileView: () => JSX.Element;
    export default VideoCallMobileView;
}
declare module "src/pages/video-call/VideoCallScreen" {
    const VideoCallScreen: () => JSX.Element;
    export default VideoCallScreen;
}
declare module "src/subComponents/RemoteEndCall" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteEndCallProps {
        uid: UidType;
        isHost: boolean;
    }
    const RemoteEndCall: (props: RemoteEndCallProps) => JSX.Element;
    export default RemoteEndCall;
}
declare module "src/subComponents/SidePanelButtons" {
    import { ChatSendButtonProps } from "src/subComponents/ChatInput";
    import { RemoteLiveStreamApprovedRequestRecallProps, RemoteLiveStreamControlProps } from "src/subComponents/livestream/index";
    import { RemoteAudioMuteProps } from "src/subComponents/RemoteAudioMute";
    import { RemoteVideoMuteProps } from "src/subComponents/RemoteVideoMute";
    import { RemoteEndCallProps } from "src/subComponents/RemoteEndCall";
    import { MuteAllAudioButtonProps, MuteAllVideoButtonProps } from "src/components/HostControlView";
    type SidePanelButtonsArrayProps = [
        (props: RemoteAudioMuteProps) => JSX.Element,
        (props: RemoteVideoMuteProps) => JSX.Element,
        (props: RemoteEndCallProps) => JSX.Element,
        (props: RemoteLiveStreamApprovedRequestRecallProps) => JSX.Element,
        (props: RemoteLiveStreamControlProps) => JSX.Element,
        (props: RemoteLiveStreamControlProps) => JSX.Element,
        (props: ChatSendButtonProps) => JSX.Element,
        (props: MuteAllAudioButtonProps) => JSX.Element,
        (props: MuteAllVideoButtonProps) => JSX.Element
    ];
    export const SidePanelButtonsArray: SidePanelButtonsArrayProps;
}
declare module "customization-api/sub-components" {
    export { default as HorizontalRule } from "src/atoms/HorizontalRule";
    export { default as PrimaryButton } from "src/atoms/PrimaryButton";
    export { default as SecondaryButton } from "src/atoms/SecondaryButton";
    export { default as TextInput } from "src/atoms/TextInput";
    export { Icons } from "agora-rn-uikit/src/index";
    export { ParticipantsView, Controls, ControlsComponentsArray, Navbar, NavBarComponentsArray, ChatBubble, ChatSendButton, ChatTextInput, Chat, SettingsView, } from "src/pages/video-call/index";
    export { default as GridLayout } from "src/components/GridVideo";
    export { default as PinnedLayout } from "src/components/PinnedVideo";
    export { default as VideoComponent } from "src/pages/video-call/VideoComponent";
    export { default as MaxVideoView } from "src/pages/video-call/VideoRenderer";
    export { default as RenderComponent } from "src/pages/video-call/RenderComponent";
    export { default as NameWithMicIcon } from "src/pages/video-call/NameWithMicIcon";
    export { default as NetworkQualityPill } from "src/subComponents/NetworkQualityPill";
    export { default as VideocallScreen } from "src/pages/video-call/VideoCallScreen";
    export { SidePanelButtonsArray } from "src/subComponents/SidePanelButtons";
    export { ImageIcon as UiKitImageIcon, MaxVideoView as UiKitMaxVideoView, BtnTemplate as UiKitBtnTemplate, ClientRole as UikitClientRole, ChannelProfile as UikitChannelProfile, } from "agora-rn-uikit/src/index";
    export type { BtnTemplateInterface as UikitBtnTemplateInterface } from "agora-rn-uikit/src/index";
}
declare module "src/utils/useIsHost" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a host and returns true/false
     * @returns function
     */
    function useIsHost(): (uid: UidType) => boolean;
    export default useIsHost;
}
declare module "src/utils/useIsAttendee" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is an attendee and returns true/false
     * @returns function
     */
    function useIsAttendee(): (uid: UidType) => boolean;
    export default useIsAttendee;
}
declare module "src/utils/useIsAudioEnabled" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks the audio state for a given uid and returns true/false
     * @returns function
     */
    function useIsAudioEnabled(): (uid: UidType) => boolean;
    export default useIsAudioEnabled;
}
declare module "src/utils/useIsVideoEnabled" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks the video state for a given uid and returns true/false
     * @returns function
     */
    function useIsVideoEnabled(): (uid: UidType) => boolean;
    export default useIsVideoEnabled;
}
declare module "customization-api/utils" {
    export { default as useIsHost } from "src/utils/useIsHost";
    export { default as useIsAttendee } from "src/utils/useIsAttendee";
    export { default as useIsPSTN } from "src/utils/useIsPSTN";
    export { default as useIsAudioEnabled } from "src/utils/useIsAudioEnabled";
    export { default as useIsVideoEnabled } from "src/utils/useIsVideoEnabled";
    export { useHistory, useParams } from "src/components/Router";
    export { isWeb, isIOS, isAndroid, isDesktop } from "src/utils/common";
    export { default as isMobileOrTablet } from "src/utils/isMobileOrTablet";
    export { useLocalUid } from "agora-rn-uikit/src/index";
}
declare module "customization-api/index" {
    import { customize } from "customization-api/customize";
    let $config: ConfigInterface;
    export { customize, $config };
    export * from "customization-api/action-library";
    export * from "customization-api/app-state";
    export * from "customization-api/customEvents";
    export * from "customization-api/sub-components";
    export * from "customization-api/typeDefinition";
    export * from "customization-api/utils";
}

/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
// import statements are not allowed in global configs
type VideoProfile =
  | '120p_1'
  | '120p_3'
  | '180p_1'
  | '180p_3'
  | '180p_4'
  | '240p_1'
  | '240p_3'
  | '240p_4'
  | '360p_1'
  | '360p_3'
  | '360p_4'
  | '360p_6'
  | '360p_7'
  | '360p_8'
  | '360p_9'
  | '360p_10'
  | '360p_11'
  | '480p_1'
  | '480p_2'
  | '480p_3'
  | '480p_4'
  | '480p_6'
  | '480p_8'
  | '480p_9'
  | '480p_10'
  | '720p_1'
  | '720p_2'
  | '720p_3'
  | '720p_5'
  | '720p_6';

interface ConfigInterface {
  PRODUCT_ID: string;
  APP_NAME: string;
  LOGO: string;
  APP_ID: string;
  FRONTEND_ENDPOINT: string;
  BACKEND_ENDPOINT: string;
  PSTN: boolean;
  PRECALL: boolean;
  CHAT: boolean;
  CLOUD_RECORDING: boolean;
  SCREEN_SHARING: boolean;
  CLIENT_ID: string;
  LANDING_SUB_HEADING: string;
  ENCRYPTION_ENABLED: boolean;
  PROFILE: VideoProfile;
  SENTRY_DSN: string;
  ENABLE_GOOGLE_OAUTH: boolean;
  ENABLE_SLACK_OAUTH: boolean;
  ENABLE_MICROSOFT_OAUTH: boolean;
  ENABLE_APPLE_OAUTH: boolean;
  GOOGLE_CLIENT_ID: string;
  MICROSOFT_CLIENT_ID: string;
  SLACK_CLIENT_ID: string;
  APPLE_CLIENT_ID: string;
  EVENT_MODE: boolean;
  RAISE_HAND: boolean;
  GEO_FENCING: boolean;
  LOG_ENABLED: boolean;
  AUDIO_ROOM: boolean;
  PRIMARY_ACTION_BRAND_COLOR: string;
  PRIMARY_ACTION_TEXT_COLOR: string;
  SECONDARY_ACTION_COLOR: string;
  FONT_COLOR: string;
  BG: string;
  BACKGROUND_COLOR: string;
  VIDEO_AUDIO_TILE_COLOR: string;
  VIDEO_AUDIO_TILE_OVERLAY_COLOR: string;
  VIDEO_AUDIO_TILE_TEXT_COLOR: string;
  VIDEO_AUDIO_TILE_AVATAR_COLOR: string;
  SEMANTIC_ERROR: string;
  SEMANTIC_SUCCESS: string;
  SEMANTIC_WARNING: string;
  SEMANTIC_NEUTRAL: string;
  INPUT_FIELD_BACKGROUND_COLOR: string;
  INPUT_FIELD_BORDER_COLOR: string;
  CARD_LAYER_1_COLOR: string;
  CARD_LAYER_2_COLOR: string;
  CARD_LAYER_3_COLOR: string;
  CARD_LAYER_4_COLOR: string;
  CARD_LAYER_5_COLOR: string;
  HARD_CODED_BLACK_COLOR: string;
  ICON_TEXT: boolean;
  ICON_BG_COLOR: string;
  TOOLBAR_COLOR: string;
  ACTIVE_SPEAKER: boolean;
  // TOAST_NOTIFICATIONS: boolean;
  ENABLE_TOKEN_AUTH: boolean;
  ENABLE_IDP_AUTH: boolean;
  PROJECT_ID: string;
  ENABLE_STT: boolean;
}
 

/// <reference types="react" />
declare module "bridge/rtm/web/index" {
    import { ChannelAttributeOptions, RtmAttribute, RtmChannelAttribute, Subscription } from 'agora-react-native-rtm/lib/typescript/src';
    import { RtmClientEvents } from 'agora-react-native-rtm/lib/typescript/src/RtmEngine';
    interface RtmAttributePlaceholder {
    }
    export { RtmAttributePlaceholder as RtmAttribute };
    export default class RtmEngine {
        appId: string;
        client: any;
        channelMap: Map<string, any>;
        remoteInvititations: Map<string, any>;
        localInvititations: Map<string, any>;
        channelEventsMap: Map<string, any>;
        clientEventsMap: Map<string, any>;
        localInvitationEventsMap: Map<string, any>;
        remoteInvitationEventsMap: Map<string, any>;
        constructor();
        on(event: any, listener: any): void;
        createClient(APP_ID: string): void;
        login(loginParam: {
            uid: string;
            token?: string;
        }): Promise<any>;
        logout(): Promise<any>;
        joinChannel(channelId: string): Promise<any>;
        leaveChannel(channelId: string): Promise<any>;
        sendMessageByChannelId(channel: string, message: string): Promise<any>;
        destroyClient(): void;
        getChannelMembersBychannelId(channel: string): Promise<{
            members: any[];
        }>;
        queryPeersOnlineStatus(uid: Array<String>): Promise<{
            items: any[];
        }>;
        renewToken(token: string): Promise<any>;
        getUserAttributesByUid(uid: string): Promise<{}>;
        removeAllLocalUserAttributes(): Promise<any>;
        removeLocalUserAttributesByKeys(keys: string[]): Promise<any>;
        replaceLocalUserAttributes(attributes: string[]): Promise<any>;
        setLocalUserAttributes(attributes: string[]): Promise<any>;
        addOrUpdateLocalUserAttributes(attributes: RtmAttribute[]): Promise<any>;
        addOrUpdateChannelAttributes(channelId: string, attributes: RtmChannelAttribute[], option: ChannelAttributeOptions): Promise<void>;
        sendLocalInvitation(invitationProps: any): Promise<any>;
        sendMessageToPeer(AgoraPeerMessage: {
            peerId: string;
            offline: boolean;
            text: string;
        }): Promise<any>;
        acceptRemoteInvitation(remoteInvitationProps: {
            uid: string;
            response?: string;
            channelId: string;
        }): Promise<any>;
        refuseRemoteInvitation(remoteInvitationProps: {
            uid: string;
            response?: string;
            channelId: string;
        }): Promise<any>;
        cancelLocalInvitation(LocalInvitationProps: {
            uid: string;
            content?: string;
            channelId?: string;
        }): Promise<any>;
        getSdkVersion(callback: (version: string) => void): void;
        addListener<EventType extends keyof RtmClientEvents>(event: EventType, listener: RtmClientEvents[EventType]): Subscription;
    }
}
declare module "bridge/rtc/quality" {
    const quality: {
        '120p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '120p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_7': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_11': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_5': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
    };
    export default quality;
    export type VideoProfile = keyof typeof quality;
}
declare module "bridge/rtc/webNg/Types" {
    export enum VideoRenderMode {
        Hidden = 1,
        Fit = 2,
        Adaptive = 3
    }
    export enum VideoMirrorMode {
        /**
         * 0: (Default) The SDK determines the mirror mode.
         */
        Auto = 0,
        /**
         * 1: Enables mirror mode.
         */
        Enabled = 1,
        /**
         * 2: Disables mirror mode.
         */
        Disabled = 2
    }
    /**
     *
     * The latency level of an audience member in a live interactive streaming. Takes effect only when the user role is `"audience"`.
     * - `1`: Low latency.
     * - `2`: (Default) Ultra low latency.
     */
    export const enum AudienceLatencyLevelType {
        /**
         * Low latency.
         */
        AUDIENCE_LEVEL_LOW_LATENCY = 1,
        /**
         * Ultra-low latency.
         */
        AUDIENCE_LEVEL_ULTRA_LOW_LATENCY = 2,
        /**
         * @ignore
         */
        AUDIENCE_LEVEL_SYNC_LATENCY = 3
    }
    export interface ClientRoleOptions {
        /**
         * The latency level of an audience member in a live interactive streaming.
         *
         * > Note:
         * > - Takes effect only when the user role is `"audience"`.
         * > - Levels affect prices.
         */
        level: AudienceLatencyLevelType;
    }
    export enum role {
        host = "host",
        audience = "audience"
    }
    export enum mode {
        /**
         * 0: (Default) The Communication profile.
         * Use this profile in one-on-one calls or group calls, where all users can talk freely.
         */
        live = "live",
        /**
         * 1: The Live-Broadcast profile.
         * Users in a live-broadcast channel have a role as either host or audience. A host can both send and receive streams; an audience can only receive streams.
         */
        rtc = "rtc"
    }
}
declare module "src/utils/isMobileOrTablet" {
    global {
        interface Window {
            opera?: any;
        }
    }
    /**
     * Checks whether the application is running as a web application on a mobile or tablet device and returns true/false.
     * @returns function
     */
    const isMobileOrTablet: () => boolean;
    export default isMobileOrTablet;
}
declare module "bridge/rtc/webNg/RtcEngine" {
    import AgoraRTC, { IAgoraRTCClient, ILocalAudioTrack, ILocalVideoTrack, IRemoteAudioTrack, IRemoteVideoTrack, UID, ScreenVideoTrackInitConfig, ICameraVideoTrack, ClientRoleOptions } from 'agora-rtc-sdk-ng';
    import type { RtcEngineEvents, Subscription } from 'react-native-agora/lib/typescript/src/common/RtcEvents';
    import { VideoProfile } from "bridge/rtc/quality";
    import { ChannelProfile, ClientRole } from "agora-rn-uikit/src/index";
    interface MediaDeviceInfo {
        readonly deviceId: string;
        readonly label: string;
        readonly kind: string;
    }
    type callbackType = (uid?: UID) => void;
    global {
        interface Window {
            engine: RtcEngine;
            AgoraRTC: typeof AgoraRTC;
        }
    }
    export enum AREAS {
        /**
         * China.
         */
        CHINA = "CHINA",
        /**
         * Asia, excluding Mainland China.
         */
        ASIA = "ASIA",
        /**
         * North America.
         */
        NORTH_AMERICA = "NORTH_AMERICA",
        /**
         * Europe.
         */
        EUROPE = "EUROPE",
        /**
         * Japan.
         */
        JAPAN = "JAPAN",
        /**
         * India.
         */
        INDIA = "INDIA",
        /**
         * @ignore
         */
        OCEANIA = "OCEANIA",
        /**
         * @ignore
         */
        SOUTH_AMERICA = "SOUTH_AMERICA",
        /**
         * @ignore
         */
        AFRICA = "AFRICA",
        /**
         * @ignore
         */
        OVERSEA = "OVERSEA",
        /**
         * Global.
         */
        GLOBAL = "GLOBAL"
    }
    export enum RnEncryptionEnum {
        /**
         * @deprecated
         * 0: This mode is deprecated.
         */
        None = 0,
        /**
         * 1: (Default) 128-bit AES encryption, XTS mode.
         */
        AES128XTS = 1,
        /**
         * 2: 128-bit AES encryption, ECB mode.
         */
        AES128ECB = 2,
        /**
         * 3: 256-bit AES encryption, XTS mode.
         */
        AES256XTS = 3,
        /**
         * 4: 128-bit SM4 encryption, ECB mode.
         *
         * @since v3.1.2.
         */
        SM4128ECB = 4,
        /**
         * 5: 128-bit AES encryption, GCM mode.
         *
         * @since v3.3.1
         */
        AES128GCM = 5,
        /**
         * 6: 256-bit AES encryption, GCM mode.
         *
         * @since v3.3.1
         */
        AES256GCM = 6
    }
    export enum VideoStreamType {
        'HIGH' = 0,
        'LOW' = 1
    }
    interface LocalStream {
        audio?: ILocalAudioTrack;
        video?: ICameraVideoTrack;
    }
    interface ScreenStream {
        audio?: ILocalAudioTrack;
        video?: ILocalVideoTrack;
    }
    interface RemoteStream {
        audio?: IRemoteAudioTrack;
        video?: IRemoteVideoTrack;
    }
    export default class RtcEngine {
        private activeSpeakerUid;
        appId: string;
        client: any | IAgoraRTCClient;
        screenClient: any | IAgoraRTCClient;
        eventsMap: Map<string, callbackType>;
        localStream: LocalStream;
        screenStream: ScreenStream;
        remoteStreams: Map<UID, RemoteStream>;
        private inScreenshare;
        private videoProfile;
        private isPublished;
        private isAudioEnabled;
        private isVideoEnabled;
        private isAudioPublished;
        private isVideoPublished;
        private isJoined;
        private videoDeviceId;
        private audioDeviceId;
        private muteLocalVideoMutex;
        private muteLocalAudioMutex;
        private speakerDeviceId;
        private usersVolumeLevel;
        constructor(appId: string);
        static create(appId: string): Promise<RtcEngine>;
        getRemoteVideoStats(id: string): any;
        setVideoProfile(profile: VideoProfile): Promise<void>;
        enableAudio(): Promise<void>;
        enableVideo(preferredCameraId?: string, preferredMicrophoneId?: string): Promise<void>;
        enableAudioVolumeIndication(interval: any, smooth: any, isLocal: any): Promise<void>;
        publish(): Promise<void>;
        joinChannel(token: string, channelName: string, optionalInfo: string, optionalUid: number): Promise<void>;
        getUsersVolumeLevel(): any[];
        leaveChannel(): Promise<void>;
        addListener<EventType extends keyof RtcEngineEvents>(event: EventType, listener: RtcEngineEvents[EventType]): Subscription;
        muteLocalAudioStream(muted: boolean): Promise<void>;
        muteLocalVideoStream(muted: boolean): Promise<void>;
        muteRemoteAudioStream(uid: number, muted: boolean): Promise<void>;
        muteRemoteVideoStream(uid: number, muted: boolean): Promise<void>;
        getDevices(callback: (devices: Array<MediaDeviceInfo>) => void): Promise<Array<MediaDeviceInfo>>;
        setChannelProfile(profile: ChannelProfile): Promise<void>;
        setClientRole(clientRole: ClientRole, options?: ClientRoleOptions): Promise<void>;
        changeCamera(cameraId: any, callback: any, error: any): Promise<void>;
        switchCamera(): Promise<void>;
        changeMic(micId: any, callback: any, error: any): Promise<void>;
        changeSpeaker(speakerId: any, callback: any, error: any): Promise<void>;
        enableDualStreamMode(enable: boolean): Promise<any>;
        setRemoteSubscribeFallbackOption(option: 0 | 1 | 2): Promise<void>;
        getEncryptionMode: (enabled: boolean, encryptmode: RnEncryptionEnum) => "none" | "aes-128-xts" | "aes-256-xts" | "aes-128-ecb";
        enableEncryption(enabled: boolean, config: {
            encryptionMode: RnEncryptionEnum;
            encryptionKey: string;
        }): Promise<void>;
        /**
         * @deprecated
         * @param encryptionMode
         */
        setEncryptionSecret(secret: string): void;
        /**
         * @deprecated
         * @param encryptionMode
         */
        setEncryptionMode(encryptionMode: 'aes-128-xts' | 'aes-256-xts' | 'aes-128-ecb'): void;
        destroy(): Promise<void>;
        setRemoteVideoStreamType(uid: number, streamType: VideoStreamType): Promise<void>;
        isSingleTrack(x: ILocalVideoTrack | [ILocalVideoTrack, ILocalAudioTrack]): x is ILocalVideoTrack;
        startScreenshare(token: string, channelName: string, optionalInfo: string, optionalUid: number, appId: string, engine: typeof AgoraRTC, encryption: {
            screenKey: string;
            mode: RnEncryptionEnum;
        }, config?: ScreenVideoTrackInitConfig, audio?: 'enable' | 'disable' | 'auto'): Promise<void>;
    }
}
declare module "bridge/rtc/webNg/SurfaceView" {
    import { StyleProp, ViewProps, ViewStyle } from 'react-native';
    export interface RtcSurfaceViewProps extends ViewProps {
        zOrderMediaOverlay?: boolean;
        zOrderOnTop?: boolean;
        renderMode?: any;
        channelId?: string;
        mirrorMode?: any;
    }
    export interface RtcUidProps {
        uid: number;
    }
    export interface StyleProps {
        style?: StyleProp<ViewStyle>;
    }
    interface SurfaceViewInterface extends RtcSurfaceViewProps, RtcUidProps, StyleProps {
    }
    const SurfaceView: (props: SurfaceViewInterface) => JSX.Element;
    export default SurfaceView;
}
declare module "bridge/rtc/webNg/LocalView" {
    import { RtcSurfaceViewProps, StyleProps } from "bridge/rtc/webNg/SurfaceView";
    interface LocalViewInterface extends RtcSurfaceViewProps, StyleProps {
    }
    export default function LocalView(props: LocalViewInterface): JSX.Element;
}
declare module "bridge/rtc/webNg/index" {
    import RtcEngine from "bridge/rtc/webNg/RtcEngine";
    import LocalView from "bridge/rtc/webNg/LocalView";
    import * as Types from "bridge/rtc/webNg/Types";
    export const RtcLocalView: {
        SurfaceView: typeof LocalView;
        TextureView: typeof LocalView;
    };
    export const RtcRemoteView: {
        SurfaceView: any;
        TextureView: any;
    };
    export const VideoRenderMode: {
        [x: number]: string;
        Hidden: Types.VideoRenderMode.Hidden;
        Fit: Types.VideoRenderMode.Fit;
        Adaptive: Types.VideoRenderMode.Adaptive;
    };
    export const VideoMirrorMode: {
        [x: number]: string;
        Hidden: Types.VideoRenderMode.Hidden;
        Fit: Types.VideoRenderMode.Fit;
        Adaptive: Types.VideoRenderMode.Adaptive;
    };
    export { RnEncryptionEnum as EncryptionMode } from "bridge/rtc/webNg/RtcEngine";
    export { AREAS as AreaCode } from "bridge/rtc/webNg/RtcEngine";
    export default RtcEngine;
}
declare module "agora-rn-uikit/src/Utils/quality" {
    const quality: {
        '120p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '120p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '180p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '240p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_7': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '360p_11': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_4': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_8': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_9': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '480p_10': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_1': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_2': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_3': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_5': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
        '720p_6': {
            dimensions: {
                width: number;
                height: number;
            };
            frameRate: number;
            bitRate: number;
        };
    };
    export default quality;
    export type VideoProfile = keyof typeof quality;
}
declare module "agora-rn-uikit/src/Contexts/PropsContext" {
    import React from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
    import { RtcEngineEvents } from 'react-native-agora/lib/typescript/src/common/RtcEvents';
    import { EncryptionMode } from "bridge/rtc/webNg/index";
    import { VideoProfile } from "agora-rn-uikit/src/Utils/quality";
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export enum ClientRole {
        Broadcaster = 1,
        Audience = 2
    }
    export enum ChannelProfile {
        /** 0: (Default) The Communication profile.
         *  Use this profile in one-on-one calls or group calls, where all users can talk freely. */
        Communication = 0,
        /**  1: The Live-Broadcast profile.
         *   Users in a live-broadcast channel have a role as either host or audience. A host can both send and receive streams; an audience can only receive streams. */
        LiveBroadcasting = 1
    }
    export enum ToggleState {
        disabled = 0,
        enabled = 1,
        disabling = 2,
        enabling = 3
    }
    export enum PermissionState {
        NOT_REQUESTED = 0,
        REQUESTED = 1,
        GRANTED_FOR_CAM_AND_MIC = 2,
        GRANTED_FOR_CAM_ONLY = 3,
        GRANTED_FOR_MIC_ONLY = 4,
        REJECTED = 5,
        CANCELLED = 6
    }
    export const toggleHelper: (state: ToggleState) => ToggleState.disabled | ToggleState.enabled;
    export interface DefaultRenderInterface {
        uid: UidType;
        audio: ToggleState;
        video: ToggleState;
        streamType: 'high' | 'low';
        type: 'rtc';
        permissionStatus?: PermissionState;
        parentUid?: UidType;
    }
    export interface CustomRenderInterface<T> {
        type: T extends DefaultRenderInterface['type'] ? never : T;
    }
    interface ExtenedRenderInterface extends CustomRenderInterface<string> {
        [key: string]: any;
    }
    export type RenderInterface = DefaultRenderInterface | ExtenedRenderInterface;
    interface remoteBtnStylesInterface {
        muteRemoteAudio?: StyleProp<ViewStyle>;
        muteRemoteVideo?: StyleProp<ViewStyle>;
        remoteSwap?: StyleProp<ViewStyle>;
        minCloseBtnStyles?: StyleProp<ViewStyle>;
        liveStreamHostControlBtns?: StyleProp<ViewStyle>;
    }
    interface localBtnStylesInterface {
        muteLocalAudio?: StyleProp<ViewStyle>;
        muteLocalVideo?: StyleProp<ViewStyle>;
        switchCamera?: StyleProp<ViewStyle>;
        endCall?: StyleProp<ViewStyle>;
        fullScreen?: StyleProp<ViewStyle>;
    }
    interface StylePropInterface {
        theme?: string;
        BtnTemplateStyles?: StyleProp<ViewStyle>;
        maxViewStyles?: StyleProp<ViewStyle>;
        minViewStyles?: StyleProp<ViewStyle>;
        remoteBtnStyles?: remoteBtnStylesInterface;
        remoteBtnContainer?: StyleProp<ViewStyle>;
        localBtnStyles?: localBtnStylesInterface;
        localBtnContainer?: StyleProp<ViewStyle>;
    }
    export enum DualStreamMode {
        HIGH = 0,
        LOW = 1,
        DYNAMIC = 2
    }
    export interface RtcPropsInterface {
        appId: string;
        channel: string;
        uid?: UidType;
        token?: string | null;
        dual?: boolean | null;
        profile?: VideoProfile;
        initialDualStreamMode?: DualStreamMode;
        role?: ClientRole;
        callActive?: boolean;
        encryption?: {
            key: string;
            mode: EncryptionMode.AES128XTS | EncryptionMode.AES256XTS | EncryptionMode.AES128ECB;
        };
        geoFencing?: boolean;
        audioRoom?: boolean;
        activeSpeaker?: boolean;
    }
    export interface CallbacksInterface {
        EndCall(): void;
        FullScreen(): void;
        SwitchCamera(): void;
        UpdateDualStreamMode(mode: DualStreamMode): void;
        UserJoined: RtcEngineEvents['UserJoined'];
        UserOffline: RtcEngineEvents['UserOffline'];
        SwapVideo(uid: UidType): void;
        DequeVideo(uid: UidType): void;
        UserMuteRemoteAudio(uid: UidType, muted: RenderInterface['audio']): void;
        UserMuteRemoteVideo(uid: UidType, muted: RenderInterface['video']): void;
        LocalMuteAudio(muted: ToggleState): void;
        LocalMuteVideo(muted: ToggleState): void;
        LocalPermissionState(permissionState: RenderInterface['permissionStatus']): void;
        RemoteAudioStateChanged: RtcEngineEvents['RemoteAudioStateChanged'];
        RemoteVideoStateChanged: RtcEngineEvents['RemoteVideoStateChanged'];
        ActiveSpeakerDetected: RtcEngineEvents['ActiveSpeaker'];
        JoinChannelSuccess: RtcEngineEvents['JoinChannelSuccess'];
        UpdateRenderList(uid: UidType, user: Partial<RenderInterface>): void;
        AddCustomContent(uid: UidType, data: any): void;
        UserPin(Uid: UidType): void;
    }
    export type CustomCallbacksInterface = CallbacksInterface;
    export interface PropsInterface {
        rtcProps: RtcPropsInterface;
        styleProps?: Partial<StylePropInterface>;
        callbacks?: Partial<CallbacksInterface>;
        mode?: ChannelProfile;
    }
    const PropsContext: React.Context<PropsInterface>;
    export const PropsProvider: React.Provider<PropsInterface>;
    export const PropsConsumer: React.Consumer<PropsInterface>;
    export default PropsContext;
}
declare module "agora-rn-uikit/src/Contexts/RtcContext" {
    import React from 'react';
    import { CallbacksInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import RtcEngine from "bridge/rtc/webNg/index";
    import type { DualStreamMode, RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    export type UidType = number;
    export interface RenderObjects {
        [key: number]: RenderInterface;
    }
    export interface RenderStateInterface {
        renderList: RenderObjects;
        activeUids: Array<UidType>;
        activeSpeaker?: UidType;
        pinnedUid?: UidType;
        lastJoinedUid?: UidType;
    }
    export interface ActionInterface<T extends keyof CallbacksInterface> {
        type: T;
        value: Parameters<CallbacksInterface[T]>;
    }
    export type DispatchType = <T extends keyof CallbacksInterface, V extends Parameters<CallbacksInterface[T]>>(action: {
        type: T;
        value: V;
    }) => void;
    export type ActionType<T extends keyof CallbacksInterface> = ActionInterface<T>;
    export interface RtcContextInterface {
        RtcEngine: RtcEngine;
        dispatch: DispatchType;
        setDualStreamMode: React.Dispatch<React.SetStateAction<DualStreamMode>>;
    }
    const RtcContext: React.Context<RtcContextInterface>;
    export const RtcProvider: React.Provider<RtcContextInterface>;
    export const RtcConsumer: React.Consumer<RtcContextInterface>;
    export default RtcContext;
}
declare module "agora-rn-uikit/src/Contexts/RenderContext" {
    import React from 'react';
    import { RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    const RenderContext: React.Context<RenderStateInterface>;
    export const RenderProvider: React.Provider<RenderStateInterface>;
    export const RenderConsumer: React.Consumer<RenderStateInterface>;
    export default RenderContext;
}
declare module "agora-rn-uikit/src/Utils/actionTypeGuard" {
    import { CallbacksInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ActionType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export function actionTypeGuard<T extends keyof CallbacksInterface>(_act: ActionType<keyof CallbacksInterface>, _type: T): _act is ActionType<T>;
}
declare module "agora-rn-uikit/src/Reducer/UpdateDualStreamMode" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UpdateDualStreamMode(state: RenderStateInterface, action: ActionType<'UpdateDualStreamMode'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserJoined" {
    import { DualStreamMode } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserJoined(state: RenderStateInterface, action: ActionType<'UserJoined'>, dualStreamMode: DualStreamMode, localUid: UidType): {};
}
declare module "agora-rn-uikit/src/Reducer/UserOffline" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserOffline(state: RenderStateInterface, action: ActionType<'UserOffline'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserMuteRemoteAudio" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserMuteRemoteAudio(state: RenderStateInterface, action: ActionType<'UserMuteRemoteAudio'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/UserMuteRemoteVideo" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserMuteRemoteVideo(state: RenderStateInterface, action: ActionType<'UserMuteRemoteVideo'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalMuteAudio" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalMuteAudio(state: RenderStateInterface, action: ActionType<'LocalMuteAudio'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalMuteVideo" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalMuteVideo(state: RenderStateInterface, action: ActionType<'LocalMuteVideo'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/LocalPermissionState" {
    import { ActionType, RenderStateInterface, UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function LocalPermissionState(state: RenderStateInterface, action: ActionType<'LocalPermissionState'>, localUid: UidType): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/RemoteAudioStateChanged" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function RemoteAudioStateChanged(state: RenderStateInterface, action: ActionType<'RemoteAudioStateChanged'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/RemoteVideoStateChanged" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function RemoteVideoStateChanged(state: RenderStateInterface, action: ActionType<'RemoteVideoStateChanged'>): RenderStateInterface;
}
declare module "agora-rn-uikit/src/Reducer/ActiveSpeakerDetected" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function ActiveSpeakerDetected(state: RenderStateInterface, action: ActionType<'ActiveSpeakerDetected'>): {
        activeSpeaker: unknown;
        renderList: import("agora-rn-uikit/src/Contexts/RtcContext").RenderObjects;
        activeUids: number[];
        pinnedUid?: number;
        lastJoinedUid?: number;
    };
}
declare module "agora-rn-uikit/src/Reducer/UserPin" {
    import { ActionType, RenderStateInterface } from "agora-rn-uikit/src/Contexts/RtcContext";
    export default function UserPin(state: RenderStateInterface, action: ActionType<'UserPin'>): {
        pinnedUid: string | number;
        renderList: import("agora-rn-uikit/src/Contexts/RtcContext").RenderObjects;
        activeUids: number[];
        activeSpeaker?: number;
        lastJoinedUid?: number;
    };
}
declare module "agora-rn-uikit/src/Reducer/index" {
    export { default as UpdateDualStreamMode } from "agora-rn-uikit/src/Reducer/UpdateDualStreamMode";
    export { default as UserJoined } from "agora-rn-uikit/src/Reducer/UserJoined";
    export { default as UserOffline } from "agora-rn-uikit/src/Reducer/UserOffline";
    export { default as UserMuteRemoteAudio } from "agora-rn-uikit/src/Reducer/UserMuteRemoteAudio";
    export { default as UserMuteRemoteVideo } from "agora-rn-uikit/src/Reducer/UserMuteRemoteVideo";
    export { default as LocalMuteAudio } from "agora-rn-uikit/src/Reducer/LocalMuteAudio";
    export { default as LocalMuteVideo } from "agora-rn-uikit/src/Reducer/LocalMuteVideo";
    export { default as LocalPermissionState } from "agora-rn-uikit/src/Reducer/LocalPermissionState";
    export { default as RemoteAudioStateChanged } from "agora-rn-uikit/src/Reducer/RemoteAudioStateChanged";
    export { default as RemoteVideoStateChanged } from "agora-rn-uikit/src/Reducer/RemoteVideoStateChanged";
    export { default as ActiveSpeakerDetected } from "agora-rn-uikit/src/Reducer/ActiveSpeakerDetected";
    export { default as UserPin } from "agora-rn-uikit/src/Reducer/UserPin";
}
declare module "agora-rn-uikit/src/Utils/permission" {
    /**
     * @name requestCameraAndAudioPermission
     * @description Function to request permission for Audio and Camera
     */
    export default function requestCameraAndAudioPermission(audioRoom: boolean): Promise<void>;
}
declare module "agora-rn-uikit/src/Rtc/Create" {
    import React from 'react';
    import RtcEngine from "bridge/rtc/webNg/index";
    import { DispatchType } from "agora-rn-uikit/src/Contexts/RtcContext";
    const Create: ({ dispatch, children, }: {
        dispatch: DispatchType;
        children: (engine: React.MutableRefObject<RtcEngine>, tracksReady: boolean) => JSX.Element;
    }) => JSX.Element;
    export default Create;
}
declare module "agora-rn-uikit/src/Rtc/Join" {
    import React from 'react';
    import RtcEngine from "bridge/rtc/webNg/index";
    import { RenderStateInterface, DispatchType } from "agora-rn-uikit/src/Contexts/RtcContext";
    const Join: React.FC<{
        children: React.ReactNode;
        precall: boolean;
        engineRef: React.MutableRefObject<RtcEngine>;
        uidState: RenderStateInterface;
        dispatch: DispatchType;
        tracksReady: boolean;
    }>;
    export default Join;
}
declare module "agora-rn-uikit/src/Utils/useLocalUid" {
    const useLocalUid: () => number;
    export default useLocalUid;
}
declare module "agora-rn-uikit/src/RtcConfigure" {
    import React from 'react';
    const RtcConfigure: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default RtcConfigure;
}
declare module "agora-rn-uikit/src/Style" {
    const _default: {
        max: {
            flex: number;
        };
        buttonHolder: {
            height: number;
            alignItems: "center";
            flex: number;
            flexDirection: "row";
            justifyContent: "space-evenly";
        };
        button: {
            paddingHorizontal: number;
            paddingVertical: number;
            backgroundColor: string;
            borderRadius: number;
        };
        buttonText: {
            color: string;
        };
        fullView: {
            width: number;
            height: number;
        };
        minView: {
            width: number;
            height: number;
        };
        minContainer: {
            position: "absolute";
            top: number;
            left: number;
            padding: number;
            margin: number;
            width: number;
        };
        Controls: {
            position: "absolute";
            top: number;
            left: number;
            width: number;
            height: number;
            zIndex: number;
            display: "flex";
            flexDirection: "row";
            justifyContent: "space-evenly";
            alignItems: "center";
        };
        minOverlay: {
            backgroundColor: string;
            opacity: number;
        };
        minCloseBtn: {
            alignItems: "center";
            justifyContent: "center";
            backgroundColor: string;
            width: number;
            height: number;
            borderRadius: number;
            position: "absolute";
            right: number;
            top: number;
        };
        controlBtn: {
            width: number;
            height: number;
            backgroundColor: string;
            alignItems: "center";
            justifyContent: "center";
        };
        leftRemoteBtn: {
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderRightWidth: number;
            borderRightColor: string;
        };
        rightRemoteBtn: {
            borderTopRightRadius: number;
            borderBottomRightRadius: number;
            borderLeftWidth: number;
            borderLeftColor: string;
        };
        remoteBtnContainer: {
            width: "100%";
            display: "flex";
            marginTop: number;
            flexDirection: "row";
            justifyContent: "center";
            alignSelf: "center";
        };
        localBtn: {
            borderRadius: number;
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        endCall: {
            borderRadius: number;
            borderWidth: number;
            borderColor: string;
            width: number;
            height: number;
            backgroundColor: string;
        };
    };
    export default _default;
}
declare module "agora-rn-uikit/src/Views/MaxVideoView" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { ViewStyle } from 'react-native';
    interface MaxViewInterface {
        user: RenderInterface;
        fallback?: React.ComponentType;
        containerStyle?: ViewStyle;
        landscapeMode?: boolean;
    }
    const MaxVideoView: React.FC<MaxViewInterface>;
    export default MaxVideoView;
}
declare module "agora-rn-uikit/src/Controls/Icons" {
    export interface IconsInterface {
        profile: string;
        'no-mic': string;
        'no-cam': string;
        pinnedLayout: string;
        gridLayout: string;
        'stop-recording': string;
        'demote-filled': string;
        'demote-outlined': string;
        'lower-hand': string;
        'raise-hand': string;
        'turn-off-stt': string;
        'live-caption-mode': string;
    }
    const icons: IconsInterface;
    export default icons;
}
declare module "agora-rn-uikit/src/Utils/isSafariBrowser" {
    const isSafariBrowser: () => boolean;
    export default isSafariBrowser;
}
declare module "agora-rn-uikit/src/hooks/useImageDelay" {
    function useImageDelay(elementRef: any, delay: number | null, imageName: string, tintColor?: string): void;
    export default useImageDelay;
}
declare module "agora-rn-uikit/src/Controls/types" {
    export type Only<T, U> = {
        [P in keyof T]: T[P];
    } & Omit<{
        [P in keyof U]?: never;
    }, keyof T>;
    export type Either<T, U> = Only<T, U> | Only<U, T>;
}
declare module "agora-rn-uikit/src/Controls/BtnTemplate" {
    import React from 'react';
    import { StyleProp, TouchableOpacityProps, ViewStyle, TextStyle, ImageStyle } from 'react-native';
    import { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    import { Either } from "agora-rn-uikit/src/Controls/types";
    interface BtnTemplateBasicInterface {
        onPress?: TouchableOpacityProps['onPress'];
        style?: StyleProp<ViewStyle>;
        styleText?: TextStyle;
        styleIcon?: ImageStyle;
        btnText?: string;
        disabled?: boolean;
    }
    interface BtnTemplateInterfaceWithName extends BtnTemplateBasicInterface {
        name?: keyof IconsInterface;
    }
    interface BtnTemplateInterfaceWithIcon extends BtnTemplateBasicInterface {
        icon?: any;
    }
    export type BtnTemplateInterface = Either<BtnTemplateInterfaceWithIcon, BtnTemplateInterfaceWithName>;
    const BtnTemplate: React.FC<BtnTemplateInterface>;
    export default BtnTemplate;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteAudioMute" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteAudioMuteInterface {
        user: RenderInterface;
    }
    const RemoteAudioMute: React.FC<RemoteAudioMuteInterface>;
    export default RemoteAudioMute;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteSwap" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    interface RemoteSwapInterface {
        uid: UidType;
    }
    const RemoteSwap: React.FC<RemoteSwapInterface>;
    export default RemoteSwap;
}
declare module "agora-rn-uikit/src/Controls/Remote/RemoteVideoMute" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteVideoMuteInterface {
        user: RenderInterface;
        rightButton: boolean;
    }
    const RemoteVideoMute: React.FC<RemoteVideoMuteInterface>;
    export default RemoteVideoMute;
}
declare module "agora-rn-uikit/src/Controls/RemoteControls" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface RemoteControlsInterface {
        showMuteRemoteVideo?: boolean;
        showMuteRemoteAudio?: boolean;
        showRemoteSwap?: boolean;
        user: RenderInterface;
    }
    const RemoteControls: React.FC<RemoteControlsInterface>;
    export default RemoteControls;
}
declare module "agora-rn-uikit/src/Views/MinVideoView" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    interface MinViewInterface {
        user: RenderInterface;
        color?: string;
        showOverlay?: boolean;
    }
    const MinVideoView: React.FC<MinViewInterface>;
    export default MinVideoView;
}
declare module "agora-rn-uikit/src/Controls/Local/EndCall" {
    interface EndCallProps {
        btnText?: string;
    }
    function EndCall(props?: EndCallProps): JSX.Element;
    export default EndCall;
}
declare module "agora-rn-uikit/src/Contexts/LocalUserContext" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    import { UidType } from "agora-rn-uikit/src/Contexts/RtcContext";
    export const LocalContext: React.Context<RenderInterface>;
    export const LocalProvider: React.Provider<RenderInterface>;
    export const LocalConsumer: React.Consumer<RenderInterface>;
    interface LocalUserContextInterface {
        children: React.ReactNode;
        localUid: UidType;
    }
    const LocalUserContext: React.FC<LocalUserContextInterface>;
    export default LocalUserContext;
}
declare module "agora-rn-uikit/src/Controls/Local/LocalAudioMute" {
    interface LocalAudioMuteProps {
        btnText?: string;
        variant?: 'outlined' | 'text';
    }
    function LocalAudioMute(props: LocalAudioMuteProps): JSX.Element;
    export default LocalAudioMute;
}
declare module "agora-rn-uikit/src/Controls/Local/LocalVideoMute" {
    interface LocalVideoMuteProps {
        btnText?: string;
        variant?: 'outlined' | 'text';
    }
    function LocalVideoMute(props: LocalVideoMuteProps): JSX.Element;
    export default LocalVideoMute;
}
declare module "agora-rn-uikit/src/Controls/Local/SwitchCamera" {
    interface Props {
        btnText?: string;
    }
    function SwitchCamera(props?: Props): JSX.Element;
    export default SwitchCamera;
}
declare module "agora-rn-uikit/src/Controls/LocalControls" {
    interface ControlsPropsInterface {
        showButton?: boolean;
    }
    function Controls(props: ControlsPropsInterface): JSX.Element;
    export default Controls;
}
declare module "agora-rn-uikit/src/AgoraUIKit" {
    import React from 'react';
    import { PropsInterface } from "agora-rn-uikit/src/Contexts/PropsContext";
    const AgoraUIKit: React.FC<PropsInterface>;
    export default AgoraUIKit;
}
declare module "agora-rn-uikit/src/Controls/Local/FullScreen" {
    function FullScreen(): JSX.Element;
    export default FullScreen;
}
declare module "agora-rn-uikit/src/Controls/ImageIcon" {
    import React from 'react';
    import { ImageStyle } from 'react-native';
    import { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    import { Either } from "agora-rn-uikit/src/Controls/types";
    interface BaseInterface {
        tintColor?: string;
        style?: ImageStyle;
    }
    interface BaseInterfaceWithName extends BaseInterface {
        name?: keyof IconsInterface;
    }
    interface BaseInterfaceWithIcon extends BaseInterface {
        icon?: any;
    }
    type ImageIconInterface = Either<BaseInterfaceWithName, BaseInterfaceWithIcon>;
    const ImageIcon: React.FC<ImageIconInterface>;
    export default ImageIcon;
}
declare module "agora-rn-uikit/src/index" {
    export { default as default } from "agora-rn-uikit/src/AgoraUIKit";
    export { default as RtcConfigure } from "agora-rn-uikit/src/RtcConfigure";
    export { default as MaxVideoView } from "agora-rn-uikit/src/Views/MaxVideoView";
    export { default as MinVideoView } from "agora-rn-uikit/src/Views/MinVideoView";
    export { default as LocalUserContext, LocalConsumer, LocalProvider, LocalContext, } from "agora-rn-uikit/src/Contexts/LocalUserContext";
    export { default as RenderContext, RenderConsumer, RenderProvider, } from "agora-rn-uikit/src/Contexts/RenderContext";
    export { default as PropsContext, PropsConsumer, PropsProvider, } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { DualStreamMode } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { ToggleState, PermissionState } from "agora-rn-uikit/src/Contexts/PropsContext";
    export type { DefaultRenderInterface, RenderInterface, RtcPropsInterface, CallbacksInterface, CustomCallbacksInterface, PropsInterface, } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { ClientRole, ChannelProfile } from "agora-rn-uikit/src/Contexts/PropsContext";
    export { default as RtcContext, RtcConsumer, RtcProvider, } from "agora-rn-uikit/src/Contexts/RtcContext";
    export type { UidType, RtcContextInterface, DispatchType, RenderStateInterface, ActionInterface, ActionType, } from "agora-rn-uikit/src/Contexts/RtcContext";
    export { default as BtnTemplate } from "agora-rn-uikit/src/Controls/BtnTemplate";
    export type { BtnTemplateInterface } from "agora-rn-uikit/src/Controls/BtnTemplate";
    export { default as Endcall } from "agora-rn-uikit/src/Controls/Local/EndCall";
    export { default as FullScreen } from "agora-rn-uikit/src/Controls/Local/FullScreen";
    export { default as LocalAudioMute } from "agora-rn-uikit/src/Controls/Local/LocalAudioMute";
    export { default as LocalVideoMute } from "agora-rn-uikit/src/Controls/Local/LocalVideoMute";
    export { default as SwitchCamera } from "agora-rn-uikit/src/Controls/Local/SwitchCamera";
    export { default as Controls } from "agora-rn-uikit/src/Controls/LocalControls";
    export { default as RemoteAudioMute } from "agora-rn-uikit/src/Controls/Remote/RemoteAudioMute";
    export { default as RemoteSwap } from "agora-rn-uikit/src/Controls/Remote/RemoteSwap";
    export { default as RemoteVideoMute } from "agora-rn-uikit/src/Controls/Remote/RemoteVideoMute";
    export { default as RemoteControls } from "agora-rn-uikit/src/Controls/RemoteControls";
    export { default as ImageIcon } from "agora-rn-uikit/src/Controls/ImageIcon";
    export { default as Icons } from "agora-rn-uikit/src/Controls/Icons";
    export type { IconsInterface } from "agora-rn-uikit/src/Controls/Icons";
    export { default as useLocalUid } from "agora-rn-uikit/src/Utils/useLocalUid";
}
declare module "src/components/ChatContext" {
    import RtmEngine from "bridge/rtm/web/index";
    import { UidType } from "agora-rn-uikit/src/index";
    export interface ChatBubbleProps {
        isLocal: boolean;
        message: string;
        createdTimestamp: string;
        updatedTimestamp?: string;
        uid: UidType;
        msgId: string;
        isDeleted: boolean;
        isSameUser: boolean;
        render?: (isLocal: boolean, message: string, createdTimestamp: string, uid: UidType, msgId: string, isDeleted: boolean, updatedTimestamp: string, isSameUser: boolean) => JSX.Element;
    }
    export interface messageStoreInterface {
        createdTimestamp: string;
        updatedTimestamp?: string;
        uid: UidType;
        msg: string;
    }
    export enum messageActionType {
        Control = "0",
        Normal = "1"
    }
    export interface chatContext {
        hasUserJoinedRTM: boolean;
        rtmInitTimstamp: number;
        engine: RtmEngine;
        localUid: UidType;
        onlineUsersCount: number;
    }
    export enum controlMessageEnum {
        muteVideo = "1",
        muteAudio = "2",
        muteSingleVideo = "3",
        muteSingleAudio = "4",
        kickUser = "5",
        requestVideo = "6",
        requestAudio = "7",
        kickScreenshare = "9"
    }
    const ChatContext: import("react").Context<chatContext>;
    export default ChatContext;
}
declare module "src/language/default-labels/commonLabels" {
    export interface I18nCommonLabelsInterface {
    }
    export const CommonLabels: I18nCommonLabelsInterface;
}
declare module "src/language/default-labels/createScreenLabels" {
    import { I18nBaseType } from "src/language/i18nTypes";
    export interface I18nCreateScreenLabelsInterface {
        meetingNameInputPlaceholder?: I18nBaseType;
    }
    export const CreateScreenLabels: I18nCreateScreenLabelsInterface;
}
declare module "src/language/default-labels/joinScreenLabels" {
    export interface I18nJoinScreenLabelsInterface {
    }
    export const JoinScreenLabels: I18nJoinScreenLabelsInterface;
}
declare module "src/language/default-labels/shareLinkScreenLabels" {
    export interface I18nShareLinkScreenLabelsInterface {
    }
    export const ShareLinkScreenLabels: I18nShareLinkScreenLabelsInterface;
}
declare module "src/language/default-labels/videoCallScreenLabels" {
    import { I18nBaseType } from "src/language/i18nTypes";
    interface NetworkQualityStatusInterface {
        unknown?: 'Unknown';
        excellent?: 'Excellent';
        good?: 'Good';
        bad?: 'Bad';
        veryBad?: 'Very Bad';
        unpublished?: 'Unpublished';
        loading?: 'Loading';
    }
    export type NetworkQualities = keyof NetworkQualityStatusInterface;
    export interface MeetingInviteInterface {
        isHost: boolean;
        isSeparateHostLink: boolean;
        meetingName?: string;
        pstn?: {
            number: string;
            pin: string;
        };
        url?: {
            host?: string;
            attendee?: string;
        };
        id?: {
            host?: string;
            attendee?: string;
        };
    }
    export interface I18nVideoCallScreenLabelsInterface {
        pstnUserLabel?: I18nBaseType;
    }
    export const VideoCallScreenLabels: I18nVideoCallScreenLabelsInterface;
}
declare module "src/language/default-labels/precallScreenLabels" {
    import { ClientRole } from "agora-rn-uikit/src/index";
    import { I18nBaseType } from "src/language/i18nTypes";
    export interface JoinRoomButtonTextInterface {
        ready: boolean;
        role?: ClientRole;
    }
    export interface I18nPrecallScreenLabelsInterface {
        joinRoomButton?: I18nBaseType<JoinRoomButtonTextInterface>;
    }
    export const PrecallScreenLabels: I18nPrecallScreenLabelsInterface;
}
declare module "src/language/default-labels/index" {
    import { I18nCommonLabelsInterface } from "src/language/default-labels/commonLabels";
    import { I18nCreateScreenLabelsInterface } from "src/language/default-labels/createScreenLabels";
    import { I18nJoinScreenLabelsInterface } from "src/language/default-labels/joinScreenLabels";
    import { I18nShareLinkScreenLabelsInterface } from "src/language/default-labels/shareLinkScreenLabels";
    import { I18nVideoCallScreenLabelsInterface } from "src/language/default-labels/videoCallScreenLabels";
    import { I18nPrecallScreenLabelsInterface } from "src/language/default-labels/precallScreenLabels";
    export interface TextDataInterface extends I18nCommonLabelsInterface, I18nCreateScreenLabelsInterface, I18nJoinScreenLabelsInterface, I18nShareLinkScreenLabelsInterface, I18nVideoCallScreenLabelsInterface, I18nPrecallScreenLabelsInterface {
    }
    export const DEFAULT_LABELS: TextDataInterface;
}
declare module "src/language/i18nTypes" {
    import { TextDataInterface } from "src/language/default-labels/index";
    export type I18nBaseType<T = any> = string | ((template: T) => string);
    export type I18nDynamicType = I18nBaseType<string>;
    export type I18nConditionalType = I18nBaseType<boolean>;
    export interface I18nInterface {
        locale: string;
        label?: string;
        data: TextDataInterface;
    }
}
declare module "src/atoms/CustomIcon" {
    const _default_1: any;
    export default _default_1;
    export interface IconsInterface {
        'video-plus': string;
        'video-on': string;
        'video-off': string;
        'mic-on': string;
        'mic-off': string;
        'no-cam': string;
        'no-mic': string;
        clipboard: string;
        tick: string;
        'tick-fill': string;
        'arrow-down': string;
        'arrow-up': string;
        'screen-share': string;
        'stop-screen-share': string;
        recording: string;
        'stop-recording': string;
        'end-call': string;
        'raise-hand': string;
        'lower-hand': string;
        close: string;
        'back-btn': string;
        participants: string;
        chat: string;
        settings: string;
        'more-menu': string;
        share: string;
        'switch-camera': string;
        remove: string;
        info: string;
        send: string;
        'downside-triangle': string;
        profile: string;
        'link-share': string;
        'list-view': string;
        expand: string;
        collapse: string;
        'active-speaker': string;
        'connection-unsupported': string;
        'connection-bad': string;
        'connection-good': string;
        'connection-loading': string;
        'connection-very-bad': string;
        'connection-unpublished': string;
        'remove-meeting': string;
        'pencil-outlined': string;
        'pencil-filled': string;
        alert: string;
        speaker: string;
        person: string;
        pinned: string;
        grid: string;
        people: string;
        'chat-nav': string;
        'chat-filled': string;
        'chat-outlined': string;
        'demote-filled': string;
        'demote-outlined': string;
        'promote-filled': string;
        'promote-outlined': string;
        'pin-filled': string;
        'pin-outlined': string;
        'unpin-filled': string;
        'unpin-outlined': string;
        'mic-on-filled': string;
        'mic-on-outlined': string;
        'mic-off-filled': string;
        'mic-off-outlined': string;
        'video-on-filled': string;
        'video-on-outlined': string;
        'video-off-filled': string;
        'video-off-outlined': string;
        'down-arrow': string;
        'closed-caption': string;
        globe: string;
        'lang-select': string;
        search: string;
        captions: string;
        'captions-off': string;
        download: string;
        'transcript-stop': string;
        transcript: string;
        'view-last': string;
        'transcript-mode': string;
        '': string;
    }
}
declare module "src/components/ColorContext" {
    interface ColorContext {
        primaryColor: any;
    }
    const ColorContext: import("react").Context<ColorContext>;
    export default ColorContext;
}
declare module "src/subComponents/Platform" {
    const _default_2: "web";
    export default _default_2;
}
declare module "src/utils/common" {
    import React from 'react';
    const trimText: (text: string, length?: number) => string;
    const maxInputLimit = 60;
    const isValidReactComponent: <T>(Component?: React.ComponentType<T>) => boolean;
    const useHasBrandLogo: () => () => boolean;
    const shouldAuthenticate: boolean;
    const isWebInternal: () => boolean;
    /**
     * Checks whether the application is running as a web app and returns true/false.
     * @returns function
     */
    const isWeb: () => boolean;
    /**
     * Checks whether the application is running as an android app and returns true/false.
     * @returns function
     */
    const isAndroid: () => boolean;
    /**
     * Checks whether the application is running as an iOS app and returns true/false.
     * @returns function
     */
    const isIOS: () => boolean;
    /**
     * Checks whether the application is running as an electron desktop app and returns true/false.
     * @returns function
     */
    const isDesktop: () => boolean;
    /**
     * Checks whether the application is running on mobile device (user agent) and returns true/false.
     * @returns function
     */
    const isMobileUA: () => boolean;
    const isArray: (data: any[]) => boolean;
    interface calculatedPositionProps {
        px: number;
        py: number;
        localWidth: number;
        localHeight: number;
        globalWidth: number;
        globalHeight: number;
        extra?: {
            top?: number;
            bottom?: number;
            left?: number;
            right?: number;
        };
        popupWidth?: number;
    }
    const calculatePosition: (params: calculatedPositionProps) => {
        bottom: number;
        right: number;
        top?: undefined;
        left?: undefined;
    } | {
        top: number;
        right: number;
        bottom?: undefined;
        left?: undefined;
    } | {
        bottom: number;
        left: number;
        right?: undefined;
        top?: undefined;
    } | {
        top: number;
        left: number;
        bottom?: undefined;
        right?: undefined;
    };
    const BREAKPOINTS: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    const useIsDesktop: () => (from?: 'default' | 'toolbar' | 'popup') => boolean;
    const useIsSmall: () => (number?: number) => boolean;
    const useResponsive: () => (input: number) => number;
    const processDeepLinkURI: (url: string) => string;
    const getParamFromURL: (url: any, param: any) => any;
    const throttleFn: (fn: Function, wait?: number) => (this: any) => void;
    const debounceFn: (fn: Function, ms?: number) => (this: any, ...args: any[]) => void;
    const capitalizeFirstLetter: (word: string) => string;
    export { useIsDesktop, useIsSmall, BREAKPOINTS, useHasBrandLogo, isMobileUA, isAndroid, isIOS, isWebInternal, isWeb, isDesktop, shouldAuthenticate, isArray, isValidReactComponent, maxInputLimit, trimText, calculatePosition, useResponsive, processDeepLinkURI, getParamFromURL, throttleFn, debounceFn, capitalizeFirstLetter, };
}
declare module "src/utils/hexadecimalTransparency" {
    /**
     * Hexadecimal color code for transparency
     * ref https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
     */
    const hexadecimalTransparency: {
        '100%': string;
        '99%': string;
        '98%': string;
        '97%': string;
        '96%': string;
        '95%': string;
        '94%': string;
        '93%': string;
        '92%': string;
        '91%': string;
        '90%': string;
        '89%': string;
        '88%': string;
        '87%': string;
        '86%': string;
        '85%': string;
        '84%': string;
        '83%': string;
        '82%': string;
        '81%': string;
        '80%': string;
        '79%': string;
        '78%': string;
        '77%': string;
        '76%': string;
        '75%': string;
        '74%': string;
        '73%': string;
        '72%': string;
        '71%': string;
        '70%': string;
        '69%': string;
        '68%': string;
        '67%': string;
        '66%': string;
        '65%': string;
        '64%': string;
        '63%': string;
        '62%': string;
        '61%': string;
        '60%': string;
        '59%': string;
        '58%': string;
        '57%': string;
        '56%': string;
        '55%': string;
        '54%': string;
        '53%': string;
        '52%': string;
        '51%': string;
        '50%': string;
        '49%': string;
        '48%': string;
        '47%': string;
        '46%': string;
        '45%': string;
        '44%': string;
        '43%': string;
        '42%': string;
        '41%': string;
        '40%': string;
        '39%': string;
        '38%': string;
        '37%': string;
        '36%': string;
        '35%': string;
        '34%': string;
        '33%': string;
        '32%': string;
        '31%': string;
        '30%': string;
        '29%': string;
        '28%': string;
        '27%': string;
        '26%': string;
        '25%': string;
        '24%': string;
        '23%': string;
        '22%': string;
        '21%': string;
        '20%': string;
        '19%': string;
        '18%': string;
        '17%': string;
        '16%': string;
        '15%': string;
        '14%': string;
        '13%': string;
        '12%': string;
        '11%': string;
        '10%': string;
        '9%': string;
        '8%': string;
        '7%': string;
        '6%': string;
        '5%': string;
        '4%': string;
        '3%': string;
        '2%': string;
        '1%': string;
        '0%': string;
    };
    export default hexadecimalTransparency;
}
declare module "src/atoms/TextInput" {
    import { TextInputProps } from 'react-native';
    interface TextInputCustomProps extends TextInputProps {
        setRef?: (ref: any) => void;
    }
    const TextInputCustom: (props: TextInputCustomProps) => JSX.Element;
    export default TextInputCustom;
}
declare module "customization-implementation/createHook" {
    import React from 'react';
    /**
     *
     * @param context - any context data which we want to extract the data.
     * @returns useContextWithSelector in which we can pass selector function to extract data from the context that we passed.
     */
    function createHook<T>(context: React.Context<T>): {
        <U>(contextSelector: (data: T) => U): U;
        (): T;
    };
    export function createConcealedHook<T, V>(context: React.Context<T>, preselect: (data: T) => V): {
        <U>(contextSelector: (data: V) => U): U;
        (): V;
    };
    export default createHook;
}
declare module "src/components/DeviceContext" {
    interface DeviceContext {
        selectedCam: string;
        setSelectedCam: (cam: string) => Promise<any>;
        selectedMic: string;
        setSelectedMic: (mic: string) => Promise<any>;
        selectedSpeaker: string;
        setSelectedSpeaker: (speaker: string) => Promise<any>;
        deviceList: MediaDeviceInfo[];
        setDeviceList: (devices: MediaDeviceInfo[]) => void;
    }
    const DeviceContext: import("react").Context<DeviceContext>;
    export default DeviceContext;
}
declare module "src/components/useMount" {
    const useMount: (effect: () => (() => void) | void) => void;
    export default useMount;
}
declare module "src/utils/isSDK" {
    const isSDK: () => boolean;
    export default isSDK;
}
declare module "src/auth/config" {
    export const AUTH_ENDPOINT_URL: string;
    export const ENABLE_AUTH: boolean;
    export const getPlatformId: () => string;
    export const getRequestHeaders: () => {
        'X-Project-ID': string;
        'X-Platform-ID': string;
    };
    export const getIDPAuthRedirectURL: () => string;
    export const getUnauthLoginRedirectURL: () => string;
    export const getOriginURL: () => string;
    export const GET_UNAUTH_FLOW_API_ENDPOINT: () => string;
}
declare module "src/components/StorageContext" {
    import React from 'react';
    type rememberedDevicesListEntries = Record<string, 'switch-on-connect' | 'ignore-on-connect'>;
    export interface StoreInterface {
        token: string;
        displayName: string;
        selectedLanguageCode: string;
        rememberedDevicesList: Record<MediaDeviceInfo['kind'], rememberedDevicesListEntries>;
        activeDeviceId: Record<MediaDeviceInfo['kind'], string>;
    }
    export interface StorageContextInterface {
        store: StoreInterface;
        setStore: React.Dispatch<React.SetStateAction<StoreInterface>> | null;
    }
    export const initStoreValue: StoreInterface;
    const StorageContext: React.Context<StorageContextInterface>;
    export default StorageContext;
    export const StorageConsumer: React.Consumer<StorageContextInterface>;
    export const StorageProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
}
declare module "src/utils/SdkEvents" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface userEventsMapInterface {
        leave: () => void;
        create: (hostPhrase: string, attendeePhrase?: string, pstnNumer?: {
            number: string;
            pin: string;
        }) => void;
        'ready-to-join': (meetingTitle: string, devices: MediaDeviceInfo[]) => void;
        join: (meetingTitle: string, devices: MediaDeviceInfo[], isHost: boolean) => void;
        'rtc-user-published': (uid: UidType, trackType: 'audio' | 'video') => void;
        'rtc-user-unpublished': (uid: UidType, trackType: 'audio' | 'video') => void;
        'rtc-user-joined': (uid: UidType) => void;
        'rtc-user-left': (uid: UidType) => void;
        '_rtm-joined': (uid: UidType) => void;
        'devices-selected-microphone-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'devices-selected-camera-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'devices-selected-speaker-changed': (deviceId: MediaDeviceInfo['deviceId']) => void;
        'token-not-found': () => void;
        'will-token-expire': () => void;
        'did-token-expire': () => void;
        'token-refreshed': () => void;
    }
    const SDKEvents: import("nanoevents").Emitter<userEventsMapInterface>;
    export default SDKEvents;
}
declare module "src/components/DeviceConfigure" {
    import React from 'react';
    import { ClientRole } from "agora-rn-uikit/src/index";
    interface Props {
        userRole: ClientRole;
    }
    export type deviceInfo = MediaDeviceInfo;
    export type deviceId = deviceInfo['deviceId'];
    export type deviceKind = deviceInfo['kind'];
    const DeviceConfigure: React.FC<Props>;
    export default DeviceConfigure;
}
declare module "src/utils/SdkMethodEvents" {
    import { Emitter } from 'nanoevents';
    import { CustomizationApiInterface, MeetingInfoContextInterface } from "customization-api/index";
    import { deviceId } from "src/components/DeviceConfigure";
    export interface SdkMethodEvents {
        customize: (customization: CustomizationApiInterface) => void;
        join(roomid: string | Partial<MeetingInfoContextInterface['data']>, skipPrecall?: boolean, username?: string): MeetingInfoContextInterface['data'];
        microphoneDevice: (deviceId: deviceId) => void;
        speakerDevice: (deviceId: deviceId) => void;
        cameraDevice: (deviceId: deviceId) => void;
        muteAudio: (mute: boolean | ((currentMute: boolean) => boolean)) => void;
        muteVideo: (mute: boolean | ((currentMute: boolean) => boolean)) => void;
        login: (token: string) => void;
        logout: () => void;
    }
    type EventParameterHelper<T extends keyof SdkMethodEvents> = Parameters<SdkMethodEvents[T]>;
    type EventKeyNameHelper = keyof SdkMethodEvents;
    type injectAsync<T extends (...p: any) => any> = (res: (result?: ReturnType<T> | PromiseLike<ReturnType<T>>) => void, rej: (reason?: any) => void, ...params: Parameters<T>) => void;
    export type _InternalSDKMethodEventsMap = {
        [K in EventKeyNameHelper]: injectAsync<SdkMethodEvents[K]>;
    };
    type emitCacheType = {
        [K in EventKeyNameHelper]?: Parameters<_InternalSDKMethodEventsMap[K]>;
    };
    type emitCacheEnabledType = {
        [K in EventKeyNameHelper]?: boolean;
    };
    class SDKMethodEvents {
        constructor();
        emitter: Emitter;
        emitCache: emitCacheType;
        emitCacheDisabled: emitCacheEnabledType;
        emit<T extends EventKeyNameHelper>(event: T, ...params: EventParameterHelper<T>): Promise<ReturnType<SdkMethodEvents[T]>>;
        on<T extends EventKeyNameHelper>(event: T, callback: _InternalSDKMethodEventsMap[T]): import("nanoevents").Unsubscribe;
    }
    const SDKMethodEventsManager: SDKMethodEvents;
    export default SDKMethodEventsManager;
}
declare module "src/components/meeting-info/useMeetingInfo" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface MeetingInfoContextInterface {
        isJoinDataFetched?: boolean;
        data?: {
            isHost: boolean;
            meetingTitle: string;
            roomId: {
                attendee: string;
                host?: string;
            };
            pstn?: {
                number: string;
                pin: string;
            };
            isSeparateHostLink: boolean;
            channel?: string;
            uid?: UidType;
            token?: string;
            rtmToken?: string;
            encryptionSecret?: string;
            screenShareUid?: string;
            screenShareToken?: string;
        };
    }
    export const validateMeetingInfoData: (meetingInfo: Partial<MeetingInfoContextInterface['data']>) => boolean;
    export const MeetingInfoDefaultValue: MeetingInfoContextInterface;
    interface MeetingInfoProviderProps {
        children: React.ReactNode;
        value: MeetingInfoContextInterface;
    }
    const MeetingInfoProvider: (props: MeetingInfoProviderProps) => JSX.Element;
    /**
     * The MeetingInfo app state contains information about the active meeting.
     */
    const useMeetingInfo: {
        <U>(contextSelector: (data: MeetingInfoContextInterface) => U): U;
        (): MeetingInfoContextInterface;
    };
    export { MeetingInfoProvider, useMeetingInfo };
}
declare module "src/components/SdkApiContext" {
    import React from 'react';
    import { _InternalSDKMethodEventsMap } from "src/utils/SdkMethodEvents";
    import { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    import { CustomizationApiInterface } from "customization-api/index";
    type extractPromises<T extends (...p: any) => any> = {
        res: Parameters<T>[0];
        rej: Parameters<T>[1];
    };
    type SdkApiContextInterface = {
        enterRoom: {
            set: (p: extractPromises<_InternalSDKMethodEventsMap['join']>) => void;
            promise?: extractPromises<_InternalSDKMethodEventsMap['join']>;
        };
        join: {
            initialized: true;
            phrase: string;
            meetingDetails?: Partial<MeetingInfoContextInterface['data']>;
            userName: string;
            skipPrecall: boolean;
            promise: extractPromises<_InternalSDKMethodEventsMap['join']>;
        } | {
            initialized: false;
        };
        customize: {
            customization?: CustomizationApiInterface;
            promise?: extractPromises<_InternalSDKMethodEventsMap['customize']>;
        };
        microphoneDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['microphoneDevice']>;
        };
        speakerDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['speakerDevice']>;
        };
        cameraDevice: {
            deviceId?: string;
            promise?: extractPromises<_InternalSDKMethodEventsMap['cameraDevice']>;
        };
        onMuteAudio: (callback: _InternalSDKMethodEventsMap['muteAudio']) => void;
        onMuteVideo: (callback: _InternalSDKMethodEventsMap['muteVideo']) => void;
        clearState: (key: keyof _InternalSDKMethodEventsMap | 'enterRoom', param?: any) => void;
    };
    export const SDK_MEETING_TAG = "sdk-initiated-meeting";
    export const SdkApiContext: React.Context<SdkApiContextInterface>;
    const SdkApiContextProvider: React.FC;
    export default SdkApiContextProvider;
}
declare module "customization-implementation/useCustomization" {
    import React from 'react';
    import { CustomizationApiInterface } from "customization-api/index";
    const CustomizationProvider: React.FC;
    const useCustomization: {
        <U>(contextSelector: (data: CustomizationApiInterface) => U): U;
        (): CustomizationApiInterface;
    };
    export { useCustomization, CustomizationProvider };
}
declare module "customization-implementation/index" {
    export { default as createHook, createConcealedHook } from "customization-implementation/createHook";
    export { CustomizationProvider, useCustomization } from "customization-implementation/useCustomization";
    export type { CustomizationProviderProps } from "customization-implementation/useCustomization";
    export { default as customizationConfig } from 'customization';
}
declare module "src/language/index" {
    import { I18nInterface } from "src/language/i18nTypes";
    export const DEFAULT_I18_DATA: I18nInterface;
}
declare module "src/language/useLanguage" {
    import React from 'react';
    export interface LanguageContextInterface {
        languageCode: string;
        setLanguageCode: (code: string) => void;
    }
    export interface LanguagePropsInterface {
        children: React.ReactNode;
    }
    const LanguageProvider: (props: LanguagePropsInterface) => JSX.Element;
    const useLanguage: {
        <U>(contextSelector: (data: LanguageContextInterface) => U): U;
        (): LanguageContextInterface;
    };
    export { LanguageProvider, useLanguage };
}
declare module "src/utils/useString" {
    import { TextDataInterface } from "src/language/default-labels/index";
    export function usei18nData(selectedLanguageCode?: string): TextDataInterface;
    export function useString<T = string>(keyName: keyof TextDataInterface): (input?: T) => string;
}
declare module "src/subComponents/SidePanelEnum" {
    export enum SidePanelType {
        None = 0,
        Participants = 1,
        Chat = 2,
        Settings = 3,
        Transcript = 4
    }
}
declare module "src/rtm/RTMEngine" {
    import RtmEngine from "bridge/rtm/web/index";
    class RTMEngine {
        engine: RtmEngine;
        private localUID;
        private channelId;
        private static _instance;
        static getInstance(): RTMEngine;
        private createClientInstance;
        private destroyClientInstance;
        private constructor();
        setLocalUID(localUID: string): void;
        setChannelId(channelID: string): void;
        setLoginInfo(localUID: string, channelID: string): void;
        get localUid(): string;
        get channelUid(): string;
        destroy(): Promise<void>;
    }
    export default RTMEngine;
}
declare module "src/rtm-events-api/types" {
    import { UidType } from "agora-rn-uikit/src/index";
    export type ReceiverUid = UidType | UidType[];
    export type EventPayload = string | Record<string, never>;
    export enum EventSource {
        core = "core",
        fpe = "fpe"
    }
    export enum EventPersistLevel {
        'LEVEL1' = 1,
        'LEVEL2' = 2,
        'LEVEL3' = 3
    }
    interface EventCallbackPayload {
        payload: string;
        persistLevel: EventPersistLevel;
        sender: UidType;
        ts: number;
    }
    export type EventCallback = (args: EventCallbackPayload) => void;
}
declare module "src/rtm-events/EventUtils" {
    import { EventSource } from "src/rtm-events-api/types";
    type TListener = <T>(t: T) => void;
    type TListenerMetaData = {
        once: boolean;
        listener: TListener;
    };
    type TEventList = Map<string, TListenerMetaData[]>;
    type TEvents = Record<EventSource, TEventList> | Record<string, never>;
    const EventUtils: {
        getEvents(source: EventSource): TEvents | {};
        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         *
         * @param {String} evt Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        addListener(evt: string, listener: any, source: EventSource): object;
        /**
         * Removes a listener function from the specified event.
         *
         * @param {String} evt Name of the event to remove the listener from.
         * @param {Function} listenerToRemove Method to remove from the event.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils for chaining.
         */
        removeListener(evt: string, listenerToRemove: TListener, source: EventSource): Object;
        /**
         * Removes all listeners from a specified event.
         * If you do not specify an event then all listeners will be removed.
         * That means every event will be emptied.
         *
         * @param {String} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
         * @param {EventSource} source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        removeAllListeners(evt: string, source: EventSource): object;
        /**
         * Removes all events and resets the state.
         * That means every event will be emptied.
         *
         * @param {source} source source Name of the bucket to search events from
         * @return {Object} Current instance of EventUtils
         */
        removeAll(source: EventSource): object;
        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         *
         * @param {String} evt Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {Object} Current instance of EventUtils
         */
        emitEvent(evt: string, source: EventSource, args: any): object;
        clear(): void;
    };
    export default EventUtils;
}
declare module "src/rtm-events/EventsQueue" {
    interface IQueueEvent {
        data: any;
        uid: number | string;
        ts: number;
    }
    const EventsQueue: {
        enqueue(q: IQueueEvent): void;
        dequeue(): any;
        isEmpty(): boolean;
        size(): any;
        clear(): void;
    };
    export default EventsQueue;
}
declare module "src/rtm-events/constants" {
    const EventActions: {
        RECORDING_STARTED: string;
        RECORDING_STOPPED: string;
        RECORDING_STOP_REQUEST: string;
        SCREENSHARE_STARTED: string;
        SCREENSHARE_STOPPED: string;
    };
    const EventNames: {
        RECORDING_ATTRIBUTE: string;
        RAISED_ATTRIBUTE: string;
        ROLE_ATTRIBUTE: string;
        PUBLIC_CHAT_MESSAGE: string;
        PRIVATE_CHAT_MESSAGE: string;
        SCREENSHARE_ATTRIBUTE: string;
        NAME_ATTRIBUTE: string;
        VIDEO_MEETING_HOST: string;
        VIDEO_MEETING_ATTENDEE: string;
        STT_ACTIVE: string;
        STT_LANGUAGE: string;
    };
    /** ***** EVENT NAMES ENDS ***** */
    export { EventActions, EventNames };
}
declare module "src/rtm-events/index" {
    import EventUtils from "src/rtm-events/EventUtils";
    import EventsQueue from "src/rtm-events/EventsQueue";
    export * from "src/rtm-events/constants";
    export { EventUtils, EventsQueue };
}
declare module "src/rtm/utils" {
    export const hasJsonStructure: (str: string) => boolean;
    export const safeJsonParse: (str: string) => any[];
    export const adjustUID: (uid: number) => number;
    export const timeNow: () => number;
    export const getMessageTime: (ts?: number) => number;
    export const get32BitUid: (peerId: string) => number;
}
declare module "src/rtm-events-api/Events" {
    import { ReceiverUid, EventCallback, EventSource, EventPersistLevel } from "src/rtm-events-api/types";
    class Events {
        private source;
        constructor(source?: EventSource);
        /**
         * Persists the data in the local attributes of the user
         *
         * @param {String} evt  to be stored in rtm Attribute key
         * @param {String} payload to be stored in rtm Attribute value
         * @api private
         */
        private _persist;
        /**
         * event type validator.
         *
         * @api private
         * @returns {boolean}
         */
        private _validateEvt;
        /**
         * event listener validator
         *
         * @api private
         * @returns {boolean}
         */
        private _validateListener;
        /**
         * Sets the local attribute of user if persist level is 2 or 3.
         * If param 'toUid' is not provided, message is sent in the channel.
         * If param 'toUid' is provided message is sent to that individual.
         * If param 'toUid' is an array of uids is provided then message is sent to all the individual uids in loop.
         *
         * @param {Object} rtmPayload payload to be sent across
         * @param {ReceiverUid} toUid uid or uids[] of user
         * @api private
         */
        private _send;
        /**
         * Listen on a new event by eventName and listener.
         * When the specified event happens, the Events API triggers the callback that you pass.
         * The listener will not be added/listened if it is a duplicate.
         *
         * @param {String} eventName Name of the event. It must be a unique string.
         * @param {Function} listener Method to be called when the event is emitted.
         * @returns {Function} Returns function, call it and this listener will be removed from event
         * @api public
         */
        on: (eventName: string, listener: EventCallback) => Function;
        /**
         * Listen off an event by eventName and listener
         * or listen off events by eventName, when if only eventName argument is passed.
         * or listen off all events, when if no arguments are passed.
         *
         * @param {String} eventName Name of the event to remove the listener from.
         * @param {Function} listener Listener to remove from the event.
         * @api public
         */
        off: (eventName?: string, listener?: EventCallback) => void;
        /**
         * This method sends p2p or channel message depending upon the 'receiver' value.
         *  - If 'receiver' is provided this method sends p2p message.
         *  - If 'receiver' is empty this method sends channel message.
         *
         *
         * @param {String} eventName  Name of the event to send.
         * @param {String} payload (optional) Additional data to be sent along with the event.
         * @param {Enum} persistLevel (optional) set different levels of persistance. Default value is Level 1
         * @param {ReceiverUid} receiver (optional) uid or uid array. Default mode sends message in channel.
         * @api public
         * */
        send: (eventName?: string, payload?: string, persistLevel?: EventPersistLevel, receiver?: ReceiverUid) => Promise<void>;
    }
    export default Events;
}
declare module "src/rtm-events-api/index" {
    import Events from "src/rtm-events-api/Events";
    export * from "src/rtm-events-api/types";
    const events: Events;
    export default events;
}
declare module "src/components/chat-ui/useChatUIControl" {
    import React, { SetStateAction } from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface ChatUIControlInterface {
        groupActive: boolean;
        privateActive: boolean;
        selectedChatUserId: UidType;
        inputActive?: boolean;
        setGroupActive: React.Dispatch<SetStateAction<boolean>>;
        setPrivateActive: React.Dispatch<SetStateAction<boolean>>;
        setSelectedChatUserId: React.Dispatch<SetStateAction<UidType>>;
        setInputActive: React.Dispatch<SetStateAction<boolean>>;
        message: string;
        setMessage: React.Dispatch<SetStateAction<string>>;
    }
    interface ChatUIControlProviderProps {
        children: React.ReactNode;
    }
    const ChatUIControlProvider: (props: ChatUIControlProviderProps) => JSX.Element;
    /**
     * The ChatUIControl app state governs the chat ui.
     */
    const useChatUIControl: {
        <U>(contextSelector: (data: ChatUIControlInterface) => U): U;
        (): ChatUIControlInterface;
    };
    export { ChatUIControlProvider, useChatUIControl };
}
declare module "src/components/chat-notification/useChatNotification" {
    import React, { SetStateAction } from 'react';
    export interface individualUnreadMessageCount {
        [key: number]: number;
    }
    export interface ChatNotificationInterface {
        totalUnreadCount: number;
        unreadGroupMessageCount: number;
        setUnreadGroupMessageCount: React.Dispatch<SetStateAction<number>>;
        unreadPrivateMessageCount: number;
        setUnreadPrivateMessageCount: React.Dispatch<SetStateAction<number>>;
        unreadIndividualMessageCount: individualUnreadMessageCount;
        setUnreadIndividualMessageCount: React.Dispatch<SetStateAction<individualUnreadMessageCount>>;
    }
    interface ChatNotificationProviderProps {
        children: React.ReactNode;
    }
    const ChatNotificationProvider: (props: ChatNotificationProviderProps) => JSX.Element;
    const useChatNotification: {
        <U>(contextSelector: (data: ChatNotificationInterface) => U): U;
        (): ChatNotificationInterface;
    };
    export { ChatNotificationProvider, useChatNotification };
}
declare module "src/utils/useSidePanel" {
    import React, { SetStateAction } from 'react';
    import { SidePanelType } from "src/subComponents/SidePanelEnum";
    export interface SidePanelContextInterface {
        sidePanel: SidePanelType;
        setSidePanel: React.Dispatch<SetStateAction<SidePanelType>>;
    }
    interface SidePanelProviderProps {
        value: SidePanelContextInterface;
        children: React.ReactNode;
    }
    const SidePanelProvider: (props: SidePanelProviderProps) => JSX.Element;
    /**
     * The Side panel app state governs the side panel.
     */
    const useSidePanel: {
        <U>(contextSelector: (data: SidePanelContextInterface) => U): U;
        (): SidePanelContextInterface;
    };
    export { SidePanelProvider, useSidePanel };
}
declare module "src/utils/getUniqueID" {
    export default function getUniqueID(): string;
}
declare module "src/components/chat-messages/useChatMessages" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    interface ChatMessagesProviderProps {
        children: React.ReactNode;
    }
    export interface messageInterface {
        createdTimestamp: number;
        updatedTimestamp?: number;
        msg: string;
        msgId: string;
        isDeleted: boolean;
    }
    export interface messageStoreInterface extends messageInterface {
        uid: UidType;
    }
    interface ChatMessagesInterface {
        messageStore: messageStoreInterface[];
        privateMessageStore: {
            [key: string]: messageStoreInterface[];
        };
        sendChatMessage: (msg: string, toUid?: UidType) => void;
        editChatMessage: (msgId: string, msg: string, toUid?: UidType) => void;
        deleteChatMessage: (msgId: string, toUid?: UidType) => void;
        openPrivateChat: (toUid: UidType) => void;
    }
    const ChatMessagesProvider: (props: ChatMessagesProviderProps) => JSX.Element;
    const useChatMessages: {
        <U>(contextSelector: (data: ChatMessagesInterface) => U): U;
        (): ChatMessagesInterface;
    };
    export { ChatMessagesProvider, useChatMessages };
}
declare module "src/atoms/ImageIcon" {
    import { ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface ImageIconProps {
        tintColor?: string;
        name: keyof IconsInterface;
        iconSize?: number;
        iconContainerStyle?: ViewStyle;
        iconBackgroundColor?: string;
        base64?: boolean;
        base64TintColor?: string;
        iconType?: 'round' | 'plain';
        isHovered?: boolean;
        showWarningIcon?: boolean;
    }
    const ImageIcon: (props: ImageIconProps) => JSX.Element;
    export default ImageIcon;
}
declare module "src/theme/index" {
    const ThemeConfig: {
        EmphasisOpacity: {
            high: number;
            medium: number;
            disabled: number;
        };
        EmphasisPlus: {
            high: string;
            medium: string;
            disabled: string;
        };
        FontSize: {
            extraLarge: 32;
            large: 20;
            medium: 18;
            normal: 16;
            small: 14;
            tiny: 12;
        };
        FontFamily: {
            sansPro: string;
        };
        BorderRadius: {
            small: 4;
            medium: 8;
            large: 12;
            extraLarge: 20;
        };
    };
    export default ThemeConfig;
}
declare module "src/subComponents/ChatInput" {
    import React from 'react';
    export interface ChatSendButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const ChatSendButton: (props: ChatSendButtonProps) => JSX.Element;
    export interface ChatTextInputProps {
        render?: (message: string, onChangeText: (text: string) => void, onSubmitEditing: () => void, chatMessageInputPlaceholder: string) => JSX.Element;
    }
    export const ChatTextInput: (props: ChatTextInputProps) => JSX.Element;
    /**
     * Input component for the Chat interface
     */
    const ChatInput: (props: {
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
    }) => JSX.Element;
    export default ChatInput;
}
declare module "customization-api/typeDefinition" {
    import React from 'react';
    export type { ChatBubbleProps } from "src/components/ChatContext";
    import { ChatBubbleProps } from "src/components/ChatContext";
    import { RenderInterface, RenderStateInterface, UidType } from "agora-rn-uikit/src/index";
    import { I18nInterface } from "src/language/i18nTypes";
    import { IconsInterface } from "src/atoms/CustomIcon";
    export type { RenderInterface, RenderStateInterface, UidType };
    export type { ChatTextInputProps, ChatSendButtonProps, } from "src/subComponents/ChatInput";
    import { ChatTextInputProps, ChatSendButtonProps } from "src/subComponents/ChatInput";
    export const CUSTOM_ROUTES_PREFIX = "/r/";
    interface BeforeAndAfterInterface {
    }
    export interface PreCallInterface extends BeforeAndAfterInterface {
        preview?: React.ComponentType;
        audioMute?: React.ComponentType;
        videoMute?: React.ComponentType;
        meetingName?: React.ComponentType;
        deviceSelect?: React.ComponentType;
        joinButton?: React.ComponentType;
        textBox?: React.ComponentType;
    }
    export interface ChatCmpInterface {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
    }
    export interface renderComponentInterface {
        user: RenderInterface;
        isMax?: boolean;
    }
    export interface renderComponentObjectInterface {
        [key: string]: React.ComponentType<renderComponentInterface>;
    }
    export type layoutComponent = React.ComponentType<{
        renderData: RenderStateInterface['activeUids'];
    }>;
    export interface layoutObjectBase {
        name: string;
        label: string;
        component: layoutComponent;
    }
    export interface layoutObjectWithIcon extends layoutObjectBase {
        icon: string;
        iconName?: never;
    }
    export interface layoutObjectWithIconName extends layoutObjectBase {
        icon?: never;
        iconName: keyof IconsInterface;
    }
    export type layoutObjectType = layoutObjectWithIcon | layoutObjectWithIconName;
    export interface VideoCallInterface extends BeforeAndAfterInterface {
        topBar?: React.ComponentType;
        participantsPanel?: React.ComponentType;
        bottomBar?: React.ComponentType;
        chat?: ChatCmpInterface;
        customContent?: renderComponentObjectInterface;
        customLayout?: (layouts: layoutObjectType[]) => layoutObjectType[];
        useUserContext?: () => void;
    }
    export type ComponentsInterface = {
        /**
         * Custom context/api provider wrapped in root level
         */
        appRoot?: React.ComponentType;
        precall?: React.ComponentType;
        videoCall?: VideoCallInterface | React.ComponentType;
    };
    export interface CustomRoutesInterface {
        path: string;
        component: React.ComponentType;
        exact?: boolean;
        componentProps?: object;
        isPrivateRoute?: boolean;
        routeProps?: object;
        failureRedirectTo?: string;
    }
    export type CustomHookType = () => () => Promise<void>;
    export interface CustomizationApiInterface {
        /**
         * components used to replace whole screen or subcomponents
         */
        components?: ComponentsInterface;
        /**
         * custom routes used to add new page/routes
         */
        /**
         * Internationlization
         */
        i18n?: I18nInterface[];
    }
}
declare module "customization-api/customize" {
    import { CustomizationApiInterface } from "customization-api/typeDefinition";
    export const customize: (config: CustomizationApiInterface) => CustomizationApiInterface;
}
declare module "src/components/meeting-info/useSetMeetingInfo" {
    import React, { SetStateAction } from 'react';
    import { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    export interface SetMeetingInfoContextInterface {
        setMeetingInfo: React.Dispatch<SetStateAction<MeetingInfoContextInterface>>;
    }
    interface SetMeetingInfoProviderProps {
        children: React.ReactNode;
        value: SetMeetingInfoContextInterface;
    }
    const SetMeetingInfoProvider: (props: SetMeetingInfoProviderProps) => JSX.Element;
    const useSetMeetingInfo: {
        <U>(contextSelector: (data: SetMeetingInfoContextInterface) => U): U;
        (): SetMeetingInfoContextInterface;
    };
    export { SetMeetingInfoProvider, useSetMeetingInfo };
}
declare module "src/utils/useCreateMeeting" {
    /**
     * Returns an asynchronous function to create a meeting with the given options.
     */
    export default function useCreateMeeting(): (roomTitle: string, enablePSTN?: boolean, isSeparateHostLink?: boolean) => Promise<void>;
}
declare module "src/components/GraphQLProvider" {
    import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
    import React from 'react';
    export const GraphQLContext: React.Context<{
        client: ApolloClient<NormalizedCacheObject>;
    }>;
    const GraphQLProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default GraphQLProvider;
}
declare module "src/utils/useLocalShareScreenUid" {
    const useLocalScreenShareUid: () => number;
    export default useLocalScreenShareUid;
}
declare module "src/components/useUserPreference" {
    import React from 'react';
    interface UserPreferenceContextInterface {
        displayName: string;
        setDisplayName: React.Dispatch<React.SetStateAction<string>>;
        saveName: (name: string) => void;
    }
    const UserPreferenceProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const useUserPreference: {
        <U>(contextSelector: (data: UserPreferenceContextInterface) => U): U;
        (): UserPreferenceContextInterface;
    };
    export { useUserPreference, UserPreferenceProvider };
}
declare module "src/utils/useGetName" {
    function useGetName(): string;
    export default useGetName;
}
declare module "src/utils/useJoinMeeting" {
    /**
     * Returns an asynchronous function to join a meeting with the given phrase.
     */
    export default function useJoinMeeting(): (phrase: string) => Promise<Partial<{
        isHost: boolean;
        meetingTitle: string;
        roomId: {
            attendee: string;
            host?: string;
        };
        pstn?: {
            number: string;
            pin: string; /**
             * Returns an asynchronous function to join a meeting with the given phrase.
             */
        };
        isSeparateHostLink: boolean;
        channel?: string;
        uid?: number;
        token?: string;
        rtmToken?: string;
        encryptionSecret?: string;
        screenShareUid?: string;
        screenShareToken?: string;
    }>>;
}
declare module "src/components/SdkMuteToggleListener" {
    import React from 'react';
    export const SdkMuteQueueContext: React.Context<{
        videoMuteQueue: {
            current: any[];
        };
        audioMuteQueue: {
            current: any[];
        };
    }>;
    const SdkMuteToggleListener: (props: any) => JSX.Element;
    export default SdkMuteToggleListener;
}
declare module "src/utils/useMuteToggleLocal" {
    import { ToggleState } from "agora-rn-uikit/src/index";
    export enum MUTE_LOCAL_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to toggle muted state of the given track type for the local user.
     */
    function useMuteToggleLocal(): (type: MUTE_LOCAL_TYPE, _action?: ToggleState, _fromSdk?: boolean) => Promise<void>;
    export default useMuteToggleLocal;
}
declare module "src/utils/useIsPSTN" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a PSTN user and returns true/false
     * @returns function
     */
    function useIsPSTN(): (uid: UidType) => boolean;
    export default useIsPSTN;
}
declare module "src/utils/useRemoteEndCall" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function to end the call for a remote user with the given uid.
     */
    const useRemoteEndCall: () => (uid: UidType) => void;
    export default useRemoteEndCall;
}
declare module "src/utils/useMutePSTN" {
    import { UidType } from "agora-rn-uikit/src/index";
    const useMutePSTN: () => (uid: UidType) => Promise<any>;
    export default useMutePSTN;
}
declare module "src/utils/useRemoteMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    export enum MUTE_REMOTE_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to toggle muted state of the given track type for a remote user with the given uid or if no uid provided, mutes everyone else in the meeting.
     */
    function useRemoteMute(): (type: MUTE_REMOTE_TYPE, uid?: UidType) => Promise<void>;
    export default useRemoteMute;
}
declare module "customization-api/action-library" {
    export { default as useCreateMeeting } from "src/utils/useCreateMeeting";
    export { default as useJoinMeeting } from "src/utils/useJoinMeeting";
    export { MUTE_LOCAL_TYPE, default as useMuteToggleLocal, } from "src/utils/useMuteToggleLocal";
    export { default as useRemoteEndcall } from "src/utils/useRemoteEndCall";
    export { default as useRemoteMute, MUTE_REMOTE_TYPE, } from "src/utils/useRemoteMute";
    export { controlMessageEnum } from "src/components/ChatContext";
    export { ToggleState } from "agora-rn-uikit/src/Contexts/PropsContext";
}
declare module "src/app-state/useLocalUserInfo" {
    /**
     * The LocalUserInfo app state contains the local user information like uid, audio and video mute states etc.
     */
    export const useLocalUserInfo: () => import("agora-rn-uikit").RenderInterface;
}
declare module "src/utils/useLayout" {
    import React, { SetStateAction } from 'react';
    export interface LayoutContextInterface {
        currentLayout: string;
        setLayout: React.Dispatch<SetStateAction<string>>;
    }
    interface LayoutProviderProps {
        value: LayoutContextInterface;
        children: React.ReactNode;
    }
    const LayoutProvider: (props: LayoutProviderProps) => JSX.Element;
    /**
     * The Layout app state governs the video call screen content display layout.
     */
    const useLayout: {
        <U>(contextSelector: (data: LayoutContextInterface) => U): U;
        (): LayoutContextInterface;
    };
    export { LayoutProvider, useLayout };
}
declare module "src/components/Router" {
    export { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useParams, useLocation, Prompt, } from 'react-router-dom';
}
declare module "src/subComponents/recording/useRecordingLayoutQuery" {
    import { UidType } from "agora-rn-uikit/src/index";
    function useRecordingLayoutQuery(): {
        executeNormalQuery: () => void;
        executePresenterQuery: (screenShareUid: UidType) => void;
    };
    export default useRecordingLayoutQuery;
}
declare module "src/components/contexts/ScreenShareContext" {
    import React, { Dispatch, SetStateAction } from 'react';
    export interface ScreenShareObjectInterface {
        [key: string | number]: {
            name: string;
            isActive: boolean;
            isExpanded?: boolean;
            ts: number;
        };
    }
    export interface ScreenShareContextInterface {
        screenShareData: ScreenShareObjectInterface;
        setScreenShareData: Dispatch<SetStateAction<ScreenShareObjectInterface>>;
        isScreenShareOnFullView: boolean;
        setScreenShareOnFullView: Dispatch<SetStateAction<boolean>>;
    }
    interface ScreenShareProviderProps {
        children: React.ReactNode;
    }
    const ScreenShareProvider: (props: ScreenShareProviderProps) => JSX.Element;
    const useScreenContext: {
        <U>(contextSelector: (data: ScreenShareContextInterface) => U): U;
        (): ScreenShareContextInterface;
    };
    export { useScreenContext, ScreenShareProvider };
}
declare module "src/subComponents/recording/useRecording" {
    import React, { SetStateAction } from 'react';
    export interface RecordingContextInterface {
        startRecording: () => void;
        stopRecording: () => void;
        isRecordingActive: boolean;
        inProgress: boolean;
    }
    interface RecordingProviderProps {
        children: React.ReactNode;
        value: {
            setRecordingActive: React.Dispatch<SetStateAction<boolean>>;
            isRecordingActive: boolean;
        };
    }
    /**
     * Component to start / stop Agora cloud recording.
     * Sends a control message to all users in the channel over RTM to indicate that
     * Cloud recording has started/stopped.
     */
    const RecordingProvider: (props: RecordingProviderProps) => JSX.Element;
    /**
     * The Recording app state governs the App Builder cloud recording functionality.
     */
    const useRecording: {
        <U>(contextSelector: (data: RecordingContextInterface) => U): U;
        (): RecordingContextInterface;
    };
    export { RecordingProvider, useRecording };
}
declare module "src/app-state/useMessages" {
    import { individualUnreadMessageCount } from "src/components/chat-notification/useChatNotification";
    import { messageStoreInterface } from "src/components/chat-messages/useChatMessages";
    export interface messageInterface {
        groupMessages: messageStoreInterface[];
        privateMessages: {
            [key: string]: messageStoreInterface[];
        };
        sendMessage: (msg: string, toUid?: number) => void;
        editMessage: (msgId: string, msg: string, toUid?: number) => void;
        deleteMessage: (msgId: string, toUid?: number) => void;
        groupUnreadCount: number;
        individualUnreadCount: individualUnreadMessageCount;
        setGroupUnreadCount: React.Dispatch<React.SetStateAction<number>>;
        setIndividualUnreadCount: React.Dispatch<React.SetStateAction<individualUnreadMessageCount>>;
    }
    /**
     * The Messages app state governs the chat messages.
     */
    export const useMessages: () => messageInterface;
}
declare module "src/utils/useSetName" {
    function useSetName(): import("react").Dispatch<import("react").SetStateAction<string>>;
    export default useSetName;
}
declare module "src/utils/useUserName" {
    /**
     * The UserName app state governs the local user's display name.
     */
    export default function useUserName(): [
        string,
        React.Dispatch<React.SetStateAction<string>>
    ];
}
declare module "customization-api/app-state" {
    /**
     * The RTC app state exposes the internal RtcEngine object as well as dispatch interface to perform various actions.
     */
    export const useRtc: {
        <U>(contextSelector: (data: import("agora-rn-uikit").RtcContextInterface) => U): U;
        (): import("agora-rn-uikit").RtcContextInterface;
    };
    /**
     * The Render app state governs the information necessary to render each user content view displayed in the videocall screen.
     */
    export const useRender: {
        <U>(contextSelector: (data: import("agora-rn-uikit").RenderStateInterface) => U): U;
        (): import("agora-rn-uikit").RenderStateInterface;
    };
    export { useLocalUserInfo } from "src/app-state/useLocalUserInfo";
    /**
     * UI contexts
     */
    export { useLayout } from "src/utils/useLayout";
    export type { LayoutContextInterface } from "src/utils/useLayout";
    export { useRecording } from "src/subComponents/recording/useRecording";
    export type { RecordingContextInterface } from "src/subComponents/recording/useRecording";
    export { useMeetingInfo } from "src/components/meeting-info/useMeetingInfo";
    export type { MeetingInfoContextInterface } from "src/components/meeting-info/useMeetingInfo";
    export { useChatUIControl } from "src/components/chat-ui/useChatUIControl";
    export type { ChatUIControlInterface } from "src/components/chat-ui/useChatUIControl";
    export { useMessages } from "src/app-state/useMessages";
    export type { messageInterface } from "src/app-state/useMessages";
    export { SidePanelType } from "src/subComponents/SidePanelEnum";
    export { useSidePanel } from "src/utils/useSidePanel";
    export { default as useUserName } from "src/utils/useUserName";
}
declare module "customization-api/customEvents" {
    import Events from "src/rtm-events-api/Events";
    const customEvents: Events;
    export { customEvents };
}
declare module "src/atoms/HorizontalRule" {
    import { ViewProps } from 'react-native';
    export default function HorizontalRule(props: ViewProps): JSX.Element;
}
declare module "src/atoms/PrimaryButton" {
    import { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface PrimaryButtonProps extends TouchableOpacityProps {
        text?: string;
        iconName?: keyof IconsInterface;
        containerStyle?: ViewStyle;
        textStyle?: TextStyle;
        iconSize?: number;
        iconColor?: string;
    }
    export default function PrimaryButton(props: PrimaryButtonProps): JSX.Element;
}
declare module "src/atoms/SecondaryButton" {
    import React from 'react';
    import { TouchableOpacityProps } from 'react-native';
    export interface SecondaryButtonProps extends TouchableOpacityProps {
        text?: string;
        children?: React.ReactNode;
    }
    export default function SecondaryButton(props: SecondaryButtonProps): JSX.Element;
}
declare module "src/utils/useGetMeetingPhrase" {
    export default function useGetMeetingPhrase(): (phrase: string) => Promise<void>;
}
declare module "src/atoms/TertiaryButton" {
    import { TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
    import React from 'react';
    interface ButtonProps extends TouchableOpacityProps {
        setRef?: (ref: any) => void;
        text?: string;
        children?: React.ReactNode;
        containerStyle?: ViewStyle;
        textStyle?: TextStyle;
    }
    const TertiaryButton: (props: ButtonProps) => JSX.Element;
    export default TertiaryButton;
}
declare module "src/atoms/Tooltip" {
    import React from 'react';
    import { ViewStyle } from 'react-native';
    interface TooltipProps {
        activeBgStyle?: ViewStyle;
        defaultBgStyle?: ViewStyle;
        renderContent: (isToolTipVisible: boolean, setToolTipVisible: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode;
        toolTipMessage: string;
        toolTipIcon?: React.ReactNode;
        isClickable?: boolean;
        placement?: 'top' | 'bottom' | 'left' | 'right';
        onPress?: () => void;
    }
    const Tooltip: (props: TooltipProps) => JSX.Element;
    export default Tooltip;
}
declare module "src/atoms/IconButton" {
    import React from 'react';
    import { ViewStyle, TextStyle, PressableProps } from 'react-native';
    import { ImageIconProps } from "src/atoms/ImageIcon";
    export interface BtnTextProps {
        textStyle?: TextStyle;
        textColor?: string;
        text?: string;
    }
    export interface IconButtonProps {
        setRef?: (ref: any) => void;
        onPress?: PressableProps['onPress'];
        disabled?: boolean;
        containerStyle?: ViewStyle;
        btnTextProps?: BtnTextProps;
        iconProps: ImageIconProps;
        toolTipMessage?: string;
        isToolTipVisible?: boolean;
        setToolTipVisible?: React.Dispatch<React.SetStateAction<boolean>>;
        isOnActionSheet?: boolean;
        hoverEffect?: boolean;
        hoverEffectStyle?: ViewStyle;
        placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
        isClickable?: boolean;
    }
    const IconButtonWithToolTip: (props: IconButtonProps) => JSX.Element;
    export default IconButtonWithToolTip;
}
declare module "src/subComponents/Clipboard" {
    /**
     * On web and electron web, we use the clipbord component from the react-native-web library
     */
    import { Clipboard } from 'react-native';
    export default Clipboard;
}
declare module "src/components/useShareLink" {
    import React from 'react';
    export const GetMeetingInviteURL: (baseUrl: string, isHost: boolean, roomId: {
        host?: string;
        attendee?: string;
    }, isSeparateHostLink: boolean) => {
        host: string;
        attendee: string;
    } | {
        host: string;
        attendee?: undefined;
    } | {
        attendee: string;
        host?: undefined;
    };
    export const GetMeetingInviteID: (isHost: boolean, roomId: {
        host?: string;
        attendee?: string;
    }, isSeparateHostLink: boolean) => {
        host: string;
        attendee: string;
    } | {
        host: string;
        attendee?: undefined;
    } | {
        attendee: string;
        host?: undefined;
    };
    export enum SHARE_LINK_CONTENT_TYPE {
        ATTENDEE = 1,
        HOST = 2,
        PSTN = 3,
        MEETING_INVITE = 4
    }
    export interface ShareLinkContextInterface {
        copyShareLinkToClipboard: (type: SHARE_LINK_CONTENT_TYPE) => void;
        getShareLink: (type: SHARE_LINK_CONTENT_TYPE) => string;
    }
    const ShareLinkContext: React.Context<ShareLinkContextInterface>;
    interface ShareLinkProvideProps {
        children: React.ReactNode;
    }
    const ShareLinkProvider: (props: ShareLinkProvideProps) => JSX.Element;
    const useShareLink: {
        <U>(contextSelector: (data: ShareLinkContextInterface) => U): U;
        (): ShareLinkContextInterface;
    };
    export { ShareLinkProvider, ShareLinkContext, useShareLink };
}
declare module "src/atoms/Spacer" {
    interface SpacerProps {
        size: number | string;
        horizontal?: boolean;
    }
    const Spacer: ({ size, horizontal }: SpacerProps) => JSX.Element;
    export default Spacer;
}
declare module "src/atoms/Popup" {
    import { ModalProps, ViewStyle } from 'react-native';
    import React, { SetStateAction } from 'react';
    interface PopupProps extends ModalProps {
        title?: string;
        subtitle?: string;
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        showCloseIcon?: boolean;
        children: React.ReactNode;
        contentContainerStyle?: ViewStyle;
        containerStyle?: ViewStyle;
        cancelable?: boolean;
    }
    const Popup: (props: PopupProps) => JSX.Element;
    export default Popup;
}
declare module "src/components/common/Logo" {
    import React from 'react';
    const Logo: React.FC;
    export default Logo;
}
declare module "src/atoms/Card" {
    import { ViewStyle } from 'react-native';
    import React from 'react';
    interface CardProps {
        style?: ViewStyle;
        children?: React.ReactNode;
    }
    const Card: (props: CardProps) => JSX.Element;
    export default Card;
}
declare module "src/atoms/LinkButton" {
    interface LinkButtonProps {
        onPress: () => void;
        text: string;
    }
    const LinkButton: ({ onPress, text }: LinkButtonProps) => JSX.Element;
    export default LinkButton;
}
declare module "src/auth/openIDPURL" {
    export const getIDPAuthLoginURL: (returnTo?: any) => string;
    export const enableIDPAuth: (returnTo?: any) => Promise<void>;
    export const exitApp: () => void;
}
declare module "src/auth/useTokenAuth" {
    const useTokenAuth: () => {
        enableTokenAuth: (tokenparam?: string) => Promise<unknown>;
        tokenLogout: (cookieLogout?: boolean) => Promise<unknown>;
    };
    export default useTokenAuth;
}
declare module "src/auth/useIDPAuth" {
    export const useIDPAuth: () => {
        enableIDPAuth: (returnTo?: any) => Promise<void>;
        idpLogout: (dummy: any) => Promise<unknown>;
    };
}
declare module "src/subComponents/Loading" {
    const Loading: (props: {
        text: string;
        background?: string;
        indicatorColor?: string;
        textColor?: string;
    }) => JSX.Element;
    export default Loading;
}
declare module "src/auth/UserCancelPopup" {
    import React, { SetStateAction } from 'react';
    interface UserCancelPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        login: () => void;
        exitApp: () => void;
    }
    const UserCancelPopup: (props: UserCancelPopupProps) => JSX.Element;
    export default UserCancelPopup;
}
declare module "src/auth/AuthProvider" {
    import React, { Dispatch, SetStateAction } from 'react';
    export const GET_USER: import("@apollo/client").DocumentNode;
    type AuthProviderProps = {
        enableAuth?: boolean;
        children: React.ReactNode;
    };
    interface AuthContextInterface {
        authenticated: boolean;
        setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
        authLogin: () => void;
        authLogout: () => void;
        returnTo: string;
    }
    const AuthProvider: (props: AuthProviderProps) => JSX.Element;
    const useAuth: () => AuthContextInterface;
    export { AuthProvider, useAuth };
}
declare module "src/auth/IDPLogoutComponent" {
    import { ViewStyle } from 'react-native';
    interface IDPLogoutComponentProps {
        containerStyle?: ViewStyle;
    }
    const IDPLogoutComponent: (props?: IDPLogoutComponentProps) => JSX.Element;
    export default IDPLogoutComponent;
}
declare module "src/components/Share" {
    export interface CopyMeetingInfoProps {
        showSubLabel?: boolean;
    }
    export const CopyMeetingInfo: (props?: CopyMeetingInfoProps) => JSX.Element;
    const Share: () => JSX.Element;
    export default Share;
}
declare module "src/subComponents/Error" {
    const Error: (props: {
        error: {
            name: string;
            message: string;
        };
        showBack?: boolean;
    }) => JSX.Element;
    export default Error;
}
declare module "src/components/common/Error" {
    import React from 'react';
    type ErrorType = {
        name: string;
        message: string;
    };
    type ErrorContextType = {
        error: ErrorType | undefined;
        setGlobalErrorMessage: (error: any) => void;
        resetError: () => void;
    };
    const ErrorContext: React.Context<ErrorContextType>;
    const ErrorProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const CommonError: React.FC;
    export { ErrorContext, ErrorProvider };
    export default CommonError;
}
declare module "src/components/common/index" {
    import Logo from "src/components/common/Logo";
    import Error, { ErrorProvider, ErrorContext } from "src/components/common/Error";
    export { Logo, ErrorContext, ErrorProvider, Error };
}
declare module "src/components/popups/InvitePopup" {
    const InvitePopup: () => JSX.Element;
    export default InvitePopup;
}
declare module "src/components/popups/StopRecordingPopup" {
    const StopRecordingPopup: () => JSX.Element;
    export default StopRecordingPopup;
}
declare module "src/components/popups/StartScreenSharePopup" {
    const StartScreenSharePopup: () => JSX.Element;
    export default StartScreenSharePopup;
}
declare module "src/components/popups/StopScreenSharePopup" {
    const StopScreenSharePopup: () => JSX.Element;
    export default StopScreenSharePopup;
}
declare module "src/utils/useIsLocalUserSpeaking" {
    const useIsLocalUserSpeaking: () => boolean;
    export default useIsLocalUserSpeaking;
}
declare module "src/utils/index" {
    type Entry<T> = {
        [K in keyof T]: [K, T[K]];
    }[keyof T];
    export function filterObject<T extends object>(obj: T, fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean): Partial<T>;
    export function kFormatter(num: number): string | number;
    export function numFormatter(num: number): string;
    export function isEmptyObject(obj: object): boolean;
    export const randomNameGenerator: (num: number) => string;
    export function formatAMPM(date: any): string;
}
declare module "src/utils/useFindActiveSpeaker" {
    const useFindActiveSpeaker: () => number;
    export default useFindActiveSpeaker;
}
declare module "src/components/useVideoCall" {
    import React, { SetStateAction } from 'react';
    import { UidType } from "customization-api/index";
    export interface VideoCallContextInterface {
        showInvitePopup: boolean;
        setShowInvitePopup: React.Dispatch<SetStateAction<boolean>>;
        showStopRecordingPopup: boolean;
        setShowStopRecordingPopup: React.Dispatch<SetStateAction<boolean>>;
        showLayoutOption: boolean;
        setShowLayoutOption: React.Dispatch<SetStateAction<boolean>>;
        activeSpeaker: UidType;
        showStartScreenSharePopup: boolean;
        setShowStartScreenSharePopup: React.Dispatch<SetStateAction<boolean>>;
        showStopScreenSharePopup: boolean;
        setShowStopScreenSharePopup: React.Dispatch<SetStateAction<boolean>>;
    }
    interface VideoCallProviderProps {
        children: React.ReactNode;
    }
    const VideoCallProvider: (props: VideoCallProviderProps) => JSX.Element;
    /**
     *
     */
    const useVideoCall: {
        <U>(contextSelector: (data: VideoCallContextInterface) => U): U;
        (): VideoCallContextInterface;
    };
    export { VideoCallProvider, useVideoCall };
}
declare module "src/subComponents/CopyJoinInfo" {
    export interface CopyJoinInfoProps {
        showLabel?: boolean;
        showTeritaryButton?: boolean;
        render?: (onPress: () => void) => JSX.Element;
        isOnActionSheet?: boolean;
    }
    const CopyJoinInfo: (props: CopyJoinInfoProps) => JSX.Element;
    export default CopyJoinInfo;
}
declare module "src/components/participants/ParticipantSectionTitle" {
    interface PropsInterface {
        title: string;
        count?: number;
        isOpen?: boolean;
        onPress?: () => void;
    }
    export default function ParticipantSectionTitle(props: PropsInterface): JSX.Element;
}
declare module "src/atoms/UserAvatar" {
    const UserAvatar: ({ name, containerStyle, textStyle }: {
        name: any;
        containerStyle: any;
        textStyle: any;
    }) => JSX.Element;
    export default UserAvatar;
}
declare module "src/subComponents/screenshare/useScreenshare" {
    export interface ScreenshareContextInterface {
        isScreenshareActive: boolean;
        startUserScreenshare: () => void;
        stopUserScreenShare: () => void;
    }
    export const ScreenshareContext: import("react").Context<ScreenshareContextInterface>;
    const useScreenshare: {
        <U>(contextSelector: (data: ScreenshareContextInterface) => U): U;
        (): ScreenshareContextInterface;
    };
    export { useScreenshare };
}
declare module "src/subComponents/ScreenShareNotice" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     *
     * @param uid - uid of the user
     * @returns This component display overlay message "Screen sharing is active now" if user started sharing the screen.
     * why its needed : To prevent screensharing tunneling effect
     *
     */
    function ScreenShareNotice({ uid, isMax }: {
        uid: UidType;
        isMax: boolean;
    }): JSX.Element;
    export default ScreenShareNotice;
}
declare module "src/subComponents/FallbackLogo" {
    export default function FallbackLogo(name: string, isActiveSpeaker?: boolean, hideAvatar?: boolean, isMax?: boolean, avatarSize?: number): JSX.Element;
}
declare module "src/components/NetworkQualityContext" {
    import React from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    import { NetworkQualities } from "src/language/default-labels/videoCallScreenLabels";
    /**
     * Network Icons container object with color and string mapping to network quality stat [ 0 - 8]
     * 0 - Unpublished
     * 1 - Excellent
     * 2 - Good
     * 3 - Bad
     * 4 - Bad
     * 5 - Very Bad
     * 6 - Very Bad
     * 7 - Unsupported
     * 8 - Loading
     */
    export const networkIconsObject: {
        [key: number]: {
            icon: keyof IconsInterface;
            tint: string;
            text: NetworkQualities;
        };
    };
    interface NetworkQualityStatsInterface {
        [key: number]: number;
    }
    const NetworkQualityContext: React.Context<NetworkQualityStatsInterface>;
    export default NetworkQualityContext;
    export const NetworkQualityConsumer: React.Consumer<NetworkQualityStatsInterface>;
    export const NetworkQualityProvider: React.FC;
}
declare module "src/subComponents/NetworkQualityPill" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    /**
     *
     * @param networkStat - Network quality stat [ 0 - 8 ]
     * @param primaryColor - Primary color of the project
     * @param small - Reduced fontsize for pinned view min user panel
     * @param rootStyle - CSS style override primarily used for custom placement
     * @returns This component display overlay network quality indicator with an icon that expands on
     * hover to show network quality text [ ex. Excellent, Good, Bad etc ]
     *
     */
    interface NetworkQualityPillProps {
        user: RenderInterface;
    }
    const NetworkQualityPill: (props: NetworkQualityPillProps) => JSX.Element;
    export default NetworkQualityPill;
}
declare module "src/subComponents/TextWithTooltip.native" {
    /**
     * Component showing text with tooltip on mobile native
     */
    const TextWithToolTip: (props: {
        value: string;
        style: object;
        touchable?: boolean;
    }) => JSX.Element;
    const style: {
        backDrop: {
            position: "absolute";
            top: number;
            bottom: number;
            left: number;
            right: number;
            backgroundColor: string;
        };
        textContainer: {
            position: "absolute";
            zIndex: number;
            marginRight: number;
        };
        textStyle: {
            backgroundColor: string;
            padding: number;
            margin: number;
        };
    };
    export default TextWithToolTip;
}
declare module "src/subComponents/TextWithTooltip" {
    /**
     * Web and Desktop : using the TextWithToolTip - which have the browser tooltip
     * Mobile and Mobile Web : using the TextWithToolTipNative - which have the custom tooltip using modal
     */
    const _default_3: (props: {
        touchable?: boolean;
        value: string;
        style: object;
    }) => JSX.Element;
    export default _default_3;
}
declare module "src/atoms/AnimatedActiveSpeaker" {
    interface AnimatedActiveSpeakerProps {
        isSpeaking: boolean;
    }
    const AnimatedActiveSpeaker: ({ isSpeaking }: AnimatedActiveSpeakerProps) => JSX.Element;
    export default AnimatedActiveSpeaker;
}
declare module "src/pages/video-call/NameWithMicIcon" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface NameWithMicIconProps {
        user: RenderInterface;
        isMax: boolean;
        videoTileWidth: number;
    }
    const NameWithMicIcon: (props: NameWithMicIconProps) => JSX.Element;
    export default NameWithMicIcon;
}
declare module "src/utils/useIsActiveSpeaker" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a active speaker and returns true/false
     * @returns function
     */
    function useIsActiveSpeaker(): (uid: UidType) => boolean;
    export default useIsActiveSpeaker;
}
declare module "src/pages/video-call/ZoomableWrapper" {
    const ZoomableWrapper: (props: any) => JSX.Element;
    export default ZoomableWrapper;
}
declare module "src/pages/video-call/VideoRenderer" {
    import React from 'react';
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface VideoRendererProps {
        user: RenderInterface;
        isMax?: boolean;
    }
    const VideoRenderer: React.FC<VideoRendererProps>;
    export default VideoRenderer;
}
declare module "src/pages/video-call/RenderComponent" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export type RenderComponentType = {
        [key: string]: React.FC<any>;
    };
    interface RenderComponentProps {
        uid: UidType;
        isMax?: boolean;
    }
    const RenderComponent: ({ uid, isMax }: RenderComponentProps) => JSX.Element;
    export default RenderComponent;
}
declare module "src/components/GridVideo" {
    import { layoutComponent } from "customization-api/index";
    const GridVideo: layoutComponent;
    export default GridVideo;
}
declare module "src/components/PinnedVideo" {
    import { layoutComponent } from "customization-api/index";
    const PinnedVideo: layoutComponent;
    export default PinnedVideo;
}
declare module "src/pages/video-call/useLayoutsData" {
    /**
     * if custom layouts provided in customization api
     * @returns customLayouts array
     * else
     * @returns defaultLayouts array
     */
    function useLayoutsData(): import("customization-api/index").layoutObjectType[];
    export default useLayoutsData;
}
declare module "src/pages/video-call/DefaultLayouts" {
    import { layoutObjectType } from "customization-api/index";
    export const DefaultLayouts: layoutObjectType[];
    export const getPinnedLayoutName: () => string;
    export const getGridLayoutName: () => string;
    export const useSetPinnedLayout: () => () => void;
    export const useChangeDefaultLayout: () => () => void;
}
declare module "src/utils/useRemoteRequest" {
    import { UidType } from "agora-rn-uikit/src/index";
    export enum REQUEST_REMOTE_TYPE {
        audio = 0,
        video = 1
    }
    /**
     * Returns an asynchronous function to request audio/video for a remote user with the given uid or if no uid provided, request everyone else in the meeting.
     */
    function useRemoteRequest(): (type: REQUEST_REMOTE_TYPE, uid?: UidType) => Promise<void>;
    export default useRemoteRequest;
}
declare module "src/atoms/ActionMenu" {
    import { ViewStyle } from 'react-native';
    import React, { SetStateAction } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface ActionMenuItem {
        isBase64Icon?: boolean;
        icon: keyof IconsInterface;
        onHoverIcon?: keyof IconsInterface;
        iconColor: string;
        textColor: string;
        title: string;
        callback: () => void;
        onHoverCallback?: (isHovered: boolean) => void;
        onHoverContent?: JSX.Element;
        disabled?: boolean;
    }
    export interface ActionMenuProps {
        from: string;
        actionMenuVisible: boolean;
        setActionMenuVisible: React.Dispatch<SetStateAction<boolean>>;
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        items: ActionMenuItem[];
        hoverMode?: boolean;
        onHover?: (hover: boolean) => void;
        containerStyle?: ViewStyle;
    }
    const ActionMenu: (props: ActionMenuProps) => JSX.Element;
    export default ActionMenu;
}
declare module "src/components/livestream/Types" {
    import { ClientRole } from "agora-rn-uikit/src/index";
    export enum RaiseHandValue {
        TRUE = "TRUE",
        FALSE = "FALSE"
    }
    export const RaiseHandAttributeKey = "raised";
    export interface raiseHandListInterface {
        [key: string]: raiseHandItemInterface;
    }
    export interface raiseHandItemInterface {
        role: ClientRole;
        raised: RaiseHandValue;
        ts: number;
        isProcessed: boolean;
    }
    import { UidType } from "agora-rn-uikit/src/index";
    export enum requestStatus {
        AwaitingAction = "AWAITING_ACTION",
        Approved = "APPROVED",
        Cancelled = "CANCELLED"
    }
    export enum attrRequestStatus {
        RaiseHand_AwaitingAction = "AWAITING_ACTION",
        RaiseHand_Approved = "APPROVED"
    }
    export enum LiveStreamControlMessageEnum {
        raiseHandRequest = "RAISE_HAND_REQUEST",
        raiseHandRequestAccepted = "RAISE_HAND_ACCEPTED",
        raiseHandRequestRejected = "RAISE_HAND_REJECTED",
        raiseHandRequestReceived = "RAISE_HAND_RECEIVED",
        raiseHandRequestRecall = "RAISE_HAND_REQUEST_RECALL",
        raiseHandRequestRecallLocal = "RAISE_HAND_REQUEST_RECALL_LOCAL",
        raiseHandApprovedRequestRecall = "RAISE_HAND_APPROVED_REQUEST_RECALL",
        notifyAllRequestApproved = "NOTIFY_REQUEST_APPROVED",
        notifyAllRequestRejected = "NOTIFY_REQUEST_REJECTED",
        notifyHostsInChannel = "NOTIFY_HOSTS_IN_CHANNEL",
        promoteAsCoHost = "PROMOTE_AS_CO_HOST",
        coHostJoined = "CO_HOST_JOINED",
        coHostRemoved = "CO_HOST_REMOVED"
    }
    export const LSNotificationObject: {
        RAISE_HAND_REQUEST: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_RECEIVED: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_ACCEPTED: {
            text1: string;
            text2: string;
        };
        RAISE_HAND_REJECTED: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_REQUEST_RECALL: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_REQUEST_RECALL_LOCAL: {
            text1: string;
            text2: any;
        };
        RAISE_HAND_APPROVED_REQUEST_RECALL: {
            text1: string;
            text2: any;
        };
        PROMOTE_AS_CO_HOST: {
            text1: string;
            text2: any;
        };
    };
    export interface liveStreamPropsInterface {
        children: React.ReactNode;
        value: {
            setRtcProps: any;
            rtcProps: any;
            callActive: boolean;
        };
    }
    export interface liveStreamContext {
        setLastCheckedRequestTimestamp: (timestamp: number) => void;
        isPendingRequestToReview: boolean;
        raiseHandList: Record<string, raiseHandItemInterface>;
        hostApprovesRequestOfUID: (uid: number) => void;
        hostRejectsRequestOfUID: (uid: number) => void;
        audienceSendsRequest: () => void;
        audienceRecallsRequest: () => void;
        promoteAudienceAsCoHost: (uid: UidType) => void;
        coHostUids: UidType[];
    }
    export interface requestInterface {
        ts: number;
        status: requestStatus;
        uid: UidType;
    }
    export interface attrRequestInterface {
        status: attrRequestStatus;
        uid: UidType;
    }
}
declare module "src/components/livestream/LiveStreamContext" {
    import React from 'react';
    import { liveStreamContext, liveStreamPropsInterface } from "src/components/livestream/Types";
    const LiveStreamContext: React.Context<liveStreamContext>;
    export const LiveStreamContextConsumer: React.Consumer<liveStreamContext>;
    export const LiveStreamContextProvider: React.FC<liveStreamPropsInterface>;
    export default LiveStreamContext;
}
declare module "src/components/livestream/index" {
    import { LiveStreamControlMessageEnum, requestStatus, RaiseHandValue, raiseHandListInterface } from "src/components/livestream/Types";
    import LiveStreamContext, { LiveStreamContextProvider } from "src/components/livestream/LiveStreamContext";
    export { LiveStreamContext, LiveStreamContextProvider, LiveStreamControlMessageEnum, requestStatus, RaiseHandValue, };
    export type { raiseHandListInterface };
    export default LiveStreamContext;
}
declare module "src/components/contexts/LiveStreamDataContext" {
    import { UidType } from "agora-rn-uikit/src/index";
    import React from 'react';
    import { raiseHandListInterface } from "src/components/livestream/index";
    export interface LiveStreamDataObjectInterface {
        [key: number]: {
            role: number;
            raised: boolean;
            ts: number;
        };
    }
    export interface LiveStreamDataContextInterface {
        hostUids: UidType[];
        audienceUids: UidType[];
        liveStreamData: raiseHandListInterface;
    }
    interface ScreenShareProviderProps {
        children: React.ReactNode;
    }
    const LiveStreamDataProvider: (props: ScreenShareProviderProps) => JSX.Element;
    const useLiveStreamDataContext: {
        <U>(contextSelector: (data: LiveStreamDataContextInterface) => U): U;
        (): LiveStreamDataContextInterface;
    };
    export { useLiveStreamDataContext, LiveStreamDataProvider };
}
declare module "src/subComponents/RemoveMeetingPopup" {
    import React, { SetStateAction } from 'react';
    interface RemoveMeetingPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        removeUserFromMeeting: () => void;
        username: string;
    }
    const RemoveMeetingPopup: (props: RemoveMeetingPopupProps) => JSX.Element;
    export default RemoveMeetingPopup;
}
declare module "src/subComponents/RemoveScreensharePopup" {
    import React, { SetStateAction } from 'react';
    interface RemoveScreensharePopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        removeScreenShareFromMeeting: () => void;
        username: string;
    }
    const RemoveScreensharePopup: (props: RemoveScreensharePopupProps) => JSX.Element;
    export default RemoveScreensharePopup;
}
declare module "src/utils/useRemoteEndScreenshare" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function to end the screenshare for a remote user with the given uid.
     */
    const useRemoteEndScreenshare: () => (uid: UidType) => void;
    export default useRemoteEndScreenshare;
}
declare module "src/utils/useFocus" {
    import React, { SetStateAction } from 'react';
    export interface currentFocus {
        editName: boolean;
    }
    export interface FocusContextInterface {
        currentFocus: currentFocus;
        setFocus: React.Dispatch<SetStateAction<currentFocus>>;
    }
    interface FocusProviderProps {
        value: FocusContextInterface;
        children: React.ReactNode;
    }
    const FocusProvider: (props: FocusProviderProps) => JSX.Element;
    /**
     * The Focus app state governs the chatinput and editname.
     */
    const useFocus: {
        <U>(contextSelector: (data: FocusContextInterface) => U): U;
        (): FocusContextInterface;
    };
    export { FocusProvider, useFocus };
}
declare module "src/utils/PlatformWrapper" {
    const PlatformWrapper: ({ children }: {
        children: any;
    }) => JSX.Element;
    export default PlatformWrapper;
}
declare module "src/subComponents/RemoteMutePopup" {
    import React, { SetStateAction } from 'react';
    export interface ActionMenuProps {
        actionMenuVisible: boolean;
        setActionMenuVisible: React.Dispatch<SetStateAction<boolean>>;
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        name: string;
        onMutePress: () => void;
        type: 'video' | 'audio';
        action?: 'mute' | 'request';
    }
    const RemoteMutePopup: (props: ActionMenuProps) => JSX.Element;
    export default RemoteMutePopup;
}
declare module "src/components/participants/UserActionMenuOptions" {
    import { RenderInterface } from "customization-api/index";
    interface UserActionMenuOptionsOptionsProps {
        user: RenderInterface;
        actionMenuVisible: boolean;
        setActionMenuVisible: (actionMenuVisible: boolean) => void;
        btnRef: any;
        from: 'partcipant' | 'screenshare-participant' | 'video-tile';
    }
    export default function UserActionMenuOptionsOptions(props: UserActionMenuOptionsOptionsProps): JSX.Element;
}
declare module "src/components/participants/ScreenshareParticipants" {
    import { RenderInterface } from "customization-api/index";
    const ScreenshareParticipants: (props: {
        user: RenderInterface;
    }) => JSX.Element;
    export default ScreenshareParticipants;
}
declare module "src/components/styles" {
    const styles: {
        temp: {
            width: string;
            height: string;
            borderRadius: number;
            borderWidth: number;
        };
        bottomBar: {
            flex: number;
            paddingHorizontal: string;
            backgroundColor: string;
            flexDirection: string;
            justifyContent: string;
            position: string;
            margin: number;
            bottom: number;
        };
        localButton: {
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        actionSheetButton: {
            width: number;
            height: number;
        };
        localButtonSmall: {
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        localButtonText: {
            fontFamily: string;
            fontSize: number;
            marginTop: number;
            fontWeight: string;
        };
        localButtonWithoutBG: {
            borderRadius: number;
            borderColor: string;
            borderWidth: number;
            width: number;
            height: number;
            padding: number;
            display: string;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
        };
        fullWidthButton: {
            width: string;
            height: string;
            resizeMode: string;
        };
        endCall: {
            width: number;
            height: number;
        };
        endCallContainer: {
            flexDirection: string;
            justifyContent: string;
            alignItems: string;
            paddingVertical: number;
            paddingHorizontal: number;
            backgroundColor: string;
            borderRadius: number;
        };
        endCallText: {
            color: string;
            fontFamily: string;
            fontSize: number;
            marginLeft: number;
            fontWeight: string;
        };
        remoteButton: {
            width: number;
            height: number;
            borderTopRightRadius: number;
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderBottomRightRadius: number;
            borderWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            marginHorizontal: number;
            backgroundColor: string;
        };
        liveStreamHostControlBtns: {
            width: number;
            height: number;
            borderTopRightRadius: number;
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
            borderBottomRightRadius: number;
            borderWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            marginHorizontal: number;
            backgroundColor: string;
        };
        minCloseBtn: {
            alignItems: string;
            justifyContent: string;
            width: number;
            height: number;
            borderRadius: number;
            position: string;
            right: number;
            top: number;
        };
    };
    export default styles;
}
declare module "src/subComponents/RemoteAudioMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteAudioMuteProps {
        uid: UidType;
        audio: boolean;
        isHost: boolean;
        userContainerRef: any;
    }
    /**
     * Component to mute / unmute remote audio.
     * Sends a control message to another user over RTM if the local user is a host.
     * If the local user is not a host, it simply renders an image
     */
    const RemoteAudioMute: (props: RemoteAudioMuteProps) => JSX.Element;
    export default RemoteAudioMute;
}
declare module "src/subComponents/RemoteVideoMute" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Component to mute / unmute remote video.
     * Sends a control message to another user over RTM if the local user is a host.
     * If the local user is not a host, it simply renders an image
     */
    export interface RemoteVideoMuteProps {
        uid: UidType;
        video: boolean;
        isHost: boolean;
        userContainerRef: any;
    }
    const RemoteVideoMute: (props: RemoteVideoMuteProps) => JSX.Element;
    export default RemoteVideoMute;
}
declare module "src/utils/useIsHandRaised" {
    import { UidType } from "agora-rn-uikit/src/index";
    const useIsHandRaised: () => (uid: UidType) => boolean;
    export default useIsHandRaised;
}
declare module "src/subComponents/LocalVideoMute" {
    import { ImageIconProps } from "src/atoms/ImageIcon";
    /**
     * A component to mute / unmute the local video
     */
    export interface LocalVideoMuteProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        render?: (onPress: () => void, isVideoEnabled: boolean) => JSX.Element;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        iconProps?: (isVideoEnabled: boolean, isPermissionDenied: boolean) => Partial<ImageIconProps>;
        showWarningIcon?: boolean;
        isMobileView?: boolean;
    }
    function LocalVideoMute(props: LocalVideoMuteProps): JSX.Element;
    export default LocalVideoMute;
}
declare module "src/utils/useButtonTemplate" {
    import React from 'react';
    export enum ButtonTemplateName {
        topBar = 0,
        bottomBar = 1,
        actionBar = 2
    }
    export interface ButtonTemplateInferface {
        buttonTemplateName?: ButtonTemplateName;
    }
    interface ButtonTemplateProviderProps {
        value: ButtonTemplateInferface;
        children: React.ReactNode;
    }
    const ButtonTemplateProvider: (props: ButtonTemplateProviderProps) => JSX.Element;
    const useButtonTemplate: {
        <U>(contextSelector: (data: ButtonTemplateInferface) => U): U;
        (): ButtonTemplateInferface;
    };
    export { ButtonTemplateProvider, useButtonTemplate };
}
declare module "src/subComponents/LocalAudioMute" {
    import { ImageIconProps } from "src/atoms/ImageIcon";
    /**
     * A component to mute / unmute the local audio
     */
    export interface LocalAudioMuteProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        iconProps?: (isAudioEnabled: boolean, isPermissionDenied: boolean) => Partial<ImageIconProps>;
        render?: (onPress: () => void, isAudioEnabled: boolean) => JSX.Element;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        showWarningIcon?: boolean;
        isMobileView?: boolean;
    }
    function LocalAudioMute(props: LocalAudioMuteProps): JSX.Element;
    export default LocalAudioMute;
}
declare module "src/components/participants/Participant" {
    import { RenderInterface } from "agora-rn-uikit/src/index";
    interface ParticipantInterface {
        isLocal: boolean;
        name: string;
        user: RenderInterface;
        showControls: boolean;
        isHostUser: boolean;
        isAudienceUser: boolean;
        isMobile?: boolean;
        handleClose: () => {};
        updateActionSheet: (screenName: 'chat' | 'participants' | 'settings') => {};
    }
    const Participant: (props: ParticipantInterface) => JSX.Element;
    export default Participant;
}
declare module "src/components/contexts/VideoMeetingDataContext" {
    import React from 'react';
    import { UidType } from "agora-rn-uikit/src/index";
    export interface VideoMeetingDataInterface {
        hostUids: UidType[];
        attendeeUids: UidType[];
    }
    interface VideoMeetingDataProviderProps {
        children: React.ReactNode;
    }
    const VideoMeetingDataProvider: (props: VideoMeetingDataProviderProps) => JSX.Element;
    const useVideoMeetingData: {
        <U>(contextSelector: (data: VideoMeetingDataInterface) => U): U;
        (): VideoMeetingDataInterface;
    };
    export { useVideoMeetingData, VideoMeetingDataProvider };
}
declare module "src/components/participants/AllHostParticipants" {
    export default function AllHostParticipants(props: any): JSX.Element;
}
declare module "src/components/participants/AllAudienceParticipants" {
    const AllAudienceParticipants: (props: any) => JSX.Element;
    export default AllAudienceParticipants;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamRequestApprove" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteLiveStreamControlProps {
        uid: UidType;
        toastId: number;
    }
    const RemoteLiveStreamRequestApprove: (props: RemoteLiveStreamControlProps) => JSX.Element;
    export default RemoteLiveStreamRequestApprove;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamRequestReject" {
    import { UidType } from "agora-rn-uikit/src/index";
    interface RemoteLiveStreamControlProps {
        uid: UidType;
        toastId: number;
    }
    const RemoteLiveStreamRequestReject: (props: RemoteLiveStreamControlProps) => JSX.Element;
    export default RemoteLiveStreamRequestReject;
}
declare module "src/subComponents/livestream/CurrentLiveStreamRequestsView" {
    const CurrentLiveStreamRequestsView: (props: any) => JSX.Element;
    export default CurrentLiveStreamRequestsView;
}
declare module "src/components/HostControlView" {
    export interface MuteAllAudioButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const MuteAllAudioButton: (props: MuteAllAudioButtonProps) => JSX.Element;
    export interface MuteAllVideoButtonProps {
        render?: (onPress: () => void) => JSX.Element;
    }
    export const MuteAllVideoButton: (props: MuteAllVideoButtonProps) => JSX.Element;
    const HostControlView: () => JSX.Element;
    export default HostControlView;
}
declare module "src/components/CommonStyles" {
    export const SIDE_PANEL_MAX_WIDTH = "20%";
    export const SIDE_PANEL_MIN_WIDTH = 338;
    export const SIDE_PANEL_GAP = 8;
    export const CAPTION_CONTAINER_HEIGHT = 144;
    export const MOBILE_CAPTION_CONTAINER_HEIGHT = 115;
    const CommonStyles: {
        sidePanelContainerWeb: {
            flex: number;
            maxWidth: "20%";
            minWidth: number;
            borderRadius: 4;
            marginLeft: number;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowRadius: number;
            overflow: "hidden";
        };
        sidePanelContainerNative: {
            zIndex: number;
            width: "100%";
            height: "100%";
        };
        sidePanelContainerWebMinimzed: {
            position: "absolute";
            zIndex: number;
            width: "96%";
            height: "96%";
            right: "2%";
            left: "2%";
            top: "2%";
            bottom: "2%";
            borderRadius: 4;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowRadius: number;
            overflow: "hidden";
        };
    };
    export default CommonStyles;
}
declare module "react-native-toast-message/src/styles" {
    namespace _default {
        namespace base {
            const position: "absolute";
            const alignItems: "center";
            const justifyContent: "center";
        }
        namespace top {
            const top_1: number;
            export { top_1 as top };
        }
        namespace bottom {
            const bottom_1: number;
            export { bottom_1 as bottom };
        }
    }
    export default _default;
}
declare module "src/subComponents/SidePanelHeader" {
    import React from 'react';
    import { View } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    export interface SidePanelHeaderProps {
        centerComponent?: React.ReactNode;
        leadingIconName?: keyof IconsInterface;
        leadingIconOnPress?: () => void;
        trailingIconName?: keyof IconsInterface;
        trailingIconOnPress?: () => void;
        trailingIconName2?: keyof IconsInterface;
        trailingIconOnPress2?: () => void;
        isChat?: boolean;
        children?: React.ReactNode;
    }
    const SidePanelHeader: React.ForwardRefExoticComponent<SidePanelHeaderProps & React.RefAttributes<View>>;
    export const SidePanelStyles: {
        sidePanelHeader: {
            height: "auto" | 60;
            flexDirection: "row";
            justifyContent: "space-between";
            alignItems: "center";
            paddingHorizontal: number;
            paddingVertical: number;
            borderBottomWidth: number;
            borderBottomColor: string;
        };
        chatPadding: {
            paddingHorizontal: number;
            paddingVertical: number;
        };
        heading: {
            fontFamily: string;
            fontSize: 16;
            lineHeight: number;
            fontWeight: "600";
            color: string;
            alignSelf: "center";
        };
        alignCenterNoPadding: {
            padding: number;
            display: "flex";
            alignSelf: "center";
            alignItems: "center";
            justifyContent: "center";
        };
        row: {
            flexDirection: "row";
            justifyContent: "center";
            alignItems: "center";
            flex: number;
        };
    };
    export default SidePanelHeader;
}
declare module "src/subComponents/caption/utils" {
    import { RenderObjects } from "agora-rn-uikit/src/Contexts/RtcContext";
    import { TranscriptItem } from "src/subComponents/caption/useCaption";
    export function formatTime(timestamp: number): string;
    export type LanguageType = 'en-US' | 'hi-IN' | 'zh-CN' | 'zh-HK' | 'fr-FR' | 'de-DE' | 'ko-KR' | 'en-IN' | 'ar' | 'ja-JP' | 'pt-PT' | 'es-ES' | 'it-IT' | 'id-ID' | '';
    interface LanguageData {
        label: string;
        value: LanguageType;
    }
    export const langData: LanguageData[];
    export function getLanguageLabel(languageCode: LanguageType[]): string | undefined;
    export function formatDateWithTimeZone(date: Date): string;
    export const formatTranscriptContent: (meetingTranscript: TranscriptItem[], meetingTitle: string, renderList: RenderObjects) => string[];
}
declare module "src/subComponents/caption/useCaption" {
    import React from 'react';
    import { LanguageType } from "src/subComponents/caption/utils";
    export type TranscriptItem = {
        uid: string;
        time: number;
        text: string;
    };
    type CaptionObj = {
        [key: string]: {
            text: string;
            lastUpdated: number;
        };
    };
    export const CaptionContext: React.Context<{
        isCaptionON: boolean;
        setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
        isSTTActive: boolean;
        setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
        language: LanguageType[];
        setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
        meetingTranscript: TranscriptItem[];
        setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
        isLangChangeInProgress: boolean;
        setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
        captionObj: CaptionObj;
        setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
        isSTTListenerAdded: boolean;
        setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
        activeSpeakerRef: React.MutableRefObject<string>;
        prevSpeakerRef: React.MutableRefObject<string>;
    }>;
    const CaptionProvider: ({ children }: {
        children: any;
    }) => JSX.Element;
    const useCaption: {
        <U>(contextSelector: (data: {
            isCaptionON: boolean;
            setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
            isSTTActive: boolean;
            setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
            language: LanguageType[];
            setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
            meetingTranscript: TranscriptItem[];
            setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
            isLangChangeInProgress: boolean;
            setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
            captionObj: CaptionObj;
            setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
            isSTTListenerAdded: boolean;
            setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
            activeSpeakerRef: React.MutableRefObject<string>;
            prevSpeakerRef: React.MutableRefObject<string>;
        }) => U): U;
        (): {
            isCaptionON: boolean;
            setIsCaptionON: React.Dispatch<React.SetStateAction<boolean>>;
            isSTTActive: boolean;
            setIsSTTActive: React.Dispatch<React.SetStateAction<boolean>>;
            language: LanguageType[];
            setLanguage: React.Dispatch<React.SetStateAction<LanguageType[]>>;
            meetingTranscript: TranscriptItem[];
            setMeetingTranscript: React.Dispatch<React.SetStateAction<TranscriptItem[]>>;
            isLangChangeInProgress: boolean;
            setIsLangChangeInProgress: React.Dispatch<React.SetStateAction<boolean>>;
            captionObj: CaptionObj;
            setCaptionObj: React.Dispatch<React.SetStateAction<CaptionObj>>;
            isSTTListenerAdded: boolean;
            setIsSTTListenerAdded: React.Dispatch<React.SetStateAction<boolean>>;
            activeSpeakerRef: React.MutableRefObject<string>;
            prevSpeakerRef: React.MutableRefObject<string>;
        };
    };
    export { CaptionProvider, useCaption };
}
declare module "src/atoms/Checkbox" {
    import React from 'react';
    import { TextStyle } from 'react-native';
    interface CheckboxProps {
        label: string;
        checked: boolean;
        onChange: (checked: boolean) => void;
        labelStye?: TextStyle;
        disabled?: boolean;
    }
    const Checkbox: React.FC<CheckboxProps>;
    export default Checkbox;
}
declare module "src/atoms/DropDownMulti" {
    import React, { FC } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    import { LanguageType } from "src/subComponents/caption/utils";
    interface Props {
        icon?: keyof IconsInterface;
        error: boolean;
        setError: React.Dispatch<React.SetStateAction<boolean>>;
        selectedValues: LanguageType[];
        setSelectedValues: React.Dispatch<React.SetStateAction<LanguageType[]>>;
        defaultSelectedValues?: LanguageType[];
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
    const DropdownMulti: FC<Props>;
    export default DropdownMulti;
}
declare module "src/subComponents/caption/LanguageSelectorPopup" {
    import React, { SetStateAction } from 'react';
    import { LanguageType } from "src/subComponents/caption/utils";
    interface LanguageSelectorPopup {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        onConfirm: (param: boolean, lang: LanguageType[]) => void;
        isFirstTimePopupOpen?: boolean;
    }
    const LanguageSelectorPopup: (props: LanguageSelectorPopup) => JSX.Element;
    export default LanguageSelectorPopup;
}
declare module "src/subComponents/caption/useSTTAPI" {
    import { LanguageType } from "src/subComponents/caption/utils";
    interface IuseSTTAPI {
        start: (lang: LanguageType[]) => Promise<{
            message: string;
        } | null>;
        stop: () => Promise<void>;
        restart: (lang: LanguageType[]) => Promise<void>;
        isAuthorizedSTTUser: () => boolean;
    }
    const useSTTAPI: () => IuseSTTAPI;
    export default useSTTAPI;
}
declare module "src/subComponents/caption/proto/ptoto" {
    export = $root;
    var $root: $protobuf.Namespace;
    import $protobuf = require("protobufjs/light");
}
declare module "src/subComponents/caption/useStreamMessageUtils" {
    type StreamMessageCallback = (args: [number, Uint8Array]) => void;
    const useStreamMessageUtils: () => {
        streamMessageCallback: StreamMessageCallback;
    };
    export default useStreamMessageUtils;
}
declare module "src/subComponents/caption/useTranscriptDownload" {
    const useTranscriptDownload: () => {
        downloadTranscript: () => Promise<string | null>;
    };
    export default useTranscriptDownload;
}
declare module "src/pages/video-call/SidePanelHeader" {
    export const SettingsHeader: (props: any) => JSX.Element;
    export const PeopleHeader: () => JSX.Element;
    export const ChatHeader: () => JSX.Element;
    export const TranscriptHeader: (props: any) => JSX.Element;
}
declare module "src/subComponents/caption/useCaptionWidth" {
    interface CaptionWidthReturnType {
        isCaptionNotFullWidth: boolean;
        transcriptHeight: string;
    }
    const useCaptionWidth: () => CaptionWidthReturnType;
    export default useCaptionWidth;
}
declare module "src/components/ParticipantsView" {
    const ParticipantView: (props: any) => JSX.Element;
    export default ParticipantView;
}
declare module "src/subComponents/ChatBubble" {
    import { ChatBubbleProps } from "src/components/ChatContext";
    const ChatBubble: (props: ChatBubbleProps) => JSX.Element;
    export default ChatBubble;
}
declare module "src/subComponents/ChatContainer" {
    import React from 'react';
    import { ChatBubbleProps } from "src/components/ChatContext";
    /**
     * Chat container is the component which renders all the chat messages
     * It retrieves all the messages from the appropriate stores (Message store an provate message store)
     * and maps it to a ChatBubble
     */
    const ChatContainer: (props?: {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
    }) => JSX.Element;
    export default ChatContainer;
}
declare module "src/subComponents/chat/ChatParticipants" {
    const ChatParticipants: (props: any) => JSX.Element;
    export default ChatParticipants;
}
declare module "src/components/Chat" {
    import React from 'react';
    import { ChatBubbleProps } from "src/components/ChatContext";
    import { ChatTextInputProps, ChatSendButtonProps } from "src/subComponents/ChatInput";
    export interface ChatProps {
        chatBubble?: React.ComponentType<ChatBubbleProps>;
        chatInput?: React.ComponentType<ChatTextInputProps>;
        chatSendButton?: React.ComponentType<ChatSendButtonProps>;
        showHeader?: boolean;
    }
    const Chat: (props?: ChatProps) => JSX.Element;
    export default Chat;
}
declare module "src/components/Settings" {
    export interface SettingsIconButtonProps {
        render?: (onPress: () => void, isPanelActive: boolean) => JSX.Element;
    }
    const Settings: (props: SettingsIconButtonProps) => JSX.Element;
    export const SettingsWithViewWrapper: (props: SettingsIconButtonProps) => JSX.Element;
    export default Settings;
}
declare module "src/subComponents/LayoutIconDropdown" {
    import React, { SetStateAction } from 'react';
    interface LayoutIconDropdownProps {
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        showDropdown: boolean;
        setShowDropdown: React.Dispatch<SetStateAction<boolean>>;
        caretPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        onHoverPlaceHolder?: 'vertical' | 'horizontal';
    }
    const LayoutIconDropdown: (props: LayoutIconDropdownProps) => JSX.Element;
    export default LayoutIconDropdown;
}
declare module "src/subComponents/LayoutIconButton" {
    interface LayoutIconButtonInterface {
        render?: (onPress: () => void) => JSX.Element;
        showLabel?: boolean;
    }
    const LayoutIconButton: (props: LayoutIconButtonInterface) => JSX.Element;
    export default LayoutIconButton;
}
declare module "src/atoms/ParticipantsCount" {
    const ParticipantsCount: () => JSX.Element;
    export default ParticipantsCount;
}
declare module "src/atoms/RecordingInfo" {
    const RecordingInfo: ({ recordingLabel }: {
        recordingLabel?: string;
    }) => JSX.Element;
    export default RecordingInfo;
}
declare module "src/components/Navbar" {
    import { TextStyle } from 'react-native';
    import { SettingsIconButtonProps } from "src/components/Settings";
    import { CopyJoinInfoProps } from "src/subComponents/CopyJoinInfo";
    export const ParticipantsCountView: ({ isMobileView, }: {
        isMobileView?: boolean;
    }) => JSX.Element;
    interface ParticipantsIconButtonProps {
        liveStreamingRequestAlertIconPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        isOnActionSheet?: boolean;
        render?: (onPress: () => void, isPanelActive: boolean) => JSX.Element;
    }
    export const ParticipantsIconButton: (props: ParticipantsIconButtonProps) => JSX.Element;
    interface ChatIconButtonProps {
        badgeContainerPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        badgeTextStyle?: TextStyle;
        render?: (onPress: () => void, isPanelActive: boolean, totalUnreadCount: number) => JSX.Element;
        isMobileView?: boolean;
        isOnActionSheet?: boolean;
    }
    export const ChatIconButton: (props: ChatIconButtonProps) => JSX.Element;
    interface LayoutIconButtonProps {
        modalPosition?: {
            top?: number;
            right?: number;
            left?: number;
            bottom?: number;
        };
        render?: (onPress: () => void) => JSX.Element;
    }
    const Navbar: () => JSX.Element;
    type NavBarComponentsArrayProps = [
        (props: CopyJoinInfoProps) => JSX.Element,
        () => JSX.Element,
        (props: ParticipantsIconButtonProps) => JSX.Element,
        (props: ChatIconButtonProps) => JSX.Element,
        (props: LayoutIconButtonProps) => JSX.Element,
        (props: SettingsIconButtonProps) => JSX.Element
    ];
    export const NavBarComponentsArray: NavBarComponentsArrayProps;
    export default Navbar;
}
declare module "src/atoms/Dropdown" {
    import { FC } from 'react';
    import { IconsInterface } from "src/atoms/CustomIcon";
    interface Props {
        label: string;
        icon?: keyof IconsInterface;
        data: Array<{
            label: string;
            value: string;
        }>;
        onSelect: (item: {
            label: string;
            value: string;
        }) => void;
        enabled: boolean;
        selectedValue: string;
    }
    const Dropdown: FC<Props>;
    export default Dropdown;
}
declare module "src/components/precall/usePreCall" {
    import React from 'react';
    import { ApolloError } from '@apollo/client';
    export interface PreCallContextInterface {
        callActive: boolean;
        setCallActive: React.Dispatch<React.SetStateAction<boolean>>;
        error?: ApolloError;
        isCameraAvailable?: boolean;
        setCameraAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isMicAvailable?: boolean;
        setMicAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isSpeakerAvailable?: boolean;
        setSpeakerAvailable: React.Dispatch<React.SetStateAction<boolean>>;
        isPermissionRequested: boolean;
        setIsPermissionRequested: React.Dispatch<React.SetStateAction<boolean>>;
    }
    interface PreCallProviderProps {
        value: PreCallContextInterface;
        children: React.ReactNode;
    }
    const PreCallProvider: (props: PreCallProviderProps) => JSX.Element;
    const usePreCall: {
        <U>(contextSelector: (data: PreCallContextInterface) => U): U;
        (): PreCallContextInterface;
    };
    export { PreCallProvider, usePreCall };
}
declare module "src/utils/pendingStateUpdateHelper" {
    /**
     * Wrapper around 200ms buffered updates.
     * @param action - The asynchronous action that causes update
     * @param cb - Callback method called with true if 200ms exceeded in performing
       * provided action and called with false after action completed
     */
    const pendingStateUpdateHelper: (action: () => Promise<any>, cb: (exceeded200ms: boolean) => void) => Promise<void>;
    export default pendingStateUpdateHelper;
}
declare module "src/subComponents/SelectDevice" {
    interface SelectVideoDeviceProps {
        render?: (selectedCam: string, setSelectedCam: (cam: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectAudioDeviceProps {
        render?: (selectedMic: string, setSelectedMic: (mic: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectSpeakerDeviceProps {
        render?: (selectedSpeaker: string, setSelectedSpeaker: (speaker: string) => void, deviceList: MediaDeviceInfo[], isDisabled: boolean) => JSX.Element;
        isIconDropdown?: boolean;
    }
    interface SelectDeviceProps {
        isIconDropdown?: boolean;
    }
    const SelectDevice: (props: SelectDeviceProps) => JSX.Element;
    export const SelectDeviceComponentsArray: [
        (props: SelectVideoDeviceProps) => JSX.Element,
        (props: SelectAudioDeviceProps) => JSX.Element,
        (props: SelectSpeakerDeviceProps) => JSX.Element
    ];
    export default SelectDevice;
}
declare module "src/subComponents/LanguageSelector" {
    const LanguageSelector: () => JSX.Element;
    export default LanguageSelector;
}
declare module "src/components/SettingsView" {
    const SettingsView: (props: any) => JSX.Element;
    export default SettingsView;
}
declare module "src/subComponents/Recording" {
    export interface RecordingButtonProps {
        showLabel?: boolean;
        render?: (onPress: () => void, isRecordingActive: boolean) => JSX.Element;
        isOnActionSheet?: boolean;
    }
    const Recording: (props: RecordingButtonProps) => JSX.Element;
    export default Recording;
}
declare module "src/subComponents/LocalSwitchCamera" {
    export interface LocalSwitchCameraProps {
        showLabel?: boolean;
        render?: (onPress: () => void, isVideoEnabled: boolean) => JSX.Element;
        disabled?: boolean;
    }
    function LocalSwitchCamera(props: LocalSwitchCameraProps): JSX.Element;
    export default LocalSwitchCamera;
}
declare module "src/subComponents/screenshare/ScreenshareButton" {
    /**
     * A component to start and stop screen sharing on web clients.
     * Screen sharing is not yet implemented on mobile platforms.
     * Electron has it's own screen sharing component
     */
    export interface ScreenshareButtonProps {
        render?: (onPress: () => void, isScreenshareActive: boolean) => JSX.Element;
        showLabel?: boolean;
        isOnActionSheet?: boolean;
    }
    const ScreenshareButton: (props: ScreenshareButtonProps) => JSX.Element;
    export default ScreenshareButton;
}
declare module "src/subComponents/livestream/controls/RemoteLiveStreamApprovedRequestRecall" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteLiveStreamApprovedRequestRecallProps {
        uid: UidType;
    }
    const RemoteLiveStreamApprovedRequestRecall: (props: RemoteLiveStreamApprovedRequestRecallProps) => JSX.Element;
    export default RemoteLiveStreamApprovedRequestRecall;
}
declare module "src/subComponents/livestream/controls/LocalRaiseHand" {
    interface LocalRaiseHandProps {
        showLabel?: boolean;
    }
    const LocalRaiseHand: (props: LocalRaiseHandProps) => JSX.Element;
    export default LocalRaiseHand;
}
declare module "src/subComponents/livestream/ApprovedLiveStreamControlsView" {
    const ApprovedLiveStreamControlsView: (props: {
        uid: number;
        p_styles: any;
    }) => JSX.Element;
    export default ApprovedLiveStreamControlsView;
}
declare module "src/subComponents/livestream/index" {
    import RemoteLiveStreamApprovedRequestRecall, { RemoteLiveStreamApprovedRequestRecallProps } from "src/subComponents/livestream/controls/RemoteLiveStreamApprovedRequestRecall";
    import RemoteLiveStreamRequestApprove, { RemoteLiveStreamControlProps } from "src/subComponents/livestream/controls/RemoteLiveStreamRequestApprove";
    import RemoteLiveStreamRequestReject from "src/subComponents/livestream/controls/RemoteLiveStreamRequestReject";
    import LocalRaiseHand from "src/subComponents/livestream/controls/LocalRaiseHand";
    import CurrentLiveStreamRequestsView from "src/subComponents/livestream/CurrentLiveStreamRequestsView";
    import ApprovedLiveStreamControlsView from "src/subComponents/livestream/ApprovedLiveStreamControlsView";
    export type { RemoteLiveStreamApprovedRequestRecallProps, RemoteLiveStreamControlProps, };
    export { RemoteLiveStreamApprovedRequestRecall, RemoteLiveStreamRequestApprove, RemoteLiveStreamRequestReject, LocalRaiseHand, CurrentLiveStreamRequestsView, ApprovedLiveStreamControlsView, };
}
declare module "src/components/livestream/views/LiveStreamControls" {
    export interface LiveStreamControlsProps {
        showControls: boolean;
        isDesktop: boolean;
        showLabel?: boolean;
    }
    const LiveStreamControls: (props: LiveStreamControlsProps) => JSX.Element;
    export default LiveStreamControls;
}
declare module "src/subComponents/caption/DownloadTranscriptBtn" {
    import { TextStyle, ViewStyle } from 'react-native';
    import { IconsInterface } from "src/atoms/CustomIcon";
    interface DownloadTranscriptBtn {
        textStyle?: TextStyle;
        containerStyle?: ViewStyle;
        iconName?: keyof IconsInterface;
        text?: string;
    }
    const DownloadTranscriptBtn: (props: DownloadTranscriptBtn) => JSX.Element;
    export default DownloadTranscriptBtn;
}
declare module "src/subComponents/EndcallPopup" {
    import React, { SetStateAction } from 'react';
    interface EndcallPopupProps {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<SetStateAction<boolean>>;
        endCall: () => void;
    }
    const EndcallPopup: (props: EndcallPopupProps) => JSX.Element;
    export default EndcallPopup;
}
declare module "src/subComponents/LocalEndCall" {
    export interface LocalEndcallProps {
        showLabel?: boolean;
        isOnActionSheet?: boolean;
        render?: (onPress: () => void) => JSX.Element;
    }
    const LocalEndcall: (props: LocalEndcallProps) => JSX.Element;
    export default LocalEndcall;
}
declare module "src/components/Controls" {
    import { LocalAudioMuteProps } from "src/subComponents/LocalAudioMute";
    import { LocalVideoMuteProps } from "src/subComponents/LocalVideoMute";
    import { RecordingButtonProps } from "src/subComponents/Recording";
    import { LocalSwitchCameraProps } from "src/subComponents/LocalSwitchCamera";
    import { ScreenshareButtonProps } from "src/subComponents/screenshare/ScreenshareButton";
    import { LiveStreamControlsProps } from "src/components/livestream/views/LiveStreamControls";
    import { LocalEndcallProps } from "src/subComponents/LocalEndCall";
    const Controls: () => JSX.Element;
    type ControlsComponentsArrayProps = [
        (props: LocalAudioMuteProps) => JSX.Element,
        (props: LocalVideoMuteProps) => JSX.Element,
        (props: LocalSwitchCameraProps) => JSX.Element,
        (props: ScreenshareButtonProps) => JSX.Element,
        (props: RecordingButtonProps) => JSX.Element,
        (props: LocalEndcallProps) => JSX.Element,
        (props: LiveStreamControlsProps) => JSX.Element
    ];
    export const ControlsComponentsArray: ControlsComponentsArrayProps;
    export default Controls;
}
declare module "src/pages/video-call/index" {
    import ParticipantsView from "src/components/ParticipantsView";
    import Chat from "src/components/Chat";
    import Navbar, { NavBarComponentsArray } from "src/components/Navbar";
    import SettingsView from "src/components/SettingsView";
    import Controls, { ControlsComponentsArray } from "src/components/Controls";
    import ChatBubble from "src/subComponents/ChatBubble";
    import { ChatTextInput, ChatSendButton } from "src/subComponents/ChatInput";
    export { ParticipantsView, Chat, Navbar, NavBarComponentsArray, SettingsView, Controls, ControlsComponentsArray, ChatBubble, ChatTextInput, ChatSendButton, };
}
declare module "src/pages/video-call/VideoComponent" {
    const VideoComponent: () => JSX.Element;
    export default VideoComponent;
}
declare module "src/subComponents/caption/CaptionIcon" {
    interface CaptionIconProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        isMobileView?: boolean;
        closeActionSheet?: () => void;
    }
    const CaptionIcon: (props: CaptionIconProps) => JSX.Element;
    export default CaptionIcon;
}
declare module "src/subComponents/caption/TranscriptIcon" {
    interface TranscriptIconProps {
        plainIconHoverEffect?: boolean;
        showToolTip?: boolean;
        showLabel?: boolean;
        disabled?: boolean;
        isOnActionSheet?: boolean;
        isMobileView?: boolean;
    }
    const TranscriptIcon: (props: TranscriptIconProps) => JSX.Element;
    export default TranscriptIcon;
}
declare module "src/atoms/Carousel" {
    import React from 'react';
    interface CarouselItem {
        id: string;
        component: React.ReactNode;
    }
    interface CarouselProps {
        data: CarouselItem[];
    }
    const Carousel: React.FC<CarouselProps>;
    export default Carousel;
}
declare module "src/pages/video-call/ActionSheetContent" {
    interface ShowMoreIconProps {
        isExpanded: boolean;
        showNotification: boolean;
        onPress: () => void;
    }
    interface ChatIconProps {
        showLabel?: boolean;
    }
    interface ParticipantsIconProps {
        showNotification: boolean;
    }
    interface SwitchCameraIconProps {
        disabled: boolean;
    }
    interface SettingsIconProps {
        onPress: () => void;
    }
    interface AudioIconProps {
        isMobileView: boolean;
        isOnActionSheet: boolean;
        showLabel: boolean;
        disabled: boolean;
    }
    interface CamIconProps {
        isMobileView: boolean;
        isOnActionSheet: boolean;
        showLabel: boolean;
        disabled: boolean;
    }
    interface EndCallIconProps {
        showLabel: boolean;
        isOnActionSheet: boolean;
    }
    interface LayoutIconProps {
        showLabel?: boolean;
    }
    type ActionSheetComponentsProps = [
        (props: AudioIconProps) => JSX.Element,
        (props: CamIconProps) => JSX.Element,
        (props: EndCallIconProps) => JSX.Element,
        (props: ShowMoreIconProps) => JSX.Element,
        (props: ChatIconProps) => JSX.Element,
        (props: ParticipantsIconProps) => JSX.Element,
        (props: any) => JSX.Element,
        (props: SwitchCameraIconProps) => JSX.Element,
        (props: LayoutIconProps) => JSX.Element,
        (props: SettingsIconProps) => JSX.Element,
        (props: any) => JSX.Element
    ];
    export const ActionSheetComponentsArray: ActionSheetComponentsProps;
    const ActionSheetContent: (props: any) => JSX.Element;
    export default ActionSheetContent;
}
declare module "react-native-toast-message/src/utils/prop-types" {
    export const stylePropType: PropTypes.Requireable<NonNullable<number | object>>;
    import PropTypes from "prop-types";
}
declare module "react-native-toast-message/src/colors/index" {
    export default colors;
    namespace colors {
        const white: string;
        const blazeOrange: string;
        const mantis: string;
        const alto: string;
        const dustyGray: string;
        const lightSkyBlue: string;
        const black: string;
    }
}
declare module "react-native-toast-message/src/components/base/styles" {
    export const HEIGHT: 105;
    namespace _default {
        namespace base {
            export const flexDirection: "row";
            export { HEIGHT as height };
            export const borderRadius: number;
            export const backgroundColor: string;
            export namespace shadowOffset {
                const width: number;
                const height: number;
            }
            export const shadowOpacity: number;
            export const shadowRadius: number;
            export const elevation: number;
        }
        namespace borderTop {
            const borderTopWidth: number;
            const borderTopColor: string;
        }
        namespace contentContainer {
            export const paddingLeft: number;
            export const flex: number;
            const flexDirection_1: "row";
            export { flexDirection_1 as flexDirection };
            export const justifyContent: "flex-start";
        }
        namespace text1 {
            export const fontSize: number;
            export const fontFamily: string;
            const width_1: "100%";
            export { width_1 as width };
            export const fontWeight: "600";
            export const marginRight: number;
        }
        namespace text2 {
            const fontSize_1: number;
            export { fontSize_1 as fontSize };
            const fontFamily_1: string;
            export { fontFamily_1 as fontFamily };
            const width_2: "100%";
            export { width_2 as width };
            const fontWeight_1: "400";
            export { fontWeight_1 as fontWeight };
        }
    }
    export default _default;
}
declare module "src/subComponents/Checkbox" {
    /**
     * A checkbox component for the web and electron
     */
    const Checkbox: (props: any) => JSX.Element;
    export default Checkbox;
}
declare module "react-native-toast-message/src/components/checkbox" {
    export default BaseToast;
    function BaseToast({ leadingIcon, trailingIcon, text1, text2, onPress, style, contentContainerStyle, text1Style, text2Style, subTextStyle, activeOpacity, text1NumberOfLines, text2NumberOfLines, primaryBtn, secondaryBtn, checkbox }: {
        leadingIcon: any;
        trailingIcon: any;
        text1: any;
        text2: any;
        onPress: any;
        style: any;
        contentContainerStyle: any;
        text1Style: any;
        text2Style: any;
        subTextStyle: any;
        activeOpacity: any;
        text1NumberOfLines: any;
        text2NumberOfLines: any;
        primaryBtn: any;
        secondaryBtn: any;
        checkbox: any;
    }): JSX.Element;
    namespace BaseToast {
        export { HEIGHT };
        export namespace propTypes {
            export const leadingIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const trailingIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const text1: PropTypes.Requireable<string>;
            export const text2: PropTypes.Requireable<any>;
            export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
            export { stylePropType as style };
            export { stylePropType as contentContainerStyle };
            export { stylePropType as text1Style };
            export { stylePropType as text2Style };
            export const activeOpacity: PropTypes.Requireable<number>;
            export const text1NumberOfLines: PropTypes.Requireable<number>;
            export const text2NumberOfLines: PropTypes.Requireable<number>;
        }
        export namespace defaultProps {
            const leadingIcon_1: any;
            export { leadingIcon_1 as leadingIcon };
            const trailingIcon_1: any;
            export { trailingIcon_1 as trailingIcon };
            const text1_1: any;
            export { text1_1 as text1 };
            const text2_1: any;
            export { text2_1 as text2 };
            const onPress_1: any;
            export { onPress_1 as onPress };
            export const style: any;
            export const contentContainerStyle: any;
            export const text1Style: any;
            export const text2Style: any;
            const activeOpacity_1: number;
            export { activeOpacity_1 as activeOpacity };
            const text1NumberOfLines_1: number;
            export { text1NumberOfLines_1 as text1NumberOfLines };
            const text2NumberOfLines_1: number;
            export { text2NumberOfLines_1 as text2NumberOfLines };
        }
    }
    import { HEIGHT } from "react-native-toast-message/src/components/base/styles";
    import PropTypes from "prop-types";
    import { stylePropType } from "react-native-toast-message/src/utils/prop-types";
}
declare module "src/subComponents/ToastConfig" {
    const ToastConfig: {
        success: ({ text1, text2, props, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
        }) => JSX.Element;
        error: ({ text1, text2, props, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
        }) => JSX.Element;
        info: ({ text1, text2, props, primaryBtn, secondaryBtn, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
            primaryBtn: any;
            secondaryBtn: any;
        }) => JSX.Element;
        checked: ({ text1, text2, props, primaryBtn, secondaryBtn, checkbox, ...rest }: {
            [x: string]: any;
            text1: any;
            text2: any;
            props: any;
            primaryBtn: any;
            secondaryBtn: any;
            checkbox: any;
        }) => JSX.Element;
    };
    export default ToastConfig;
}
declare module "src/components/ToastComponent" {
    const ToastComponent: () => JSX.Element;
    export default ToastComponent;
}
declare module "src/components/useToast" {
    import React from 'react';
    interface ToastContextInterface {
        isActionSheetVisible: boolean;
        setActionSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
    }
    const ToastContext: React.Context<ToastContextInterface>;
    const ToastProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    const useToast: {
        <U>(contextSelector: (data: ToastContextInterface) => U): U;
        (): ToastContextInterface;
    };
    export { useToast, ToastContext, ToastProvider };
}
declare module "src/pages/video-call/ActionSheetHandle" {
    import { SidePanelType } from "src/subComponents/SidePanelEnum";
    const ActionSheetHandle: (props: {
        sidePanel: SidePanelType;
    }) => JSX.Element;
    export default ActionSheetHandle;
}
declare module "src/subComponents/caption/TranscriptText" {
    interface TranscriptTextProps {
        user: string;
        time: number;
        value: string;
        searchQuery?: string;
    }
    export const TranscriptText: ({ user, time, value, searchQuery, }: TranscriptTextProps) => JSX.Element;
}
declare module "src/subComponents/caption/Transcript" {
    interface TranscriptProps {
        showHeader?: boolean;
    }
    const Transcript: (props: TranscriptProps) => JSX.Element;
    export default Transcript;
    export const styles: {
        contentContainer: {
            paddingHorizontal: number;
        };
        container: {
            alignItems: "flex-start";
        };
        btnContainerStyle: {
            paddingVertical: number;
            paddingHorizontal: number;
            backgroundColor: string;
            borderRadius: number;
        };
        btnContainer: {};
        btnTxtStyle: {
            fontSize: 14;
            lineHeight: 14;
            fontWeight: "600";
            textTransform: "capitalize";
        };
        showLatestBtn: {
            backgroundColor: string;
            paddingVertical: number;
            paddingLeft: number;
            paddingRight: number;
            minWidth: "auto";
            borderRadius: number;
        };
        textStyleBtn: {
            color: string;
            fontFamily: string;
            fontSize: 14;
            lineHeight: number;
            fontWeight: "400";
            textTransform: "capitalize";
        };
        searchContainer: {
            flexDirection: "row";
            alignItems: "center";
            padding: number;
            marginHorizontal: number;
            marginVertical: number;
            borderRadius: number;
            height: number;
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        searchInput: {
            outlineStyle: string;
            flex: number;
            height: number;
            borderRadius: number;
            marginRight: number;
            color: string;
            fontFamily: string;
            fontWeight: "400";
            fontSize: 14;
            lineHeight: 18;
            width: "100%";
            borderWidth: number;
        };
        inputFocused: {
            borderColor: string;
        };
        searchButton: {
            backgroundColor: string;
            borderRadius: number;
            paddingVertical: number;
            paddingHorizontal: number;
        };
        searchButtonText: {
            color: string;
            fontSize: number;
        };
        emptyMsg: {
            color: string;
            alignSelf: "center";
            fontSize: number;
            fontStyle: "italic";
        };
        langChange: {
            marginLeft: number;
            color: string;
            fontFamily: string;
            fontWeight: "400";
            fontSize: number;
            lineHeight: number;
            fontStyle: "italic";
        };
        langChangeContainer: {
            marginBottom: number;
            flexDirection: "row";
        };
        footer: {
            borderWidth: number;
            paddingVertical: number;
            borderColor: string;
            borderRadius: number;
            marginTop: "auto";
        };
        content: {
            flexGrow: number;
        };
    };
}
declare module "src/pages/video-call/ActionSheet" {
    import './ActionSheetStyles.css';
    const ActionSheet: () => JSX.Element;
    export default ActionSheet;
}
declare module "src/subComponents/caption/CaptionText" {
    import React from 'react';
    interface CaptionTextProps {
        user: string;
        value: string;
        activeSpeakersCount: number;
        isActiveSpeaker?: boolean;
        activelinesAvailable?: number;
        setActiveLinesAvailable?: React.Dispatch<React.SetStateAction<number>>;
        inActiveLinesAvailable?: number;
        setInActiveLinesAvaialble?: React.Dispatch<React.SetStateAction<number>>;
    }
    const CaptionText: ({ user, value, activeSpeakersCount, isActiveSpeaker, activelinesAvailable, setActiveLinesAvailable, inActiveLinesAvailable, setInActiveLinesAvaialble, }: CaptionTextProps) => JSX.Element;
    export default CaptionText;
}
declare module "src/subComponents/caption/Caption" {
    import React from 'react';
    const _default_4: React.NamedExoticComponent<{}>;
    export default _default_4;
}
declare module "src/subComponents/caption/CaptionContainer" {
    const CaptionContainer: () => JSX.Element;
    export default CaptionContainer;
}
declare module "src/utils/useAppState" {
    const useAppState: () => "active" | "background" | "unknown" | "inactive" | "extension";
    export default useAppState;
}
declare module "src/pages/video-call/VideoCallMobileView" {
    const VideoCallMobileView: () => JSX.Element;
    export default VideoCallMobileView;
}
declare module "src/pages/video-call/VideoCallScreen" {
    const VideoCallScreen: () => JSX.Element;
    export default VideoCallScreen;
}
declare module "src/subComponents/RemoteEndCall" {
    import { UidType } from "agora-rn-uikit/src/index";
    export interface RemoteEndCallProps {
        uid: UidType;
        isHost: boolean;
    }
    const RemoteEndCall: (props: RemoteEndCallProps) => JSX.Element;
    export default RemoteEndCall;
}
declare module "src/subComponents/SidePanelButtons" {
    import { ChatSendButtonProps } from "src/subComponents/ChatInput";
    import { RemoteLiveStreamApprovedRequestRecallProps, RemoteLiveStreamControlProps } from "src/subComponents/livestream/index";
    import { RemoteAudioMuteProps } from "src/subComponents/RemoteAudioMute";
    import { RemoteVideoMuteProps } from "src/subComponents/RemoteVideoMute";
    import { RemoteEndCallProps } from "src/subComponents/RemoteEndCall";
    import { MuteAllAudioButtonProps, MuteAllVideoButtonProps } from "src/components/HostControlView";
    type SidePanelButtonsArrayProps = [
        (props: RemoteAudioMuteProps) => JSX.Element,
        (props: RemoteVideoMuteProps) => JSX.Element,
        (props: RemoteEndCallProps) => JSX.Element,
        (props: RemoteLiveStreamApprovedRequestRecallProps) => JSX.Element,
        (props: RemoteLiveStreamControlProps) => JSX.Element,
        (props: RemoteLiveStreamControlProps) => JSX.Element,
        (props: ChatSendButtonProps) => JSX.Element,
        (props: MuteAllAudioButtonProps) => JSX.Element,
        (props: MuteAllVideoButtonProps) => JSX.Element
    ];
    export const SidePanelButtonsArray: SidePanelButtonsArrayProps;
}
declare module "customization-api/sub-components" {
    export { default as HorizontalRule } from "src/atoms/HorizontalRule";
    export { default as PrimaryButton } from "src/atoms/PrimaryButton";
    export { default as SecondaryButton } from "src/atoms/SecondaryButton";
    export { default as TextInput } from "src/atoms/TextInput";
    export { Icons } from "agora-rn-uikit/src/index";
    export { ParticipantsView, Controls, ControlsComponentsArray, Navbar, NavBarComponentsArray, ChatBubble, ChatSendButton, ChatTextInput, Chat, SettingsView, } from "src/pages/video-call/index";
    export { default as GridLayout } from "src/components/GridVideo";
    export { default as PinnedLayout } from "src/components/PinnedVideo";
    export { default as VideoComponent } from "src/pages/video-call/VideoComponent";
    export { default as MaxVideoView } from "src/pages/video-call/VideoRenderer";
    export { default as RenderComponent } from "src/pages/video-call/RenderComponent";
    export { default as NameWithMicIcon } from "src/pages/video-call/NameWithMicIcon";
    export { default as NetworkQualityPill } from "src/subComponents/NetworkQualityPill";
    export { default as VideocallScreen } from "src/pages/video-call/VideoCallScreen";
    export { SidePanelButtonsArray } from "src/subComponents/SidePanelButtons";
    export { ImageIcon as UiKitImageIcon, MaxVideoView as UiKitMaxVideoView, BtnTemplate as UiKitBtnTemplate, ClientRole as UikitClientRole, ChannelProfile as UikitChannelProfile, } from "agora-rn-uikit/src/index";
    export type { BtnTemplateInterface as UikitBtnTemplateInterface } from "agora-rn-uikit/src/index";
}
declare module "src/utils/useIsHost" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is a host and returns true/false
     * @returns function
     */
    function useIsHost(): (uid: UidType) => boolean;
    export default useIsHost;
}
declare module "src/utils/useIsAttendee" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks whether the given uid is an attendee and returns true/false
     * @returns function
     */
    function useIsAttendee(): (uid: UidType) => boolean;
    export default useIsAttendee;
}
declare module "src/utils/useIsAudioEnabled" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks the audio state for a given uid and returns true/false
     * @returns function
     */
    function useIsAudioEnabled(): (uid: UidType) => boolean;
    export default useIsAudioEnabled;
}
declare module "src/utils/useIsVideoEnabled" {
    import { UidType } from "agora-rn-uikit/src/index";
    /**
     * Returns a function that checks the video state for a given uid and returns true/false
     * @returns function
     */
    function useIsVideoEnabled(): (uid: UidType) => boolean;
    export default useIsVideoEnabled;
}
declare module "customization-api/utils" {
    export { default as useIsHost } from "src/utils/useIsHost";
    export { default as useIsAttendee } from "src/utils/useIsAttendee";
    export { default as useIsPSTN } from "src/utils/useIsPSTN";
    export { default as useIsAudioEnabled } from "src/utils/useIsAudioEnabled";
    export { default as useIsVideoEnabled } from "src/utils/useIsVideoEnabled";
    export { useHistory, useParams } from "src/components/Router";
    export { isWeb, isIOS, isAndroid, isDesktop } from "src/utils/common";
    export { default as isMobileOrTablet } from "src/utils/isMobileOrTablet";
    export { useLocalUid } from "agora-rn-uikit/src/index";
}
declare module "customization-api/index" {
    import { customize } from "customization-api/customize";
    let $config: ConfigInterface;
    export { customize, $config };
    export * from "customization-api/action-library";
    export * from "customization-api/app-state";
    export * from "customization-api/customEvents";
    export * from "customization-api/sub-components";
    export * from "customization-api/typeDefinition";
    export * from "customization-api/utils";
}
declare module "src/components/Navigation" {
    const Navigation: () => JSX.Element;
    export default Navigation;
}
declare module "src/components/SessionContext" {
    import React from 'react';
    interface SessionContextInterface {
        joinSession: (arg0: joinSessionInterface) => void;
        joinStore: joinSessionInterface;
        setJoinStore: React.Dispatch<React.SetStateAction<joinSessionInterface>> | null;
    }
    interface joinSessionInterface {
        phrase: string | null;
    }
    const SessionContext: React.Context<SessionContextInterface>;
    export default SessionContext;
    export const StorageConsumer: React.Consumer<SessionContextInterface>;
    export const SessionProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
}
declare module "src/components/ColorConfigure" {
    import React from 'react';
    const ColorConfigure: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default ColorConfigure;
}
declare module "src/components/dimension/DimensionContext" {
    interface DimensionContextInterface {
        getDimensionData: (width?: number, height?: number) => {
            dim: [number, number, boolean];
            isDesktop: boolean;
        };
    }
    const DimensionContext: import("react").Context<DimensionContextInterface>;
    export default DimensionContext;
}
declare module "src/components/dimension/DimensionProvider" {
    import React from 'react';
    const DimensionProvider: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default DimensionProvider;
}
declare module "src/AppWrapper" {
    import React from 'react';
    interface AppWrapperProps {
        children: React.ReactNode;
    }
    const AppWrapper: (props: AppWrapperProps) => JSX.Element;
    export default AppWrapper;
}
declare module "src/subComponents/LogoutButton" {
    /**
     * Sends a logout request to the backend and logs out the user from the frontend.
     */
    const LogoutButton: () => JSX.Element;
    export default LogoutButton;
}
declare module "src/atoms/Input" {
    import { TextInputProps, TextStyle } from 'react-native';
    interface InputProps extends TextInputProps {
        helpText?: string;
        label?: string;
        labelStyle?: TextStyle;
        autoFocus?: boolean;
    }
    const Input: (props: InputProps) => JSX.Element;
    export default Input;
}
declare module "src/pages/Join" {
    const Join: () => JSX.Element;
    export default Join;
}
declare module "src/utils/useAsyncEffect" {
    export type Disposer = () => void;
    export type Fn = (...args: any[]) => any;
    export type Nullable<T> = T | null | undefined;
    export type MaybePromise<T> = T | PromiseLike<T>;
    export type MaybePromiseOrNull<T> = MaybePromise<Nullable<T>>;
    export function invoke<T>(fn: () => T): T | void;
    export function joinDisposers(disposers: Disposer[]): Disposer;
    export function interval(fn: Fn, interval: number): Disposer;
    export function timeout(fn: Fn, ms: number): Disposer;
    export interface AsyncTaskRunner {
        run: (this: void, task: () => MaybePromise<void | (() => MaybePromise<void>)>) => void;
        dispose: (this: void) => void;
    }
    /**
     * Chain async tasks. During the task running/stopping, if multiple tasks are triggered, only the last one will be executed.
     */
    export function createAsyncTaskRunner(): AsyncTaskRunner;
    /**
     * Accepts a function that contains imperative, possibly asynchronous effect-ful code.
     * During the side-effect running/removing, if multiple effects are triggered, only the last one will be executed.
     */
    export function useAsyncEffect(effect: () => MaybePromise<void | (() => MaybePromise<void>)>, deps?: ReadonlyArray<unknown>): void;
}
declare module "src/components/RTMConfigure" {
    export enum UserType {
        ScreenShare = "screenshare"
    }
    const RtmConfigure: (props: any) => JSX.Element;
    export default RtmConfigure;
}
declare module "src/subComponents/Logo" {
    /**
     * Displays the logo.
     */
    export default function Logo(): JSX.Element;
}
declare module "src/subComponents/screenshare/ScreenshareConfigure" {
    import React from 'react';
    export const ScreenshareContextConsumer: React.Consumer<import("src/subComponents/screenshare/useScreenshare").ScreenshareContextInterface>;
    export const ScreenshareConfigure: (props: {
        children: React.ReactNode;
    }) => JSX.Element;
    export default ScreenshareConfigure;
}
declare module "src/components/precall/PreCallSettings" {
    interface PreCallSettingsProps {
        isMobileView?: boolean;
    }
    const PreCallSettings: (props: PreCallSettingsProps) => JSX.Element;
    export default PreCallSettings;
}
declare module "src/components/precall/LocalMute" {
    import { LocalVideoMuteProps } from "src/subComponents/LocalVideoMute";
    import { LocalAudioMuteProps } from "src/subComponents/LocalAudioMute";
    const PreCallLocalMute: (props: {
        isMobileView?: boolean;
    }) => JSX.Element;
    export const PreCallLocalMuteComponentsArray: [
        (props: LocalAudioMuteProps) => JSX.Element,
        (props: LocalVideoMuteProps) => JSX.Element
    ];
    export default PreCallLocalMute;
}
declare module "src/components/precall/VideoPreview" {
    const VideoPreview: () => JSX.Element;
    export default VideoPreview;
}
declare module "src/components/precall/selectDevice" {
    import React from 'react';
    const selectDevice: React.FC;
    export default selectDevice;
}
declare module "src/components/useWakeLock" {
    const useWakeLock: () => {
        awake: boolean;
        request: () => void;
        release: () => void;
    };
    export { useWakeLock };
}
declare module "src/components/precall/joinCallBtn" {
    export interface PreCallJoinCallBtnProps {
        render?: (onPress: () => void, title: string, disabled: boolean) => JSX.Element;
    }
    const JoinCallBtn: (props: PreCallJoinCallBtnProps) => JSX.Element;
    export default JoinCallBtn;
}
declare module "src/components/precall/textInput" {
    import React from 'react';
    import { TextStyle } from 'react-native';
    export interface PreCallTextInputProps {
        labelStyle?: TextStyle;
        textInputStyle?: TextStyle;
        isDesktop?: boolean;
    }
    const PreCallTextInput: React.FC;
    export default PreCallTextInput;
}
declare module "src/components/precall/meetingTitle" {
    import { TextStyle } from 'react-native';
    export interface MeetingTitleProps {
        textStyle?: TextStyle;
    }
    const MeetingTitle: (props?: MeetingTitleProps) => JSX.Element;
    export default MeetingTitle;
}
declare module "src/components/precall/index" {
    import PreCallLocalMute, { PreCallLocalMuteComponentsArray } from "src/components/precall/LocalMute";
    import PreCallVideoPreview from "src/components/precall/VideoPreview";
    import PreCallSelectDevice from "src/components/precall/selectDevice";
    import PreCallJoinBtn, { PreCallJoinCallBtnProps } from "src/components/precall/joinCallBtn";
    import PreCallTextInput from "src/components/precall/textInput";
    import PreCallMeetingTitle from "src/components/precall/meetingTitle";
    export { PreCallLocalMuteComponentsArray, PreCallLocalMute, PreCallVideoPreview, PreCallSelectDevice, PreCallJoinBtn, PreCallTextInput, PreCallMeetingTitle, };
    export type { PreCallJoinCallBtnProps };
}
declare module "src/components/Precall.native" {
    const Precall: (props: any) => JSX.Element;
    export default Precall;
}
declare module "src/components/Precall" {
    const _default_5: (props: any) => JSX.Element;
    export default _default_5;
}
declare module "src/pages/video-call/CustomUserContextHolder" {
    import React from 'react';
    const CustomUserContextHolder: React.FC<{
        children: any;
    }>;
    export default CustomUserContextHolder;
}
declare module "src/components/contexts/WhiteboardContext" {
    import { UidType } from "agora-rn-uikit/src/index";
    import React, { Dispatch, SetStateAction } from 'react';
    export interface WhiteboardObjectInterface {
        [key: number]: {
            active: boolean;
            parentId: UidType;
            type: 'whiteboard';
        };
    }
    export interface WhiteboardContextInterface {
        whiteboardData: WhiteboardObjectInterface;
        setWhiteboardData: Dispatch<SetStateAction<WhiteboardObjectInterface>>;
    }
    interface WhiteboardProviderProps {
        children: React.ReactNode;
    }
    const WhiteboardProvider: (props: WhiteboardProviderProps) => JSX.Element;
    const useWhiteBoard: {
        <U>(contextSelector: (data: WhiteboardContextInterface) => U): U;
        (): WhiteboardContextInterface;
    };
    export { useWhiteBoard, WhiteboardProvider };
}
declare module "src/components/EventsConfigure" {
    import React from 'react';
    interface Props {
        children: React.ReactNode;
    }
    const EventsConfigure: React.FC<Props>;
    export default EventsConfigure;
}
declare module "src/components/precall/PermissionHelper" {
    const PermissionHelper: () => JSX.Element;
    export default PermissionHelper;
}
declare module "src/pages/VideoCall" {
    import React from 'react';
    const VideoCall: React.FC;
    export default VideoCall;
}
declare module "src/pages/create/useCreate" {
    import React from 'react';
    export interface CreateContextInterface {
        showShareScreen: () => void;
    }
    interface CreateProviderProps {
        value: CreateContextInterface;
        children: React.ReactNode;
    }
    const CreateProvider: (props: CreateProviderProps) => JSX.Element;
    const useCreate: {
        <U>(contextSelector: (data: CreateContextInterface) => U): U;
        (): CreateContextInterface;
    };
    export { CreateProvider, useCreate };
}
declare module "src/atoms/CustomSwitch" {
    import { Component } from 'react';
    import PropTypes from 'prop-types';
    export default class Switch extends Component {
        static propTypes: {
            onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
            disabled: PropTypes.Requireable<boolean>;
            activeText: PropTypes.Requireable<string>;
            inActiveText: PropTypes.Requireable<string>;
            backgroundActive: PropTypes.Requireable<string>;
            backgroundInactive: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<boolean>;
            circleActiveColor: PropTypes.Requireable<string>;
            circleInActiveColor: PropTypes.Requireable<string>;
            circleBorderActiveColor: PropTypes.Requireable<string>;
            circleBorderInactiveColor: PropTypes.Requireable<string>;
            activeTextStyle: PropTypes.Requireable<object>;
            inactiveTextStyle: PropTypes.Requireable<object>;
            containerStyle: PropTypes.Requireable<object>;
            barHeight: PropTypes.Requireable<number>;
            circleBorderWidth: PropTypes.Requireable<number>;
            innerCircleStyle: PropTypes.Requireable<object>;
            renderInsideCircle: PropTypes.Requireable<(...args: any[]) => any>;
            changeValueImmediately: PropTypes.Requireable<boolean>;
            outerCircleStyle: PropTypes.Requireable<object>;
            renderActiveText: PropTypes.Requireable<boolean>;
            renderInActiveText: PropTypes.Requireable<boolean>;
            switchWidth: PropTypes.Requireable<number>;
            switchHeight: PropTypes.Requireable<number>;
            switchLeftPx: PropTypes.Requireable<number>;
            switchRightPx: PropTypes.Requireable<number>;
            switchWidthMultiplier: PropTypes.Requireable<number>;
            switchBorderRadius: PropTypes.Requireable<number>;
        };
        static defaultProps: {
            value: boolean;
            onValueChange: () => any;
            renderInsideCircle: () => any;
            disabled: boolean;
            activeText: string;
            inActiveText: string;
            backgroundActive: string;
            backgroundInactive: string;
            circleActiveColor: string;
            circleInActiveColor: string;
            circleBorderActiveColor: string;
            circleBorderInactiveColor: string;
            switchWidth: number;
            switchHeight: number;
            switchBorderRadius: number;
            barHeight: any;
            circleBorderWidth: number;
            changeValueImmediately: boolean;
            innerCircleStyle: {
                alignItems: string;
                justifyContent: string;
            };
            outerCircleStyle: {};
            renderActiveText: boolean;
            renderInActiveText: boolean;
            switchLeftPx: number;
            switchRightPx: number;
            switchWidthMultiplier: number;
            testID: any;
        };
        constructor(props: any, context: any);
        componentDidUpdate(prevProps: any): void;
        handleSwitch: () => void;
        animateSwitch: (value: any, cb?: () => void) => void;
        render(): JSX.Element;
    }
}
declare module "src/atoms/Toggle" {
    interface SwitchProps {
        isEnabled: boolean;
        disabled?: boolean;
        toggleSwitch: (isEnabled: boolean) => void;
    }
    const Toggle: (props: SwitchProps) => JSX.Element;
    export default Toggle;
}
declare module "src/pages/Create" {
    const Create: () => JSX.Element;
    export default Create;
}
declare module "src/pages/Login" {
    export default function Login(): JSX.Element;
}
declare module "src/auth/AuthRoute" {
    import React from 'react';
    import type { RouteProps } from 'react-router';
    interface PrivateRouteProps extends RouteProps {
        children: React.ReactNode;
    }
    const AuthRoute: React.FC<PrivateRouteProps>;
    export default AuthRoute;
}
declare module "src/auth/IDPAuth" {
    export const IDPAuth: () => JSX.Element;
}
declare module "src/AppRoutes" {
    function AppRoutes(): JSX.Element;
    export default AppRoutes;
}
declare module "src/App" {
    import React from 'react';
    module "agora-rn-uikit/src/index" {
        interface DefaultRenderInterface {
            name: string;
            screenUid: number;
            offline: boolean;
            lastMessageTimeStamp: number;
        }
        interface RtcPropsInterface {
            screenShareUid: number;
            screenShareToken?: string;
        }
    }
    const App: React.FC;
    export default App;
}
declare module "src/SDKAppWrapper" {
    import { CustomizationApiInterface, MeetingInfoContextInterface, customEvents } from "customization-api/index";
    import { userEventsMapInterface } from "src/utils/SdkEvents";
    import { Unsubscribe } from 'nanoevents';
    import { deviceId } from "src/components/DeviceConfigure";
    type meetingData = Partial<MeetingInfoContextInterface['data']>;
    export interface AppBuilderSdkApiInterface {
        customize: (customization: CustomizationApiInterface) => Promise<void>;
        joinRoom: (roomDetails: string | meetingData, userName?: string) => Promise<meetingData>;
        joinPrecall: (roomDetails: string | meetingData, userName?: string) => Promise<[
            meetingData,
            (userName?: string) => Promise<MeetingInfoContextInterface['data']>
        ]>;
        setMicrophone: (deviceId: deviceId) => Promise<void>;
        setCamera: (deviceId: deviceId) => Promise<void>;
        setSpeaker: (deviceId: deviceId) => Promise<void>;
        muteAudio: (mute: boolean | ((currentMute: boolean) => boolean)) => Promise<void>;
        muteVideo: (mute: boolean | ((currentMute: boolean) => boolean)) => Promise<void>;
        createCustomization: (customization: CustomizationApiInterface) => CustomizationApiInterface;
        login: (token: string) => Promise<void>;
        logout: () => Promise<void>;
        customEvents: typeof customEvents;
        on: <T extends keyof userEventsMapInterface>(userEventName: T, cb: userEventsMapInterface[T]) => Unsubscribe;
    }
    export const AppBuilderSdkApi: AppBuilderSdkApiInterface;
    const SDKAppWrapper: () => JSX.Element;
    export default SDKAppWrapper;
}
declare module "@appbuilder/react" {
    /**
     * @format
     */
    import { AppBuilderSdkApiInterface } from "src/SDKAppWrapper";
    import React from 'react';
    import * as RN from 'react-native-web';
    import './src/assets/font-styles.css';
    export * from "customization-api/index";
    export * from "customization-implementation/index";
    interface AppBuilderReactSdkInterface extends AppBuilderSdkApiInterface {
        View: React.FC;
    }
    const AppBuilderReactSdkApi: AppBuilderReactSdkInterface;
    export { React, RN };
    export default AppBuilderReactSdkApi;
}
