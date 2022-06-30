# jquery-threesixty

Create jquery threesixty draggable image

# Usage
Copy `threesixty.js` in your js folder and implement it with `<script>` tag

HTML markup

```html

<ul class="list" style="list-style: none;">
    <li>
        <img src="your-image.png">
    </li>
    <li style="display: none">
        <img src="your-image.png">
    </li>
    <li style="display: none">
        <img src="your-image.png">
    </li>
    <li style="display: none">
        <img src="your-image.png">
    </li>
</ul>
```

JS markup

```js
$(".list").threesixty()
```

# Issues
Your first image might be skipped, just duplicate it in the html markup. Gonna resolve the issue soon

# Contribution

Send PR for improvements or bugs

# License 
MIT
