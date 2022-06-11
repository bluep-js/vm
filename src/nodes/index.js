const ConsoleLog = require('./execute/consoleLog')
const Call = require('./execute/call')
const Return = require('./execute/return')
const CallFunction = require('./execute/function')
const Now = require('./execute/now')
const Wait = require('./execute/wait')

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
const Each = require('./branches/each')

const VariableGet = require('./variable/get')
const VariableSet = require('./variable/set')

const EnumToString = require('./enum/enum2string')
const EnumEqual = require('./enum/eq')

const StructPack = require('./struct/pack')
const StructUnpack = require('./struct/unpack')
const StructToObject = require('./struct/toobject')
const StructFromObject = require('./struct/fromobject')

const NumberEq = require('./number/eq')
const NumberAssign = require('./number/assign')
const NumberPlus = require('./number/plus')
const NumberMinus = require('./number/minus')
const NumberToString = require('./number/number2string')
const NumberIsEven = require('./number/iseven')
const NumberIsGreater = require('./number/gt')
const NumberIsLess = require('./number/lt')
const NumberMultiply = require('./number/multiply')
const NumberDivide = require('./number/divide')
const NumberRemainder = require('./number/remainder')
const NumberExponentiation = require('./number/exponentiation')
const NumberIncrement = require('./number/increment')
const NumberDecrement = require('./number/decrement')



const StringEq = require('./string/eq')
const StringAppend = require('./string/append')

const DatetimeCreate = require('./datetime/create')
const DatetimeUnwrap = require('./datetime/unwrap')
const DatetimeToString = require('./datetime/tostring')

const BooleanAnd = require('./boolean/and')
const BooleanOr = require('./boolean/or')
const BooleanNot = require('./boolean/not')
const BooleanEq = require('./boolean/eq')

const IsUndefined = require('./undefined/isundefined')

const Nodes = {
  Call,
  Return,
  ConsoleLog,
  CallFunction,
  Now,
  Wait,

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

  EnumToString,
  EnumEqual,

  StructPack,
  StructUnpack,
  StructToObject,
  StructFromObject,

  If,
  Switch,
  For,
  Each,

  BooleanAnd,
  BooleanOr,
  BooleanNot,
  BooleanEq,

  NumberEq,
  NumberAssign,
  NumberPlus,
  NumberMinus,
  NumberToString,
  NumberIsEven,
  NumberIsGreater,
  NumberIsLess,
  NumberMultiply,
  NumberDivide,
  NumberExponentiation,
  NumberRemainder,
  NumberIncrement,
  NumberDecrement,
 
  



  IsUndefined,

  DatetimeCreate,
  DatetimeUnwrap,
  DatetimeToString,
}

module.exports = Nodes
