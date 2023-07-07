import experiences from '@/mock/experiences';

export default defineEventHandler(event => {
  switch (getMethod(event)) {
    case 'GET':
      setResponseStatus(event, 200);

      return experiences;

    default:
      throw createError({
        statusCode: 404,
        statusMessage: 'Not found',
      });
  }
});
