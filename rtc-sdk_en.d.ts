declare const AgoraRTC: IAgoraRTC;
export default AgoraRTC;
/**
 * @ignore
 */
declare class AgoraRTCError {
    readonly code: AgoraRTCErrorCode;
    readonly message: string;
    readonly data?: any;
    private readonly name;
    constructor(code: AgoraRTCErrorCode, message?: string, data?: any);
    toString(): string;
    print(): AgoraRTCError;
    throw(): never;
}
/**
 * @ignore
 */
declare enum AgoraRTCErrorCode {
    UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
    UNEXPECTED_RESPONSE = "UNEXPECTED_RESPONSE",
    TIMEOUT = "TIMEOUT",
    INVALID_PARAMS = "INVALID_PARAMS",
    NOT_READABLE = "NOT_READABLE",
    NOT_SUPPORTED = "NOT_SUPPORTED",
    INVALID_OPERATION = "INVALID_OPERATION",
    OPERATION_ABORTED = "OPERATION_ABORTED",
    WEB_SECURITY_RESTRICT = "WEB_SECURITY_RESTRICT",
    NETWORK_ERROR = "NETWORK_ERROR",
    NETWORK_TIMEOUT = "NETWORK_TIMEOUT",
    NETWORK_RESPONSE_ERROR = "NETWORK_RESPONSE_ERROR",
    API_INVOKE_TIMEOUT = "API_INVOKE_TIMEOUT",
    ENUMERATE_DEVICES_FAILED = "ENUMERATE_DEVICES_FAILED",
    DEVICE_NOT_FOUND = "DEVICE_NOT_FOUND",
    ELECTRON_IS_NULL = "ELECTRON_IS_NULL",
    ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR = "ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR",
    CHROME_PLUGIN_NO_RESPONSE = "CHROME_PLUGIN_NO_RESPONSE",
    CHROME_PLUGIN_NOT_INSTALL = "CHROME_PLUGIN_NOT_INSTALL",
    MEDIA_OPTION_INVALID = "MEDIA_OPTION_INVALID",
    PERMISSION_DENIED = "PERMISSION_DENIED",
    CONSTRAINT_NOT_SATISFIED = "CONSTRAINT_NOT_SATISFIED",
    TRACK_IS_DISABLED = "TRACK_IS_DISABLED",
    SHARE_AUDIO_NOT_ALLOWED = "SHARE_AUDIO_NOT_ALLOWED",
    LOW_STREAM_ENCODING_ERROR = "LOW_STREAM_ENCODING_ERROR",
    SET_ENCODING_PARAMETER_ERROR = "SET_ENCODING_PARAMETER_ERROR",
    INVALID_UINT_UID_FROM_STRING_UID = "INVALID_UINT_UID_FROM_STRING_UID",
    CAN_NOT_GET_PROXY_SERVER = "CAN_NOT_GET_PROXY_SERVER",
    CAN_NOT_GET_GATEWAY_SERVER = "CAN_NOT_GET_GATEWAY_SERVER",
    VOID_GATEWAY_ADDRESS = "VOID_GATEWAY_ADDRESS",
    UID_CONFLICT = "UID_CONFLICT",
    INVALID_LOCAL_TRACK = "INVALID_LOCAL_TRACK",
    INVALID_TRACK = "INVALID_TRACK",
    SENDER_NOT_FOUND = "SENDER_NOT_FOUND",
    CREATE_OFFER_FAILED = "CREATE_OFFER_FAILED",
    SET_ANSWER_FAILED = "SET_ANSWER_FAILED",
    ICE_FAILED = "ICE_FAILED",
    PC_CLOSED = "PC_CLOSED",
    SENDER_REPLACE_FAILED = "SENDER_REPLACE_FAILED",
    GATEWAY_P2P_LOST = "GATEWAY_P2P_LOST",
    NO_ICE_CANDIDATE = "NO_ICE_CANDIDATE",
    CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS = "CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS",
    EXIST_DISABLED_VIDEO_TRACK = "EXIST_DISABLED_VIDEO_TRACK",
    INVALID_REMOTE_USER = "INVALID_REMOTE_USER",
    REMOTE_USER_IS_NOT_PUBLISHED = "REMOTE_USER_IS_NOT_PUBLISHED",
    CUSTOM_REPORT_SEND_FAILED = "CUSTOM_REPORT_SEND_FAILED",
    CUSTOM_REPORT_FREQUENCY_TOO_HIGH = "CUSTOM_REPORT_FREQUENCY_TOO_HIGH",
    FETCH_AUDIO_FILE_FAILED = "FETCH_AUDIO_FILE_FAILED",
    READ_LOCAL_AUDIO_FILE_ERROR = "READ_LOCAL_AUDIO_FILE_ERROR",
    DECODE_AUDIO_FILE_FAILED = "DECODE_AUDIO_FILE_FAILED",
    WS_ABORT = "WS_ABORT",
    WS_DISCONNECT = "WS_DISCONNECT",
    WS_ERR = "WS_ERR",
    LIVE_STREAMING_TASK_CONFLICT = "LIVE_STREAMING_TASK_CONFLICT",
    LIVE_STREAMING_INVALID_ARGUMENT = "LIVE_STREAMING_INVALID_ARGUMENT",
    LIVE_STREAMING_INTERNAL_SERVER_ERROR = "LIVE_STREAMING_INTERNAL_SERVER_ERROR",
    LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED = "LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED",
    LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED = "LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED",
    LIVE_STREAMING_CDN_ERROR = "LIVE_STREAMING_CDN_ERROR",
    LIVE_STREAMING_INVALID_RAW_STREAM = "LIVE_STREAMING_INVALID_RAW_STREAM",
    LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT = "LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT",
    LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE = "LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE",
    LIVE_STREAMING_WARN_FREQUENT_REQUEST = "LIVE_STREAMING_WARN_FREQUENT_REQUEST",
    WEBGL_INTERNAL_ERROR = "WEBGL_INTERNAL_ERROR",
    BEAUTY_PROCESSOR_INTERNAL_ERROR = "BEAUTY_PROCESSOR_INTERNAL_ERROR",
    CROSS_CHANNEL_WAIT_STATUS_ERROR = "CROSS_CHANNEL_WAIT_STATUS_ERROR",
    CROSS_CHANNEL_FAILED_JOIN_SRC = "CROSS_CHANNEL_FAILED_JOIN_SEC",
    CROSS_CHANNEL_FAILED_JOIN_DEST = "CROSS_CHANNEL_FAILED_JOIN_DEST",
    CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST = "CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST",
    CROSS_CHANNEL_SERVER_ERROR_RESPONSE = "CROSS_CHANNEL_SERVER_ERROR_RESPONSE",
    METADATA_OUT_OF_RANGE = "METADATA_OUT_OF_RANGE",
    LOCAL_AEC_ERROR = "LOCAL_AEC_ERROR"
}
/**
 * Statistics of the call, which can be retrieved by calling [AgoraRTCClient.getRTCStats]{@link IAgoraRTCClient.getRTCStats}.
 */
export declare interface AgoraRTCStats {
    /**
     * Call duration in seconds.
     */
    Duration: number;
    /**
     * The total bitrate (bps) of the received audio and video, represented by an instantaneous value.
     */
    RecvBitrate: number;
    /**
     * The total number of bytes received, represented by an aggregate value.
     */
    RecvBytes: number;
    /**
     * The total bitrate (bps) of the sent audio and video, represented by an instantaneous value.
     */
    SendBitrate: number;
    /**
     * The total number of bytes sent, represented by an aggregate value.
     */
    SendBytes: number;
    /**
     * The number of users in the channel.
     *
     * - Communication profile: The number of users in the channel.
     * - Live Broadcast profile:
     *   - If the local user is an audience: The number of users in the channel = The number of hosts in the channel + 1.
     *   - If the local user is a host: The number of users in the channel = The number of hosts in the channel.
     */
    UserCount: number;
    /**
     * RTT (Round-Trip Time) between the SDK and Agora's edge server, in ms.
     */
    RTT: number;
    /**
     * The estimated bandwidth (Kbps) of the uplink network.
     */
    OutgoingAvailableBandwidth: number;
}
/**
 * Regions for the connection. Used for calling [AgoraRTC.setArea]{@link IAgoraRTC.setArea}.
 */
export declare const enum AREAS {
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
/**
 * @ignore
 *
 * The latency level of an audience member in a live interactive streaming. Takes effect only when the user role is `"audience"`.
 * - `1`: Low latency.
 * - `2`: (Default) Ultra low latency.
 */
export declare const enum AudienceLatencyLevelType {
    AUDIENCE_LEVEL_LOW_LATENCY = 1,
    AUDIENCE_LEVEL_ULTRA_LOW_LATENCY = 2
}
/**
 * @ignore
 */
declare const AUDIO_ENCODER_CONFIG_SETTINGS: {
    speech_low_quality: AudioEncoderConfiguration;
    speech_standard: AudioEncoderConfiguration;
    music_standard: AudioEncoderConfiguration;
    standard_stereo: AudioEncoderConfiguration;
    high_quality: AudioEncoderConfiguration;
    high_quality_stereo: AudioEncoderConfiguration;
};
/**
 *
 * `AudioEncoderConfiguration` is the interface that defines the audio encoder configurations.
 *
 * You can customize the audio encoder configurations when calling [AgoraRTC.createCustomAudioTrack]{@link IAgoraRTC.createCustomAudioTrack}, [AgoraRTC.createMicrophoneAudioTrack]{@link IAgoraRTC.createMicrophoneAudioTrack} or [AgoraRTC.createBufferSourceAudioTrack]{@link IAgoraRTC.createBufferSourceAudioTrack}.
 */
export declare interface AudioEncoderConfiguration {
    /**
     * Sample rate of the audio (Hz).
     */
    sampleRate?: number;
    /**
     * Sample size of the audio.
     */
    sampleSize?: number;
    /**
     * Whether to enable stereo.
     */
    stereo?: boolean;
    /**
     * Bitrate of the audio (Kbps).
     */
    bitrate?: number;
}
/**
 * The preset audio encoder configurations.
 *
 * You can pass the preset video encoder configurations when calling the following methods:
 * - [AgoraRTC.createCustomAudioTrack]{@link IAgoraRTC.createCustomAudioTrack}
 * - [AgoraRTC.createMicrophoneAudioTrack]{@link IAgoraRTC.createMicrophoneAudioTrack}
 * - [AgoraRTC.createBufferSourceAudioTrack]{@link IAgoraRTC.createBufferSourceAudioTrack}
 *
 * The following table lists all the preset audio profiles. The SDK uses `"music_standard"` by default.
 *
 * | Audio Profile | Configurations |
 * | -------- | --------------- |
 * |`"speech_low_quality"`|Sample rate 16 kHz, mono, encoding rate 24 Kbps|
 * |`"speech_standard"`|Sample rate 32 kHz, mono, encoding rate 24 Kbps|
 * |`"music_standard"`|Sample rate 48 kHz, mono, encoding rate 40 Kbps|
 * |`"standard_stereo"`|Sample rate 48 kHz, stereo, encoding rate 64 Kbps|
 * |`"high_quality"`|Sample rate 48 kHz, mono, encoding rate 128 Kbps|
 * |`"high_quality_stereo"`|Sample rate 48 kHz, stereo, encoding rate 192 Kbps| Kbps.
 * @public
 */
export declare type AudioEncoderConfigurationPreset = keyof typeof AUDIO_ENCODER_CONFIG_SETTINGS;
/**
 * Options for processing the audio buffer. You need to set the options for processing the audio buffer when calling [startProcessAudioBuffer]{@link IBufferSourceAudioTrack.startProcessAudioBuffer}.
 */
export declare interface AudioSourceOptions {
    /**
     * How many times the audio loops.
     */
    cycle?: number;
    /**
     * Whether to loop the audio infinitely.
     */
    loop?: boolean;
    /**
     * The playback position (seconds).
     */
    startPlayTime?: number;
}
/**
 * Processing state of the audio buffer:
 * - `"stopped"`: The SDK stops processing the audio buffer. Reasons may include:
 *  - The SDK finishes processing the audio buffer.
 *  - The user manually stops the processing of the audio buffer.
 * - `"playing"`: The SDK is processing the audio buffer.
 * - `"paused"`: The SDK pauses processing the audio buffer.
 *
 * You can get the state with [BufferSourceAudioTrack.on("source-state-change")]{@link IBufferSourceAudioTrack.event_source_state_change}.
 */
export declare type AudioSourceState = "stopped" | "playing" | "paused";
/**
 * Image enhancement options. You need to set the image enhancement options when calling [setBeautyEffect]{@link ILocalVideoTrack.setBeautyEffect}.
 */
export declare interface BeautyEffectOptions {
    /**
     *
     * The smoothness level.
     *
     * The value range is [0.0, 1.0]. The original smoothness level is 0.0. The default value is 0.5. This parameter is usually used to remove blemishes.
     */
    smoothnessLevel?: number;
    /**
     * The brightness level.
     *
     * The value range is [0.0, 1.0]. The original brightness level is 0.0. The default value is 0.7.
     */
    lighteningLevel?: number;
    /**
     * The redness level.
     *
     * The value range is [0.0, 1.0]. The original redness level is 0.0. The default value is 0.1. This parameter adjusts the red saturation level.
     */
    rednessLevel?: number;
    lighteningContrastLevel?: 0 | 1 | 2;
}
/**
 * Configurations for the audio track from an audio file or `AudioBuffer` object. Set these configurations when calling [AgoraRTC.createBufferSourceAudioTrack]{@link IAgoraRTC.createBufferSourceAudioTrack}.
 */
export declare interface BufferSourceAudioTrackInitConfig {
    /**
     * The type of the audio source:
     * - `File`: An [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object, representing a local audio file.
     * - `string`: The online audio file retrieved from an HTTPS address. Ensure the address supports HTTPS and CORS.
     * - `AudioBuffer`: An [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) object, representing the raw data in PCM format.
     */
    source: File | string | AudioBuffer;
    /**
     * Whether to cache the online file:
     * - `true`: Cache the online file.
     * - `false`: (default) Do not cache the online file.
     */
    cacheOnlineFile?: boolean;
    /**
     * The audio encoder configurations.
     *
     * You can set the audio encoder configurations in either of the following ways:
     * - Pass the preset audio encoder configurations by using [[AudioEncoderConfigurationPreset]].
     * - Pass your customized audio encoder configurations by using [[AudioEncoderConfiguration]].
     */
    encoderConfig?: AudioEncoderConfiguration | AudioEncoderConfigurationPreset;
}
/**
 * Configurations for the video track from the video captured by a camera. Set these configurations when calling [AgoraRTC.createCameraVideoTrack]{@link IAgoraRTC.createCameraVideoTrack}.
 */
export declare interface CameraVideoTrackInitConfig {
    /**
     * The video encoder configurations.
     *
     * You can set the video encoder configurations in either of the following ways:
     * - Pass the preset video encoder configurations by using [[VideoEncoderConfigurationPreset]].
     * - Pass your customized video encoder configurations by using [[VideoEncoderConfiguration]].
     */
    encoderConfig?: VideoEncoderConfiguration | VideoEncoderConfigurationPreset;
    /**
     * Whether to user the front camera or the rear camera.
     *
     * You can use this parameter to choose between the front camera and the rear camera on a mobile device:
     * - `"user"`: The front camera.
     * - `"environment"`: The rear camera.
     */
    facingMode?: "user" | "environment";
    /**
     * Specifies the camera ID.
     *
     * You can get a list of the available cameras by calling [AgoraRTC.getCameras]{@link IAgoraRTC.getCameras}.
     */
    cameraId?: string;
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.0.0*
     *
     * Transmission optimization mode. Whether to prioritize video quality or smoothness:
     * - `"detail"`: Prioritizes video quality.
     *   - The SDK ensures high-quality images by automatically calculating a minimum bitrate based on the capturing resolution and frame rate. No matter how poor the network condition is, the sending bitrate will never be lower than the minimum value.
     *   - In most cases, the SDK does not reduce the sending resolution, but may reduce the frame rate.
     * -  `"motion"`: Prioritizes video smoothness.
     *   - In poor network conditions, the SDK reduces the sending bitrate to minimize video freezes.
     *   - In most cases, the SDK does not reduce the frame rate, but may reduce the sending resolution.
     * - Empty: Uses the default transmission optimization mode. The SDK may reduce the frame rate or the sending resolution in poor network conditions.
     *
     * > Note: This method is only supported on Chrome.
     */
    optimizationMode?: "motion" | "detail";
    /**
     * The video encoder configurations for SVC (Scalable Video Coding).
     *
     * You can set the video encoder configurations in either of the following ways:
     * - Pass the preset video SVC encoder configurations by using [[SVCConfigurationPreset]].
     * - Pass your customized video SVC encoder configurations by using [[SVCConfiguration]].
     */
    scalabiltyMode?: SVCConfiguration | SVCConfigurationPreset;
}
/**
 * The error code of the media stream relay. You can get the code through [AgoraRTCClient.on("channel-media-relay-state")]{@link IAgoraRTCClient.event_channel_media_relay_state}.
 */
export declare const enum ChannelMediaRelayError {
    /**
     * No error.
     */
    RELAY_OK = "RELAY_OK",
    /**
     * The SDK disconnects from the relay service.
     */
    SERVER_CONNECTION_LOST = "SERVER_CONNECTION_LOST",
    /**
     * The token of the source channel has expired.
     */
    SRC_TOKEN_EXPIRED = "SRC_TOKEN_EXPIRED",
    /**
     * The token of the destination channel has expired.
     */
    DEST_TOKEN_EXPIRED = "DEST_TOKEN_EXPIRED"
}
/**
 * Events during the media stream relay. You can get the event through [AgoraRTCClient.on("channel-media-relay-event")]{@link IAgoraRTCClient.event_channel_media_relay_event}.
 */
export declare const enum ChannelMediaRelayEvent {
    /**
     * The user disconnects from the server due to a poor network connection.
     */
    NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED",
    /**
     * The user is connected to the server.
     */
    NETWORK_CONNECTED = "NETWORK_CONNECTED",
    /**
     * The user joins the source channel.
     */
    PACKET_JOINED_SRC_CHANNEL = "PACKET_JOINED_SRC_CHANNEL",
    /**
     * The user joins the destination channel.
     */
    PACKET_JOINED_DEST_CHANNEL = "PACKET_JOINED_DEST_CHANNEL",
    /**
     * The SDK starts relaying the media stream to the destination channel.
     */
    PACKET_SENT_TO_DEST_CHANNEL = "PACKET_SENT_TO_DEST_CHANNEL",
    /**
     * The server receives the video stream from the source channel.
     */
    PACKET_RECEIVED_VIDEO_FROM_SRC = "PACKET_RECEIVED_VIDEO_FROM_SRC",
    /**
     * The server receives the audio stream from the source channel.
     */
    PACKET_RECEIVED_AUDIO_FROM_SRC = "PACKET_RECEIVED_AUDIO_FROM_SRC",
    /**
     * The destination channel is updated.
     */
    PACKET_UPDATE_DEST_CHANNEL = "PACKET_UPDATE_DEST_CHANNEL",
    /**
     * Fails to update the destination channel due to an internal error.
     */
    PACKET_UPDATE_DEST_CHANNEL_REFUSED = "PACKET_UPDATE_DEST_CHANNEL_REFUSED",
    /**
     * The destination channel is not updated.
     */
    PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = "PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE"
}
/**
 * Channel information in the media relay, used in [ChannelMediaRelayConfiguration]{@link IChannelMediaRelayConfiguration}.
 */
export declare interface ChannelMediaRelayInfo {
    /**
     * The channel name.
     */
    channelName: string;
    /**
     * The token generated with the `channelName` and `uid`. Do not set this parameter if you have not enabled token.
     */
    token?: string;
    /**
     * The unique ID to identify the relay stream.
     *
     * A 32-bit unsigned integer with a value ranging from 0 to (2<sup>32</sup>-1). If you set it as `0`, the server assigns a random one.
     *
     * When used for the source channel, it is the ID to identify the relay stream in the source channel.
     *
     * When used for the destination channel, it is the ID to identify the relay stream in the destination channel. To avoid UID conflicts, this value must be different from any other user IDs in the destination channel.
     */
    uid: number;
}
/**
 * The state code of the media stream relay. You can get the code through [AgoraRTCClient.on("channel-media-relay-state")]{@link IAgoraRTCClient.event_channel_media_relay_state}.
 */
export declare const enum ChannelMediaRelayState {
    /**
     * The SDK is initialized, but has not started the media stream relay service.
     */
    RELAY_STATE_IDLE = "RELAY_STATE_IDLE",
    /**
     * The SDK is connecting to the media stream relay service.
     */
    RELAY_STATE_CONNECTING = "RELAY_STATE_CONNECTING",
    /**
     * The SDK successfully relays the media stream to the destination channel.
     */
    RELAY_STATE_RUNNING = "RELAY_STATE_RUNNING",
    /**
     * An error occurs in the media stream relay. See {@link ChannelMediaRelayError} for the error code.
     */
    RELAY_STATE_FAILURE = "RELAY_STATE_FAILURE"
}
/**
 * Interface for defining the behavior of a web client.
 *
 * You need to configure it when calling the {@link createClient} method to create a web client.
 *
 * > The [mode]{@link ClientConfig.mode} and [codec]{@link ClientConfig.codec} properties are required.
 */
export declare interface ClientConfig {
    /**
     * The codec that the Web browser uses for encoding.
     * - `"vp8"`: Use VP8 for encoding.
     * - `"h264"`: Use H.264 for encoding.
     *
     * > Safari 12.1 or earlier does not support the VP8 codec.
     */
    codec: SDK_CODEC;
    /**
     * The channel profile.
     *
     * The SDK differentiates channel profiles and applies different optimization algorithms accordingly. For example, it prioritizes smoothness and low latency for a video call, and prioritizes video quality for a video streaming.
     *
     * The SDK supports the following channel profiles:
     * - `"live"`: Sets the channel profile as live streaming. You need to go on to call [setClientRole]{@link IAgoraRTCClient.setClientRole} to set the client as either a host or an audience. A host can send and receive audio or video, while an audience can only receive audio or video.
     * - `"rtc"`: Sets the channel profile as communication. It is used for a one-on-one call or a group call where all users in the channel can converse freely.
     */
    mode: SDK_MODE;
    /**
     * The user role in a live interactive streaming (when [mode]{@link ClientConfig.mode} is `"live"`).
     *
     * The user role determines the permissions that the SDK grants to a user, such as permission to publish local streams, subscribe to remote streams, and push streams to a CDN address. You can set the user role as `"host"` or `"audience"`. A host can publish and subscribe to tracks, while an audience member can only subscribe to tracks. The default role in a live streaming is `"audience"`. Before publishing tracks, you must set the user role as `"host"`.
     *
     * After creating a client, you can call {@link setClientRole} to switch the user role.
     */
    role?: ClientRole;
    /**
     * @ignore
     * The detailed options of the user role, including user level.
     *
     * The user level determines the level of services that a user can enjoy within the permissions of the user's role. For example, an audience can choose to receive remote streams with low latency or ultra low latency. Levels affect prices.
     */
    clientRoleOptions?: ClientRoleOptions;
    /**
     * @ignore
     */
    proxyServer?: string;
    /**
     * @ignore
     */
    turnServer?: TurnServerConfig;
    /**
     * @ignore
     */
    httpRetryConfig?: RetryConfiguration;
    /**
     * @ignore
     */
    websocketRetryConfig?: RetryConfiguration;
}
/**
 * The user role in a live broadcast channel.
 * - `"host"`: Host. A host can both publish tracks and subscribe to tracks.
 * - `"audience"`: Audience. An audience can only subscribe to tracks.
 */
export declare type ClientRole = "audience" | "host";
/**
 * @ignore
 * The detailed options of the user role, including the user level.
 *
 * Used by the {@link ClientConfig.clientRoleOptions} property or the [AgoraRTCClient.setClientRole]{@link IAgoraRTCClient.setClientRole} method.
 */
export declare interface ClientRoleOptions {
    /**
     * The latency level of an audience member in a live interactive streaming.
     *
     * > Note:
     * > - Takes effect only when the user role is `"audience"`.
     * > - Levels affect prices.
     */
    level: AudienceLatencyLevelType;
}
/**
 * Reason for the disconnection.
 */
export declare const enum ConnectionDisconnectedReason {
    /**
     * The user has left the channel.
     */
    LEAVE = "LEAVE",
    /**
     * The network is down, and cannot recover after retry.
     */
    NETWORK_ERROR = "NETWORK_ERROR",
    /**
     * The server returns an error. This is usually caused by incorrect parameter settings.
     */
    SERVER_ERROR = "SERVER_ERROR",
    /**
     * The user is banned.
     */
    UID_BANNED = "UID_BANNED",
    /**
     * The IP is banned.
     */
    IP_BANNED = "IP_BANNED",
    /**
     * The channel is banned.
     */
    CHANNEL_BANNED = "CHANNEL_BANNED"
}
/**
 * Connection state between the SDK and Agora's edge server.
 *
 * You can get the connection state through [connectionState]{@link IAgoraRTCClient.connectionState}.
 *
 * The connection between the SDK and the edge server has the following states:
 * - `"DISCONNECTED"`: The SDK is disconnected from the server.
 *  - This is the initial state until you call [join]{@link IAgoraRTCClient.join}.
 *  - The SDK also enters this state after you call [leave]{@link IAgoraRTCClient.leave}, when the user is banned, or when the connection fails.
 * - `"CONNECTING"`: The SDK is connecting to the server. The SDK enters this state when you call [join]{@link IAgoraRTCClient.join}.
 * - `"CONNECTED"`: The SDK is connected to the server and joins a channel. The user can now publish streams or subscribe to streams in the channel.
 * - `"RECONNECTING"`: The SDK is reconnecting to the server. If the connection is lost because the network is down or switched, the SDK enters this state.
 * - `"DISCONNECTING"`: The SDK is disconnecting from the server. The SDK enters this state when you call [leave]{@link IAgoraRTCClient.leave}.
 */
export declare type ConnectionState = "DISCONNECTED" | "CONNECTING" | "RECONNECTING" | "CONNECTED" | "DISCONNECTING";
/**
 * Specifies a constraint for a property, such as the resolution or bitrate for video capture in [[VideoEncoderConfiguration]].
 */
export declare interface ConstrainLong {
    /**
     * The lower limit of the property.
     */
    min?: number;
    /**
     * The upper limit of the property.
     */
    max?: number;
    /**
     * An ideal value of a property. If the video capture device cannot output this value, it outputs the closest value instead.
     */
    ideal?: number;
    /**
     * A required value of a property. If the video capture device cannot output this value, the video capture fails.
     */
    exact?: number;
}
/**
 * Configurations for the custom audio track. Set these configurations when calling [AgoraRTC.createCustomAudioTrack]{@link IAgoraRTC.createCustomAudioTrack}.
 */
export declare interface CustomAudioTrackInitConfig {
    /**
     * Your [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object.
     */
    mediaStreamTrack: MediaStreamTrack;
    /**
     * The audio encoder configurations.
     *
     * You can set the audio encoder configurations in either of the following ways:
     * - Pass the preset audio encoder configurations by using [[AudioEncoderConfigurationPreset]].
     * - Pass your customized audio encoder configurations by using [[AudioEncoderConfiguration]].
     */
    encoderConfig?: AudioEncoderConfiguration | AudioEncoderConfigurationPreset;
}
/**
 * Configurations for the custom video track. Set these configurations when calling [AgoraRTC.createCustomVideoTrack]{@link IAgoraRTC.createCustomVideoTrack}.
 */
export declare interface CustomVideoTrackInitConfig {
    /**
     * Your [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object.
     */
    mediaStreamTrack: MediaStreamTrack;
    /**
     * The minimum bitrate of sending the video track (Kbps).
     */
    bitrateMin?: number;
    /**
     * The maximum bitrate of sending the video track (Kbps).
     */
    bitrateMax?: number;
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.0.0*
     *
     * Transmission optimization mode. Whether to prioritize video quality or smoothness:
     * - `"detail"`: Prioritizes video quality.
     *   - The SDK ensures high-quality images by automatically calculating a minimum bitrate based on the capturing resolution and frame rate. No matter how poor the network condition is, the sending bitrate will never be lower than the minimum value.
     *   - In most cases, the SDK does not reduce the sending resolution, but may reduce the frame rate.
     * -  `"motion"`: Prioritizes video smoothness.
     *   - In poor network conditions, the SDK reduces the sending bitrate to minimize video freezes.
     *   - In most cases, the SDK does not reduce the frame rate, but may reduce the sending resolution.
     * - Empty: Uses the default transmission optimization mode. The SDK may reduce the frame rate or the sending resolution in poor network conditions.
     *
     * > Note: This method is only supported on Chrome.
     */
    optimizationMode?: "motion" | "detail";
    /**
     * The video encoder configurations for SVC (Scalable Video Coding).
     *
     * You can set the video encoder configurations in either of the following ways:
     * - Pass the preset video SVC encoder configurations by using [[SVCConfigurationPreset]].
     * - Pass your customized video SVC encoder configurations by using [[SVCConfiguration]].
     */
    scalabiltyMode?: SVCConfiguration | SVCConfigurationPreset;
}
/**
 * Information of the media input device.
 *
 * - You can get the audio sampling device information through [onMicrophoneChanged]{@link onMicrophoneChanged}.
 * - You can get the video capture device information through [onCameraChanged]{@link onCameraChanged}.
 * - You can get the audio playback device information through [onPlaybackDeviceChanged]{@link onPlaybackDeviceChanged}.
 */
export declare interface DeviceInfo {
    /**
     * The latest time when the state of the media input device was updated.
     *
     * A Unix timestamp in milliseconds.
     */
    updateAt: number;
    /**
     * The time when the SDK first detects the media input device.
     *
     * A Unix timestamp in milliseconds.
     */
    initAt: number;
    /**
     * The state of the capture device.
     */
    state: DeviceState;
    /**
     * Device information of the media input device. See [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) for details.
     */
    device: MediaDeviceInfo;
}
/**
 * The state of the media input device.
 * - `"ACTIVE"`: The device is plugged in.
 * - `"INACTIVE"`: The device is unplugged.
 */
export declare type DeviceState = "ACTIVE" | "INACTIVE";
/**
 * Information of the sharing screen source on Electron, which is retrieved by calling {@link getElectronScreenSources}.
 *
 * See [DesktopCapturerSource](https://www.electronjs.org/docs/api/structures/desktop-capturer-source) in the Electron API documentation for details.
 */
export declare interface ElectronDesktopCapturerSource {
    /**
     * The ID of the screen source.
     */
    id: string;
    /**
     * The name of the screen source.
     */
    name: string;
    /**
     * The thumbnail of the screen source.
     *
     * See [ElectronNativeImage](https://electronjs.org/docs/api/native-image#nativeimage) for details.
     */
    thumbnail: IElectronNativeImage;
}
/**
 * The encryption mode, which is used in the {@link setEncryptionConfig} method call.
 * - `"aes-128-xts"`: 128-bit AES encryption, XTS mode.
 * - `"aes-256-xts"`: 256-bit AES encryption, XTS mode.
 * - `"aes-128-gcm"`: 128-bit AES encryption, GCM mode.
 * - `"aes-256-gcm"`: 256-bit AES encryption, GCM mode.
 * - `"aes-128-ecb"`: 128-bit AES encryption, ECB mode.
 * - `"sm4-128-ecb"`: 128-bit SM4 encryption, ECB mode.
 * - `"none"`: No encryption.
 */
export declare type EncryptionMode = "aes-128-xts" | "aes-256-xts" | "aes-128-ecb" | "sm4-128-ecb" | "aes-128-gcm" | "aes-256-gcm" | "none";
/**
 * Occurs when the device is overloaded after you call [setBeautyEffect]{@link ILocalVideoTrack.setBeautyEffect} to enable image enhancement.
 *
 * You can listen for this event to notify users of the device overload and disable image enhancement.
 *
 * ```javascript
 * localVideoTrack.on("beauty-effect-overload", () => {
 *   console.log("beauty effect overload, disable beauty effect");
 *   localVideoTrack.setBeautyEffect(false);
 * });
 * ```
 * @event
 * @asMemberOf ILocalVideoTrack
 */
declare function event_beauty_effect_overload(): void;
/**
 * Reports events during a media stream relay.
 *
 * @param event The event code for a media stream relay.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_channel_media_relay_event(event: ChannelMediaRelayEvent): void;
/**
 * Occurs when the state of the media stream relay changes.
 *
 * The SDK reports the state and error code of the current media relay with this callback.
 *
 * If the media relay is in an abnormal state, you can find the error code in {@link ChannelMediaRelayError} (for example if the token has expired, or repeated reconnection attempts fail.)
 * @param state The state of the media relay.
 * @param code The error code.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_channel_media_relay_state(state: ChannelMediaRelayState, code: ChannelMediaRelayError): void;
/**
 * Occurs when the state of the connection between the SDK and the server changes.
 * @param curState The current connection state.
 * @param revState The previous connection state.
 * @param reason The reason of disconnection if `curState` is `"DISCONNECTED"`.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_connection_state_change(curState: ConnectionState, revState: ConnectionState, reason?: ConnectionDisconnectedReason): void;
/**
 * Occurs when decryption fails.
 *
 * The SDK triggers this callback when the decryption fails during the process of subscribing to a stream. The failure is usually caused by incorrect encryption settings. See {@link setEncryptionConfig} for details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_crypt_error(): void;
/**
 * Reports exceptions in the channel.
 *
 * Exceptions are not errors, but usually reflect quality issues.
 *
 * This callback also reports recovery from an exception.
 *
 * Each exception corresponds to a recovery event.
 *
 * **Exception**
 *
 * | Code | Message                   | Exception            |
 * | :----- | :------------------------- | :--------------- |
 * | 1001   | FRAMERATE_INPUT_TOO_LOW    | Captured video frame rate is too low |
 * | 1002   | FRAMERATE_SENT_TOO_LOW     | Sent video frame rate is too low |
 * | 1003   | SEND_VIDEO_BITRATE_TOO_LOW | Sent video bitrate is too low |
 * | 1005   | RECV_VIDEO_DECODE_FAILED   | Decoding received video fails |
 * | 2001   | AUDIO_INPUT_LEVEL_TOO_LOW  | Sent audio volume is too low     |
 * | 2002   | AUDIO_OUTPUT_LEVEL_TOO_LOW | Received audio volume is too low     |
 * | 2003   | SEND_AUDIO_BITRATE_TOO_LOW | Sent audio bitrate is too low |
 * | 2005   | RECV_AUDIO_DECODE_FAILED   | Decoding received audio fails |
 *
 * **Recoveries**
 *
 * | Code | Message                   | Recovery             |
 * | :----- | :------------------------- | :--------------- |
 * |3001   | FRAMERATE_INPUT_TOO_LOW_RECOVER    | Captured video frame rate recovers |
 * |3002   | FRAMERATE_SENT_TOO_LOW_RECOVER     | Sent video frame rate recovers |
 * |3003   | SEND_VIDEO_BITRATE_TOO_LOW_RECOVER | Sent video bitrate recovers |
 * |3005   | RECV_VIDEO_DECODE_FAILED_RECOVER   | Decoding received video recovers |
 * |4001   | AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER  | Sent audio volume recovers     |
 * |4002   | AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER | Received audio volume recovers     |
 * |4003   | SEND_AUDIO_BITRATE_TOO_LOW_RECOVER | Sent audio bitrate recovers |
 * |4005   | RECV_AUDIO_DECODE_FAILED_RECOVER   | Decoding received audio recovers |
 *
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_exception(event: {
    /**
     * The event code.
     */
    code: number;
    /**
     * The event message.
     */
    msg: string;
    /**
     * The ID of the user who has experienced the exception or recovery event.
     */
    uid: UID;
}): void;
/**
 * Occurs when the first remote audio or video frame is decoded.
 *
 * @event
 * @asMemberOf IRemoteTrack
 */
declare function event_first_frame_decoded(): void;
/**
 * After the method call of [[publish]] succeeds, the SDK triggers this callback to indicate whether the media stream is forwarded by the Agora cloud proxy service.
 *
 * @param isUsingProxy Whether the media stream is forwarded by the Agora cloud proxy service.
 * - `true`: Forwarded by the Agora cloud proxy service.
 * - `false`: Not forwarded by the Agora cloud proxy service.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_is_using_cloud_proxy(isUsingProxy: boolean): void;
/**
 * Occurs when an error occurs in CDN live streaming.
 *
 * After the method call of {@link startLiveStreaming} succeeds, the SDK triggers this callback when errors occur during CDN live streaming.
 *
 * You can visit `err.code` to get the error code. The errors that you may encounter include:
 * - `LIVE_STREAMING_INVALID_ARGUMENT`: Invalid argument.
 * - `LIVE_STREAMING_INTERNAL_SERVER_ERROR`: An error occurs in Agora's streaming server.
 * - `LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED`: The URL is occupied.
 * - `LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED`: Sets the transcoding parameters when the transcoding is not enabled.
 * - `LIVE_STREAMING_CDN_ERROR`: An error occurs in the CDN.
 * - `LIVE_STREAMING_INVALID_RAW_STREAM`: Timeout for the CDN live streaming. Please check your media stream.
 *
 * @param url The URL of the CDN live streaming that has errors.
 * @param err The error details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_live_streaming_error(url: string, err: AgoraRTCError): void;
/**
 * Occurs when a warning occurs in CDN live streaming.
 *
 * After the method call of {@link startLiveStreaming} succeeds, the SDK triggers this callback when warnings occur during CDN live streaming.
 *
 * You can visit `err.code` to get the warning code. The warnings that you may encounter include:
 * - `LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT`: Pushes stremas to more than 10 URLs.
 * - `LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE`: Fails to load the background image or watermark image.
 * - `LIVE_STREAMING_WARN_FREQUENT_REQUEST`: Pushes stremas to the CDN too frequently.
 *
 * @param url The URL of the CDN live streaming that has warnings.
 * @param err The warning details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_live_streaming_warning(url: string, warning: AgoraRTCError): void;
/**
 * Occurs when the SDK ends reestablishing the media connection for publishing and subscribing.
 * @param uid The ID of the user who reestablishes the connection. If it is the local `uid`, the connection is for publishing; if it is a remote `uid`, the connection is for subscribing.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_media_reconnect_end(uid: UID): void;
/**
 * Occurs when the SDK starts to reestablish the media connection for publishing and subscribing.
 * @param uid The ID of the user who reestablishes the connection.  If it is the local `uid`, the connection is for publishing; if it is a remote `uid`, the connection is for subscribing.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_media_reconnect_start(uid: UID): void;
/**
 * Reports the network quality of the local user.
 *
 * After the local user joins the channel, the SDK triggers this callback to report the uplink and downlink network conditions of the local user once every two second.
 *
 * > Agora recommends listening for this event and displaying the network quality.
 *
 * @param stats The network quality of the local user.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_network_quality(stats: NetworkQuality): void;
/**
 * Occurs when the state of processing the audio buffer in [BufferSourceAudioTrack]{@link IBufferSourceAudioTrack} changes.
 *
 * @param currentState The state of processing the audio buffer:
 * - `"stopped"`: The SDK stops processing the audio buffer. Reasons may include:
 *  - The SDK finishes processing the audio buffer.
 *  - The user manually stops the processing of the audio buffer.
 * - `"paused"`: The SDK pauses the processing of the audio buffer.
 * - `"playing"`: The SDK is processing the audio buffer.
 *
 * @event
 * @asMemberOf IBufferSourceAudioTrack
 */
declare function event_source_state_change(currentState: AudioSourceState): void;
/**
 * Occurs when a remote video stream falls back to an audio stream due to unreliable network conditions or switches back to video after the network conditions improve.
 * @param uid The ID of the remote user.
 * @param isFallbackOrRecover Whether the remote media stream falls back or recovers:
 * - `"fallback"`: The remote media stream falls back to audio-only due to unreliable network conditions.
 * - `"recover"`: The remote media stream switches back to the video stream after the network conditions improve.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_stream_fallback(uid: UID, isFallbackOrRecover: "fallback" | "recover"): void;
/**
 * > Note: Agora will soon stop the service for injecting online media streams on the client. If you have not implemented this service, Agora recommends that you do not use it.
 *
 * Occurs when the status of the media stream injected by [[addInjectStreamUrl]] updates.
 *
 * @param status The current status.
 * @param uid The ID of the user who injects the media stream.
 * @param url The URL address of the medida stream.
 */
declare function event_stream_inject_status(status: InjectStreamEventStatus, uid: UID, url: string): void;
/**
 * Occurs when the type of a remote video stream changes.
 *
 * The SDK triggers this callback when a high-quality video stream changes to a low-quality video stream, or vice versa.
 * @param uid The ID of the remote user.
 * @param streamType The new stream type:
 * - 0: High-bitrate, high-resolution video stream.
 * - 1: Low-bitrate, low-resolution video stream.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_stream_type_changed(uid: UID, streamType: RemoteStreamType): void;
/**
 * Occurs when the token expires.
 *
 * You must request a new token from your server and call {@link join} to use the new token to join the channel.
 *
 * ``` javascript
 * client.on("token-privilege-did-expire", async function(){
 *   //After requesting a new token
 *   await client.renewToken(token);
 * });
 *
 * ```
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_token_privilege_did_expire(): void;
/**
 * Occurs 30 seconds before a token expires.
 *
 * You must request a new token from your server and call {@link renewToken} to pass a new token as soon as possible.
 *
 * ``` javascript
 * client.on("token-privilege-will-expire", async function(){
 *   //After requesting a new token
 *   await client.renewToken(token);
 * });
 *
 * ```
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_token_privilege_will_expire(): void;
/**
 * Occurs when a audio or video track ends.
 *
 * Reasons may include:
 * - Camera is unplugged.
 * - Microphone is unplugged.
 * - The local user stops screen sharing.
 * - The local user closes the track.
 * - A local media device malfunctions.
 * @event
 * @asMemberOf ILocalTrack
 */
declare function event_track_ended(): void;
/**
 * Reports the state change of users using the Agora RTC Native SDK when your scenario involves the Native SDK.
 *
 * This event is only for synchronizing states with the clients that integrate the Native SDK.
 *
 * In most cases, you only need to listen for [user-published]{@link IAgoraRTCClient.event_user_published} and [user-unpublished]{@link IAgoraRTCClient.event_user_unpublished} events for operations including subscribeing, unsubscribing, and displaying whether the remote user turns on the camera and microphone. You do not need to pay special attention to user states since the SDK automatically handles user states.
 *
 * > This event indicating the media stream of a remote user is active does not necessarily mean that the local user can subscribe to this remote user. The local user can subscribe to a remote user only when receiving the [user-published]{@link IAgoraRTCClient.event_user_published} event.
 *
 * @param uid The ID of the remote user.
 * @param msg The current user state.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_user_info_updated(uid: UID, msg: "mute-audio" | "mute-video" | "enable-local-video" | "unmute-audio" | "unmute-video" | "disable-local-video"): void;
/**
 * Occurs when a remote user or host joins the channel.
 *
 * - In a communication channel, this callback indicates that another user joins the channel and reports the ID of that user. The SDK also triggers this callback to report the existing users in the channel when a user joins the channel.
 * - In a live-broadcast channel, this callback indicates that a host joins the channel. The SDK also triggers this callback to report the existing hosts in the channel when a user joins the channel. Ensure that you have no more than 17 hosts in a channel.
 *
 * The SDK triggers this callback when one of the following situations occurs:
 * - A remote user or host joins the channel by calling {@link join}.
 * - A remote audience switches the user role to host by calling {@link setClientRole} after joining the channel.
 * - A remote user or host rejoins the channel after a network interruption.
 * - A host injects an online media stream into the channel by calling {@link addInjectStreamUrl}.
 * @param user Information of the remote user.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_user_joined(user: IAgoraRTCRemoteUser): void;
/**
 * Occurs when a remote user becomes offline.
 *
 * The SDK triggers this callback when one of the following situations occurs:
 * - A remote user calls {@link leave} and leaves the channel.
 * - A remote user has dropped offline. If no data packet of the user or host is received for 20 seconds, the SDK assumes that the user has dropped offline. A poor network connection may cause a false positive.
 * - A remote user switches the client role from host to audience.
 *
 * > In live-broadcast channels, the SDK triggers this callback only when a host goes offline.
 * @param user Information of the user who is offline.
 * @param reason Reason why the user has gone offline.
 * - `"Quit"`: The user calls {@link leave} and leaves the channel.
 * - `"ServerTimeOut"`: The user has dropped offline.
 * - `"BecomeAudience"`: The client role is switched from host to audience.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_user_left(user: IAgoraRTCRemoteUser, reason: string): void;
/**
 * Occurs when a remote user publishes an audio or video track.
 *
 * You can subscribe to and play the audio or video track in this callback. See {@link subscribe} and [RemoteTrack.play]{@link IRemoteTrack.play}.
 *
 * > The SDK also triggers this callback to report the existing tracks in the channel when a user joins the channel.
 *
 * ```javascript
 * client.on("user-published", async (user, mediaType) => {
 *   await client.subscribe(user, mediaType);
 *   if (mediaType === "video") {
 *     console.log("subscribe video success");
 *     user.videoTrack.play("xxx");
 *   }
 *   if (mediaType === "audio") {
 *     console.log("subscribe audio success");
 *     user.audioTrack.play();
 *   }
 * })
 * ```
 * @param user Information of the remote user.
 * @param mediaType Type of the track.
 * - `"audio"`: The remote user publishes an audio track.
 * - `"video"`: The remote user publishes a video track.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_user_published(user: IAgoraRTCRemoteUser, mediaType: "audio" | "video"): void;
/**
 * Occurs when a remote user unpublishes an audio or video track.
 * @param user Information of the remote user.
 * @param mediaType Type of the track.
 * - `"audio"`: The remote user unpublishes an audio track.
 * - `"video"`: The remote user unpublishes a video track.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_user_unpublished(user: IAgoraRTCRemoteUser, mediaType: "audio" | "video"): void;
/**
 * Reports all the speaking remote users and their volumes.
 *
 * It is disabled by default. You can enable this callback by calling {@link enableAudioVolumeIndicator}.
 * If enabled, it reports the users' volumes every two seconds regardless of whether there are users speaking.
 *
 * The volume is an integer ranging from 0 to 100. Usually a user with volume above five is a speaking user.
 *
 * ``` javascript
 * client.on("volume-indicator", function(result){
 *     result.forEach(function(volume, index){
 *     console.log(`${index} UID ${volume.uid} Level ${volume.level}`);
 *   });
 * });
 * ```
 * @asMemberOf IAgoraRTCClient
 * @event
 */
declare function event_volume_indicator(result: {
    /**
     * The volume of the speaking user, ranging from 0 to 100.
     */
    level: number;
    /**
     * The ID of the speaking user.
     */
    uid: UID;
}[]): void;
/**
 * Parameters for reporting customized messages. Used when calling [AgoraRTCClient.sendCustomReportMessage]{@link IAgoraRTCClient.sendCustomReportMessage}.
 */
export declare interface EventCustomReportParams {
    /**
     * The ID of the message.
     */
    reportId: string;
    /**
     * The category of the message.
     */
    category: string;
    /**
     * The event name of the message.
     */
    event: string;
    /**
     * The label of the message.
     */
    label: string;
    /**
     * The value of the message.
     */
    value: number;
}
/**
 * @ignore
 */
declare class EventEmitter {
    private _events;
    /**
     * Gets all the listeners for a specified event.
     *
     * @param event The event name.
     */
    getListeners(event: string): Function[];
    /**
     * Listens for a specified event.
     *
     * When the specified event happens, the SDK triggers the callback that you pass.
     * @param event The event name.
     * @param listener The callback to trigger.
     */
    on(event: string, listener: Function): void;
    /**
     * Listens for a specified event once.
     *
     * When the specified event happens, the SDK triggers the callback that you pass and then removes the listener.
     * @param event The event name.
     * @param listener The callback to trigger.
     */
    once(event: string, listener: Function): void;
    /**
     * Removes the listener for a specified event.
     *
     * @param event The event name.
     * @param listener The callback that corresponds to the event listener.
     */
    off(event: string, listener: Function): void;
    /**
     * Removes all listeners for a specified event.
     *
     * @param event The event name. If left empty, all listeners for all events are removed.
     */
    removeAllListeners(event?: string): void;
    private _indexOfListener;
}
/**
 * The entry point of the Agora Web SDK.
 */
export declare interface IAgoraRTC {
    /**
     * The version of the Agora Web SDK.
     */
    VERSION: string;
    /**
     * Gets the codecs that the browser supports.
     *
     * This method gets a list of the codecs supported by the SDK and the web browser. The Agora Web SDK supports video codecs VP8 and H.264, and audio codec OPUS.
     *
     * > Note:
     * > - The method works with all major browsers. It gets an empty list if it does not recognize the browser or the browser does not support WebRTC.
     * > - The returned codec list is based on the [SDP](https://tools.ietf.org/html/rfc4566) used by the web browser and for reference only.
     * > - Some Android phones claim to support H.264 but have problems in communicating with other platforms using this codec, in which case we recommend VP8 instead.
     *
     * ```javascript
     * AgoraRTC.getSupportedCodec().then(result => {
     * console.log(`Supported video codec: ${result.video.join(",")});
     * console.log(`Supported audio codec: ${result.audio.join(",")});
     * });
     * ```
     * @returns A `Promise` object. In the `.then(function(result){})` callback, `result` has the following properties:
     * - `video`: array, the supported video codecs. The array may include `"H264"`, `"VP8"`, or be empty.
     * - `audio`: array, the supported audio codecs. The array may include `"OPUS"`, or be empty.
     *
     */
    getSupportedCodec(): Promise<{
        video: string[];
        audio: string[];
    }>;
    /**
     * Checks the compatibility of the current browser.
     *
     * Use this method before calling {@link createClient} to check if the SDK is compatible with the web browser.
     *
     * @returns
     * - `true`: The SDK is compatible with the current web browser.
     * - `false`: The SDK is incompatible with the current web browser.
     */
    checkSystemRequirements(): boolean;
    /**
     * Creates a local client object for managing a call.
     *
     * This is usually the first step of using the Agora Web SDK.
     * @param config The configurations for the client object, including channel profile and codec. The default codec is `vp8` and default channel profile is `rtc`. See {@link ClientConfig} for details.
     * @category Agora Core
     */
    createClient(config: ClientConfig): IAgoraRTCClient;
    /**
     * Creates a customized audio track.
     *
     * This method creates a customized audio track from a [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object.
     *
     * @param config Configurations for the customized audio track.
     * @category Local Track
     */
    createCustomAudioTrack(config: CustomAudioTrackInitConfig): ILocalAudioTrack;
    /**
     * Creates an audio track from the audio sampled by a microphone.
     *
     * @param config Configurations for the sampled audio, such as the capture device and the encoder configuration. See {@link MicrophoneAudioTrackInitConfig}.
     * @category Local Track
     */
    createMicrophoneAudioTrack(config?: MicrophoneAudioTrackInitConfig): Promise<IMicrophoneAudioTrack>;
    /**
     *
     * Creates an audio track from an audio file or [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) object.
     *
     * This method works with both the local and online audio files, supporting the following formats:
     * - MP3.
     * - AAC.
     * - Other audio formats supported by the browser.
     * @param config Configurations such as the file path, caching strategies, and encoder configuration.
     * @returns Unlike other audio track objects, this audio track object adds the methods for audio playback control, such as playing, pausing, seeking and playback status querying.
     * @category Local Track
     */
    createBufferSourceAudioTrack(config: BufferSourceAudioTrackInitConfig): Promise<IBufferSourceAudioTrack>;
    /**
     * Creates a customized video track.
     *
     * This method creates a customized video track from a [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object.
     * @param config Configurations for the customized video track. See {@link CustomVideoTrackInitConfig}.
     * > You can set the sending bitrate for a customized video track by [config]{@link CustomVideoTrackInitConfig}. Other video encoder configurations are not supported.
     * @category Local Track
     */
    createCustomVideoTrack(config: CustomVideoTrackInitConfig): ILocalVideoTrack;
    /**
     * Creates a video track from the video captured by a camera.
     *
     * @param config Configurations for the captured video, such as the capture device and the encoder configuration.
     * @category Local Track
     */
    createCameraVideoTrack(config?: CameraVideoTrackInitConfig): Promise<ICameraVideoTrack>;
    /**
     * Creates an audio track and a video track.
     *
     * Creates an audio track from the audio sampled by a microphone and a video track from the video captured by a camera.
     *
     * > Calling this method differs from calling {@link createMicrophoneAudioTrack} and {@link createCameraVideoTrack} separately:
     * > - This method call requires access to the microphone and the camera at the same time. In this case, users only need to do authorization once.
     * > - Calling {@link createMicrophoneAudioTrack} and {@link createCameraVideoTrack} requires access to the microphone and the camera separately. In this case, users need to do authorization twice.
     * @param audioConfig Configurations for the sampled audio, such as the capture device and the encoder configurations.
     * @param videoConfig Configurations for the captured video, such as the capture device and the encoder configurations.
     */
    createMicrophoneAndCameraTracks(audioConfig?: MicrophoneAudioTrackInitConfig, videoConfig?: CameraVideoTrackInitConfig): Promise<[IMicrophoneAudioTrack, ICameraVideoTrack]>;
    /**
     * Creates a video track for screen sharing.
     *
     * @param config Configurations for the screen-sharing video, such as encoder configuration and capture configuration.
     * @param withAudio Whether to share the audio of the **screen sharing input source** when sharing the screen.
     * - `enable`: Share the audio.
     * - `disable`: (Default) Do not share the audio.
     * - `auto`: Share the audio, dependent on whether the browser supports this function.
     * > Note:
     * > - This function is only supported on Chrome 74 or later on Windows and macOS platforms.
     * > - On Windows, this function allows you to share the audio when sharing the entire screen and sharing Chrome tabs, but not when sharing the application window.
     * On macOS, this function allows you to share the audio only when sharing Chrome tabs.
     * > - For the audio sharing to take effect, the end user must check **Share audio** in the pop-up window when sharing the screen.
     * @returns
     * - If `withAudio` is `enable`, then this method returns a list containing a video track for screen sharing and an audio track. If the end user does not check **Share audio**, the SDK throws an error.
     * - If `withAudio` is `disable`, then this method returns a video track for screen sharing.
     * - If `withAudio` is `auto`, then the SDK attempts to share the audio on browsers supporting this function.
     *   - If the end user checks **Share audio**, then this method returns a list containing a video track for screen sharing and an audio track.
     *   - If the end user does not check **Share audio**, then this method only returns a video track for screen sharing.
     * @category Local Track
     */
    createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio: "enable"): Promise<[ILocalVideoTrack, ILocalAudioTrack]>;
    /**
     * Creates a video track for screen sharing.
     *
     * @param config Configurations for the screen-sharing video, such as encoder configuration and capture configuration.
     * @param withAudio Whether to share the audio of the **screen sharing input source** when sharing the screen.
     * - `enable`: Share the audio.
     * - `disable`: (Default) Do not share the audio.
     * - `auto`: Share the audio, dependent on whether the browser supports this function.
     * > Note:
     * > - This function is only supported on Chrome 74 or later on Windows and macOS platforms.
     * > - On Windows, this function allows you to share the audio when sharing the entire screen and sharing Chrome tabs, but not when sharing the application window.
     * On macOS, this function allows you to share the audio only when sharing Chrome tabs.
     * > - For the audio sharing to take effect, the end user must check **Share audio** in the pop-up window when sharing the screen.
     * @returns
     * - If `withAudio` is `enable`, then this method returns a list containing a video track for screen sharing and an audio track. If the end user does not check **Share audio**, the SDK throws an error.
     * - If `withAudio` is `disable`, then this method returns a video track for screen sharing.
     * - If `withAudio` is `auto`, then the SDK attempts to share the audio on browsers supporting this function.
     *   - If the end user checks **Share audio**, then this method returns a list containing a video track for screen sharing and an audio track.
     *   - If the end user does not check **Share audio**, then this method only returns a video track for screen sharing.
     */
    createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio: "disable"): Promise<ILocalVideoTrack>;
    /**
     * Creates a video track for screen sharing.
     *
     * @param config Configurations for the screen-sharing video, such as encoder configuration and capture configuration.
     * @param withAudio Whether to share the audio of the **screen sharing input source** when sharing the screen.
     * - `enable`: Share the audio.
     * - `disable`: (Default) Do not share the audio.
     * - `auto`: Share the audio, dependent on whether the browser supports this function.
     * > Note:
     * > - This function is only supported on Chrome 74 or later on Windows and macOS platforms.
     * > - On Windows, this function allows you to share the audio when sharing the entire screen and sharing Chrome tabs, but not when sharing the application window.
     * On macOS, this function allows you to share the audio only when sharing Chrome tabs.
     * > - For the audio sharing to take effect, the end user must check **Share audio** in the pop-up window when sharing the screen.
     * @returns
     * - If `withAudio` is `enable`, then this method returns a list containing a video track for screen sharing and an audio track. If the end user does not check **Share audio**, the SDK throws an error.
     * - If `withAudio` is `disable`, then this method returns a video track for screen sharing.
     * - If `withAudio` is `auto`, then the SDK attempts to share the audio on browsers supporting this function.
     *   - If the end user checks **Share audio**, then this method returns a list containing a video track for screen sharing and an audio track.
     *   - If the end user does not check **Share audio**, then this method only returns a video track for screen sharing.
     */
    createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio?: "enable" | "disable" | "auto"): Promise<[ILocalVideoTrack, ILocalAudioTrack] | ILocalVideoTrack>;
    /**
     * Enumerates the media input and output devices available, such as microphones, cameras, and headsets.
     *
     * If this method call succeeds, the SDK returns a list of media devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.
     *
     * > Calling this method turns on the camera and microphone shortly for the device permission request. On browsers including Chrome 81 or later, Firefox, and Safari, the SDK cannot get accurate device information without permission for the media device.
     *
     * ```javascript
     * getDevices().then(devices => {
     * console.log("first device id", devices[0].deviceId);
     * }).catch(e => {
     * console.log("get devices error!", e);
     * });
     * ```
     * @param skipPermissionCheck Whether to skip the permission check. If you set this parameter as `true`, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
     * - `true`: Skip the permission check.
     * - `false`: (Default) Do not skip the permission check.
     * @category Media Devices
     */
    getDevices(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates the audio sampling devices available, such as microphones.
     *
     * If this method call succeeds, the SDK returns a list of audio input devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.
     *
     * > Calling this method turns on the microphone shortly for the device permission request. On browsers including Chrome 81 or later, Firefox, and Safari, the SDK cannot get accurate device information without permission for the media device.
     *
     * @param skipPermissionCheck Whether to skip the permission check. If you set this parameter as `true`, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
     * - `true`: Skip the permission check.
     * - `false`: (Default) Do not skip the permission check.
     * @category Media Devices
     */
    getMicrophones(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates the video capture devices available, such as cameras.
     *
     * If this method call succeeds, the SDK returns a list of video input devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.
     *
     * > Calling this method turns on the camera shortly for the device permission request. On browsers including Chrome 81 or later, Firefox, and Safari, the SDK cannot get accurate device information without permission for the media device.
     *
     * @param skipPermissionCheck Whether to skip the permission check. If you set this parameter as `true`, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
     * - `true`: Skip the permission check.
     * - `false`: (Default) Do not skip the permission check.
     * @category Media Devices
     */
    getCameras(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>;
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.1.0*
     *
     * Enumerates the audio playback devices available, such as speakers.
     *
     * If this method call succeeds, the SDK returns a list of audio playback devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.
     *
     * > Calling this method turns on the microphone briefly for the device permission request. On browsers including Chrome 81 or later, Firefox, and Safari, the SDK cannot get accurate device information without permission for the media device.
     *
     * @param skipPermissionCheck Whether to skip the permission check. If you set this parameter as `true`, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
     * - `true`: Skip the permission check.
     * - `false`: (Default) Do not skip the permission check.
     * @category Media Devices
     */
    getPlaybackDevices(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>;
    /**
     * Gets the sources for screen-sharing through Electron.
     *
     * If this method call succeeds, the SDK returns a list of screen sources in an array of {@link ElectronDesktopCapturerSource} objects.
     * @param type The type of screen sources (window/application/screen) to get. See {@link ScreenSourceType}. If it is left empty, this method gets all the available sources.
     * @category Media Devices
     */
    getElectronScreenSources(type?: ScreenSourceType): Promise<ElectronDesktopCapturerSource[]>;
    /**
     * Sets the output log level of the SDK.
     *
     * Choose a level to see the logs preceding that level. The log level follows the sequence of NONE, ERROR, WARNING, INFO, and DEBUG.
     *
     * For example, if you set the log level as `AgoraRTC.Logger.setLogLevel(1);`, then you can see logs in levels INFO, ERROR, and WARNING.
     * @param level The output log level.
     * - 0: DEBUG. Output all API logs.
     * - 1: INFO. Output logs of the INFO, WARNING and ERROR level.
     * - 2: WARNING. Output logs of the WARNING and ERROR level.
     * - 3: ERROR. Output logs of the ERROR level.
     * - 4: NONE. Do not output any log.
     * @category Logger
     */
    setLogLevel(level: number): void;
    /**
     * Enables log upload.
     *
     * Call this method to enable log upload to Agora’s server.
     *
     * The log-upload function is disabled by default. To enable this function, you must call this method before calling all the other methods.
     *
     * > If a user fails to join the channel, the log information (for that user) is unavailable on Agora's server.
     * @category Logger
     */
    enableLogUpload(): void;
    /**
     * Disables log upload.
     *
     * The log-upload function is disabled by default. If you have called {@link enableLogUpload}, then call this method when you need to stop uploading the log.
     * @category Logger
     */
    disableLogUpload(): void;
    /**
     * Creates an object for configuring the media stream relay.
     */
    createChannelMediaRelayConfiguration(): IChannelMediaRelayConfiguration;
    /**
     * Checks whether a video track is active.
     *
     * The SDK determines whether a video track is active by checking for image changes during the specified time frame.
     *
     * Agora recommends calling this method before starting a call to check the availability of the video capture device. You can pass the camera video track as a parameter in this method to check whether the camera works.
     *
     * > Notes:
     * > - If a video track is muted, this method returns `false`.
     * > - Do not call this method frequently as the check may affect web performance.
     *
     * ``` javascript
     * const videoTrack = await AgoraRTC.createCameraVideoTrack({ cameraId });
     * AgoraRTC.checkVideoTrackIsActive(videoTrack).then(result => {
     *   console.log(`${ cameraLabel } is ${ result ? "available" : "unavailable" }`);
     * }).catch(e => {
     *   console.log("check video track error!", e);
     * });
     * ```
     *
     * @param track The local or remote video track to be checked.
     * @param timeout The time frame (ms) for checking. The default value is 5,000 ms.
     *
     * @returns Whether the image in the specified video track changes during the specified time frame:
     * - `true`: The image changes. For the camera video track, it means the video capture device works.
     * - `false`: The image does not change. Possible reasons:
     *   - The video capturing device does not work properly or is blocked.
     *   - The video track is muted.
     */
    checkVideoTrackIsActive(track: ILocalVideoTrack | IRemoteVideoTrack, timeout?: number): Promise<boolean>;
    /**
     * Check whether an audio track is active.
     *
     * The SDK determines whether an audio track is active by checking whether the volume changes during the specified time frame.
     *
     * Agora recommends calling this method before starting a call to check the availability of the audio sampling device. You can pass the audio track from the audio sampled by a microphone as a parameter in this method to check whether the microphone works.
     *
     * > Notes:
     * > - The check may fail in a quiet environment. Agora suggests you instruct the end user to speak or make some noise when calling this method.
     * > - If an audio track is muted, this method returns `false`.
     * > - Do not call this method frequently as the check may affect web performance.
     *
     * ``` javascript
     * const audioTrack = await AgoraRTC.createMicrophoneAudioTrack({ microphoneId });
     * AgoraRTC.checkAudioTrackIsActive(audioTrack).then(result => {
     *   console.log(`${ microphoneLabel } is ${ result ? "available" : "unavailable" }`);
     * }).catch(e => {
     *   console.log("check audio track error!", e);
     * });
     * ```
     *
     * @param track The local or remote audio track to be checked.
     * @param timeout The time frame (ms) for checking. The default value is 5,000 ms.
     *
     * @returns Whether the volume in the specified audio track changes during the specified time frame:
     * - `true`: The volume changes. For the microphone audio track, it means the audio sampling device works.
     * - `false`: The volume does not change. Possible reasons:
     *   - The audio sampling device does not work properly.
     *   - The volume in the customized audio track does not change.
     *   - The audio track is muted.
     */
    checkAudioTrackIsActive(track: ILocalAudioTrack | IRemoteAudioTrack, timeout?: number): Promise<boolean>;
    /**
     * Occurs when a video capture device is added or removed.
     *
     * ``` javascript
     * AgoraRTC.onCameraChanged = (info) => {
     *   console.log("camera changed!", info.state, info.device);
     * };
     * ```
     * **Parameters**
     *
     * - **deviceInfo**: The information of the video capture device. See {@link DeviceInfo}.
     *
     * @category Global Callback
     */
    onCameraChanged?: (deviceInfo: DeviceInfo) => void;
    /**
     * Occurs when an audio sampling device is added or removed.
     *
     * ``` javascript
     * AgoraRTC.onMicrophoneChanged = (info) => {
     *   console.log("microphone changed!", info.state, info.device);
     * };
     * ```
     * **Parameters**
     *
     * - **deviceInfo**: The information of the device. See {@link DeviceInfo}.
     * @category Global Callback
     */
    onMicrophoneChanged?: (deviceInfo: DeviceInfo) => void;
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.1.0*
     *
     * Occurs when an audio playback device is added or removed.
     *
     * ``` javascript
     * AgoraRTC.onPlaybackDeviceChanged = (info) => {
     *   console.log("speaker changed!", info.state, info.device);
     * };
     * ```
     * **Parameters**
     *
     * - **deviceInfo**: The information of the device. See {@link DeviceInfo}.
     * @category Global Callback
     */
    onPlaybackDeviceChanged?: (deviceInfo: DeviceInfo) => void;
    /**
     * Occurs when the autoplay of an audio track fails.
     *
     * The autoplay failure is caused by browsers' [autoplay blocking](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#Autoplay_and_autoplay_blocking), which does not affect video tracks.
     *
     * In the Agora Web SDK, once the user has interacted with the webpage, the autoplay blocking is removed. You can deal with the issue in either of the following ways:
     * - If you do not want to receive the `onAudioAutoplayFailed` callback, ensure that the user has interacted with the webpage before `RemoteAudioTrack.play` or `LocalAudioTrack.play` is called.
     * - If you cannot guarantee a user interaction before the call of `RemoteAudioTrack.play` or `LocalAudioTrack.play`, you can display a button and instruct the user to click it in the `onAudioAutoplayFailed` callback.
     * > As long as the browser blocks autoplay, autoplay with sound is impossible before user interaction. As the number of visits on a webpage increases, the browser adds it to the autoplay whitelist, but this information is not accessible by JavaScript.
     *
     * The following example demonstrates how to display a button for the user to click when autoplay fails.
     *
     * > If multiple audio tracks call `play()`, the `onAudioAutoplayFailed` is triggered multiple times. The example uses the `isAudioAutoplayFailed` object to avoid repeatedly creating buttons.
     * ```javascript
     *  let isAudioAutoplayFailed = false;
     *  AgoraRTC.onAudioAutoplayFailed = () => {
     *   if (isAudioAutoplayFailed) return;
     *
     *   isAudioAutoplayFailed = true;
     *   const btn = document.createElement("button");
     *   btn.innerText = "Click me to resume the audio playback";
     *   btn.onClick = () => {
     *     isAudioAutoplayFailed = false;
     *     btn.remove();
     *   };
     *   document.body.append(btn);
     * };
     * ```
     * @category Global Callback
     */
    onAudioAutoplayFailed?: () => void;
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.2.0*
     *
     * Sets the region for connection.
     *
     * This advanced feature applies to scenarios that have regional restrictions.
     *
     * By default, the SDK connects to nearby Agora servers. After specifying the region, the SDK connects to the Agora servers within that region.
     *
     * > Note: The SDK supports specifying only one region.
     *
     * @param area The region for connection. For details, see {@link AREAS}.
     */
    setArea(area: AREAS[]): void;
    /**
     * <br>&emsp;&emsp;&emsp;*4.4.0*
     *
     * Enables the AEC (Acoustic Echo Canceller) for the audio played on the local client.
     *
     * In a call or live streaming, if you use the HTML audio or video tag to play a media file on Chrome with the speakerphone, the audio of this file is also captured by the SDK and sent to the remote users. In this case, you can call this method to apply the AEC to the audio.
     *
     * > Note: If you play a cross-origin media file, you must set the `crossOrigin` property in [HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement) as `"anonymous"` to allow the SDK to capture the media.
     *
     * @param element The [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) object to which the echo cancellation is applied.
     */
    startProcessingLocalAEC(element: HTMLMediaElement): void;
}
/**
 * An interface providing the local client with basic functions for a voice or video call, such as joining a channel, publishing tracks, or subscribing to tracks.
 *
 * An `AgoraRTCClient` object is created by the [[createClient]] method.
 * @public
 */
export declare interface IAgoraRTCClient extends EventEmitter {
    /**
     * Connection state between the SDK and the Agora server.
     */
    readonly connectionState: ConnectionState;
    /**
     * A list of the remote users in the channel, each of which includes the user ID and the corresponding track information.
     *
     * The list is empty if the local user has not joined a channel.
     */
    readonly remoteUsers: IAgoraRTCRemoteUser[];
    /**
     * **Since**
     * <br>&emsp;&emsp;&emsp;*4.0.0*
     *
     * The list of the local tracks that the local user is publishing.
     *
     * - After a success method call of [[publish]], the published track object is added to this list automatically.
     * - After a success method call of [[unpublish]], the unpublished track object is removed from this list automatically.
     */
    readonly localTracks: ILocalTrack[];
    /**
     * The ID of the local user.
     *
     * The value is `undefined` if the local user has not joined a channel.
     */
    readonly uid?: UID;
    /**
     * The current channel name.
     *
     * The value is `undefined` if the local user has not joined a channel.
     */
    readonly channelName?: string;
    on(event: "connection-state-change", listener: typeof event_connection_state_change): void;
    on(event: "user-joined", listener: typeof event_user_joined): void;
    on(event: "user-left", listener: typeof event_user_left): void;
    on(event: "user-published", listener: typeof event_user_published): void;
    on(event: "user-unpublished", listener: typeof event_user_unpublished): void;
    on(event: "user-info-updated", listener: typeof event_user_info_updated): void;
    on(event: "media-reconnect-start", listener: typeof event_media_reconnect_start): void;
    on(event: "media-reconnect-end", listener: typeof event_media_reconnect_end): void;
    on(event: "stream-type-changed", listener: typeof event_stream_type_changed): void;
    on(event: "stream-fallback", listener: typeof event_stream_fallback): void;
    on(event: "channel-media-relay-state", listener: typeof event_channel_media_relay_state): void;
    on(event: "channel-media-relay-event", listener: typeof event_channel_media_relay_event): void;
    on(event: "volume-indicator", listener: typeof event_volume_indicator): void;
    on(event: "crypt-error", listener: typeof event_crypt_error): void;
    on(event: "token-privilege-will-expire", listener: typeof event_token_privilege_will_expire): void;
    on(event: "token-privilege-did-expire", listener: typeof event_token_privilege_did_expire): void;
    on(event: "network-quality", listener: typeof event_network_quality): void;
    on(event: "live-streaming-error", listener: typeof event_live_streaming_error): void;
    on(event: "live-streaming-warning", listener: typeof event_live_streaming_warning): void;
    on(event: "stream-inject-status", listener: typeof event_stream_inject_status): void;
    on(event: "exception", listener: typeof event_exception): void;
    on(event: "is-using-cloud-proxy", listener: typeof event_is_using_cloud_proxy): void;
    on(event: string, listener: Function): void;
    /**
     * Allows a user to join a channel.
     *
     * Users in the same channel can talk to each other.
     *
     * When joining a channel, the [AgoraRTCClient.on("connection-state-change")]{@link event_connection_state_change} callback is triggered on the local client.
     *
     * After joining a channel, if the user is in the communication profile, or is a host in the Live Broadcast profile, the [AgoraRTCClient.on("user-joined")]{@link event_user_joined} callback is triggered on the remote client.
     *
     * @param appid The [App ID](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#appid) of your Agora project.
     * @param token The token generated at your server:
     * - For low-security requirements: You can use the temporary token generated at Console. For details, see [Get a temporary token](https://docs.agora.io/en/Video/token?platform=All%20Platforms#get-a-temporary-token).
     * - For high-security requirements: Set it as the token generated at your server. For details, see [Get a token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-token).
     * @param channel A string that provides a unique channel name for the call. The length must be within 64 bytes. Supported character scopes:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     * @param uid The user ID, an integer or a string, ASCII characters only. Ensure this ID is unique. If you set the uid to `null`, the server assigns one and returns it in the Promise object.
     *
     * > Note:
     * > - All users in the same channel should have the same type (number or string) of `uid`.
     * > - If you use a number as the user ID, it should be a 32-bit unsigned integer with a value ranging from 0 to (2<sup>32</sup>-1).
     * > - If you use a string as the user ID, the maximum length is 255 characters.
     * > - You can use string UIDs to interoperate with the Native SDK 2.8 or later. Ensure that the Native SDK uses the User Account to join the channel. See [Use String User Accounts](https://docs.agora.io/en/faq/string).
     *
     * @returns A Promise object with the user ID (number).
     * @category Agora Core
     */
    join(appid: string, channel: string, token: string | null, uid?: UID | null): Promise<UID>;
    /**
     * Leaves a channel.
     *
     * When leaving the channel, the [AgoraRTCClient.on("connection-state-change")]{@link IAgoraRTCClient.event_connection_state_change} callback is triggered on the local client.
     *
     * When a user (in the communication profile) or a host (in the live-broadcast profile) leaves the channel, the [AgoraRTCClient.on("user-left")]{@link IAgoraRTCClient.event_user_left} callback is triggered on each remote client in the channel.
     * @category Agora Core
     */
    leave(): Promise<void>;
    /**
     * Publishes local audio and/or video tracks to a channel.
     *
     * After publishing the local tracks, the [AgoraRTCClient.on("user-published")]{@link event_user_published} callback is triggered on the remote client.
     *
     * > Note:
     * > - In a live broadcast channel, call {@link setClientRole} to set the user role as host before calling this method.
     * > - You can call this method multiple times to add tracks for publishing.
     * > - An `AgoraRTCClient` object can publish multiple audio tracks. The SDK automatically mixes the audio tracks into one audio track. Exception: Safari does not support publishing multiple audio tracks on versions earlier than Safari 12.
     * > - An `AgoraRTCClient` object can publish **only one video track**. If you want to switch the published video track, for example, from a camera video track to a scree-sharing video track, you must unpublish the published video track.
     * @param tracks Local tracks created by [AgoraRTC.createMicrophoneAudioTrack]{@link IAgoraRTC.createMicrophoneAudioTrack} / [AgoraRTC.createCameraVideoTrack]{@link IAgoraRTC.createCameraVideoTrack} or other methods.
     * @category Agora Core
     */
    publish(tracks: ILocalTrack | ILocalTrack[]): Promise<void>;
    /**
     * Unpublishes the local audio and/or video tracks.
     *
     * After the local client unpublishes, the [AgoraRTCClient.on("user-unpublished")]{@link event_user_unpublished} callback is triggered on each remote client in the channel.
     *
     * @param tracks The tracks to unpublish. If left empty, all the published tracks are unpublished.
     * @category Agora Core
     */
    unpublish(tracks?: ILocalTrack | ILocalTrack[]): Promise<void>;
    subscribe(user: IAgoraRTCRemoteUser, mediaType: "video"): Promise<IRemoteVideoTrack>;
    subscribe(user: IAgoraRTCRemoteUser, mediaType: "audio"): Promise<IRemoteAudioTrack>;
    /**
     * Subscribes to the audio and/or video tracks of a remote user.
     *
     * ```javascript
     * await client.subscribe(user，"audio");
     * user.audioTrack.play();
     * ```
     * @param user The remote user.
     * @param mediaType The media type of the tracks to subscribe to.
     * - `"video"`: Subscribe to the video track only.
     * - `“audio”`: Subscribe to the audio track only.
     *
     * @returns When the subscription succeeds, the SDK adds the subscribed tracks to [user.audioTrack]{@link IAgoraRTCRemoteUser.audioTrack} and [user.videoTrack]{@link IAgoraRTCRemoteUser.videoTrack}. You can go on to call [audioTrack.play]{@link IRemoteAudioTrack.play} or [videoTrack.play]{@link IRemoteVideoTrack.play} to play the tracks.
     * > The `Promise` object throws the `TRACK_IS_NOT_PUBLISHED` error if the specified tracks do not exist.
     * @category Agora Core
     */
    subscribe(user: IAgoraRTCRemoteUser, mediaType: "video" | "audio"): Promise<IRemoteTrack>;
    /**
     * Unsubscribes from the audio and/or tracks of a remote user.
     *
     * @param user The remote user.
     * @param mediaType The media type of the tracks to unsubscribe from:
     * - `"video"`: Unsubscribe from the video track only.
     * - `“audio”`: Unsubscribe from the audio track only.
     * - empty: Unsubscribe from all the tracks published by the remote user.
     * @returns The `Promise` object throws the `TRACK_IS_NOT_SUBSCRIBED` error if the specified tracks do not exist.
     * @category Agora Core
     */
    unsubscribe(user: IAgoraRTCRemoteUser, mediaType?: "video" | "audio"): Promise<void>;
    /**
     * Sets the video profile of the low-quality video stream.
     *
     * If you have enabled the dual-stream mode by calling {@link enableDualStream}, use this method to set the low-quality video stream profile.
     *
     * If you do not set the low-quality video stream profile, the SDK assigns the default values based on your stream video profile.
     *
     * > Note:
     * > - Frame rate settings do not take effect on Firefox. The browser sets the frame rate as 30 fps.
     * > - Due to limitations of some devices and browsers, the resolution you set may get adjusted by the browser. In this case, billings are calculated based on the actual resolution.
     * > - Call this method before calling {@link publish}.
     * @param streamParameter The video profile of the low-quality video stream.
     * @category Dual Stream
     */
    setLowStreamParameter(streamParameter: LowStreamParameter): void;
    /**
     * Enables dual-stream mode.
     *
     * Enables dual-stream mode for the local stream. Dual streams are a hybrid of a high-quality video stream and a low-quality video stream:
     * - High-quality video stream: High bitrate, high resolution.
     * - Low-quality video stream: Low bitrate, low resolution.
     *
     * > Note:
     * > - This method is not supported on Safari.
     * > - Dual-stream mode is not supported mobile devices.
     *
     * ```javascript
     * client.enableDualStream().then(() => {
     *   console.log("Enable Dual stream success!");
     * }).catch(err => {
     *   console.log(err);
     * })
     * ```
     * @category Dual Stream
     */
    enableDualStream(): Promise<void>;
    /**
     * Disables dual-stream mode.
     * @category Dual Stream
     */
    disableDualStream(): Promise<void>;
    /**
     * Sets the user role and level in a live streaming (when [mode]{@link ClientConfig.mode} is `"live"`).
     *
     * The user role determines the permissions that the SDK grants to a user, such as permission to publish local streams, subscribe to remote streams, and push streams to a CDN address. You can set the user role as `"host"` or `"audience"`. A host can publish and subscribe to streams, while an audience member can only subscribe to streams. The default role in a live streaming is `"audience"`. Before publishing tracks, you must call this method to set the user role as `"host"`.
     *
     * > Note:
     * > - When [mode]{@link ClientConfig.mode} is `"rtc"`, this method does not take effect and all users are `"host"` by default.
     * > - If the local client switches the user role after joining a channel, the SDK triggers the [AgoraRTCClient.on("user-joined")]{@link event_user_joined} or [AgoraRTCClient.on("user-left")]{@link event_user_left} callback on the remote client.
     * > - To switch the user role to `"audience"` after calling {@link publish}, call {@link unpublish} first. Otherwise the method call fails and throws an exception.
     *
     * @param role The role of the user.
     */
    setClientRole(role: ClientRole, options?: ClientRoleOptions): Promise<void>;
    /**
     * @ignore
     * Deploys a proxy server.
     *
     * You can also use cloud proxy by {@link startProxyServer}. See [Use Cloud Proxy](https://docs.agora.io/en/Interactive%20Broadcast/cloud_proxy_web?platform=Web) for details.
     *
     * > Note:
     * > - Call this method before {@link join}.
     * > - Proxy services by different service providers may result in slow performance if you are using the Firefox browser. Therefore, Agora recommends using the same service provider for the proxy services. If you use different service providers, Agora recommends not using the Firefox browser.
     * @param proxyServer Your proxy server domain name. ASCII characters only.
     * @category Proxy
     */
    setProxyServer(proxyServer: string): void;
    /**
     * @ignore
     * Deploys a TURN server.
     *
     * You can also use cloud proxy by {@link startProxyServer}. See [Use Cloud Proxy](https://docs.agora.io/en/Interactive%20Broadcast/cloud_proxy_web?platform=Web) for details.
     *
     * > Call this method before {@link join}.
     *
     * @param turnServer The TURN server settings.
     * @category Proxy
     */
    setTurnServer(turnServer: TurnServerConfig): void;
    /**
     * Enables cloud proxy.
     *
     * You must call this method before joining the channel or after leaving the channel.
     *
     * For the extra settings required for using the cloud proxy service, see [Use Cloud Proxy](https://docs.agora.io/en/Interactive%20Broadcast/cloud_proxy_web_ng?platform=Web).
     *
     * @param mode Cloud proxy mode.
     * @category Proxy
     */
    startProxyServer(mode?: number): void;
    /**
     * Disables cloud proxy.
     *
     * You must call this method before joining the channel or after leaving the channel.
     * @category Proxy
     */
    stopProxyServer(): void;
    /**
     * Sets the video type of a remote stream.
     *
     * If a remote user enables dual-stream mode, use this method to set which stream to subscribe to. The local client subscribes to the high-quality video stream by default.
     *
     * > This method works only if the remote client has enabled dual-stream mode ({@link enableDualStream}).
     * @param uid The ID of the remote user.
     * @param streamType The remote video stream type. The following lists the video-stream types:
     * - 0: High-bitrate, high-resolution video stream.
     * - 1: Low-bitrate, low-resolution video stream.
     * @category Dual Stream
     */
    setRemoteVideoStreamType(uid: UID, streamType: RemoteStreamType): Promise<void>;
    pickSVCLayer(uid: UID, layerOptions: {
        spatialLayer: 1 | 2 | 3;
        temporalLayer: 1 | 2 | 3;
    }): Promise<void>;
    /**
     * Sets the stream fallback option.
     *
     * Use this method to set the fallback option for the subscribed video stream.
     * Under poor network conditions, the SDK can subscribe to the low-quality video stream or only to the audio stream.
     *
     * If the auto-fallback option is enabled, the SDK triggers the [AgoraRTCClient.on("stream-type-changed")]{@link event_stream_type_changed} callback when the remote stream changes from a high-quality video stream to a low-quality video stream or vice versa, and triggers the [AgoraRTCClient.on("stream-fallback")]{@link event_stream_fallback} callback when the remote stream changes from a video stream to an audio stream or vice versa.
     *
     * > This method works only if the remote user has enabled the dual-stream mode by {@link enableDualStream}.
     * @param uid The ID of the remote user.
     * @param fallbackType The fallback option. See {@link RemoteStreamFallbackType} for details.
     * @category Dual Stream
     */
    setStreamFallbackOption(uid: UID, fallbackType: RemoteStreamFallbackType): Promise<void>;
    /**
     * Sets the encryption configurations.
     *
     * Use this method to enable the built-in encryption before joining a channel.
     *
     * If the encryption configurations are incorrect, the SDK triggers the [AgoraRTCClient.on("crypt-error")]{@link event_crypt_error} callback when publishing tracks or subscribing to tracks.
     *
     * > Notes:
     * > - All users in a channel must use the same encryption configurations.
     * > - You must call this method before joining a channel, otherwise the method call does not take effect and encryption is not enabled.
     * > - Do not use this method for CDN live streaming.
     *
     * @param encryptionMode The encryption mode.
     * @param secret The encryption secret. ASCII characters only. When a user uses a weak secret, the SDK outputs a warning message to the Web Console and prompts the users to set a strong secret. A strong secret must contain at least eight characters and be a combination of uppercase and lowercase letters, numbers, and special characters.
     */
    setEncryptionConfig(encryptionMode: EncryptionMode, secret: string): void;
    /**
     * Renews the token.
     *
     * The token expires after a set time once token is enabled. When the SDK triggers the [AgoraRTCClient.on("token-privilege-will-expire")]{@link event_token_privilege_will_expire} callback, call this method to pass a new token. Otherwise the SDK disconnects from the server.
     * @param token The new token.
     */
    renewToken(token: string): Promise<void>;
    /**
     * Enables the volume indicator.
     *
     * This method enables the SDK to regularly report the remote users who are speaking and their volumes.
     *
     * After the volume indicator is enabled, the SDK triggers the [AgoraRTCClient.on("volume-indicator")]{@link event_volume_indicator} callback to report the volumes every two seconds, regardless of whether there are active speakers in the channel.
     *
     * ```javascript
     * client.enableAudioVolumeIndicator();
     * client.on("volume-indicator", volumes => {
     *   volumes.forEach((volume, index) => {
     *     console.log(`${index} UID ${volume.uid} Level ${volume.level}`);
     *   });
     * })
     * ```
     */
    enableAudioVolumeIndicator(): void;
    /**
     * Gets the statistics of the call.
     *
     * @returns The statistics of the call.
     */
    getRTCStats(): AgoraRTCStats;
    /**
     * Sets the video layout and audio for CDN live streaming.
     *
     * > Ensure that you [enable the RTMP Converter service](https://docs.agora.io/en/Interactive%20Broadcast/cdn_streaming_web?platform=Web#prerequisites) before using this function.
     * @param config Configurations for live transcoding. See {@link LiveStreamingTranscodingConfig} for details.
     * @category Live Streaming
     */
    setLiveTranscoding(config: LiveStreamingTranscodingConfig): Promise<void>;
    /**
     * Publishes the local stream to the CDN.
     *
     * See [Push Streams to the CDN](https://docs.agora.io/en/Interactive%20Broadcast/cdn_streaming_web?platform=Web) for details.
     *
     * > Note:
     * > - This method adds only one stream HTTP/HTTPS URL address each time it is called.
     * > - Pushing streams to the CDN is not supported on mobile devices.
     *
     * @param url The CDN streaming URL in the RTMP format. ASCII characters only.
     * @param transcodingEnabled Whether to enable live transcoding.
     * Transcoding sets the audio and video profiles and the picture-in-picture layout for the stream to be pushed to the CDN. It is often used to combine the audio and video streams of multiple hosts in a CDN live stream.
     * > If set as `true`, {@link setLiveTranscoding} must be called before this method.
     * - `true`: Enable transcoding.
     * - `false`: (Default) Disable transcoding.
     * @category Live Streaming
     */
    startLiveStreaming(url: string, transcodingEnabled?: boolean): Promise<void>;
    /**
     * Rem
