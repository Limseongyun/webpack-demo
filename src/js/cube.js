const volume = x => x*x*x;
const area = x => x*x;

//CommonJS 전체 모듈화 module.exports = 전체 내용
//=>es  모듈에서는 export default 전체
export  default {
  volume,//shorthand property : if key equals values then use this
  area
};