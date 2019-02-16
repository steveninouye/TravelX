import {cityUrl} from './api_urls'

test('Should be falsey', () => {
  expect(cityUrl('hilo')).toBe(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=hilo+point+of+interest&langu=AIzaSyBX88VxrK7rh8-0P44_YKWB-2Qgj3zs3Xo`);
});