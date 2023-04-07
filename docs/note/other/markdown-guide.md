# Markdown User Guide

---

## Title

> Standard syntax typically involves writing text after a `#` followed by a space

```markdown
# This is a level-one heading
## This is a level-two heading
### This is a level-three heading
#### This is a level-four heading
##### This is a level-five heading
###### This is a level-six heading
```

Example:

# This is a level-one heading
## This is a level-two heading
### This is a level-three heading
#### This is a level-four heading
##### This is a level-five heading
###### This is a level-six heading

---

## Font

```markdown
**This is bold text**
*This is italicized text*
***This is bold and italicized text***
~~This is strikethrough text~~
```

Example:

**This is bold text**

*This is italicized text*

***This is bold and italicized text***

~~This is strikethrough text~~

---

## Quote

> Simply add the symbol `>` before the text you want to quote. The quotation can be nested, such as adding two `>>`, three `>>>`, n number of...

```markdown
>This is the quotation
>>This is the quoted content
>>
>>>>>>>>>>This is the citation
```

Example:

>This is the quotation
>>This is the quoted content
>>
>>>>>>>>>>This is the citation

---

## Divider

> Three or more `-` or `*` will do

```markdown
----
***
*****
```

Example:

----
***
*****

## Image

### Method 1

> Can't change image size

Image alt: the text displayed below the image, an explanation of the image content (can be added or not, Typora is not valid)

Image title: the title of the image, the content displayed when the mouse moves over the image (can be added or not, Typora is not valid)

```markdown
![image alt](image address "image title")
```

Example:

![zain](https://zainchen.github.io/zaindoc/zh-CN/img/logo.jpeg "zain")

### Method 2

> Directly using the `html` tag, you can modify the image size

```html
<img src="https://zainchen.github.io/zaindoc/zh-CN/img/logo.jpeg" style="width:100px;height:100px;" alt="志银" />
```

<img src="https://zainchen.github.io/zaindoc/zh-CN/img/logo.jpeg" style={{width:'50px', height: '50px'}} alt="志银" />

---

## Hyperlink

### Method 1

> `title` can be added or not

```markdown
[Hyperlink name](Hyperlink address "Hyperlink title")
```

Example:

[Google](https://www.google.com)
[Bing](https://www.bing.com)

### Method 2

```html
<a href="Hyperlink address" target="_blank">Hyperlink title</a>
```

Example:
<a href="https://www.google.com" target="_blank">Google</a>

---

## List

### Unordered list

> `-` `+` `*` Either one is fine (a space between `-` `+` `*` and the content)

```markdown
- List content
+ list content
* list content
```

Example:

- List content
+ list content
* List Contents

### Ordered list

> Add a space between the number and the content

```markdown
1. list content
2. list content
3. list content
```

Example:

1. list content
2. list content
3. list content

### List nesting

> Just knock two spaces between the previous and next level

```markdown
- List Contents
  - List Contents
    - List Contents
    - List Contents
  - List Contents
  + List Contents
* List Contents
```

Example:

- List Contents
  - List Contents
    - List Contents
    - List Contents
  - List Contents
  + List Contents
* List Contents

---

## Table

Note:

The second line separates the header and content (only need one `-` for alignment, but extra ones are added for clarity).

Text aligns to the left by default.

Header separator `-` with `:` on both sides aligns header text to the center.

Header separator `-` with `:` on the right aligns header text to the right.

Header separator `-` with `:` on the left aligns header text to the left.

(Note: In the original syntax, both sides of the table to be enclosed in `| `, but it is omitted here.)

```markdown
Header|Header|Header
---|:--:|--:
Content|Content|Content
Content|Content|Content
```

Example:

Header|Header|Header
---|:--:|--:
Content|Content|Content
Content|Content|Content

---

## Code

### Inline Code

> Use one backtick to surround the code

```markdown
`Code Content`
```

Example:

`Code Content`

### Code Blocks

> Code blocks are enclosed in three backticks on each side, and the backticks occupy a separate line.

```markdown
// Use `\` as a placeholder to prevent syntax from taking effect.
\```cpp
Code block...
Code block...
Code block...
\```
```

Example:

```cpp
/*
Binary string to decimal
Header:
	#include<iostream>
	using namespace std;
Parameter:
	string s: binary string to be converted
Return:
	long long : decimal number after conversion
Example:
	cout << BinaryToInt("000010101"); //21
*/
long long BinaryToInt(string s) {
	long long sum = 0;
	int k = 0;
	for(int i = s.size()-1; i >= 0; i--) {
		long long q = 1;
		for(int j = 1; j <= k; j++) {
			q *= 2;
		}
		sum += (s[i]-48)*q;
		k++;
	}
	return sum;
}
```
