import Post from '@/components/shared/Post/Post';

export interface IPostDetailProps {}

export default function PostDetail(props: IPostDetailProps) {
  return (
    <div
      className='ms-60 max-lg/2:ms-20 @container/pri'
      style={{
        zIndex: 1
      }}
    >
      <div className='newsfeed mt-16 px-40 py-10 @6xl/pri:px-32 @5xl/pri:px-24 @xl/pri:px-14 @sm/pri:px-2'>
        <Post />
      </div>
    </div>
  );
}
