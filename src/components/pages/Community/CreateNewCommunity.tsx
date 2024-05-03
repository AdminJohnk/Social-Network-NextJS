import { InputStyle, LabelStyle } from '@/components/shared/InputStyle';
import TextareaV2 from '@/components/ui/textarea-v2';
import { useTranslations } from 'next-intl';

export interface ICreateNewCommunityProps {}

export default function CreateNewCommunity(props: ICreateNewCommunityProps) {
  const t = useTranslations();

  //   name, description, about, tags, members, admins, rules

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[650px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{t('Create Post')}</h2>
      </div>

      <div className='max-h-[490px] overflow-y-scroll custom-scrollbar-bg px-5 py-4'>
        <div className='relative'>
          <InputStyle />
          <LabelStyle>Community Name</LabelStyle>
        </div>
        <div className='mt-7'>
          <TextareaV2 />
        </div>
      </div>

      <div className='p-5 flex justify-between items-center'></div>
    </div>
  );
}
