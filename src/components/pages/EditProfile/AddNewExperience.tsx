import InputStyle from '@/components/shared/InputStyle/InputStyle';
import LabelStyle from '@/components/shared/InputStyle/LabelStyle';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export interface IAddNewExperienceProps {
  handleClose: () => void;
}

export default function AddNewExperience({
  handleClose
}: IAddNewExperienceProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  return (
    <div className='w-[650px] p-7 animate-fade-up'>
      <div className='base-semibold'>Add Experiences</div>
      <div className='flex-start mt-6 gap-4'>
        <div className='relative w-full'>
          <InputStyle />
          <LabelStyle>Position Name</LabelStyle>
        </div>
        <div className='relative w-full'>
          <InputStyle />
          <LabelStyle>Company Name</LabelStyle>
        </div>
      </div>
      <div className='flex-start mt-6 gap-4'>
        <div>
        </div>
        <div>
        </div>
        <div>
          <Button>Until Now</Button>
        </div>
      </div>
    </div>
  );
}
