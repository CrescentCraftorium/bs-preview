# bs-preview

## How to use this tool
#### To use the Bootstrap Preview tool, simply include the following elements in your template: 

```html
<html>
  <head>
    <!-- #bs-theme required for the script to inject the css urls -->
    <link id="bs-theme" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-default">
      <!-- Navbar content... -->
    </nav>
    <div class="container" role="main">
      <!-- #bs-previer required for the script to inject the menu -->
      <div id="bs-previewer"></div>
      <!-- Body content... -->
    </div>    
    <script src="js/bs-previewer.js"></script>
  </body>
</html>
```

#### The wrapper div can be placed anywhere in your template and will conform to your responsiveness or lack there of. You will be presented with 3 options in the menu that is generated:

* **Theme**  
 A list of themes to apply to your page. Simply click on any of the theme names to apply them to your page.  
 By default this list includes the Default and Styled versions of Bootstrap as well as the full offering of Bootswatch themes.
* **Current Theme: Bootstrap Default**  
 This button displays your currently applied theme. When clicked, it will cycle through the full list of themes, one by one.
* **Navbar View: Default**  
 This button displays your currently applied navbar class. When clicked, it will cycle between _.navbar-default_ and _.navbar-inverse_
