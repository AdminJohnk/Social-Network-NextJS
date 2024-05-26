import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { IoChevronDown, IoClose } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { Avatar } from '@mui/material';

import { omit } from 'lodash';
import { cn, getImageURL } from '@/lib/utils';
import { IUserInfo } from '@/types';

export interface IAddMemberToCommunityProps {
  members: IUserInfo[];
  setMembers: (members: IUserInfo[]) => void;
  defaultMembers?: IUserInfo[];
}

export default function AddMemberToCommunity({
  members,
  setMembers,
  defaultMembers = []
}: IAddMemberToCommunityProps) {
  const t = useTranslations();

  return (
    <Autocomplete
      multiple
      options={members}
      getOptionKey={(option) => option._id}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      getOptionLabel={(option) => option.name}
      defaultValue={defaultMembers}
      clearIcon={<IoClose className='!size-4 !text-text-1' />}
      popupIcon={<IoChevronDown className='!size-4 !text-text-1' />}
      onChange={(_, value) => setMembers(value)}
      noOptionsText={<div className='!text-text-2 !text-center !py-4'>{t('No result found')}</div>}
      ListboxComponent={(props) => (
        <ul {...props} className={cn(props.className, 'custom-scrollbar-fg')}>
          {props.children}
        </ul>
      )}
      PaperComponent={({ children }) => (
        <div className='!bg-foreground-1 !text-text-1 !rounded-lg !shadow-sm'>{children}</div>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option._id}
            variant='outlined'
            label={option.name}
            {...omit(getTagProps({ index }), ['key'])}
            className={cn(getTagProps({ index }).className, '!text-text-1 !bg-foreground-1 flex-between')}
            deleteIcon={<IoClose className='!size-4 !text-text-1' />}
            avatar={<Avatar src={getImageURL(option.user_image, 'avatar')} />}
          />
        ))
      }
      renderOption={(props, option, { selected }) => {
        return (
          <li
            {...props}
            className={cn(props.className, 'rounded-md hover:!bg-hover-1', selected && '!hidden')}>
            <div className='flex items-center gap-3'>
              <Avatar src={getImageURL(option.user_image, 'avatar')} />
              <span>{option.name}</span>
            </div>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='standard'
          label={t('Members')}
          inputProps={{
            ...params.inputProps,
            className: cn(params.inputProps.className, '!outline-none !ring-0 !text-text-1')
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            className: cn(params.InputLabelProps.className, '!text-text-2')
          }}
        />
      )}
    />
  );
}
