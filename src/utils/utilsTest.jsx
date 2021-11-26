export const findByAtrr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};