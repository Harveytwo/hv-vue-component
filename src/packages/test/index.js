import Test from './src/test';

/* istanbul ignore next */
Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test;
