class Utils {
  static calculateNumber(type, a, b) {
        if (type === 'SUM') {
          return Math.round(a) + Math.round(b);
        } else if (type === 'SUBTRACT') {
          return Math.round(a) - Math.round(b);
        } else if (type === 'DIVIDE') {
          ra = Math.round(a);
          rb = Math.round(b);
          if (rb === 0) return('Error');
          return ra / rb;
        } else {
          return "This is not a valid type";
        }     
  };
};

module.exports = Utils;
