function synchronousLoop(data, processData, done = () => {}) {
  if (data.length > 0) {
    let loop = function(data, i, processData, done) {
      processData(data[i], i, function() {
        if (++i < data.length) {
          loop(data, i, processData, done);
        } else {
          done();
        }
      });
    };
    loop(data, 0, processData, done);
  } else {
    done();
  }
}