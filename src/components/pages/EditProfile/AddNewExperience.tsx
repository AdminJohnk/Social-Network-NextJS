import { InputStyle, LabelStyle } from '@/components/shared/InputStyle';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { CircularProgress } from '@mui/material';

import { DatePickerWithRange } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface IAddNewExperienceProps {
  handleClose: () => void;
}

export default function AddNewExperience({ handleClose }: IAddNewExperienceProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const onChangeDate = useCallback((date?: DateRange) => {
    if (date) {
      setStartDate(date.from);
      setEndDate(date.to);
    }
  }, []);

  return (
    <div className='animate-fade-up'>
      <div className='flex-center gap-4'>
        <div className='relative w-48'>
          <InputStyle />
          <LabelStyle>Position Name</LabelStyle>
        </div>
        <div className='relative w-48'>
          <InputStyle />
          <LabelStyle>Company Name</LabelStyle>
        </div>
      </div>
      <div className='flex-center mt-6 gap-4'>
        <DatePickerWithRange dateStart={startDate} dateEnd={endDate} onChangeDate={onChangeDate} />
        <Button
          type='button'
          onClick={() => {
            setEndDate(new Date());
          }}>
          Until Now
        </Button>
      </div>
      <div className='mt-6 flex-center'>
        <Button
          className={cn(
            'button lg:px-6 text-white max-md:flex-1'
            // (isLoadingRepositories || !isChanged || isLoading) && 'select-none'
          )}
          // disabled={isLoadingRepositories || !isChanged || isLoading}
          // onClick={onSubmit}
        >
          {/* {isLoading && <CircularProgress size={20} className='text-text-1 mr-2' />} */}
          {t('Save')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
