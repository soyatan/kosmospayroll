import {Metrics} from './Metrics';

const Families = {
  light: 'Quicksand-Light',
  regular: 'Quicksand-Regular',
  medium: 'Quicksand-Medium',
  semibold: 'Quicksand-SemiBold',
  bold: 'Quicksand-Bold',
  black: 'Overlock-Black',
  monoton: 'Monoton-Regular',
};

const Sizes = {
  twelve: Metrics.width * 0.033,
  fourteen: Metrics.width * 0.037,
  sixteen: Metrics.width * 0.041,
  eighteen: Metrics.width * 0.045,
  twenty: Metrics.width * 0.049,
  twentytwo: Metrics.width * 0.055,
  twentysix: Metrics.width * 0.065,
  thirty: Metrics.width * 0.077,
  fourty: Metrics.width * 0.099,
  fifty: Metrics.width * 0.121,
  eighty: Metrics.width * 0.187,
};

export default {
  Families,
  Sizes,
};
