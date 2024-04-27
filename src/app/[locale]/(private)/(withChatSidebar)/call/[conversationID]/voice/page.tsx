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

export interface IVoiceCallProps {
  params: {
    conversationID: string;
  };
}

const VoiceCall = ({ params: { conversationID } }: IVoiceCallProps) => {
  const { dataMessageCall: dataAudio } = useMessageCall(conversationID, 'audio');
  const { chatSocket } = useSocketStore();

  const onDisconnected = () => {
    if (!window.closed) {
      chatSocket.emit(Socket.LEAVE_VOICE_CALL, { ...dataAudio });
      window.close();
    }
  };

  useEffect(() => {
    chatSocket.on(Socket.END_VOICE_CALL, (data: ISocketCall) => {
      if (data.conversation_id === conversationID && !window.closed) {
        window.close();
      }
    });
  }, []);

  return (
    <LiveKitRoom
      connect
      audio
      token={dataAudio?.token}
      serverUrl={serverUrl}
      data-lk-theme='default'
      onConnected={() => chatSocket.emit(Socket.VOICE_CALL, { ...dataAudio })}
      onDisconnected={onDisconnected}
      options={{ adaptiveStream: true, dynacast: true }}
      style={{ height: '100vh' }}>
      <AudioConference />
      <RoomAudioRenderer />
      <ControlBar variation='minimal' controls={{ chat: false, camera: false, screenShare: false }} />
    </LiveKitRoom>
  );
};

const AudioConference = () => {
  const tracks = useTracks([{ source: Track.Source.Camera, withPlaceholder: true }], {
    onlySubscribed: false
  });

  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      <ParticipantTile />
    </GridLayout>
  );
};

export default VoiceCall;
