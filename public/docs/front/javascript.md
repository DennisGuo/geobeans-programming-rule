# Javascript 开发规范

参考链接：

- [JavaScript 开发规范](http://www.cnblogs.com/polk6/p/4660195.html)  
- [前端编码规范 —— JavaScript 规范](http://www.css88.com/archives/5366)

## 命名规范

介绍变量、函数、常量、构造函数、类的成员等等的命名规范

**驼峰式命名**

驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。   
按照第一个字母是否大写，分为：

- `Pascal Case` 大驼峰式命名法：首字母大写。如：StudentInfo、UserInfo、ProductInfo
- `Camel Case` 小驼峰式命名法：首字母小写。如：studentInfo、userInfo、productInfo

**变量命名**

- 命名方法： 小驼峰式命名法。   
- 命名规范： 前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)   
- 命名建议： 尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

示例：

```javascript
// 好的命名方式
var maxCount = 10;
var tableTitle = 'LoginTable';
 
// 不好的命名方式
var setCount = 10;
var getTitle = 'LoginTable';
```

**函数命名**

- 命名方法：小驼峰式命名法。   
- 命名规范：前缀应当为动词。   
- 命名建议：可使用常见动词约定


|  动词 | 含义 | 返回值 |
|-------|------|-------|
|  can  |  判断是否可执行某个动作(权限)  |  函数返回一个布尔值。true：可执行；false：不可执行  |
|  has  |  判断是否含有某个值  |  函数返回一个布尔值。true：含有此值；false：不含有此值  |
|  is  |  判断是否为某个值  |  函数返回一个布尔值。true：为某个值；false：不为某个值  |
|  get  |  获取某个值  |  函数返回一个非布尔值  |
|  set  |  设置某个值  |  无返回值、返回是否设置成功或者返回链式对象  |
|  load  |  加载某些数据  |  无返回值或者返回是否加载完成的结果  |

示例：

```javascript
// 是否可阅读
function canRead() {
    return true;
}
 
// 获取名称
function getName() {
    return this.name;
}
```

**常量**


- 命名方法：名称全部大写。  
- 命名规范：使用大写字母和下划线来组合命名，下划线`_`用以分割单词。  

示例：

```javascript
var MAX_COUNT = 10;
var URL = 'http://www.baidu.com';
```

**构造函数**


- 介绍：在JS中，构造函数也属于函数的一种，只不过采用`new` 运算符创建对象。  
- 命名方法：大驼峰式命名法，首字母大写。  
- 命名规范：前缀为名称。  

示例：

```javascript
function Student(name) {
    this.name = name;
}
 
var st = new Student('tom');
```

**类的成员**

类的成员包含：

- 公共属性和方法：跟变量和函数的命名一样。  
- 私有属性和方法：前缀为`_`(下划线)，后面跟公共属性和方法一样的命名方式。

示例：

```javascript
function Student(name) {
    var _name = name; // 私有成员
 
    // 公共方法
    this.getName = function () {
        return _name;
    }
 
    // 公共方式
    this.setName = function (value) {
        _name = value;
    }
}
var st = new Student('tom');
st.setName('jerry');
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

## 注释规范

介绍单行注释、多行注释以及函数注释。  
JS支持两种不同类型的注释：单行注释和多行注释。

### 单行注释

**说明**：单行注释以两个斜线开始，以行尾结束。  
**语法**：`//` 这是单行注释

使用方式：

- 单独一行：`//`(双斜线)与注释文字之间保留一个空格。  
- 在代码后面添加注释：`//`(双斜线)与代码之间保留一个空格，并且`//`(双斜线)与注释文字之间保留一个空格。  
- 注释代码：`//`(双斜线)与代码之间保留一个空格。

示例：

```javascript
// 调用了一个函数；1)单独在一行
setTitle();
 
var maxCount = 10; // 设置最大量；2)在代码后面注释
 
// setName(); // 3)注释代码
```

### 多行注释

**说明**：以`/*`开头，`*/`结尾  
**语法**：/* 注释说明 */

使用方法：

- 若开始(/*)和结束(*/)都在一行，推荐采用单行注释。
- 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

示例：

```javascript
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```

### 函数注释

**说明**：函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 javadoc(百度百科)。  
**语法**：
```javascript
/** 
* 函数说明 
* @关键字 
*/
```
**常用注释关键字**：(只列出一部分，并不是全部)

|   注释名 |	语法  |	含义  |	示例  |
|----------|--------|---------|---------|
| @param	|@param 参数名 {参数类型}  描述信息	| 描述参数的信息	| @param name {String} 传入名称|
| @return	|@return {返回类型} 描述信息	| 描述返回值的信息	| @return {Boolean} true:可执行;false:不可执行|
| @author	|@author 作者信息 [附属信息：如邮箱、日期]	| 描述此函数作者的信息	| @author 张三 2015/07/21 |
| @version	|@version XX.XX.XX	| 描述此函数的版本号	| @version 1.0.3 |
| @example	|@example 示例代码	| 演示函数的使用	| @example setTitle('测试') |

示例：

```javascript
/**
* 合并Grid的行
* @param grid {Ext.Grid.Panel} 需要合并的Grid
* @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
* @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21 
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                             |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>             |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                             |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```

## 命名空间

介绍全局变量冲突、单全局变量以及命名空间

### 全局变量冲突

在团队开发或者引入第三方JS文件时，有时会造成全局对象的名称冲突，比如a.js有个全局函数sendMsg()，b.js也又有个全局函数sendMsg()，引入a.js和b.js文件时，会造成sendMsg()函数冲突。

示例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/251059041563363.jpg" />

### 单全局变量

所创建的全局对象名称是独一无二的，并将所有的功能代码添加到这个全局对象上。调用自己所写的代码时，以这个全局对象为入口点。

如：

* JQuery的全局对象：$和JQuery
* ExtJS的全局对象： Ext

示例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/251111158128903.jpg" />

### 命名空间树

在项目规模日益壮大时，可采用命名空间方式对JS代码进行规范：即将代码按照功能进行分组，以组的形式附加到单全局对象上。  
以Ext的chart模块为例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/262129019824868.jpg" />

### 命名空间污染

总是将代码包裹成一个 **IIFE**(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。

IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。

**不推荐**
```javascript
var x = 10,
    y = 100;
 
// Declaring variables in the global scope is resulting in global scope pollution. All variables declared like this
// will be stored in the window object. This is very unclean and needs to be avoided.
console.log(window.x + ' ' + window.y);
```
**推荐**
```javascript
// We declare a IIFE and pass parameters into the function that we will use from the global space
(function(log, w, undefined){
  'use strict';
 
  var x = 10,
      y = 100;
 
  // Will output 'true true'
  log((w.x === undefined) + ' ' + (w.y === undefined));
 
}(window.console.log, window));

```

### IIFE

立即执行的函数表达式

无论何时，想要创建一个新的封闭的定义域，那就用 IIFE。它不仅避免了干扰，也使得内存在执行完后立即释放。  
所有脚本文件建议都从 IIFE 开始。  
立即执行的函数表达式的执行括号应该写在外包括号内。虽然写在内还是写在外都是有效的，但写在内使得整个表达式看起来更像一个整体，因此推荐这么做。

**不推荐**
```javascript
(function(){})();
```

**推荐**
```javascript
(function(){}());
```

so，用下列写法来格式化你的 IIFE 代码：

```javascript
(function(){
  'use strict';
 
  // Code goes here
 
}());
```

如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：

```javascript
(function($, w, d){
  'use strict';
 
  $(function() {
    w.alert(d.querySelectorAll('div').length);
  });
}(jQuery, window, document));
```

## 严格模式

ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。  
严格模式会阻止使用在未来很可能被引入的预留关键字。

你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。  
避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。


**不推荐**
```javascript
// Script starts here
'use strict';
 
(function(){
 
  // Your code starts here
 
}());
```

**推荐**
```javascript
(function(){
  'use strict';
 
  // Your code starts here
 
}());
```

## 变量声明

总是使用 var 来声明变量。  
如不指定 var，变量将被隐式地声明为全局变量，这将对变量难以控制。  
如果没有声明，变量处于什么定义域就变得不清（可以是在 Document 或 Window 中，也可以很容易地进入本地定义域）。  
所以，请总是使用 var 来声明变量。

采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处。

**不推荐**
```javascript
x = 10;
y = 100;
```

**推荐**
```javascript
var x = 10,
    y = 100;
```
## 定义域和定义域提升

在 JavaScript 中变量和方法定义会自动提升到执行之前。  
JavaScript 只有 `function` 级的定义域，而无其他很多编程语言中的块定义域。

所以使得你在某一 `function` 内的某语句和循环体中定义了一个变量，**此变量可作用于整个 function 内**，而不仅仅是在此语句或循环体中，因为它们的声明被 JavaScript 自动提升了。

我们通过例子来看清楚这到底是怎么一回事：

原 function:

```javascript
(function(log){
  'use strict';
 
  var a = 10;
 
  for(var i = 0; i < a; i++) {
    var b = i * i;
    log(b);
  }
 
  if(a === 10) {
    var f = function() {
      log(a);
    };
    f();
  }
 
  function x() {
    log('Mr. X!');
  }
  x();
 
}(window.console.log));
```
被 JS 提升过后

```javascript
(function(log){
  'use strict';
  // All variables used in the closure will be hoisted to the top of the function
  var a,
      i,
      b,
      f;
  // All functions in the closure will be hoisted to the top
  function x() {
    log('Mr. X!');
  }
 
  a = 10;
 
  for(i = 0; i < a; i++) {
    b = i * i;
    log(b);
  }
 
  if(a === 10) {
    // Function assignments will only result in hoisted variables but the function body will not be hoisted
    // Only by using a real function declaration the whole function will be hoisted with its body
    f = function() {
      log(a);
    };
    f();
  }
 
  x();
 
}(window.console.log));
```

根据以上提升过程，你是否可理解以下代码？

```javascript
(function(log){
  'use strict';
 
  var a = 10;
 
  i = 5;
 
  x();
 
  for(var i; i < a; i++) {
    log(b);
    var b = i * i;
  }
 
  if(a === 10) {
    f = function() {
      log(a);
    };
    f();
 
    var f;
  }
 
  function x() {
    log('Mr. X!');
  }
 
}(window.console.log));
```

其输出内容：

```
Mr. X!
undefined
25
36
49
64
10
undefined
```

正如你所看到的这段`令人充满困惑`与`误解`的代码导致了`出人意料的结果`。  
只有良好的声明习惯，也就是下一章节我们要提到的声明规则，才能尽可能的避免这类错误风险。

**提升声明**

为避免上一章节所述的变量和方法定义被自动提升造成误解，把风险降到最低，我们应该手动地显示地去声明变量与方法。也就是说，所有的变量以及方法，应当定义在 function 内的首行。

只用一个 var 关键字声明，多个变量用逗号隔开。

**不推荐**
```javascript
(function(log){
  'use strict';
 
  var a = 10;
  var b = 10;
 
  for(var i = 0; i < 10; i++) {
    var c = a * b * i;
  }
 
  function f() {
 
  }
 
  var d = 100;
  var x = function() {
    return d * d;
  };
  log(x());
 
}(window.console.log));
```

**推荐**
```javascript
(function(log){
  'use strict';
 
  var a = 10,
      b = 10,
      i,
      c,
      d,
      x;
 
  function f() {
 
  }
 
  for(i = 0; i < 10; i++) {
    c = a * b * i;
  }
 
 
 
  d = 100;
  x = function() {
    return d * d;
  };
  log(x());
 
}(window.console.log));
```

**在变量申明中赋值**

**不推荐**
```javascript
var a,
    b,
    c;
 
a = 10;
b = 10;
c = 100;
```

**推荐**
```javascript
var a = 10,
    b = 10,
    c = 100;
```    

## 精确比较判断

总是使用 `===` 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。  
如果你使用 `===` 操作符，那比较的双方必须是同一类型为前提的条件下才会有效。

如果你想了解更多关于强制类型转换的信息，你可以读一读 [Dmitry Soshnikov 的这篇文章](http://dmitrysoshnikov.com/notes/note-2-ecmascript-equality-operators/)。  
在只使用 `==` 的情况下，JavaScript 所带来的强制类型转换使得判断结果跟踪变得复杂。

下面的例子可以看出这样的结果有多怪了：

```javascript
(function(log){
  'use strict';
 
  log('0' == 0); // true
  log('' == false); // true
  log('1' == true); // true
  log(null == undefined); // true
 
  var x = {
    valueOf: function() {
      return 'X';
    }
  };
 
  log(x == 'X'); // true
 
}(window.console.log));
```

## 真假判断

当我们在一个 `if` 条件语句中使用变量或表达式时，会做真假判断。  
`if(a == true)` 是不同于 `if(a)` 的。后者的判断比较特殊，我们称其为真假判断。  

这种判断会通过特殊的操作将其转换为 `true` 或 `false`，下列表达式统统返回`false`：

> `false`, `0`, `undefined`, `null`, `NaN`, `''`（空字符串）.

这种真假判断在我们只求结果而不关心过程的情况下，非常的有帮助。

以下示例展示了真假判断是如何工作的：

```Javascript
(function(log){
  'use strict';
 
  function logTruthyFalsy(expr) {
    if(expr) {
      log('truthy');
    } else {
      log('falsy');
    }
  }
 
  logTruthyFalsy(true); // truthy
  logTruthyFalsy(1); // truthy
  logTruthyFalsy({}); // truthy
  logTruthyFalsy([]); // truthy
  logTruthyFalsy('0'); // truthy
 
  logTruthyFalsy(false); // falsy
  logTruthyFalsy(0); // falsy
  logTruthyFalsy(undefined); // falsy
  logTruthyFalsy(null); // falsy
  logTruthyFalsy(NaN); // falsy
  logTruthyFalsy(''); // falsy
 
}(window.console.log));
```

## 逻辑操作

逻辑操作符 || 和 && 也可被用来返回布尔值。  
如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。

基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。

**不推荐**
```javascript
if(!x) {
  if(!y) {
    x = 1;
  } else {
    x = y;
  }
}
```

**推荐**
```javascript
x = x || y || 1;
``` 

这一小技巧经常用来给方法设定默认的参数。

```javascript
(function(log){
  'use strict';
 
  function multiply(a, b) {
    a = a || 1;
    b = b || 1;
 
    log('Result ' + a * b);
  }
 
  multiply(); // Result 1
  multiply(10); // Result 10
  multiply(3, NaN); // Result 3
  multiply(9, 5); // Result 45
 
}(window.console.log));
```

## 分号

总是使用分号，因为隐式的代码嵌套会引发难以察觉的问题。  
分号需要用在表达式的结尾，而并非函数声明的结尾。区分它们最好的例子是：
```javascript
var foo = function() {
  return true;
};  // semicolon here.
 
function foo() {
  return true;
}  // no semicolon here.
```

## 嵌套函数

语句块内的函数声明

切勿在语句块内声明函数，在 ECMAScript 5 的严格模式下，这是不合法的。函数声明应该在定义域的顶层。但在语句块内可将函数申明转化为函数表达式赋值给变量。

**不推荐**
```javascript
if (x) {
  function foo() {}

```

**推荐**
```javascript
if (x) {
  var foo = function() {};
}
``` 

## 异常

基本上你无法避免出现异常，特别是在做大型开发时（使用应用开发框架等等）。  
在没有自定义异常的情况下，从有返回值的函数中返回错误信息一定非常的棘手，更别提多不优雅了。不好的解决方案包括了传第一个引用类型来接纳错误信息，或总是返回一个对象列表，其中包含着可能的错误对象。以上方式基本上是比较简陋的异常处理方式。适时可做自定义异常处理。

在复杂的环境中，你可以考虑抛出对象而不仅仅是字符串（默认的抛出值）。
```javascript
if(name === undefined) {
  throw {
    name: 'System Error',
    message: 'A name should always be specified!'
  }
}
```

## 简易的原型继承

如果你想在 JavaScript 中继承你的对象，请遵循一个简易的模式来创建此继承。如果你预计你会遇上复杂对象的继承，那可以考虑采用一个继承库，比如 [Proto.js by Axel Rauschmayer](https://github.com/rauschma/proto-js)  

简易继承请用以下方式：
```javascript
(function(log){
  'use strict';
 
  // Constructor function
  function Apple(name) {
    this.name = name;
  }
  // Defining a method of apple
  Apple.prototype.eat = function() {
    log('Eating ' + this.name);
  };
 
  // Constructor function
  function GrannySmithApple() {
    // Invoking parent constructor
    Apple.prototype.constructor.call(this, 'Granny Smith');
  }
  // Set parent prototype while creating a copy with Object.create
  GrannySmithApple.prototype = Object.create(Apple.prototype);
  // Set constructor to the sub type, otherwise points to Apple
  GrannySmithApple.prototype.constructor = GrannySmithApple;
 
  // Calling a super method
  GrannySmithApple.prototype.eat = function() {
    // Be sure to apply it onto our current object with call(this)
    Apple.prototype.eat.call(this);
 
    log('Poor Grany Smith');
  };
 
  // Instantiation
  var apple = new Apple('Test Apple');
  var grannyApple = new GrannySmithApple();
 
  log(apple.name); // Test Apple
  log(grannyApple.name); // Granny Smith
 
  // Instance checks
  log(apple instanceof Apple); // true
  log(apple instanceof GrannySmithApple); // false
 
  log(grannyApple instanceof Apple); // true
  log(grannyApple instanceof GrannySmithApple); // true
 
  // Calling method that calls super method
  grannyApple.eat(); // Eating Granny Smith\nPoor Grany Smith
 
}(window.console.log));
```

## 闭包

闭包的创建也许是 JS 最有用也是最易被忽略的能力了。

[关于闭包如何工作的合理解释](http://jibbering.com/faq/faq_notes/closures.html)

**切勿在循环中创建函数**

在简单的循环语句中加入函数是非常容易形成闭包而带来隐患的。下面的例子就是一个典型的陷阱：

不推荐:
```javascript
(function(log, w){
  'use strict';
 
  // numbers and i is defined in the current function closure
  var numbers = [1, 2, 3],
      i;
 
  for(i = 0; i < numbers.length; i++) {
    w.setTimeout(function() {
      // At the moment when this gets executed the i variable, coming from the outer function scope
      // is set to 3 and the current program is alerting the message 3 times
      // 'Index 3 with number undefined
      // If you understand closures in javascript you know how to deal with those cases
      // It's best to just avoid functions / new closures in loops as this prevents those issues
 
      w.alert('Index ' + i + ' with number ' + numbers[i]);
    }, 0);
  }
 
}(window.console.log, window));
```
接下来的改进虽然已经解决了上述例子中的问题或 bug，但还是违反了不在循环中创建函数或闭包的原则。

不推荐

```javascript
(function(log, w){
  'use strict';
 
  // numbers and i is defined in the current function closure
  var numbers = [1, 2, 3],
      i;
 
  for(i = 0; i < numbers.length; i++) { // Creating a new closure scope with an IIFE solves the problem // The delayed function will use index and number which are // in their own closure scope (one closure per loop iteration). // --- // Still this is not recommended as we violate our rule to not // create functions within loops and we are creating two! 
  (function(index, number){ w.setTimeout(function() { // Will output as expected 0 > 1, 1 > 2, 2 > 3
        w.alert('Index ' + index + ' with number ' + number);
      }, 0);
    }(i, numbers[i]));
  }
 
}(window.console.log, window));
```
接下来的改进已解决问题，而且也遵循了规范。可是，你会发现看上去似乎过于复杂繁冗了，应该会有更好的解决方案吧。

不完全推荐

```javascript
(function(log, w){
  'use strict';
 
  // numbers and i is defined in the current function closure
  var numbers = [1, 2, 3],
      i;
 
  // Create a function outside of the loop that will accept arguments to create a
  // function closure scope. This function will return a function that executes in this
  // closure parent scope.
  function alertIndexWithNumber(index, number) {
    return function() {
      w.alert('Index ' + index + ' with number ' + number);
    };
  }
 
  // First parameter is a function call that returns a function.
  // ---
  // This solves our problem and we don't create a function inside our loop
  for(i = 0; i < numbers.length; i++) {
    w.setTimeout(alertIndexWithNumber(i, numbers[i]), 0);
  }
 
}(window.console.log, window));
```
将循环语句转换为函数执行的方式问题能得到立马解决，每一次循环都会对应地创建一次闭包。函数式的风格更加值得推荐，而且看上去也更加地自然和可预料。

推荐

```javascript
(function(log, w){
  'use strict';
 
  // numbers and i is defined in the current function closure
  var numbers = [1, 2, 3],
      i;
 
  numbers.forEach(function(number, index) {
    w.setTimeout(function() {
      w.alert('Index ' + index + ' with number ' + number);
    }, 0);
  });
 
}(window.console.log, window));
```

## eval 函数（魔鬼）

eval() 不但混淆语境还很危险，总会有比这更好、更清晰、更安全的另一种方案来写你的代码，因此尽量不要使用 evil 函数。

## 函数式编程

数式编程让你可以简化代码并缩减维护成本，因为它容易复用，又适当地解耦和更少的依赖。  
接下来的例子中，在一组数字求和的同一问题上，比较了两种解决方案。第一个例子是经典的程序处理，而第二个例子则是采用了函数式编程和 ECMA Script 5.1 的数组方法。

例外：往往在重代码性能轻代码维护的情况之下，要选择最优性能的解决方案而非维护性高的方案（比如用简单的循环语句代替 forEach）。

不推荐

```javascript
(function(log){
  'use strict';
 
  var arr = [10, 3, 7, 9, 100, 20],
      sum = 0,
      i;
 
 
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 
  log('The sum of array ' + arr + ' is: ' + sum)
 
}(window.console.log));
```
推荐
```javascript
(function(log){
  'use strict';
 
  var arr = [10, 3, 7, 9, 100, 20];
 
  var sum = arr.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }, 0);
 
  log('The sum of array ' + arr + ' is: ' + sum);
 
}(window.console.log));
```
另一个例子通过某一规则对一个数组进行过滤匹配来创建一个新的数组。

不推荐
```javascript
(function(log){
  'use strict';
 
  var numbers = [11, 3, 7, 9, 100, 20, 14, 10],
      numbersGreaterTen = [],
      i;
 
 
  for(i = 0; i < numbers.length; i++) { if(numbers[i] > 10) {
      numbersGreaterTen.push(numbers[i]);
    }
  }
 
  log('From the list of numbers ' + numbers + ' only ' + numbersGreaterTen + ' are greater than ten');
 
}(window.console.log));
```
推荐
```javascript
(function(log){
  'use strict';
 
  var numbers = [11, 3, 7, 9, 100, 20, 14, 10];
 
  var numbersGreaterTen = numbers.filter(function(element) {
    return element > 10;
  });
 
  log('From the list of numbers ' + numbers + ' only ' + numbersGreaterTen + ' are greater than ten');
 
}(window.console.log));
```
## 使用 ECMA Script 5
建议使用 ECMA Script 5 中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用。 
在IE8以下环境可以使用ES5.js来兼容[https://github.com/inexorabletash/polyfill](https://github.com/inexorabletash/polyfill/blob/master/es5.js)

**数组和对象的属性迭代**
```javascript
(function(log){
  'use strict';
 
  // Iterate over an array and break at a certain condition
  [1, 2, 3, 4, 5].every(function(element, index, arr) {
    log(element + ' at index ' + index + ' in array ' + arr);
 
    if(index !== 5) {
      return true;
    }
  });
 
  // Defining a simple javascript object
  var obj = {
    a: 'A',
    b: 'B',
    'c-d-e': 'CDE'
  };
 
  // Iterating over the object keys
  Object.keys(obj).forEach(function(element, index, arr) {
    log('Key ' + element + ' has value ' + obj[element]);
  });
 
}(window.console.log)); 
```

## 不要使用 switch

switch 在所有的编程语言中都是个非常错误的难以控制的语句，建议用 if else 来替换它。

## 代码检查

对于比较宽松自由的编程语言来说，严格遵循编码规范和格式化风格指南就显得极为重要。遵循规范固然很好，但是有自动化流程来确保其执行情况，岂不更佳。Trust is good, control is better.

对于 JavaScript，建议使用 [JSLint](http://www.jslint.com/) 或 [JSHint](http://www.jshint.com/)。
