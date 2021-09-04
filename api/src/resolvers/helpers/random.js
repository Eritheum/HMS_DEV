exports.RandomNumber = () => {
  let length = 7;
  let chars = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
