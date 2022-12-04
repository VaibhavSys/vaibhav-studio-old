+++
canonical = ""
categories = ["How To"]
date = 2022-11-22T15:22:38Z
description = "Selecting multiple elements in CSS is used to apply the same styles to multiple different elements, classes and id selectors."
featured = false
featured_image = ""
keywords = ["select", "multiple", "elements", "css"]
seotitle = ""
tags = ["CSS"]
title = "Select multiple elements in CSS"

+++
You can select multiple different elements in CSS easily by separating the selectors using commas.

# For example

Lets say that you want to give the class `exa` the same styles as the class `pex` , you can select them one by one and give them the same rules however,  that would be harder to maintain and increase the size of the stylesheet.
```html {linenos=1}
<div class="exa">
  <p>Lorem Ipsum</p>
  </div>

<div class="pex">
  <p>Lorem Ipsum</p>
</div>
```
You can select both classes `exa` and `pex` together and apply the same rules to them by separating their selectors with a comma like below.
```css {linenos=1}
.exa, .pex {
  color: red;
}
```