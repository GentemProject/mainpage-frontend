import { logger } from '../../utils';

import { CauseModel } from '.';

export async function getCause(options: { causeId: string }) {
  try {
    logger.info('getCause controller');
    return await CauseModel.findById(options.causeId).exec();
  } catch (error) {
    logger.child(error).error('error getCause controller');
    return null;
  }
}

export async function getCauses() {
  try {
    logger.info('getCauses controller');
    return await CauseModel.find().exec();
  } catch (error) {
    logger.child(error).error('error getCauses controller');
    return [];
  }
}
