export const ensureStrType = (data, ...keys) => {
   keys.forEach((key) => {
      if (!(typeof data[key] === 'string')) data[key] = '';
   });
};
