function getRandFloat(min = 0, max = 9999, point = 2) {
  return (Math.random() * (max - min + 1) + min).toFixed(point);
}