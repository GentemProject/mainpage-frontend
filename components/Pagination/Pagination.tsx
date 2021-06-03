import { useMemo } from 'react';
import { Pagination as MaterialPagination } from '@material-ui/lab';

interface Props {
  page: number;
  limit: number;
  total: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, limit, total, onChange }: Props) {
  const count = useMemo(() => Math.ceil(total / limit), [total, limit]);

  return (
    <MaterialPagination
      shape="rounded"
      page={page}
      count={count}
      onChange={(_event, page) => onChange(page)}
      siblingCount={2}
    />
  );
}
