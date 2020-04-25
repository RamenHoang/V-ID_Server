let data = [
  { distance: 24, speed: 13, status: 'stolen' },
  { distance: 1, speed: 0, status: 'no_stolen' },
  { distance: 19, speed: 14, status: 'stolen' },
  { distance: 3, speed: 2, status: 'no_stolen' },
  { distance: 29, speed: 15, status: 'stolen' },
  { distance: 1, speed: 0, status: 'no_stolen' },
  { distance: 2, speed: 1, status: 'no_stolen' },
  { distance: 17, speed: 12, status: 'stolen' },
  { distance: 3, speed: 0, status: 'no_stolen' },
  { distance: 23, speed: 14, status: 'stolen' },
  { distance: 25, speed: 12, status: 'stolen' },
  { distance: 36, speed: 17, status: 'stolen' },
  { distance: 2, speed: 0, status: 'no_stolen' },
  { distance: 1, speed: 0, status: 'no_stolen' },
  { distance: 3, speed: 1, status: 'no_stolen' },
  { distance: 2, speed: 1, status: 'no_stolen' },
  { distance: 3, speed: 1, status: 'no_stolen' },
  { distance: 29, speed: 16, status: 'stolen' },
  { distance: 22, speed: 16, status: 'stolen' },
  { distance: 30, speed: 11, status: 'stolen' },
  { distance: 9, speed: 18, status: 'stolen' },
  { distance: 20, speed: 16, status: 'stolen' },
  { distance: 25, speed: 14, status: 'stolen' },
  { distance: 1, speed: 1, status: 'no_stolen' },
  { distance: 33, speed: 15, status: 'stolen' },
  { distance: 23, speed: 12, status: 'stolen' },
  { distance: 29, speed: 11, status: 'stolen' },
  { distance: 23, speed: 13, status: 'stolen' },
  { distance: 14, speed: 17, status: 'stolen' },
  { distance: 4, speed: 2, status: 'no_stolen' },
  { distance: 29, speed: 18, status: 'stolen' },
  { distance: 30, speed: 15, status: 'stolen' },
  { distance: 20, speed: 10, status: 'stolen' },
  { distance: 23, speed: 12, status: 'stolen' },
  { distance: 29, speed: 16, status: 'stolen' },
  { distance: 33, speed: 15, status: 'stolen' },
  { distance: 3, speed: 2, status: 'no_stolen' },
  { distance: 2, speed: 1, status: 'no_stolen' },
  { distance: 15, speed: 18, status: 'stolen' },
  { distance: 1, speed: 0, status: 'no_stolen' },
  { distance: 18, speed: 14, status: 'stolen' },
  { distance: 2, speed: 1, status: 'no_stolen' },
  { distance: 30, speed: 11, status: 'stolen' },
  { distance: 1, speed: 1, status: 'no_stolen' },
  { distance: 1, speed: 0, status: 'no_stolen' },
  { distance: 30, speed: 13, status: 'stolen' },
  { distance: 2, speed: 0, status: 'no_stolen' },
  { distance: 3, speed: 0, status: 'no_stolen' },
  { distance: 2, speed: 1, status: 'no_stolen' },
  { distance: 15, speed: 18, status: 'stolen' },
  { distance: 15, speed: 14, status: 'stolen' },
  { distance: 25, speed: 13, status: 'stolen' },
  { distance: 33, speed: 17, status: 'stolen' },
  { distance: 2, speed: 0, status: 'no_stolen' },
  { distance: 21, speed: 18, status: 'stolen' },
  { distance: 20, speed: 16, status: 'stolen' },
  { distance: 30, speed: 16, status: 'stolen' },
  { distance: 26, speed: 12, status: 'stolen' },
  { distance: 22, speed: 14, status: 'stolen' },
  { distance: 5, speed: 2, status: 'no_stolen' },
  { distance: 35, speed: 18, status: 'stolen' },
  { distance: 25, speed: 16, status: 'stolen' },
  { distance: 2, speed: 2, status: 'no_stolen' },
  { distance: 0, speed: 0, status: 'no_stolen' },
  { distance: 33, speed: 17, status: 'stolen' },
  { distance: 0, speed: 2, status: 'no_stolen' },
  { distance: 23, speed: 16, status: 'stolen' },
  { distance: 0, speed: 2, status: 'no_stolen' },
  { distance: 2, speed: 0, status: 'no_stolen' },
  { distance: 30, speed: 17, status: 'stolen' },
  { distance: 22, speed: 16, status: 'stolen' },
  { distance: 36, speed: 10, status: 'stolen' },
  { distance: 0, speed: 2, status: 'no_stolen' },
  { distance: 3, speed: 0, status: 'no_stolen' },
  { distance: 0, speed: 2, status: 'no_stolen' },
  { distance: 25, speed: 14, status: 'stolen' },
  { distance: 29, speed: 18, status: 'stolen' },
  { distance: 2, speed: 0, status: 'no_stolen' },
  { distance: 26, speed: 11, status: 'stolen' },
  { distance: 16, speed: 18, status: 'stolen' },
  { distance: 25, speed: 13, status: 'stolen' },
  { distance: 3, speed: 1, status: 'no_stolen' },
  { distance: 36, speed: 12, status: 'stolen' }
];

let min_d = data[0].distance,
    min_s = data[0].speed, 
    max_d = min_d, 
    max_s = min_s;

for (let i = 1; i < data.length; i++) {
  if (min_d > data[i].distance) {
    min_d = data[i].distance;
  }
  if (min_s > data[i].speed) {
    min_s = data[i].speed;
  }
  if (max_d < data[i].distance) {
    max_d = data[i].distance;
  }
  if (max_s < data[i].speed) {
    max_s = data[i].speed;
  }
}

console.log(min_d, min_s, max_d, max_s);
