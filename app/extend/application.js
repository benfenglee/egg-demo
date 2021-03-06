// 在app上定义全局方法
module.exports = {
  currentTime() {
    const current = getTime();
    return current;
  },
  get timeProp() {
    return getTime();
  },
};
function getTime() {
  let now = new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth() + 1; //得到月份
  let date = now.getDate(); //得到日期
  let hour = now.getHours(); //得到小时数
  let minute = now.getMinutes(); //得到分钟数
  let second = now.getSeconds(); //得到秒数
  let nowTime =
    year +
    "年" +
    month +
    "月" +
    date +
    "日 " +
    hour +
    ":" +
    minute +
    ":" +
    second;
  return nowTime;
}
