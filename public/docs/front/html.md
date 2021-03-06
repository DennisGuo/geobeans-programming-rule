# html 开发规范

参考链接：

- [前端编码规范 —— 一般规范](http://www.css88.com/archives/5361)
- [前端编码规范 —— HTML 规范](http://www.css88.com/archives/5364)

## 文档类型

推荐使用 HTML5 的文档类型申明： `<!DOCTYPE html>`.

建议使用 `text/html` 格式的 HTML。避免使用 XHTML。   
XHTML 以及它的属性，比如  `application/xhtml+xml` 在浏览器中的应用支持与优化空间都十分有限。

HTML 中最好不要将无内容元素[1] 的标签闭合，例如：使用 `<br>` 而非 `<br />`.

## HTML 验证

一般情况下，建议使用能通过标准规范验证的 HTML 代码，除非在性能优化和控制文件大小上不得不做出让步。

使用诸如 [W3C Markup Validation Service](https://validator.w3.org/) 这样的工具来进行检测。

规范化的 HTML 是显现技术要求与局限的显著质量基线，它促进了 HTML 被更好地运用。

不推荐:
```html
<title>Test</title>
<article>This is only a test.
```

推荐:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>
    <article>This is only a test.</article>
  </body>
</html>
```

### 可选标签

HTML5 规范中规定了 HTML 标签是可以省略的。  
但从可读性来说，在开发的源文件中最好不要这样做，因为省略标签可能会导致一些问题。

省略一些可选的标签确实使得页面大小减少，这很有用，尤其是对于一些大型网站来说。  
为了达到这一目的，我们可以在**开发后期借助工具**对页面进行压缩处理，在这个环节中这些可选的标签完全就可以省略掉了。


## 协议

不要指定引入资源所带的具体协议。  
当引入图片或其他媒体文件，还有样式和脚本时，URLs 所指向的具体路径，不要指定协议部分（http:,  https:），除非这两者协议都不可用。  
不指定协议使得 URL 从绝对的获取路径转变为相对的，在请求资源协议无法确定时非常好用，而且还能为文件大小节省几个字节。

不推荐
```html
<script src="http://cdn.com/foundation.min.js"></script>
```
推荐
```html
<script src="//cdn.com/foundation.min.js"></script>
```

## 脚本加载


出于性能考虑，脚本异步加载很关键。  

一段脚本放置在 `<head>` 内，比如  `<script src="main.js"></script>`，其加载会一直阻塞 `DOM` 解析，直至它完全地加载和执行完毕。这会造成页面显示的延迟。特别是一些重量级的脚本，对用户体验来说那真是一个巨大的影响。

异步加载脚本可缓解这种性能影响。如果只需兼容 `IE10+`，可将 `HTML5` 的 `async` 属性加至脚本中，它可防止阻塞 DOM 的解析，甚至你可以将脚本引用写在 `<head>` 里也没有影响。

兼容老旧浏览器`(IE9-)`时，应该遵循以下最佳实践:

> 脚本引用写在 `body` 结束标签之前，并带上 `async` 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 `body` 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。 而在现代浏览器中，脚本将在 DOM 解析器发现 `body` 尾部的 `script` 标签才进行加载，此时加载属于异步加载，不会阻塞 `CSSOM`（但其执行仍发生在 CSSOM 之后）。

**所有浏览器中，推荐**：

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <!-- body goes here -->
 
    <script src="main.js" async></script>
  </body>
</html>
```

## 语义化(HTML5)

根据元素（有时被错误地称作“标签”）其被创造出来时的初始意义来使用它。  
打个比方，用 `heading` 元素来定义头部标题，`p` 元素来定义文字段落，用 `a` 元素来定义链接锚点，等等。

有根据有目的地使用 `HTML` 元素，对于可访问性、代码重用、代码效率来说意义重大。

以下示例列出了一些的语义化 HTML 主要情况：

**html5中不推荐**：

```html
<b>My page title</b>
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>
 
<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>
 
    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>
 
<div class="page-footer">
  Copyright 2014
</div>
```


**html5中推荐**：

```html
<!-- The page header should go into a header element -->
<header>
  <!-- As this title belongs to the page structure it's a heading and h1 should be used -->
  <h1>My page title</h1>
</header>
 
<!-- All navigation should go into a nav element -->
<nav class="top-navigation">
  <!-- A listing of elements should always go to UL (OL for ordered listings) -->
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>
 
<!-- The main part of the page should go into a main element (also use role="main" for accessibility) -->
<main class="news-page" role="main">
  <!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. -->
  <section class="page-section news">
    <!-- A section header should go into a section element -->
    <header>
      <!-- As a page section belongs to the page structure heading elements should be used (in this case h2) -->
      <h2 class="title">All news articles</h2>
    </header>
 
    <!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other
     re-usable module / section that can occur multiple times on a page) a article element should be used -->
    <article class="news-article">
      <!-- An article can contain a header that contains the summary / introduction information of the article -->
      <header>
        <!-- As a article title does not belong to the overall page structure there should not be any heading tag! -->
        <div class="article-title">Good article</div>
        <!-- Small can optionally be used to reduce importance -->
        <small class="intro">Introduction sub-title</small>
      </header>
 
      <!-- For the main content in a section or article there is no semantic element -->
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <!-- For content that is represented as side note or less important information in a given context use aside -->
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element -->
      <footer class="article-foot-notes">
        <!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time
         while the actual text in the time element can also be more human readable / relative -->
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>
 
    <!-- In a section, footnotes or similar information can also go into a footer element -->
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>
 
<!-- Your page footer should go into a global footer element -->
<footer class="page-footer">
  Copyright 2014
</footer>
```

## 多媒体回溯

对页面上的媒体而言，像图片、视频、canvas 动画等，要确保其有可替代的接入接口。图片文件我们可采用有意义的备选文本（`alt`），视频和音频文件我们可以为其加上说明文字或字幕。

提供可替代内容对可用性来说十分重要。试想，一位盲人用户如何能知晓一张图片是什么，要是没有 @alt 的话。

（图片的 alt 属性是可不填写内容的，纯装饰性的图片就可用这么做：`alt=""`）

**不推荐**
```html
<img src="luke-skywalker.jpg">
```

**推荐**

```html
<img src="luke-skywalker.jpg" alt="Luke skywalker riding an alien horse">
```

尽量用 alt 标签去描述图片，设想你需要对于那些只能通过语音或者看不见图片的用户表达图片到底是什么。

**不推荐**
```html
<img src="huge-spaceship-approaching-earth.jpg" alt="Header image">
```

**推荐**

```html
<img src="huge-spaceship-approaching-earth.jpg" alt="A huge spaceship that is approaching the earth">
```

## 关注点分离

理解 web 中如何和为何区分不同的关注点，这很重要。  
这里的关注点主要指的是：信息（HTML 结构）、外观（CSS）和行为（JavaScript）。为了使它们成为可维护的干净整洁的代码，我们要尽可能的将它们分离开来。

严格地保证`结构`、`表现`、`行为`三者分离，并尽量使三者之间没有太多的交互和联系。

- **尽量在文档和模板中只包含结构性的 HTML**；  
- **将所有表现代码，移入样式表中**；  
- **将所有动作行为，移入脚本之中**。  

在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。

清晰的分层意味着：

- 不使用行内样式（`<style>.no-good {}</style>`） 
- 不在元素上使用 style 属性（`<hr style="border-top: 5px solid black">`）
- 不使用行内脚本（`<script>alert('no good')</script>`）
- 不使用表象元素（`<b>, <u>, <center>, <font>, <b>`）
- 不使用表象 class 名（`red, left, center`）

**生产环境**
- 不使用超过一到两张样式表（借助工具合并样式表）
- 不使用超过一到两个脚本（借助工具合并脚本）


**不推荐**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="base.css">
  <link rel="stylesheet" href="grid.css">
  <link rel="stylesheet" href="type.css">
  <link rel="stylesheet" href="modules/teaser.css">
</head>
<body>
  <h1 style="font-size: 3rem"></h1>
  <b>I'm a subtitle and I'm bold!</b>
  <center>Dare you center me!</center>
  <script>
    alert('Just dont...');
  </script>
  <div class="red">I'm important!</div>
</body>
</html>
```

**推荐**

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Concatinate your style sheets into a single one -->
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <!-- Don't use style attributes but assign sensible classes and apply styles in the stylesheet -->
  <h1 class="title"></h1>
  <!-- Don't use presentational elements and assign sensible classes -->
  <div class="sub-title">I'm a subtitle and I'm bold!</div>
  <!-- Maybe your comments get centered in your presentation but that decision is up to the stylesheet -->
  <span class="comment">Dare you center me!</span>
  <!-- You wanted to make it red because it's important so then also name the class important and decide in the stylesheet
   what you want to do with it -->
  <div class="important">I'm important!</div>
 
  <!-- Put all your scripts into files and concatinate them into a single one -->
  <script async src="main.js"></script>
</body>
</html>
```

## 内容至上(HTML5)

不要让非内容信息污染了你的 HTML。  
现在貌似有一种倾向：通过 HTML 来解决设计问题，这是显然是不对的。HTML 就应该只关注内容。

HTML 标签的目的，就是为了不断地展示内容信息。

- 不要引入一些特定的 HTML 结构来解决一些视觉设计问题
- 不要将 img 元素当做专门用来做视觉设计的元素

以下例子展示了误将 HTML 用来解决设计问题的这两种情况：

**不推荐(HTML5)**
```html
<!-- We should not introduce an additional element just to solve a design problem  -->
<span class="text-box">
  <span class="square"></span>
  See the square next to me?
</span>
```
```css
.text-box > .square {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```

**推荐(HTML5)**

```html
<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>
```
```css
/* We use a :before pseudo element to solve the design problem of placing a colored square in front of the text content */
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```
图片和 SVG 图形能被引入到 HTML 中的唯一理由是它们呈现出了与内容相关的一些信息。

**不推荐(HTML5)**
```html
<!-- Content images should never be used for design elements!  -->
<span class="text-box">
  <img src="square.svg" alt="Square" />
  See the square next to me?
</span>
```

**推荐(HTML5)**

```html
<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>
```
```css
/* We use a :before pseudo element with a background image to solve the problem */
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(square.svg) no-repeat;
  background-size: 100%;
}
```

## Type 属性

省略样式表与脚本上的 type 属性。鉴于 HTML5 中以上两者默认的 type 值就是 text/css 和 text/javascript，所以 type 属性一般是可以忽略掉的。甚至在老旧版本的浏览器中这么做也是安全可靠的。

**推荐**
```html
<link rel="stylesheet" href="main.css" type="text/css">
<script src="main.js" type="text/javascript"></script>
```
**不推荐**
```html
<link rel="stylesheet" href="main.css" >
<script src="main.js" ></script>
```

## ID 和锚点

通常一个比较好的做法是将页面内所有的头部标题元素都加上 `ID`. 这样做，页面 URL 的 `hash` 中带上对应的 ID 名称，即形成描点，方便跳转至对应元素所处位置。

打个比方，当你在浏览器中输入 URL `http://your-site.com/about#best-practices`，浏览器将定位至以下 `H3` 上。

```html
<h3 id="best-practices">Best practices</h3>
```

## 格式化规则

在每一个块状元素，列表元素和表格元素后，加上一新空白行，并对其子孙元素进行缩进。内联元素写在一行内，块状元素还有列表和表格要另起一行。

（如果由于换行的空格引发了不可预计的问题，那将所有元素并入一行也是可以接受的，格式警告总好过错误警告）。

**推荐**
```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
 
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
 
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
    </tr>
  </tbody>
</table>
```

## HTML 引号

使用双引号(`“”`) 而不是单引号(`”`) 。

**不推荐**
```html
<div class='news-article'></div>
```
**推荐**
```html
<div class="news-article"></div>
```

