# css 开发规范 

参考链接：

- [推荐大家使用的CSS书写规范、顺序](http://www.shejidaren.com/css-written-specifications.html)
- [前端编码规范 —— CSS 规范](http://www.css88.com/archives/5505)


## 文件命名

- 主要的：`master.css`
- 模块：`module.css`
- 基本共用：`base.css`
- 布局、版面：`layout.css`
- 主题：`themes.css`
- 专栏：`columns.css`
- 文字：`font.css`
- 表单：`forms.css`
- 补丁：`mend.css`
- 打印：`print.css`

## 书写顺序

这是一个选择器内书写CSS属性顺序的大致轮廓。这是为了保证更好的可读性和可扫描重要。

作为最佳实践，我们应该遵循以下顺序（应该按照下表的顺序）：

结构性属性：
1. `display`
1. `position`, `left`, `top`, `right` etc.
1. `overflow`, `float`, `clear` etc.
1. `margin`, `padding`

表现性属性：
1. `background`, `border` etc.
1. `font`, `text`

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/css-written-order.png"/>

## 协议

不推荐
```css
.example {
  background: url(http://static.example.com/images/bg.jpg);
}
```
推荐
```css
.example {
  background: url(//static.example.com/images/bg.jpg);
}
```

## 书写规范

### 缩写属性

CSS有些属性是可以缩写的，比如padding,margin,font等等，这样精简代码同时又能提高用户的阅读体验。

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/abbreviation.png"/>

### 0 和 单位

省略“0”值后面的单位。不要在0值后面使用单位，除非有值。  
`0.x` 的值，不需要写小数点之前的0，直接`.x`即可

不推荐
```css
padding-bottom: 0px;
margin: 0em;
```
推荐
```css
padding-bottom: 0;
margin: 0;
```
<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/del-zero.png"/>

### 简写命名

很多用户都喜欢简写类名，但前提是要让人看懂你的命名才能简写哦！

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/name.png"/>

### 16进制颜色代码缩写

有些颜色代码是可以缩写的，我们就尽量缩写吧，提高用户体验为主。

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/color-abb.png"/>

###  连字符

1. 长名称或词组可以使用中横线来为选择器命名。
2. 不建议使用`“_”`下划线来命名CSS选择器，为什么呢？

    > 输入的时候少按一个shift键；  
    > 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的）  
    > 能良好区分JavaScript变量命名（JS变量命名是用“_”）  

这里有一篇破折号与下划线的详细讨论 
- [Why are dashes preferred for CSS selectors / HTML attributes?](http://stackoverflow.com/questions/7560813/why-are-dashes-preferred-for-css-selectors-html-attributes)
- [CSS样式名中的下划线与连字符](http://www.cnblogs.com/kaiye/archive/2011/06/13/3039046.html)

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/underline.png"/>

### 不要随意使用Id

id在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外id的优先级优先与class，所以id应该按需使用，而不能滥用。

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/css-id.png"/>

### 添加状态前缀

有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了“.is-”前缀。

<img src="http://images.shejidaren.com/wp-content/uploads/2013/09/status-select.png"/>

### 选择器中避免标签名

当构建选择器时应该使用清晰， 准确和有语义的class(类)名。  
不要使用标签选择器。 如果你只关心你的class(类)名，而不是你的代码元素，这样会更容易维护。

从分离的角度考虑,在表现层中不应该分配html标记/语义。  
它可能是一个有序列表需要被改成一个无序列表，或者一个div将被转换成article。  
如果你只使用具有实际意义的class(类)名，并且不使用元素选择器，那么你只需要改变你的html标记，而不用改动你的CSS。

不推荐

```css
div.content > header.content-header > h2.title {
  font-size: 2em;
}
```
推荐
```css
.content > .content-header > .title {
  font-size: 2em;
}
```

### 尽可能的精确

很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。
有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。
然而，在任何情况下，这是一个非常不好的做法。
如果你不写很通用的，需要匹配到DOM末端的选择器， 你应该总是考虑直接子选择器。

考虑下面的DOM:

```html
<article class="content news-content">
  <span class="title">News event</span>
  <div class="content-body">
    <div class="title content-title">
      Check this out
    </div>
 
    <p>This is a news article content</p>
 
    <div class="teaser">
      <div class="title">Buy this</div>
      <div class="teaser-content">Yey!</div>
    </div>
  </div>
</article>
```
下面的CSS将应用于有title类的全部三个元素。
然后，要解决content类下的title类 和 teaser类下的title类下不同的样式，这将需要更精确的选择器再次重写他们的样式。

不推荐
```css
.content .title {
  font-size: 2rem;
}
```
推荐
```css
.content > .title {
  font-size: 2rem;
}
 
.content > .content-body > .title {
  font-size: 1.5rem;
}
 
.content > .content-body > .teaser > .title {
  font-size: 1.2rem;
}
```
### 选择器和声明分离

每个选择器和属性声明总是使用新的一行。

不推荐
```css
a:focus, a:active {
  position: relative; top: 1px;
}
```
推荐
```css
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

### CSS引号

属性选择器或属性值用双引号（””），而不是单引号（”）括起来。
URI值（url()）不要使用引号。

不推荐
```css
@import url('//cdn.com/foundation.css');
 
html {
  font-family: 'open sans', arial, sans-serif;
}
 
body:after {
  content: 'pause';
}
```
推荐
```css
@import url(//cdn.com/foundation.css);
 
html {
  font-family: "open sans", arial, sans-serif;
}
 
body:after {
  content: "pause";
}
```
## 注释

需要再内容块结束位置加上对于的注释结束块：

```css
/* Header */
.header{}
/* End Header */
```

## 常用命名规则

- 头： `header`
- 内容： `content | container`
- 尾： `footer`
- 导航： `nav`
- 侧栏： `sidebar`
- 栏目： `column`
- 页面外围控制整体佈局宽度： `wrapper`
- 左右中： `left right center`
- 登录条： `loginbar`
- 标志： `logo`
- 广告： `banner`
- 页面主体： `main`
- 热点： `hot`
- 新闻： `news`
- 下载： `download`
- 子导航： `subnav`
- 菜单： `menu`
- 子菜单： `submenu`
- 搜索： `search`
- 友情链接： `friendlink`
- 页脚： `footer`
- 版权： `copyright`
- 滚动： `scroll`
- 内容： `content`
- 标签： `tags`
- 文章列表： `list`
- 提示信息： `msg`
- 小技巧： `tips`
- 栏目标题： `title`
- 加入： `joinus`
- 指南： `guide`
- 服务： `service`
- 注册： `regsiter`
- 状态： `status`
- 投票： `vote`
- 合作伙伴： `partner`

## 注意事项

1. 一律小写;
2. 尽量用英文;
3. 不加中槓和下划线;
4. 尽量不缩写，除非一看就明白的单词。
