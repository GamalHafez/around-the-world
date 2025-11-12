export const createBem = (block, styleObj) => {
  return (element, modifier) => {
    if (modifier) {
      return styleObj[`${block}__${element}--${modifier}`];
    } else {
      return styleObj[`${block}__${element}`];
    }
  };
};
