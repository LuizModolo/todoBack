import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const validateTitle = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title } = req.body;

  if (!title) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Title is required' });
  }

  if (typeof title !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: 'Title must be a string' });
  }

  return next();
};

const validateContent = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { content } = req.body;

  if (!content) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Content is required' });
  }

  if (typeof content !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: 'Content must be a string' });
  }

  return next();
};

const validateStatusId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { statusId } = req.body;

  if (!statusId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'status is required' });
  }

  if (typeof statusId !== 'number') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: 'Status Id must be a number' });
  }

  return next();
};

export {
  validateTitle,
  validateContent,
  validateStatusId,
};
