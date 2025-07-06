# 知识手册

<details>
<summary>细碎的小技巧</summary>

## 细碎的小技巧

### Emmet

- 使用“标签名.类名”可快速补全一个包含类名的标签。(Emmet)

### 快捷键类

- cmd + D：快速向下复制。
- option + shift + 光标：同步编辑多行。

### 注释类

#### HTML注释

- 使用`<!-- 注释内容 -->`格式。
- **注意**: HTML注释不能嵌套。

#### CSS注释

- **CSS注释**: 使用`/* 注释内容 */`格式。
- **less注释**: 使用`//`进行单行注释，使用`/* */`进行多行注释。less中的注释不会被编译到CSS中。

#### JavaScript注释

- **单行注释**: 使用`// 注释内容`格式。
- **多行注释**: 使用`/* 注释内容 */`格式。

### 技巧类

#### HTML技巧

-  SEO：搜索引擎优化，使用语义化标签（如`header`、`nav`、`article`、`section`、`footer`等）有助于提升网站的可读性和搜索引擎排名。
   - `title`标签：每个页面都应该有唯一的标题，使用`<title>`标签定义。
   - `description`标签：网页描述标签，使用`<meta name="description" content="页面描述">`提供页面的简要描述，有助于搜索引擎理解页面内容。
   - `keywords`标签：网页关键词标签，使用`<meta name="keywords" content="关键词1, 关键词2">`定义页面的关键词，有助于搜索引擎优化。

-  SEO：对网站logo使用SEO优化时，采用h1嵌套a，例如：
   ```html
   <div class="logo">
      <h1><a href="#">小兔鲜儿</a></h1>
   </div>
   ```
   ```css
      .logo a {
          font-size: 0; 
          background-image: url(...)}
   ```   

-  `Favicon`：网站图标，使用`<link rel="icon" href="favicon.ico">`定义网站的图标。ico文件放在网站的根目录即可。


- `form`表单属性之`autocomplete`：可以设置历史记录自动填充，填入`off`以关闭


#### CSS小技巧

- `vertical-align`: 用于行内元素或表格单元格的垂直对齐方式（如`top`、`middle`、`bottom`）。
- `outline`: 描边属性，类似于`border`，但不会占用空间。e.g. `outline: 1px solid red;`。
-  -`outline: none;`：去除元素的轮廓线，常用于去除表单的焦点控制样式。
- `input::placeholder`: 用于设置输入框的占位符样式。
   ```css
   input::placeholder {
       color: gray;
       font-style: italic;
   }
   ```
-  注意`background-color: rgba(0, 0, 0, .4);`和`opacity: 0.4;`的不同,
   - `rgba`是颜色的透明度设置，影响背景颜色；
   - `opacity`是元素整体透明度，影响所有内容（包括文本和子元素）, 让整个元素及其子元素的可见度都变化.

-  将`a`标签字体隐藏，可以使用`font-size: 0;`;
- `obeject-fit: cover;` :和bg-size一个道理，取值也相同。不过`object-fit`适用于对`img`标签的调整，`bg-size`则专注于`background`系列


#### JavaScript小技巧

##### 排他思想
- 排他思想：在处理多个元素的状态时，确保只有一个元素处于激活状态。可以通过遍历所有相关元素，先清除其他元素的状态，再设置当前元素的状态。
- 例如，处理多个按钮的选中状态时，可以先移除所有按钮的选中样式，再为当前按钮添加选中样式。
```javascript
// 删除前一个圆点
// li[i - 1].classList.remove('active')
// 用排他思想做会更好！避免了数组下标的计算问题
document.querySelector('.slider-indicator .active').classList.remove('active')
...
li[i].classList.add('active')
 ```


##### 让页面滚动更加丝滑
使用`scroll-behavior: smooth;`可以让页面滚动更加平滑。
```javascript
document.documentElement.style.scrollBehavior = 'smooth';
```

##### confirm方法
- `confirm`方法用于显示一个确认对话框，用户可以选择“确定”或“取消”。返回值为布尔类型，`true`表示用户点击“确定”，`false`表示用户点击“取消”。
```javascript
if (confirm("确定要删除吗？")) {
    // 用户点击了“确定”
    console.log("已删除");
} else {
    // 用户点击了“取消”
    console.log("取消删除");
}
```

##### 表单value判空
对于表单value判空，H5新增了required属性，可以实现基础的表单判空，但空字符串可以跳过这一点，所以JS中可以用trim()方法进一步优化 e.g. 
```javascript
if (String(form_items[i].value).trim() === '') {return alert('请填入完整字段')}`
```

</details>


<details>
<summary>HTML</summary>

## HTML

### HTML 的基本语法和结构

1. 基本的标签，注释，标题标签，段落标签，换行/水平线，文本格式标签（下划线那些），超链接标签，多媒体（图像、音频、视频）。
2. 列表（有序、无序、定义列表），表格（表头、表格标题、合并单元格），表单（文本框、单选框、复选框、下拉列表。
3. `button`的基本用法，包括`type`属性的`button`、`sumbit`、`reset`值。
4. 无语义标签div和span。
5. 字符实体（`&nbsp;`、`&lt;`、`&gt;`、`&amp;`）。

### 小重点

1. 使用`label`标签增强用户体验。
2. 对于`radio`单选，使用`name`属性分好组，否则没有单选效果。
3. `checkbox`是复选框; 下拉菜单是`select`内嵌`option`，不要搞混。

</details>


<details>
<summary>CSS</summary>

## CSS

### CSS 引入方式

内部样式（head嵌套style），外部样式（link引入），行内样式（style属性、配合JS）

### CSS 选择器

主要使用**标签选择器、类选择器、ID选择器**, 一些特殊选择器如下：

1. 后代选择器 e.g.
   ```css
   div p { color: red; } /*选择所有div内的p元素。*/
   ```
   
2. 子代选择器 e.g.
   ```css
   div > p { color: blue; } /*选择所有div的直接子元素p。*/
   ```
   
3. 并集选择器（逗号间隔，同时生效）
   ```css
   h1, h2 { color: green; } /*选择所有h1和h2元素。*/
   ```

4. 交集选择器（无间隔，表示“与”匹配）
   ```css
   div.p { color: purple; }  /*选择所有div且类名为p的元素。*/
   ```

5. 伪类选择器（如`:hover`、`:first-child`、等）
   ```css
   a:hover { color: orange; } /*当鼠标悬停在链接上时改变颜色。*/
   ```
   **P.S. 超链接的一些伪类: a:link、a:visited、a:hover、a:active**

6. 伪元素选择器（如`::before`、`::after`）
   ```css
   p::before { content: "Note: "; color: gray; } /*在每个p元素前添加文本。*/
   ```

7. **属性选择器**（选择具有特定属性的元素）
   ```css
   input[type="text"] { border: 1px solid black; } /*选择所有类型为文本的输入框。*/
   ```

### CSS 三大特性
1. **层叠性**: 多个样式规则可以应用于同一元素，浏览器会根据特定的优先级规则（如选择器的具体性）来决定最终应用哪个样式。
2. **继承性**: 某些CSS属性会从父元素继承到子元素，例如字体和颜色属性。如font-family、color等文字属性会被子元素继承；所以通常可以写在body标签内。
3. **优先级**: CSS规则的优先级由选择器的具体性决定。**!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符 > 继承样式**

P.S. 如遇复合选择器，则需计算优先级。

### 标签的显示模式

1. **块级元素**: 独占一行，宽度默认填满父元素。e.g. `div`、`p`、`h1`等。
2. **行内元素**: 不独占一行，宽度仅包裹内容。e.g. `span`、`a`、`img`等。
3. **行内块元素**: 结合了块级和行内元素的特性，**允许设置宽高**，但不独占一行。e.g. `display: inline-block;`。

P.S. 使用`display`属性来控制或转换元素的显示模式。

### 文字控制属性 font & text

1. `font`系列: 
   - `font-family`: 字体系列
   - `font-size`: 字体大小
   - `font-style`: 字体样式（如斜体）
   - `font-weight`: 字体粗细
   - `font`: 复合属性，包含上述所有属性

2. `text`系列:
   - `text-align`: 文本对齐方式（左、中、右）
   - `text-indent`: 首行缩进
   - `text-decoration`: 文本装饰（如下划线）
   - `text-transform`: 文本转换（如大写、小写）

3. 颜色: 
   - `color`: 字体颜色
   - `background-color`: 背景颜色

4. 其它: 
   - `line-height`: 行高
   - `letter-spacing`: 字符间距
   - `word-spacing`: 单词间距

### 背景属性 background

1. `background-color`: 背景颜色
2. `background-image`: 背景图像, e.g. `background-image: url('image.jpg');`
3. `background-repeat`: 背景图像重复方式（如`repeat-x`、`no-repeat`、`repeat`、 `repeat-y`）
4. `background-position`: 背景图像位置, e.g. `background-position: 水平方向 垂直方向;`，取值包括`left`、`center`、`right`、`top`、`bottom`和`数字px`等。
   - **特殊写法1**:只写一个关键字，另一方向默认居中；只写一个数字px，则代表水平方向，且垂直方向居中；
   - **特殊写法2**:写关键字的顺序可以颠倒；
5. `background-size`: 背景图像大小, e.g. `background-size: cover;`（覆盖整个元素, 可能图片不全）或 `contain`（保持比例缩放以适应元素, 可能背景留空）。
6. `background-attachment`: 背景图像的滚动方式（如`scroll`、`fixed`、`local`）
7. `background`: 复合属性，包含上述所有背景属性。**不区分顺序，但若需缩放，则：`位置/缩放`。

### 盒模型

1. `border`: 边框线，如`border: 1px solid #66ccff;`；以及四个方向自定义； 
2. `padding`： 内边距，如`padding: 10px`；可以四个方向自定义；可以有复合写法，**顺时针（上-右-下-左、上-左右-下、上下-左右）**；
3. `margin`: 外边距，与`padding`相同。不会撑大盒子。必须有`width`属性。
   - **版心居中技巧**：左右`margin`设置`auto`，如：`margin: 0 auto`；
   - 内边距尺寸之撑大盒子的问题：`box-sizing: border-box`  -- **内减模式**；

其它重点：

1. 在CSS中，使用通配符选择器先清除默认样式，包括`margin`、`padding`、`border`等。
   ```css
   * {
       margin: 0;
       padding: 0;
       border: 0;
       box-sizing: border-box;
   }
   ```
   
2. `overflow`：控制盒子内容溢出，取值包括`hidden`、`scroll`、`auto`； 
3. `border-radius`：盒子圆角属性，写法：`border-radius: 10px / 5%`；以及复合写法，由左上角开始顺时针；正圆（正方形盒子，一半px或50%圆角）；胶囊（长方形盒子，高度一半的px）；
4. `box-shadow`，盒子阴影属性，写法：`box-shadow: 0(x) 0(y) 10px(模糊半径--柔和程度) 10px(扩散半径--大小) #66ccff inset(内阴影)`；
5. 外边距（垂直方向）合并现象：取`margin`较大值； e.g. 
   ```css
   .box {
       margin-top: 20px; /* 上外边距 */
       margin-bottom: 30px; /* 下外边距 */
   }
   ```
   - 如果父元素没有内容，且子元素有`margin-top`和`margin-bottom`，则父元素的高度会被子元素的`margin`合并。

6. 外边距塌陷问题：子级元素的margin属性导致的父级元素位移。解决办法：
   - `取消子级margin，设置父级padding`；
   - `为父级添加overflow:hidden`；
   - `为父级添加border-top`；
7. 行内元素的内外边距问题：默认情况下，垂直方向不会受到影响； 

### 浮动 float

1. `float: left | right | none`: 浮动元素会脱离文档流，后续元素会环绕在其旁边;
2. 清除浮动的方法：
   - `overflow: hidden;`：父元素设置此属性，自动清除子元素的浮动；
   - 单伪元素标签法
   - 额外标签法
   - 双伪元素标签法
   - `clearfix`类法：在父元素上添加一个类，使用伪元素清除浮动。
   - `clear`属性：在需要清除浮动的元素上设置`clear: both;`。

### Flex布局

1. **容器属性**:
   - `display: flex;`：启用Flex布局。
   - `flex-direction`: 主轴方向（`row`、`column`、`row-reverse`、`column-reverse`）。
   - `flex-wrap`: 主轴换行方式（`nowrap`、`wrap`、`wrap-reverse`）。
   - `justify-content`: 主轴对齐方式（如`flex-start`、`flex-end`、`center`、`space-between`、`space-around`）。
   - `align-items`: 侧轴（交叉轴）对齐方式（如`center`、`stretch`、`flex-start`、`flex-end`、`center`、`baseline`）。
     - 使用`align-items`前，记得指定`height`，否则无法生效。
   - `align-self`: 单个子元素的侧轴对齐方式（覆盖`align-items`）。
   - `align-content`: 多行对齐方式（如`center`、`space-between`、`space-around`、`flex-start`、`flex-end`、`space-evenly`、`stretch`）。
   - `flex: 1 | 2 | 3 | ...`: 子元素的伸缩比例，表示在剩余空间中分配的比例。

P.S. flex布局中，子元素会变成弹性盒子，因此对于`a`，不用刻意转变为块元素，宽高也可以生效；


### 定位 position

1. `position`，使用口诀：**子绝父相**, 定位类型:
   - `static`: 默认定位，元素按照文档流正常排列。
   - `relative`: 相对定位，元素相对于其原始位置进行偏移。（不脱标且占位）
   - `absolute`: 绝对定位，元素相对于最近的已定位祖先元素进行定位。（脱标且不占位，具备行内块元素特点）
   - `fixed`: 固定定位，元素相对于浏览器窗口进行定位，不随滚动条移动。（脱标且不占位，具备行内块元素特点）
   - `sticky`: 粘性定位，元素在特定条件下表现为相对定位和固定定位的结合。
   - `fixed`和`sticky`的区别：
     - `fixed`
        - 基于浏览器视口
        - 完全脱标，后续元素会顶上来，可能需要为其他元素添加margin或使用空白盒子占位
        - 转变为行内块，需要手动处理「宽度变窄」（设置width:100%）
     - `sticky`
        - 基于最近的滚动父容器
        - 半脱离文档流，仍然占位
        - 保留块级特性，不一定需要设置宽度
        - 必须指定 top、bottom、left 或 right 中的一个，不然不起作用。
        - 父容器要有滚动（overflow: auto 或 scroll），而且父容器高度要大于 sticky 元素本身。

2. `top`、`right`、`bottom`、`left`: 定位偏移量，取数字px或百分比值，配合`position`使用。（必需）
3. `z-index`: 层叠顺序，数值越大，元素越靠上层。**注意**: 只有定位元素（`position`非`static`）才会生效。

### 平面与空间转换 transform

1. `transform`: 变形属性，常用于平移、旋转、缩放等效果。
   - `transform: translateX(50px);`：水平平移50px；以及`transform: translate(x, y);`（x和y可以是百分比或px）；都填入`50%`时，位移就各是宽高的一半；
   - `transform: rotate(45deg);`：旋转45度。
   - `transform: scale(1.5);`：放大1.5倍。
   - `transform: skew(20deg, 10deg);`：倾斜20度和10度。
   - `transform-origin`: 设置变形的原点，默认是元素的中心点，可以设置为`left`、`right`、`top`、`bottom`或具体的像素值。
   - **多重转换**：即：将`transform`用作复合属性。**注意：第一个改变会影响盒子的轴向，从而影响第二个改变。**

2. 空间变换
   - `transform3d(x, y, z)`: 3D变形，常用于创建立体效果。**必需写3个值**，如`transform: translate3d(50px, 0, 0);`，否则不生效。
   - `transform: translateZ(50px);`：沿Z轴平移50px。
   - `transform: rotateX(45deg);`：绕X轴旋转45度。又如`rotateY(45deg)`、`rotateZ(45deg)`。 
     - 从各个轴的正方向看去：正值顺时针，负值逆时针 。
     - 亦即**左手法则**：大拇指与各个轴的正方向相同，四个手指弯曲方向即为旋转的正方向。
   - `transform: scale3d(1.5, 1.5, 1.5);`：沿X、Y、Z轴放大1.5倍。

3. `perspective`: 视距或透视属性，用于设置3D变形的透视效果。值越小，透视效果越明显。 
   - 添加给父级。从而更好观察子级的动效果。常用值800-1200px。

### 过渡效果 transition

1. `transition`属性用于设置过渡效果，常用属性包括：
   - `transition-property`: 过渡的属性（如`color`、`background-color`等）。
   - `transition-duration`: 过渡持续时间（如`0.3s`）。
   - `transition-timing-function`: 过渡的速度曲线（如`ease`、`linear`、`ease-in`、`ease-out`等）。
   - `transition-delay`: 过渡延迟时间。
   - **复合写法**: `transition: 属性 过渡时间 速度曲线 delay;`。

P.S. `transition`过渡效果加在原元素，不要加在伪元素上（否则退出`hover`的时候没效果）

### 透明度 opacity

1. `opacity`属性用于设置元素的透明度，取值范围为`0`（完全透明）到`1`（完全不透明）。
   - 例如：`opacity: 0.5;`表示50%透明度。
   - 注意：`opacity`会影响元素及其子元素的可见度。

### 鼠标样式 cursor

1. `cursor`属性用于设置鼠标悬停时的样式，常用值包括：
   - `default`: 默认箭头。
   - `pointer`: 手形（通常用于链接）。
   - `text`: 文本选择光标。
   - `move`: 移动光标。
   - `not-allowed`: 禁止操作光标。
   - `wait`: 等待光标。

### 伪类和伪元素

1. **伪类**: 用于定义元素的特定状态。
   - `:hover`: 鼠标悬停时应用样式。
   - `:active`: 元素被激活时应用样式（如按钮被点击）。
   - `:focus`: 元素获得焦点时应用样式（如输入框）。
   - `:first-child`: 选择第一个子元素。
   - `:last-child`: 选择最后一个子元素。
   - `:nth-child(n)`: 选择第n个子元素（n可以是数字、公式或关键字）。
   - `:not(selector)`: 选择不匹配指定选择器的元素。 e.g. `E:not(:hover)`, 可以实现与hover互斥的效果，在非hover状态下呈现某种样式。:hover的优先级高于:not(:hover)。

### CSS精灵图（sprite）
1. **CSS精灵图**: 将多个小图像合并为一张大图，通过调整背景位置来显示不同的部分。 通俗理解，就是“想像”成所有小图合成在一张大图（精灵图的背景），设定盒子宽高（所谓展示窗口），然后通过背景定位来显示不同的小图
   - 使用`background-image`设置大图，使用`background-position`调整显示区域。
   - 例如：
   ```css
   .sprite {
       background-image: url('sprite.png');
       width: 100px; /* 单帧宽度 */
       height: 100px; /* 单帧高度 */
       background-position: -50px -50px; /* 显示第2行第3列的图像 */
   }
   ```


### 渐变

1. **线性渐变**: 使用`linear-gradient`函数创建线性渐变背景。
   ```css
   background: linear-gradient(
    direction, 
    color-stop1, 
    color-stop2, 
    ...);
   ```
   - `direction`: 渐变方向（如`to right`、`to bottom`、`to top left`等，或**角度值**；默认由上到下）。
   - `color-stop`: 渐变颜色和位置。如`red 0%, blue 100%`表示从红色到蓝色的渐变。最后的`color-stop`不需要逗号。

2. **径向渐变**: 使用`radial-gradient`函数创建径向渐变背景。
   ```css
    background: radial-gradient(
     shape size at position, 
     color-stop1, 
     color-stop2, 
     ...);
    ```
    - `shape`: 渐变形状（如`circle`、`ellipse`）。
    - `size`: 渐变大小（如`closest-side`、`farthest-corner`）。
      - 上述两点也可以使用**半径**，单独写一个值，表示半径；或两个值，分别表示水平和垂直方向的半径。
    - `position`: 渐变中心位置（如`center`、`top left`）。

### 动画

1. `animation`属性用于创建动画效果，复合属性，常用属性包括：
   - `animation-name`: 动画名称，对应@keyframes定义的动画。(必需)
   - `animation-duration`: 动画持续时间（如`2s`）。（必需）
   - `animation-timing-function`: 动画速度曲线（如`ease`、`linear`、`ease-in`、`ease-out`等）。
   - `animation-delay`: 动画延迟时间。
   - `animation-iteration-count`: 动画循环次数（如`infinite`表示无限循环）。
   - `animation-direction`: 动画方向（如`normal`、`reverse`、`alternate`）。
   - `animation-fill-mode`: 动画填充模式，或结束时状态（如`forwards`、`backwards`）。
   - `animation-play-state`: 动画播放状态（如`running`、`paused`）。**常与hover结合使用**。

2. 使用动画，分两步
   2.1 定义动画：使用`@keyframes`定义动画的关键帧。
   ```css
   @keyframes animation-name {
       from { /* 初始状态css */ }
       to { /* 结束状态css */ }
   }
   
   /* 或者使用百分比 */
    @keyframes animation-name {
         0% { /* css */ }
         50% { /* css */ }
         ...
         100% { /* css */ }
    }
   ```
   p.s. 注意分号与逗号。   

   2.2 应用动画：在元素上使用`animation`属性应用定义的动画。 e.g.
   ```css
    .element {
         animation: animation-name 2s ease-in-out infinite;
    }
    ```
   
3. 逐帧动画，使用**速度曲线**，配合**CSS精灵图**实现精灵动画。 e.g. 
   ```css
   .sprite {
       background-image: url('sprite.png');
       width: 100px; /* 单帧宽度 */
       height: 100px; /* 单帧高度（即：定义显示区域，所谓精灵图展示窗口） */
       animation: play 1s steps(10) infinite; /* 10帧动画，数字n与精灵图个数相同 */
   }

   @keyframes play {
       from { background-position: 0 0; }
       to { background-position: -1000px 0; } /* 假设总宽度为1000px，移动距离x等于精灵图宽度 */
   }
   ```
   
### 移动端适配

1. 屏幕分辨率、视口与二倍图
   - 屏幕分辨率：设备的物理像素数量。即物理分辨率。
   - 缩放调节的分辨率：逻辑分辨率（由软件/驱动/操作系统等设置）。
   - PC端网页分辨率与逻辑分辨率保持一致。
   - iPhone 6/7/8 -- 逻辑分辨率375px；plus -- 414px。
   - 视口：移动端网页分辨率并非逻辑分辨率。视口是，显示HTML网页的区域，使用视口约束HTML尺寸。使用HTML5自动骨架中就可以生成。 e.g. 
   ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
   - 二倍图（Retina图像）：高分辨率设备上使用的图像，通常是标准图像的两倍大小。

2. 适配方案
   - **响应式设计**: 使用媒体查询（`@media`）根据设备特性（如屏幕宽度）应用不同的样式。
   - **流式布局**: 使用百分比宽度和弹性盒子布局，使元素根据屏幕大小自动调整。适用于PC端。
   - **REM单位**: 使用`rem`单位来设置字体大小和元素尺寸，基于根元素的字体大小进行计算。`rem`: 相对单位，相对「HTML标签字号」的结果。即：**最终像素值 = rem值 * HTML标签字号**
   - **视口单位**: 使用`vw`（视口宽度）和`vh`（视口高度）单位来设置元素的尺寸。
     - 都是相对于「视口」的单位，1vw = 1/100 视口宽度，1vh = 1/100 视口高度;
     - 与rem一样，对于设计稿中的px单位，需要转换成vw/vh单位; 
     - e.g. **vw = 设计稿呈现的px / （设计稿参考设备的视口宽度/100）**, 定义变量`@vw: 3.75vw`；使用： `width: (50 / @vw);`
     - 注意：在开发中，`vh`不建议与`vw`混用，因为「全面屏」等设备的视口高度会有所不同，混用可能导致盒子变形

3. 媒体查询
   - 可以用于检测视口宽度，编写差异化的CSS样式 -- 当某个条件成立，执行对应的CSS样式.
   - 使用`@media`规则根据设备特性应用不同的样式。
   ```css
    @media (width: 375px) {
        html {
            font-size: 37.5px;
        }
    }
   ```
   - 常用特性包括`width`、`height`、`orientation`（横屏或竖屏）等。以及`min-width`和`max-width`：
     - `max-width`: 网页最大宽度值，意义是：在**视口小于等于**`max-width`时，（或者理解为“**在不大于最大值`max-width前`**”）媒体查询的CSS生效
     - `min-width`: 网页最小宽度值，意义是：在**视口大于等于**`min-width`时，媒体查询的CSS生效
     - 在一份css中，若要检测多视口，对于顺序是有要求的（CSS的层叠性）
       - 对于`min-width`：由小到大；对于`max-width`：由大到小
   - 使用**flexible布局**实现多视口自适应:
   ```html
   <script src = "flexible.js"></script>
   ```
   - 于是，就有**rem单位值 = 实际px值(来自设计稿) / 根字号(常设置成变量，如`@rootSize: 37.5px`)**
   - 目前rem布局方案中，将网页等分成10份，HTML标签的字号视为视口宽度的 1/10（flexible布局会计算好）

### Bootstrap

1. **Bootstrap**: 前端框架，提供了响应式布局、预定义样式和组件。
   - 使用CDN或手动下载引入Bootstrap CSS、字体和JS文件。在需要的标签调用类名即可。注意link的层叠性，让自己的css在最后。
   - 使用网格（栅格）系统（Grid System）创建响应式布局。将整个网页等分12份，每个盒子占一定份数。如：一行4个盒子，则每个占3份。
   - 使用预定义的类（如`btn`、`alert`、`card`等）快速构建UI组件。
   - **响应断点**（断点之间形成区间）与**类前缀**：在不同的区间内，你想分几个盒子，类名的选择是有要求的：
   ```
   xs：<567px .col-
   sm：>=576px .col-sm-
   md：>=768px .col-md-
   ld：>=992px .col-lg-
   xl：>=1200px .col-xl-
   xxl：>=1400px .col-xxl-
   ```
   - 格式：`container -> row(实现flex) -> col-*-*(在什么区间，占多少份)`
   - 例如：`<div class="col-xl-3 col-md-6 col-sm-12">1</div>`（4个div），依次实现：
     - 在大于等于1200px，一行排4个盒子（每个3份 -- col-xl-3）
     - 大于等于768px，一行排2个（每个六份 -- col-md-6）
     - 大于等于576px，一行排1个（独占12份 -- col-sm-12）
   - **Button样式**：先给btn添加默认样式，再加入需要进一步实现的样式。例如：
         `<button class="btn btn-success btn-sm">小success</button>`
   - **表格类样式**：与Button类一样，需要优先为table标签添加一个`table`类的默认效果，在依次给不同表格类标签（包括table，tr，th，td等）添加想要的效果
   - **Bootstrap组件**：从官网上可以复制各种组件。如需修改，只要观察结构（html也好，网页检查器也好），修改结构或css即可
     - 注意：部分CSS含`!important`最高优先级，所以修改时，自己也要加，确保层叠有效
   - **字体图标**：如前面所言，下载后引入css文件，写类名即可，和iconfont相似。
      - p.s.官方文档中，需要写两个类名，但其实写一个也可以;例如：`<span class="bi-apple"></span>`

### CSS预处理器-less

1. **变量**: 使用`@`符号定义变量，便于复用和维护。**不要忘记分号**。
   ```less
   @primary-color: #3498db;
   body {
       background-color: @primary-color;
   }
   ```
2. **嵌套**: 支持嵌套规则，便于组织样式。
   ```less
   .container {
       .header {
           color: red;
       }
       .footer {
           color: blue;
       }
   }
   ```
   在嵌套中使用`&`符号引用父选择器（即：选择自己）。
   ```less
   a {
      text-decoration: none;
      &:hover {
        color: #00BE9A;
     } 
   }
   ```
3. **运算**: 支持数学运算，如加减乘除。
   ```less
   @base-font-size: 16px;
   @large-font-size: @base-font-size * 1.5;
   body {
       font-size: @large-font-size;
       margin: (68 / 37.5)rem;
   }
   ```
   除法必须带括号。注意：**如果两个数字都带单位或更多单位，以「第一个」单位为准。**
4. **导入**: 使用`@import`导入其他Less文件，便于模块化管理样式。
   ```less
   @import "variables.less";
   @import "mixins.less";
   ```
5. **导出**：在less文件的**第一行：**`// out: ./index.css ` -- 没有分号；或**禁止导出：**`// out: false`


</details>

<details>
<summary>JavaScript</summary>

## JavaScript

### JavaScript基础语法

#### 基础规则

- **JS的书写位置**：和css一样，包括内联（行内），内部（在</body>标签上），外部（<script src='...'>）；写在底部的目的是，让页面按顺序从上往下加载，避免HTML元素加载不完全
- **JS的注释**：单行注释`//`，多行注释`/*...*/`。
- **JS结束符号**：可写可不写，但要统一；立即执行函数（IIFE）除外。
- **输入语法**：`prompt('enter content here')`
- **输出语法**: `document.write('...')`, `console.log('...')`, `alert('...')`


#### 变量

- **变量**：`let 变量名 = 值` 
- **命名规则**：仅`字母`，`数字`，`下划线`与`$`符号，数字不能开头；严格区分大小写；建议使用`小驼峰命名法`
- 变量初始化与输入输出的结合：e.g. `let name = prompt('Please enter your name')`  `document.write(name)`
- **常量**：`const 常量名 = 值`，在声明时必须赋值，常量一旦赋值后不能再修改。

#### 数据类型

##### 基本数据类型

  - `Number`：数字类型，包括整数和浮点数，正数、负数统一为`Number`类型。
    - `NaN`：也是数字类型，表示非数字（Not a Number），通常是计算错误的结果。具有粘性，即任何与`NaN`进行的运算结果都是`NaN`。
    - 搭配算数运算符运算，包括加（`+`）、减（`-`）、乘（`*`）、除（`/`）、取余（`%`）等； `n**x`：表示n的x次方。
  - `String`：字符串类型，用单引号、双引号、**反引号**以及转义字符括起来的文本。单双引号可以相互嵌套；使用`+`号可以连接字符串。
    - **反引号**：ES6新增的字符串语法，支持多行字符串和模板字符串（变量插值）。使用`${变量名}`来插入变量。e.g. 
    ```javascript
    let name = 'Alice';
    document.write(`Hello, ${name}!`); // 输出：Hello, Alice!
    ```
    可以利用`document.write('HTML 代码')`来输出`html`标签，配合模板字符串修改一些内容。
    - 字符串方法：
      - `.length()`获取长度
      - `.toUpperCase()`转换为大写
      - `.toLowerCase()`转换为小写
      - `.trim()`去除首尾空格
    - **转义字符**：使用反斜杠`\`来转义特殊字符，如`\'`、`\"`、`\n`（换行）、`\t`（制表符）等。
  - `Boolean`：布尔类型，只有两个值：`true`和`false`。
  - `Null`：空值，表示变量没有值。（将null作为尚未创建的对象）
  - `Undefined`：未定义，表示变量已声明但未赋值。
  - *`undefined`与`null`不同， 例如同样 `+1` 操作，前者返回`NaN`，后者返回`1`*
  - `Symbol`：ES6新增的唯一值类型，用于创建唯一标识符。

##### 数据类型检测
  - 使用`typeof`操作符检测数据类型。
  ```javascript
  console.log(typeof 123); // "number"
  console.log(typeof 'Hello'); // "string"
  console.log(typeof true); // "boolean"
  console.log(typeof null); // "object"（这是一个历史遗留问题）
  console.log(typeof undefined); // "undefined"
  console.log(typeof Symbol('id')); // "symbol"
  ```
  
##### 类型转换

分为**显式转换**和**隐式转换**。

**显式转换**：使用函数进行转换。
  - `String(值)`：将值转换为字符串。
  - `Number(值)`：将值转换为数字。**若字符串包含非数字字符，则转换结果为`NaN`**。
  - `Boolean(值)`：将值转换为布尔值。以下转换为布尔值时为`false`：`0`、`NaN`、`null`、`undefined`、空字符串（`''`）。其他值转换为`true`。
  - `parseInt(字符串, 基数)` & `parseFloat(字符串, 基数)` ：将字符串转换为整数或小数，基数可选（如10进制）。前提条件：字符串开头不能是非数字。e.g. 
  ```javascript
  console.log(Number('123')); // 123
  console.log(parseInt('12px123')); // 12
  console.log(parseInt('123abc', 10)); // 123
  console.log(parseFloat('123.45abc')); // 123.45
  console.log(parseFloat(abc123abc)); // NaN
  ```
**隐式转换**：JavaScript会自动进行类型转换，如在运算中自动将字符串转换为数字。
   - 对于+号，若两边存在一个字符串，则自动将另外一个转换为字符串；所以**任何数据和字符串相加的结果都是字符串**
   - 除+号之外的运算符，只要有数字，都换转换成数字
   - **单独使用+号**：可以转换成数字类型；e.g. 
  ```javascript
  console.log(typeof '123') // string
  console.log(typeof +'123') // number
  ```
   - 在减法运算，`''`和`null`的值会化为`0`；`undefined`的值化为`NaN`；
   - 特殊情况：`undefined == null` 为`true`，但`undefined === null` 依然是`false`

##### 引用数据类型

- **简单数据类型**：变量本身存储这个值，存储于栈空间。

- **引用数据类型**：变量存储的是对对象的引用，该引用地址指向存储于堆空间的实际数据。包括：
  - `Object`：对象类型，键值对集合。
  - `Array`：数组类型，有序列表。
  - `Function`：函数类型，可调用的代码块。
  - `Date`：日期类型，用于处理日期和时间。
  - `RegExp`：正则表达式类型，用于模式匹配。

```javascript
let obj1= { age: 30 };
let obj2 = obj1; // obj2引用了obj1的地址
obj2.age = 31; // 修改obj2的age属性
console.log(obj1.age); // 31，obj1也被修改了
```


#### 运算符

- **赋值运算符**：`=` `+=` `-=` `*=` `/=` `%=`
- **自增运算符**：`++i` `i++` `--i` `i--`
   - 存在自增和运算并行的情况，需留意 e.g. `let i = 1 console.log(i++ + ++i + i) // 1 + 3 + 3 = 7`
- **比较运算符**：和之前学过的C++大部分都一样，额外留意：
   - `==`：值相等；`===`：值和类型相等（全相等），**推荐使用**，对应`!==`: 不全等
   - `undefined == null // true `
   - `NaN === NaN // false`
   - 本质：比较的是ASCII码值：`console.log('aa' < 'aac') // true`
- **逻辑运算符：与或非**：记住优先级：**小括号 > 一元运算符(含!) > 算术运算符 > 逻辑运算符(先 && 后 ||)**
   - `&&`：与运算，只有当两个操作数都为真时结果才为真。
   - `||`：或运算，只要有一个操作数为真结果就为真。
   - `!`：非运算，取反操作数的布尔值。
   - **短路求值(逻辑中断)**：在逻辑运算中，如果第一个操作数已经决定了结果，则不会计算第二个操作数。
     - e.g. `console.log(false || 'Hello') // Hello`
     - e.g. `console.log(true && 'Hello') // Hello`
   - **逻辑运算符的返回值**：`&&`返回第一个假值或最后一个真值；`||`返回第一个真值或最后一个假值。判断的是真假（布尔），但返回的是这个值本身.
     - e.g. `console.log(0 && 'Hello') // 0`
     - e.g. `console.log('Hello' || 0) // Hello`
```javascript
function f(x, y) {
x = x || 0
y = y || 0
return x + y
}
console.log(f(1,2)) // 3
console.log(f()) // 0 避免了undefined的NaN情况出现
```
- **三元运算符**：`条件 ? 满足条件所执行代码 : 否则执行不满足条件代码`，用于简化`if-else`语句。
- **位运算符**：对整数的二进制位进行操作。
  - `&`：按位与
  - `|`：按位或
  - `^`：按位异或
  - `~`：按位取反
  - `<<`：左移
  - `>>`：右移
  - `>>>`：无符号右移

#### 条件语句

#####  if语句

用于根据条件执行代码块。

```javascript
if (条件) {
    // 条件为真时执行的代码
} else if (其他条件) {
    // 其他条件为真时执行的代码
} else {
    // 所有条件都不满足时执行的代码
}
```
##### switch语句

用于根据表达式的值执行不同的代码块。

```javascript
switch (表达式) {
    case 值1:
        // 当表达式等于值1时执行的代码
        break;
    case 值2:
        // 当表达式等于值2时执行的代码
        break;
    default:
        // 当没有匹配的值时执行的代码
}
```
- *p.s. 可以写`case (value): { expressions }`，也可以`case value: expressions`*
- 记得加`break`防止穿透
- 记得加`default`

#### 循环语句

##### for循环

用于重复执行代码块，直到条件不满足。

```javascript
for (初始化; 条件; 更新) {
    // 循环体
}
```
e.g. 冒泡排序
```javascript
for (let i = 0; i < array.length - 1; i++) {
for (let j = 0; j < array.length - 1 - i; j++) {
  if (array[j] > array[j + 1]) {
    swap
    }
  }
}
```

*冒泡排序拓展: 核心思想/两个关键点：*

- 双重循环，每一趟循环都让`arr[0]`与其它数据元素(arr.length - 1个)比较，根据大小进行交换(
  升序或降序，自行调整if判断中arr[j]和arr[j+1]的比较方式)
- 一趟排序完成后，产生本趟**最值**，「冒泡」到数组末尾。下一趟arr[0]无需与最值比较。所以内层循环的终止条件是
  `j < arr.length -1 -i`

```javascript
for (let i = 0; i < array.length - 1; i++) {
for (let j = 0; j < array.length - 1 - i; j++) {
  if (array[j] > array[j+1]) {
     swap...
```

- 可以用一个布尔标志，当没有发生交换时，可以直接结束循环（外层）
- JS也有sort()函数 `e.g. array.sort() ` 默认升序
- sort()函数如需降序，可以填入函数 `array.sort( function (a, b) { return b - a } )`
- 关于 return b-a 的理解
   - **sort函数通过return expression判断，当expression的结果大于0，交换参数a、b的位置；结果小于等于0，不交换参数a、b的位置**
   - 假设锚定规则「大于0则交换位置」：
      - 若使用 return a-b ：当发生交换，说明「前者」（指参数的位置）a更大，同时被排到后面，完成升序
      - 若使用 return b-a ：当发生交换，说明「后者」b更大，同时被排到前面，完成降序

##### while循环

当条件为真时重复执行代码块。

```javascript
while (条件) {
    // 循环体
}
```
- `continue`语句：跳过当前循环的剩余部分，直接进入下一次循环。(回到while起点)
- `break`语句：终止循环，跳出循环体。(跳出while)

#### 数组

##### 数组基础知识

- **数组**：使用方括号`[]`定义的有序数据集合。
```javascript
let array = [data1, data2, 'data3', 4, true]; // 数组可以包含不同类型的数据，甚至嵌套数组。
let array2 = new Array(1, 2, 3); // 另一种创建数组的方式

// 数组的索引从0开始，访问元素使用方括号。(数组的“查”)
console.log(array[0]); // 输出第一个元素

// 数组的长度
console.log(array.length); // 输出数组长度
```

- **数组的增删改方法**：
  - 增：
    - `push(元素)`：在数组末尾添加一个或多个元素。返回新数组的长度。
    - `unshift(元素)`：在数组开头添加一个或多个元素。同样返回新数组的长度。
    - `splice(位置, 0, 元素)`：在指定位置添加一个或多个元素。
  - 删：
    - `pop()`：删除数组末尾的元素，返回被删除的元素。
    - `shift()`：删除数组开头的元素，返回被删除的元素。
    - `splice(位置, 数量)`：从指定位置删除指定数量的元素。`数量`无参时，删除到末尾。
  - 改：即修改数组元素的值，直接使用索引访问并赋值。
    - `array[index] = newValue;`：将指定索引的元素修改为新值。

##### 常用数组方法

- **map()**：对数组中的每个元素执行指定函数(遍历+处理)，**返回新数组**。
```javascript
const newArr = arr.map(function (ele, index) {
  console.log(ele) // 数组元素
  console.log(index) // 索引号
  return ele + 'Color' // 处理数据并返回新数组
})
console.log(newArr) // ['redColor', 'blueColor', 'greenColor']
```

- **join()**：把数组中所有元素拼接起来，并且通过参数(分隔符)可以定义拼接方式，**常用空字符串使所有字符串相接为一个长串**，以及：
```javascript
console.log(newArr.join()) // redColor,blueColor,greenColor 参数为空，逗号分割（默认）
console.log(newArr.join('')) // redColorblueColorgreenColor 参数为空字符串，则分割消失
console.log(newArr.join('|')) // redColor|blueColor|greenColor
```


#### 函数

##### 函数定义声明与调用

使用`function`关键字定义函数。使用函数名和括号调用函数。
```javascript
function 函数名(参数1, 参数2) {
    // 函数体
    return 返回值; // 可选
}
// 调用函数
函数名(参数1, 参数2);
```
e.g. 
```javascript
function getMax(a, b) {
    return a > b ? a : b
  }
  let max = getMax(201, 200)
console.log(max)
```
- **return多个值**：
  - 可以使用数组或对象返回多个值。
  - 例如：`return [value1, value2];` 或 `return {key1: value1, key2: value2};`
  - 可以用数组承接结果，
```javascript
return [max, min]

let max = f(x)[0]
let min = f(x)[1]
```

- **出现相同函数名时**：后面的函数会覆盖前面的函数。不管在哪儿调用函数，都会以后面的为准。

- **实参和形参数目不匹配**：
  - 若实参多于形参，则多余的实参被舍弃，不参与运算。函数可以输出前面参数的运算结果
  - 若实参少于形参，则形参出现`undefined`，导致出现`NaN`结果

- **作用域**：分为全局作用域与局部作用域，由此引申出全局变量与局部(函数)变量
  - 特殊情况1: 在**函数内部未声明变量而赋值**，该变量会成为全局变量。*强烈不建议此情况的出现*
  - 特殊情况2: 形参可以看作是一种局部变量
  - 不同作用域中同名变量的访问原则：就近——从当前作用域开始寻找；若无，则向上查找父作用域，直到全局作用域。 e.g. 
```javascript
let x =10
function f3() {
  let x = 20
  function f4() {
    let x = 30
    console.log(x)
  }
  f4()
}
f3() 
console.log(x) // 30
```

##### 匿名函数

分为**函数表达式**和**立即执行函数**。

- **函数表达式**：将函数赋值给变量，而后这个变量名就是函数名，并利用该名调用函数。函数名可以省略。

*和具名函数的不同点在于，函数表达式必须先声明再调用*

```javascript
let fn = function (a, b) {
  return a + b
}
// 调用
let re = fn(10, 20)
console.log(re) // 30
```

- **立即执行函数**（IIFE）：定义后立即执行的函数，通常用于创建局部作用域，避免变量污染全局作用域。

*需要配合结束分号，若该函数前有代码，前面也要加分号。*

```javascript
;(function (x ,y) {
  console.log(x + y)
}(1, 2)); // 调用函数的括号写在里外都可以
```

*立即执行函数，一般用括号封住; 但有时，也可以用`!``+`等符号防止报错（要能看懂别人的代码）*
```javascript
(function() {...} )() // OK
!function(){...} () // 也OK
```

#### 对象

##### 对象基础知识

- **对象**：使用花括号`{}`定义的无序数据集合，包含键值对（属性和方法）。

- **对象的声明**：
```javascript
let obj = {
    属性1: 值1,
    属性2: 值2,
    方法1: function() {
        // 方法体
    },
    方法2() { // ES6简写
        // 方法体
    }
};

let obj2 = new Object(); // 另一种创建对象的方式
```

- **对象的构成**：
  - **属性**：键值对中的键，表示对象的特征或状态。**属性名：属性值**
  - **方法**：键值对中的值为函数，表示对象的行为或操作。**方法名：函数体**
  - 各属性、方法之间用逗号分隔，最后一个属性后面不需要逗号。 e.g. 
```javascript
let person = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
```

- **增删改查与方法的调用**：
  - **访问属性**：使用点语法`obj.属性名`或方括号语法`obj['属性名']`。其中方括号方法的引号是必须的；另外方括号语法可以使用变量名来访问属性。
  ```javascript
  - **修改属性**：直接赋值`obj.属性名 = 新值;`。
  - **添加属性**：直接赋值新属性`obj.新属性名 = 值;`。
  - **删除属性**：使用`delete obj.属性名;`。
  - **调用方法**：使用点语法调用方法`obj.方法名();`。

- ** 遍历对象**：使用`for...in`循环遍历对象的属性。

*p.s. 虽然也可以用于遍历数组，但由于变化量输出的是字符/串，不推荐这么用*

```javascript
for (let key in obj) {
    console.log(key + ': ' + obj[key]); // 输出属性名和属性值，属性名带引号，如'name'
}
```

- ** 对象常用方法**：
    - `Object.keys(obj)`：返回对象的所有属性名组成的数组。
    - `Object.values(obj)`：返回对象的所有属性值组成的数组。
    - `Object.entries(obj)`：返回对象的所有键值对组成的二维数组。
    - `Object.assign(target, ...sources)`：将源对象的属性复制到目标对象，返回目标对象。


##### 常用对象

- ** 内置数学对象**：JavaScript提供了内置的`Math`对象，包含常用的数学常量和函数。
  - 常用属性：`Math.PI`（圆周率），`Math.E`（自然对数的底数）。
  - 常用方法：`Math.abs(x)`（绝对值），`Math.max(a, b, ...)`（返回最大值），`Math.min(a, b, ...)`（返回最小值），`Math.round(x)`（四舍五入），`Math.random()`（生成[0,1)之间的随机小数）。
    - Math.random()生成的随机数是[0,1)之间的浮点数，若需要生成[min, max]范围内的随机整数，可以使用`Math.floor(Math.random() * (max - min + 1)) + min`。

- **JSON对象**：JavaScript对象表示法（JSON）是一种轻量级的数据交换格式。属性和值有引号，而且引号统一是双引号。
  - `JSON.stringify(obj)`：将JavaScript对象转换为JSON字符串。
  - `JSON.parse(jsonString)`：将JSON字符串转换为JavaScript对象。

- **日期对象**：JavaScript提供了`Date`对象，用于处理日期和时间。
  - 创建日期对象：`new Date()`（当前时间），`new Date(时间戳)`（指定时间戳），`new Date(年, 月, 日, 时, 分, 秒)`（指定具体时间）。
  - 时间戳：自1970年1月1日以来的毫秒数，三种获取方式：
    - `Date.now()`：返回当前时间的时间戳。
    - `new Date().getTime()`：返回当前时间的时间戳。
    - `+new Date()`：将当前时间转换为时间戳。
  - 格式化：`toLocaleString()`（本地化字符串）。
  - 常用方法：包括但不限于以下例子，注意`getMonth`和`getDay`的返回值是从0开始的。
```javascript
console.log(date.getFullYear()) // 2025 年 数字型
console.log(date.getMonth() + 1) // 0 ~ 11, +1为实际月份
console.log(date.getDate()) // 16 号
console.log(date.getDay() + 1) // 0 ~ 6, +1为实际星期几
```



### Web API

#### 声明变量const优先

- `const`的语义化更好；
- 建议数组和对象使用const声明，因为数组/对象名本身存储的是地址；
- 使用数组方法或对象属性赋值时，本身没有影响 数组/对象名 中的地址值；
- 注意，如果将 数组/对象名 用于声明新的 数组/对象，那就等同于修改了地址，就会引发常量报错

#### DOM树和DOM对象

DOM树是HTML文档的结构化表示，DOM对象是JavaScript对DOM树的抽象表示。可以通过`document`对象访问和操作DOM树。
*p.s. DOM树的根节点是`document`对象（最大的DOM对象），所有其他节点都是其子节点。*

##### DOM结点

- **节点类型**：DOM树中的每个节点都有一个类型，常见的节点类型包括：
  - `Element`：元素节点，表示HTML标签。**（重点关注）**
  - `Text`：文本节点，表示元素内的文本内容。
  - `Comment`：注释节点，表示HTML注释。
  - `Document`：文档节点，表示整个HTML文档。

- **查找结点**：
  - **查找父结点**：使用`parentNode`属性获取当前节点的父节点（只能得到最近一级的亲父亲）
  - **查找子结点**：
    - 使用`childNodes`属性获取当前节点的所有子节点（返回NodeList对象，包含所有类型的子节点，包括文本节点和注释节点）。
    - 使用`children`属性获取当前节点的所有子元素节点（返回HTMLCollection对象，伪数组，只包含元素节点）。
  - ** 查找兄弟结点**：
    - 使用`nextElementSibling`属性获取当前节点的下一个兄弟节点。
    - 使用`prevoiusElementSibling`属性获取当前节点的上一个兄弟节点。
```javascript
console.log(son.parentNode)  // father
console.log(son.parentNode.parentNode) // grandfather // 都返回dom对象

const ul = document.querySelector('ul')
console.log(ul.children)

li.nextElementSibling // 获取下一个兄弟元素节点
li.prevoiusElementSibling // 获取上一个兄弟元素节点
```

- **增加结点（重点）**：先创建，后追加
  - 使用`createElement(tagName)`方法创建一个新的元素节点。
  - 使用`createTextNode(text)`方法创建一个新的文本节点。
  - 使用`appendChild(node)`方法将新节点添加到父节点的子节点列表中。
  - 使用`insertBefore(newNode, referenceNode)`方法在指定的参考节点之前插入新节点。

```javascript
let newLi = document.createElement('li'); // 创建一个新的li元素
newLi.textContent = '新列表项'; // 设置文本内容
let ul = document.querySelector('ul'); // 获取ul元素
ul.appendChild(newLi); // 将新li元素添加到ul的末尾
ul.insertBefore(newLi, ul.children[0]); // 在ul的第一个子元素之前插入新li元素
```


- **克隆结点**：使用`cloneNode(deep)`方法克隆节点。
  - `deep`参数决定是否深度克隆（包括子节点）。`true`表示深度克隆，克隆时会包含后代节点；`false`表示浅克隆，默认（只克隆当前节点，且只克隆标签，内容不管）。
```javascript
ul.insertBefore(ul.children[0].cloneNode(true), ul.children[0]) // 克隆第一个子元素并插入到第一个子元素之前
```

- **删除结点**：使用`removeChild(node)`方法从父节点中删除子节点。
```javascript
ul.removeChild(ul.children[0]) // 删除ul的第一个子元素
```


#### BOM

BOM（Browser Object Model）是浏览器对象模型，提供了与浏览器窗口和浏览器相关的对象和方法。`window`是其中最大的对象，其子级包括`document`、`location`、`history`、`navigator`、`screen`等。

*p.s. `window`对象是JS中的顶级对象、全局对象；`window`对象下的属性和和方法调用时可以省略`window`前缀。*

##### location对象

`location`对象表示当前文档的URL信息，提供了获取和修改浏览器地址栏的功能。关注以下4个属性/方法：

- `location.href`：获取或设置当前文档的完整URL。可以通过修改以实现页面跳转。
```javascript
location.href = 'https://www.example.com'; // 跳转到指定URL
```

- `location.search`: 提交表单后，获取表单信息问号后的内容，要求表单标签都有`name`属性。
```javascript
console.log(location.search); // 输出查询字符串，如 ?name=Alice&age=30
```

- `location.hash`：获取或设置URL中的锚点部分（#后面的内容），用于页面内跳转。
```javascript
location.hash = '#section1'; // 跳转到页面内的锚点
```

- `location.reload()`：重新加载当前文档。可带参数`true`强制从服务器重新加载，而不是从缓存中加载。
```javascript
location.reload(); // 刷新页面
```

##### navigator对象

**`navigator`对象**提供了浏览器的相关信息，如浏览器类型、版本、操作系统等。可用于检测是否为移动端设备（安卓/iOS）而进行网页跳转。

##### history对象

`history`对象表示浏览器的历史记录，提供了访问和操作浏览器历史记录的方法。

管理历史记录，控制后退/前进，包括`forward()`,` back()`, `go()`; `go()`带参数，`1`前进，`-1`后退

##### 本地存储localStorage

`localStorage`是浏览器提供的本地存储机制，用于在用户浏览器中存储数据。数据**以键值对的形式**存储，将数据永久存储在本地，除非手动删除，否则即使页面关闭，数据也存在。

- **特性**：
  - 数据存储在浏览器中，跨页面共享。
  - 数据以字符串形式存储，非字符串类型需要转换。
  - 存储容量通常为5MB（不同浏览器可能有所不同）。
  - 数据不会过期，除非手动删除。

- **常用方法**：
- `setItem(key, value)`：设置键值对，存储数据。没有`key`就是增，有`key`就是覆盖原来的`key`，也即**改**
```javascript
localStorage.setItem('username', 'Alice'); // 存储用户名
```
- `getItem(key)`：获取指定键的值，若不存在则返回`null`。
```javascript
localStorage.getItem('username'); // 获取用户名
```
- `removeItem(key)`：删除指定键的值。
```javascript
localStorage.removeItem('username'); // 删除用户名
```
- `clear()`：清空所有本地存储的数据。
```javascript
localStorage.clear(); // 清空所有数据
```

*p.s. `sessionStorage`与`localStorage`类似，但数据仅在当前会话中有效，关闭浏览器窗口后数据会被清除。*

- **存入复杂数据类型**：

复杂数据类型（如对象、数组）无法直接存储到`localStorage`中，需要先将其转换为**JSON字符串**。
- 使用`JSON.stringify()`将对象或数组转换为字符串存储，使用`JSON.parse()`将字符串转换回对象或数组。
```javascript
localStorage.setItem('obj', JSON.stringify({ name: 'Alice', age: 30 })); // 存储对象

console.log(typeof localStorage.getItem('obj')) // string
console.log(localStorage.getItem('obj')) // {"name":"Alice","age":30}

let obj = JSON.parse(localStorage.getItem('obj')); // 获取对象
console.log(obj.name); // 输出：Alice
```


#### 选择器

由HTML树获取DOM元素，使用`document.querySelector(选择器)`和`document.querySelectorAll(选择器)`选择元素。

- `querySelector()`返回第一个匹配的元素（HTMLElement对象），没有则返回空；
- `querySelectorAll()`返回所有匹配的元素集合（NodeList对象集合）；伪数组，哪怕只有一个元素；有长度和索引号，但没有数组方法。
- 选择器语法与CSS选择器相同，可以是一个或多个css选择器。
- 其它选择器方法：
  - `getElementById(id)`：通过ID选择元素。
  - `getElementsByClassName(className)`：通过类名选择元素，返回HTMLCollection对象（实时更新）。
  - `getElementsByTagName(tagName)`：通过标签名选择元素，返回HTMLCollection对象（实时更新）。

#### 修改元素

- **修改元素内容**：使用`innerHTML`、`textContent`或`innerText`属性。常用于双标签。
  - `innerHTML`：获取或设置元素的HTML内容，**支持HTML标签**。
  - `textContent`：获取或设置元素的文本内容，不支持HTML标签。
  - `innerText`：获取或设置元素的可见文本内容，考虑CSS样式。

- **修改元素常用属性**：修改如`src`，`href`等html标签的属性，像**修改对象属性**一样修改。 e.g. 
```javascript 
img.src = 'images/01.jpg'
```

- **修改元素样式**：包括`style`, `className`和`classList`属性。

`style`属性：直接修改元素的内联样式。e.g. 

```javascript
element.style.color = 'red';
element.style.backgroundColor = 'blue'; // CSS中用了短横向的，JS中用小驼峰式命名
```
`className`属性：覆盖一个新的类名。

```javascript
div.className = 'nav box' // 若想保留原类名，就两个一起写
```
`classList`属性：提供对元素类名的操作方法，如`add()`、`remove()`、`toggle()`等。

```javascript
// 「追加」类名
box.classList.add('active') // 类名一样不加点，并且是字符串
// 「移除」类名
box.classList.remove('box')
// 「切换」类名：有就删掉，没有就加上
box.classList.toggle('box')
```

- **修改表单元素属性**: 本质还是修改对象属性、重新赋值

`value`属性：获取或设置表单元素的值。
```javascript
input.value = '新值'; // 设置输入框的值
let inputValue = input.value; // 获取输入框的值
```

`type`属性：获取或设置表单元素的类型（如`text`、`password`、`checkbox`等）。
```javascript
input.type = 'password'; // 设置输入框类型为密码
```
`placeholder`属性：获取或设置输入框的占位符文本。
```javascript
input.placeholder = '请输入内容'; // 设置输入框的占位符
```

`selectedIndex`属性：获取或设置下拉列表的选中项索引。
```javascript
select.selectedIndex = 1; // 设置下拉列表选中第二项
let selectedIndex = select.selectedIndex; // 获取下拉列表选中项的索引
```

`button`：获取或设置按钮的文本内容。相对特殊，因为是双标签，所以还是使用`innerHTML`或`textContent`修改文本。
```javascript
button.innerHTML = '提交'; // 设置按钮文本内容
button.textContent = '提交'; // 设置按钮文本内容
```

*修改表单中的添加/移除效果，一律用**布尔值**。*
*p.s. 虽然有时填`true`字符串也生效，但本质上他们发生了隐式转换，以下属性只接受布尔值。生效是因为非空字符串在转换时成为了`true`*

`checked`属性：获取或设置复选框或单选按钮的选中状态。
```javascript
checkbox.checked = true; // 设置复选框为选中状态
let isChecked = checkbox.checked; // 获取复选框的选中状态
```

`disabled`属性：获取或设置表单元素是否禁用。
```javascript
input.disabled = true; // 设置输入框为禁用状态
```

#### 自定义属性

**自定义属性**：在HTML中使用`data-*`前缀定义自定义属性，便于存储额外信息。
```html
<div id="myElement" data-custom="value" data-id="1">内容</div>
```
然后在JavaScript中使用`dataset`属性访问自定义属性。
```javascript
let element = document.getElementById('myElement');
let customValue = element.dataset.custom; // 获取自定义属性值
let idValue = element.dataset.id; // 获取自定义ID值
```


#### 定时器

##### 间歇函数

**setInterval(f(), interval time)**：设置一个间隔时间重复执行的函数。返回值：定时器ID。e.g. 
```javascript   
let timer = setInterval(() => {
    console.log('每隔1秒执行一次');
}, 1000); // 每1000毫秒（1秒）执行一次
```
*p.s. 使用**外部具名函数**，不需要加括号，直接传入函数名即可。 如：*
```javascript
function myFunction() {
    console.log('每隔1秒执行一次');
}
let timer = setInterval(myFunction, 1000); // 每1000毫秒（1秒）执行一次
```

**清除间歇函数**：使用`clearInterval(timer)`停止间隔函数的执行。参数`timer`是`setInterval`返回的定时器ID。
```javascript
clearInterval(timer); // 停止间隔函数
```

##### 延时函数

**setTimeout(f(), delay time)**：设置一个延时执行的函数。返回值：定时器ID。和`setInterval`相近，不同点在于，延时函数的意义是「多久后」开始，所以只会执行一次
```javascript
let timer = setTimeout(() => {
    console.log('延时1秒执行一次');
}, 1000); // 延时1000毫秒（1秒）执行一次

// 清除延时函数
clearTimeout(timer); // 停止延时函数
```


#### 事件

##### 事件

用户与网页交互时触发的动作，如点击、键盘输入、鼠标移动等。

##### 事件监听

使用`addEventListener(event, handler)`方法为元素添加事件监听器。`event`是事件类型，`handler`是事件处理函数。

**三要素**：

1. **事件源**：触发事件的元素。
2. **事件类型**：事件的种类，如`click`、`mouseover`、`keydown`等。
3. **事件处理函数**：当事件发生时执行的代码块。

```javascript
// 关闭广告
let closeButton = document.querySelector('.close-button');
closeButtion.addEventListener('click', function() {
    AD.style.display = 'none'; // 隐藏广告
});
```

**其他版本的事件监听**：（了解）
- `element.onclick = function() { ... }`：直接设置事件处理函数。缺点是只能绑定一个事件处理函数，后续设置会覆盖之前的处理函数。

##### 事件类型

常用事件类型包括：

- 鼠标事件：`click`、`mouseover`（鼠标悬停）、`mouseout`（鼠标移出）、`mouseenter`（鼠标进入）、`mousemove`（鼠标移动）。
- 键盘事件：`keydown`（按下键盘）、`keyup`（松开键盘）、`keypress`（按下或松开键盘）。
- 表单事件：`submit`（提交表单）、`change`（表单元素值改变）、`input`（输入内容变化）。
- 焦点事件：`focus`（元素获得焦点）、`blur`（元素失去焦点）。
- 页面加载事件：
  - `load`（页面加载完成，一般用于window或某些特定资源，如图片）
  - `DOMContentLoaded`（DOM内容加载完成，HTML结构加载完即触发，无需等待样式表、图片等，速度更快）。
- 页面滚动事件：`scroll`（页面滚动时触发）。
  - 两个重要属性：`scrollTop`（元素顶部到可视区域顶部的距离）和`scrollLeft`（元素左侧到可视区域左侧的距离）；可读可写，数字型，无单位。
  - 又分别通俗理解为：**被卷去的头部**、**被卷去的左侧**。
  - 想知道整个页面被卷去多少，需要获取最大元素`HTML`；方式：`doucment.documentElement.scrollTop` （返回HTML标签）或 `document.body.scrollTop`（兼容性更好）。
```javascript
window.addEventListener('scroll', function() {
  console.log('页面滚动了');
  console.log('被卷去的头部：', document.documentElement.scrollTop);
  console.log('被卷去的左侧：', document.documentElement.scrollLeft);
  
  // （在滚动事件中）可以将页面滚动距离作为固定值
  const distance = document.documentElement.scrollTop;
});
```
- 窗口事件：`resize`（窗口大小改变时触发）。
  - 元素属性：`clientWidth`（获取元素的可见宽度，包括内边距`padding`，但不包括滚动条和外边距`border`和`margin`）和`clientHeight`（元素的可见高度）。
  - `offsetWidth`（元素的宽度，包括边框和内边距，但不包括外边距）和`offsetHeight`（元素的高度，包括边框和内边距，但不包括外边距）。


##### 事件对象event

事件发生时，浏览器会创建一个事件对象，包含有关事件的信息。可以在事件处理函数中访问该对象。

- **回调函数**：将函数f(n)作为参数，传递给函数g(n), 称f(n)为回调函数。 e.g.
```javascript
setInterval(fn, 1000); // fn是回调函数
```

- 事件绑定的回调函数的第一个参数就是事件对象`event`，包含事件的相关信息。例如：
```javascript
element.addEventListener('click', function(event) {
  console.log(event) // 输出事件对象 PointerEvent对象
  console.log(event.type); // 输出事件类型
  console.log(event.target); // 输出触发事件的元素
  console.log(event.clientX, event.clientY); // 输出鼠标点击位置的坐标
  console.log(event.offsetX, event.offsetY); // 输出鼠标点击位置相对于元素的坐标
});
```

##### 环境对象this

每个「函数内部」都有一个`this`对象，指向当前函数的执行环境。普通函数中，`this`指向`window`，事件处理函数（回调函数）中的`this`通常指向触发**事件的元素（调用者）**。

*p.s. 函数的调用方式不同，`this`的指代对象也不同。粗略规则：**谁调用，this就指向谁**。*

```javascript
btn.addEventListener('click', function() {
  console.log(this); // <button>button</button> btn对象
  this.style.backgroundColor = 'red'; // 修改按钮背景色, this指向btn对象
});
```

##### 事件流

事件流是指事件在DOM树中传播的过程，事件完整执行过程中的流动路径，分为三个阶段：
1. **捕获阶段**：事件从根节点向目标节点传播。
2. **目标阶段**：事件到达目标节点。
3. **冒泡阶段**：事件从目标节点向根节点传播。

**事件捕获**：在事件流的捕获阶段，可以使用`addEventListener(event, handler, true)`来监听事件。第三个参数为`true`表示启用捕获。

**事件冒泡**：在事件流的冒泡阶段，可以使用`addEventListener(event, handler, false)`或省略第三个参数来监听事件。第三个参数为`false`表示启用冒泡。

*p.s. onclick方法只有冒泡阶段，没有捕获阶段。*

**阻止事件流**：可以使用`event.stopPropagation()`方法阻止事件继续传播。在冒泡或捕获阶段都可以使用。

**mouseover / mouseout 和 mouseenter / mouseleave的区别**:
- `over/out` 组会有冒泡效果，例如内嵌在`father`中的`son`，即使没有给`son`设置事件，鼠标经过`son`时会认为离开了`father`；而`son`并没有事件，又冒泡回来执行`father`的经过事件
- 同样的例子，在 `enter/leave` 组中就不会发生，经不经过`son`都不会影响

##### 事件解绑

**L0事件解绑**：直接将事件处理函数设置为`null`或`undefined`。
```javascript
element.onclick = null; // 解绑事件
```

**L2事件解绑**：使用`removeEventListener(event, handler)`方法解绑事件监听器。需要传入相同的事件类型和处理函数。

*p.s. 匿名函数无法解绑，因为没有引用。* 

```javascript
element.removeEventListener('click', handler); // 解绑事件监听器
```

**总结对比**：

- L0：同一对象，后者覆盖前者；`null`覆盖可以解绑；都是冒泡阶段执行
- L2：注册不会向前覆盖；使用`removeEventListener`解绑；通过第三个参数决定冒泡


##### 事件委托

事件委托是将事件监听器添加到父元素上，而不是每个子元素上。这样可以减少内存使用和提高性能，尤其是当子元素动态添加或删除时。

利用冒泡特点，只需为父元素注册事件，当子元素被触发，就必然冒泡回父元素并执行相应事件。

使用`event.target`获取触发事件的子元素。

*p.s. 可以使用`console.dir(event.target)`查看事件目标的详细信息。*

```javascript
// 筛选标签
let chlid = document.querySelector('.child');
chlid.addEventListener('click', function (event) {
  console.log(event.target); // 输出触发事件的子元素
  if (event.target.tagName === 'BUTTON') {
    console.log('按钮被点击了');
  }
})
```

**阻止默认行为**：有些事件会触发浏览器的默认行为，如链接点击、表单提交等。可以使用`event.preventDefault()`方法阻止默认行为。


#### JS单线程、异步和事件循环

- JS是单线程的；但HTML5 Web Worker标准允许JS脚本创建多个线程
- 同步：程序执行顺序与任务排列顺序一致；异步则是可以在做一件事的同时去做另一件事；本质：流水线上各个流程的执行顺序不同
- 同步任务：都在主线程执行，形成执行栈；
- **异步任务**，通过回调函数实现，被添加到任务队列中，包括：
    - 普通事件（click、resize）
    - 资源加载（load、error）
    - 定时器（setInterval、setTimeout）
- 事件循环机制：1.先执行执行栈的同步任务；2.异步任务放到任务队列（先放入Web
  API或者说浏览器API，处理后再加入到任务队列）3.执行栈同步任务处理完毕，系统读取任务队列的异步任务，按顺序执行


  

</details>


<details>
<summary>AJAX</summary>

</details>



