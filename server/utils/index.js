import colors from 'colors';

export const debug = (location = '', error = '') => {
  if (process.env.DEBUG) {
    return console.log(colors.green('[DEBUG LOG]'), colors.yellow(location, error));
  }

  return undefined;
};
