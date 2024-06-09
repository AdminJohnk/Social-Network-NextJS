import { InputStyle } from '@/components/shared/InputStyle';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { CircularProgress } from '@mui/material';

import { DatePickerWithRange } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IExperience } from '@/types';

export interface IAddNewExperienceProps {
  handleClose: () => void;
  setExperienceArr: React.Dispatch<React.SetStateAction<IExperience[]>>;
  index?: number;
  experience?: IExperience;
}

export default function AddEditExperience({
  handleClose,
  setExperienceArr,
  experience,
  index
}: IAddNewExperienceProps) {
  const t = useTranslations();

  const [positionName, setPositionName] = useState<string>(experience?.position_name || '');
  const [companyName, setCompanyName] = useState<string>(experience?.company_name || '');
  const [startDate, setStartDate] = useState<Date | undefined>(
    experience ? new Date(experience.start_date) : undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    experience ? new Date(experience.end_date) : undefined
  );

  const onChangeDate = useCallback((date?: DateRange) => {
    if (date) {
      setStartDate(date.from);
      setEndDate(date.to);
    }
  }, []);

  const onSubmit = () => {
    if (!positionName || !companyName || !startDate || !endDate) return;

    setExperienceArr((prev) => {
      const newExperience = {
        position_name: positionName,
        company_name: companyName,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString()
      };
      if (index !== undefined) {
        prev[index] = newExperience;
        return [...prev];
      }
      return [...prev, newExperience];
    });

    handleClose();
  };

  const isChanged = positionName && companyName && startDate && endDate;

  return (
    <div className='animate-fade-up'>
      <div className='flex-center gap-4'>
        <div className='relative w-48'>
          <InputStyle
            label='Position Name'
            value={positionName}
            onChange={(e) => setPositionName(e.target.value)}
          />
        </div>
        <div className='relative w-48'>
          <InputStyle
            label='Company Name'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
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
      <div className='flex-center mt-6'>
        <Button
          type='button'
          className={cn('button text-white max-md:flex-1 lg:px-6', !isChanged && 'select-none')}
          disabled={!isChanged}
          onClick={onSubmit}>
          {t('Save')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
