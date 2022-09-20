const ConsoleLog = require('./execute/consoleLog')
const Call = require('./execute/call')
const Return = require('./execute/return')
const CallFunction = require('./execute/function')
const Now = require('./execute/now')
const Wait = require('./execute/wait')
const Parallel = require('./execute/parallel')

const Constructor = require('./class/constructor')
const This = require('./class/this')
const New = require('./class/new')
const ClassCastTo = require('./class/castto')
const ClassMethod = require('./class/method')
const ClassVariableGet = require('./class/get')
const ClassVariableSet = require('./class/set')

const If = require('./branches/if')
const Switch = require('./branches/switch')
const For = require('./branches/for')

const VariableGet = require('./variable/get')
const VariableSet = require('./variable/set')

const EnumToString = require('./enum/enum2string')
const EnumEqual = require('./enum/eq')

const StructPack = require('./struct/pack')
const StructUnpack = require('./struct/unpack')
const StructToObject = require('./struct/toobject')
const StructFromObject = require('./struct/fromobject')

const NumberEq = require('./number/eq')
const NumberPlus = require('./number/plus')
const NumberMinus = require('./number/minus')
const NumberToString = require('./number/number2string')
const NumberToFloat = require('./number/number2float')
const NumberIsEven = require('./number/iseven')
const NumberIsGreater = require('./number/gt')
const NumberIsLess = require('./number/lt')
const NumberMultiply = require('./number/multiply')
const NumberDivide = require('./number/divide')
const NumberRemainder = require('./number/remainder')
const NumberIncrement = require('./number/increment')
const NumberDecrement = require('./number/decrement')
const NumberParseInteger = require('./number/parseInteger')
const NumberIsInteger = require('./number/isInteger')

const FloatPlus = require('./float/plus')
const FloatMinus = require('./float/minus')
const FloatDivide = require('./float/divide')
const FloatMultiply = require('./float/multiply')
const FloatEq = require('./float/eq')
const FloatGt = require('./float/gt')
const FloatLt = require('./float/lt')
const FloatToFixed = require('./float/toFixed')
const FloatParse = require('./float/parse')

const MathPi = require('./math/pi')
const MathAbs = require('./math/abs')
const MathAsin = require('./math/asin')
const MathSqrt = require('./math/sqrt')
const MathE = require('./math/e')
const MathPow = require('./math/pow')
const MathLN10 = require('./math/ln10')
const MathLN2 = require('./math/ln2')
const MathCeil = require('./math/ceil')
const MathFloor = require('./math/floor')
const MathRound = require('./math/round')
const MathRandom = require('./math/random')
const MathCbrt = require('./math/cbrt')
const MathExp = require('./math/exp')
const MathExpm1 = require('./math/expm1')
const MathLog = require('./math/log')
const MathLog2 = require('./math/log2')
const MathLog10 = require('./math/log10')
const MathSin = require('./math/sin')
const MathCos = require('./math/cos')
const MathTan = require('./math/tan')
const MathAcos = require('./math/acos')
const MathAtan = require('./math/atan')
const MathSign = require('./math/sign')
const MathSqrt1_2 = require('./math/sqrt1_2')
const MathSqrt2 = require('./math/sqrt2')
const MathTrunc = require('./math/trunc')
const MathLog2E = require('./math/log2E')

const StringEq = require('./string/eq')
const StringAppend = require('./string/append')
const StringToUpperCase = require('./string/toUpperCase')
const StringToLowerCase = require('./string/toLowerCase')
const StringCharAt = require('./string/charAt')
const StringRepeat = require('./string/repeat')
const StringIndexOf = require('./string/indexOf')
const StringLength = require('./string/length')
const StringLastIndexOf = require('./string/lastIndexOf')
const StringIncludes = require('./string/includes')
const StringReplace = require('./string/replace')
const StringSlice = require('./string/slice')
const StringEndsWith = require('./string/endsWith')

const DatetimeCreate = require('./datetime/create')
const DatetimeUnwrap = require('./datetime/unwrap')
const DatetimeToString = require('./datetime/toString')
const DatetimeShift = require('./datetime/shift')
const DatetimeUtc = require('./datetime/utc')
const DatetimeParse = require('./datetime/parse')
const DatetimeIsSameOrBefore = require('./datetime/isSameOrBefore')
const DatetimeIsSameOrAfter = require('./datetime/isSameOrAfter')
const DatetimeUnwrapBoolean = require('./datetime/unwrapBoolean')
const DatetimeIsValid = require('./datetime/isValid')
const DatetimeUnix = require('./datetime/unix')
const DatetimeFromUnix = require('./datetime/fromUnix')

const BooleanAnd = require('./boolean/and')
const BooleanOr = require('./boolean/or')
const BooleanNot = require('./boolean/not')
const BooleanEq = require('./boolean/eq')

const IsUndefined = require('./undefined/isundefined')

const ArrayLength = require('./array/length')
const ArrayIsArray = require('./array/isArray')
const ArrayConcat = require('./array/concat')
const ArrayAt = require('./array/at')
const ArrayJoin = require('./array/join')
const ArrayFill = require('./array/fill')
const ArrayCopyWithin = require('./array/copywithin')
const ArrayLastIndexOf = require('./array/lastIndexOf')
const ArrayEach = require('./array/each')
const ArrayUnshift = require('./array/unshift')
const ArrayPop = require('./array/pop')
const ArrayShift = require('./array/shift')
const ArrayPush = require('./array/push')
const ArrayReverse = require('./array/reverse')
const ArraySplice = require('./array/splice')
const ArrayIncludes = require('./array/includes')
const ArrayIndexOf = require('./array/indexOf')
const ArraySlice = require('./array/slice')


const Nodes = {
  Call,
  Return,
  ConsoleLog,
  CallFunction,
  Now,
  Wait,
  Parallel,

  This,
  New,
  Constructor,
  ClassCastTo,
  ClassMethod,
  ClassVariableGet,
  ClassVariableSet,

  VariableGet,
  VariableSet,

  StringAppend,
  StringEq,
  StringToUpperCase,
  StringToLowerCase,
  StringCharAt,
  StringRepeat,
  StringIndexOf,
  StringLength,
  StringLastIndexOf,
  StringIncludes,
  StringReplace,
  StringSlice,
  StringEndsWith,

  MathPi,
  MathAbs,
  MathSqrt,
  MathE,
  MathPow,
  MathLN10,
  MathLN2,
  MathAcos,
  MathCeil,
  MathFloor,
  MathRound,
  MathRandom,
  MathCbrt,
  MathExp,
  MathExpm1,
  MathLog,
  MathLog2,
  MathLog10,
  MathSin,
  MathCos,
  MathAtan,
  MathAsin,
  MathTan,
  MathLog2E,
  MathSign,
  MathSqrt1_2,
  MathSqrt2,
  MathTrunc,

  EnumToString,
  EnumEqual,

  StructPack,
  StructUnpack,
  StructToObject,
  StructFromObject,

  If,
  Switch,
  For,

  BooleanAnd,
  BooleanOr,
  BooleanNot,
  BooleanEq,

  NumberEq,
  NumberPlus,
  NumberMinus,
  NumberToString,
  NumberToFloat,
  NumberIsEven,
  NumberIsGreater,
  NumberIsLess,
  NumberMultiply,
  NumberDivide,
  NumberRemainder,
  NumberIncrement,
  NumberDecrement,
  NumberIsInteger,
  NumberParseInteger,

  FloatPlus,
  FloatMinus,
  FloatDivide,
  FloatMultiply,
  FloatEq,
  FloatGt,
  FloatLt,
  FloatToFixed,
  FloatParse,

  IsUndefined,

  DatetimeCreate,
  DatetimeUnwrap,
  DatetimeToString,
  DatetimeShift,
  DatetimeUtc,
  DatetimeParse,
  DatetimeIsSameOrBefore,
  DatetimeIsSameOrAfter,
  DatetimeUnwrapBoolean,
  DatetimeIsValid,
  DatetimeUnix,
  DatetimeFromUnix,

  ArrayLength,
  ArrayIsArray,
  ArrayConcat,
  ArrayAt,
  ArrayJoin,
  ArrayFill,
  ArrayCopyWithin,
  ArrayLastIndexOf,
  ArrayPop,
  ArrayUnshift,
  ArrayReverse,
  ArraySplice,
  ArrayIncludes,
  ArraySlice,
  ArrayIndexOf,
  ArrayPush,
  ArrayShift,
  ArrayEach
}

module.exports = Nodes
