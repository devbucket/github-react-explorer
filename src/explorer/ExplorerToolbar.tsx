import { useState, useEffect, useMemo } from 'react';

import { TextField, Stack, IconButton } from '@mui/material';
import { debounce } from '@mui/material/utils';
import ClearIcon from '@mui/icons-material/Clear';

import { useRepositoriesStore } from './stores/repositories.store';

const { setSearchString } = useRepositoriesStore.getState();

/**
 * Renders the toolbar of the explorer.
 */
export function ExplorerToolbar() {
  const [value, setValue] = useState('');
  const searchString = useRepositoriesStore((state) => state.searchString);

  // Syncs the search input with the search string, when the search string changes.
  useEffect(() => {
    setValue(searchString);
  }, [searchString]);

  /**
   * Debounces the search by 200ms.
   */
  const debouncedSearch = useMemo(
    () =>
      debounce((searchValue: string) => {
        setSearchString(searchValue);
      }, 200),
    [],
  );

  /**
   * Handles the change of the search input.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  /**
   * Clears the search input.
   */
  const handleClear = () => {
    setValue('');
    setSearchString('');
  };

  return (
    <Stack direction="row" sx={{ px: 2, pt: 2 }}>
      <TextField
        size="small"
        fullWidth
        sx={{ maxWidth: '50%' }}
        placeholder={'Search in "React" ...'}
        value={value}
        onFocus={() => debouncedSearch(value)}
        onChange={handleChange}
      />
      <IconButton disabled={value === ''} onClick={handleClear}>
        <ClearIcon />
      </IconButton>
    </Stack>
  );
}
