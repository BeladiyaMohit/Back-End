// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fu(req, res, next);
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ status: false, message: error.message });
//   }
// };

const asyncHandler = (responseHandler) => {
  (req, res, next) => {
    Promise.resolve(responseHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
