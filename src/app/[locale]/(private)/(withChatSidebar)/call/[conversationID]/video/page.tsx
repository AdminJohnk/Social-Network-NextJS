'use client';

import '@livekit/components-styles';
import { LiveKitRoom, useTracks, GridLayout, RoomAudioRenderer, ControlBar } from '@livekit/components-react';
import { Track } from 'livekit-client';
import { useEffect } from 'react';

import { ISocketCall } from '@/types';
import { useMessageCall } from '@/hooks/query';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { ParticipantTile } from '@/components/pages/Chat/MessageCall/ParticipantTile';

const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_SERVER;

export interface IVideoCallProps {
  params: {
    conversationID: string;
  };
}

const VideoCall = ({ params: { conversationID } }: IVideoCallProps) => {
  const { dataMessageCall: dataVideo } = useMessageCall(conversationID, 'video');

  const { chatSocket } = useSocketStore();

  const onDisconnected = () => {
    if (!window.closed) {
      chatSocket.emit(Socket.LEAVE_VIDEO_CALL, { ...dataVideo });
      window.close();
    }
  };

  useEffect(() => {
    chatSocket.on(Socket.END_VIDEO_CALL, (data: ISocketCall) => {
      if (data.conversation_id === conversationID && !window.closed) {
        window.close();
      }
    });
  }, []);

  return (
    <LiveKitRoom
      connect
      audio
      video
      token={dataVideo?.token}
      serverUrl={serverUrl}
      data-lk-theme='default'
      onConnected={() => chatSocket.emit(Socket.VIDEO_CALL, { ...dataVideo })}
      onDisconnected={onDisconnected}
      options={{ adaptiveStream: true, dynacast: true }}
      style={{ height: '100vh' }}>
      <VideoConference />
      <RoomAudioRenderer />
      <ControlBar variation='minimal' />
    </LiveKitRoom>
  );
};

const VideoConference = () => {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false }
    ],
    { onlySubscribed: false }
  );

  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      <ParticipantTile />
    </GridLayout>
  );
};

export default VideoCall;
