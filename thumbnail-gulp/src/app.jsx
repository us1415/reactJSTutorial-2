var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    imageURL: 'http://facebook.github.io/react/img/logo.svg',
    header: 'Learn React',
    description: 'React is awesome!!! React is awesome!!! React is awesome!!! React is awesome!!!'
    },{
    title: 'See Tutorials',
    number: 25,
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Learn Gulp',
    description: 'Gulp is awesome!!! Gulp is awesome!!! Gulp is awesome!!! React is awesome!!!'
    }]
  };

//ask react to render class
var element = React.createElement(ThumbnailList, options);

//ask react to place it in body after rendering the class
React.render(element, document.querySelector('.container'));
