// Define themes to preview
const bsThemes = {
  Bootstrap: [
    {
      name: 'Default',
      url: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    }, {
      name: 'Styled',
      url: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'
    }
  ],
  Bootswatch: [
    {
      name: 'Cerulean',
      url: 'http://bootswatch.com/cerulean/bootstrap.min.css'
    }, {
      name: 'Cosmo',
      url: 'http://bootswatch.com/cosmo/bootstrap.min.css'
    }, {
      name: 'Cyborg',
      url: 'http://bootswatch.com/cyborg/bootstrap.min.css'
    }, {
      name: 'Darkly',
      url: 'http://bootswatch.com/darkly/bootstrap.min.css'
    }, {
      name: 'Flatly',
      url: 'http://bootswatch.com/flatly/bootstrap.min.css'
    }, {
      name: 'Journal',
      url: 'http://bootswatch.com/journal/bootstrap.min.css'
    }, {
      name: 'Lumen',
      url: 'http://bootswatch.com/lumen/bootstrap.min.css'
    }, {
      name: 'Paper',
      url: 'http://bootswatch.com/paper/bootstrap.min.css'
    }, {
      name: 'Readable',
      url: 'http://bootswatch.com/readable/bootstrap.min.css'
    }, {
      name: 'Sandstone',
      url: 'http://bootswatch.com/sandstone/bootstrap.min.css'
    }, {
      name: 'Simplex',
      url: 'http://bootswatch.com/simplex/bootstrap.min.css'
    }, {
      name: 'Slate',
      url: 'http://bootswatch.com/slate/bootstrap.min.css'
    }, {
      name: 'Solar',
      url: 'http://bootswatch.com/solar/bootstrap.min.css'
    }, {
      name: 'Spacelab',
      url: 'http://bootswatch.com/spacelab/bootstrap.min.css'
    }, {
      name: 'Superhero',
      url: 'http://bootswatch.com/superhero/bootstrap.min.css'
    }, {
      name: 'United',
      url: 'http://bootswatch.com/united/bootstrap.min.css'
    }, {
      name: 'Yeti',
      url: 'http://bootswatch.com/yeti/bootstrap.min.css'
    }
  ]
};

// Build theme preview menu bar
let themeList  = '<div class="container-fluid"><div class="row"><div class="col-xs-12"><ul class="nav nav-pills pull-right">';
    themeList += '<li class="dropdown">';
    themeList += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">';
    themeList += 'Theme <span class="caret"></span></a>';
    themeList += '<ul id="theme-chooser" class="dropdown-menu">';

$.each(bsThemes, function(key, value) {
  themeList += '<li><strong style="padding-left: 13px;">' + key + '</strong></li>';
  $.each(value, function(key1, value1) {
    if (value1.name === 'Default') {
      themeList += '<li class="active"><a href="#" id="' + value1.name.toLowerCase() + '" data-style="' + value1.url + '">' + value1.name + '</a></li>';
    } else {
      themeList += '<li><a href="#" id="' + value1.name.toLowerCase() + '" data-style="' + value1.url + '">' + value1.name + '</a></li>';
    }
  });
});
themeList += '</ul></li>';
themeList += '<li id="current-theme"><a href="#" id="theme-toggle">Current Theme:&nbsp;<span id="theme-name">Bootstrap Default</span></a></li>';
themeList += '<li><a href="#" id="navbar-toggle">Navbar View:&nbsp;<span id="navbar-state">Default</span></a></li>';
themeList +='</ul></div></div></div>';
// $(themeList).insertBefore('.bs-previewer');
$('#bs-previewer').html(themeList);

// Theme Chooser dropdown events
$('#theme-chooser>li>a').each(function() {
  var themeName = $(this).text();  
  var themeID = $(this).attr('id');  
  var themeURL = $(this).attr('data-style');
  $(this).on('click', function(e) {
    e.preventDefault();
    // console.log(themeName + ' clicked!');
    $('#theme-chooser>li.active').removeClass('active');
    $(this).parent('li').addClass('active');
    if ($(this).attr('id') !== 'default' && $(this).attr('id') !== 'styled') {
      if ($('#optional-theme')) { $('#optional-theme').remove(); }
      $('#bs-theme').attr('href', themeURL);
      $('#theme-name').empty().append(themeName);
    } else if ($(this).attr('id') === 'styled') {
      var bsOptTheme = '<link id="optional-theme" rel="stylesheet" href="' + themeURL + '">';
      $('#bs-theme').attr('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
      $(bsOptTheme).insertAfter('#bs-theme');
      $('#theme-name').empty().append('Bootstrap Styled');
    } else {
      if ($('#optional-theme')) { $('#optional-theme').remove(); }
      $('#bs-theme').attr('href', themeURL);
      $('#theme-name').empty().append('Bootstrap Default');
    }
  });
});

// Theme Toggle events
$('#theme-toggle').on('click', function(e) {
  e.preventDefault();
  var currentThemeItem = $('ul#theme-chooser li.active');
  var nextThemeItem;
  if (currentThemeItem.is(':last-child')) {
    nextThemeItem = $('ul#theme-chooser li').eq(1);
  } else {
    nextThemeItem = $(currentThemeItem).next();
  }
  if (nextThemeItem.has('a').length === 1) {
    $(nextThemeItem).find('a').click();
  } else {
    $(nextThemeItem).next().find('a').click();
  }
});

// Navbar Toggle events
$('#navbar-toggle').on('click', function(e) {
  e.preventDefault();
  if ($('nav').eq(0).hasClass('navbar-default')) {
    $('nav').eq(0).removeClass('navbar-default');
    $('nav').eq(0).addClass('navbar-inverse');
    $('#navbar-state').empty().append('Inverse');
  } else {
    $('nav').eq(0).removeClass('navbar-inverse');
    $('nav').eq(0).addClass('navbar-default');
    $('#navbar-state').empty().append('Default');
  }
});
