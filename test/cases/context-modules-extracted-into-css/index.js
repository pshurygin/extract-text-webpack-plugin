require('./a.css');

function dynamicRequire(filename){
  require(['./src/' + filename + '.js']);
}

dynamicRequire('b');
