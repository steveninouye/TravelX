export const ensureStrType = (data, ...keys) => {
   keys.forEach((key) => {
      if (!(typeof data[key] === 'string')) data[key] = '';
   });
};

export const randNum = (max, min) =>
   Math.floor(Math.random() * (max - min + 1)) + min;
