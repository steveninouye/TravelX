export const validText = (...strArgs) => {
   strArgs.forEach((str) => {
      if (typeof str === 'string') {
         str = str.trim();
      } else {
         str = '';
      }
   });
};
