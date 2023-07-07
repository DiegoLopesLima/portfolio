import skills from '@/mock/skills';

export default defineEventHandler(event => {
  switch (getMethod(event)) {
    case 'GET':
      setResponseStatus(event, 200);

      return skills;

    default:
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
      });
  }
});
