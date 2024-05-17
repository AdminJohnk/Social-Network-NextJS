import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { IoChevronDown, IoClose } from 'react-icons/io5';

import { omit } from 'lodash';
import { cn, getImageURL } from '@/lib/utils';
import { IUserInfo } from '@/types';
import { Avatar } from '@mui/material';

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
  return (
    <Autocomplete
      multiple
      options={members}
      getOptionLabel={(option) => option.name}
      defaultValue={defaultMembers}
      clearIcon={<IoClose className='!size-4 !text-text-1' />}
      popupIcon={<IoChevronDown className='!size-4 !text-text-1' />}
      onChange={(_, value) => setMembers(value)}
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
      renderInput={(params) => (
        <TextField
          {...params}
          variant='standard'
          label='Members'
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
