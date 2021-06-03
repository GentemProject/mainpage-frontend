import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export function LoadingItem() {
  return (
    <div className="bg-white p-4 rounded filter drop-shadow-xl hover:drop-shadow-2xl transition-all">
      <div className="grid grid-cols-3">
        <div>
          <Skeleton variant="rect" width={132} height={132} />
        </div>
        <div className="col-span-2 ml-4">
          <div className="mb-4">
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
          <Skeleton variant="text" />
        </div>
      </div>
    </div>
  );
}
