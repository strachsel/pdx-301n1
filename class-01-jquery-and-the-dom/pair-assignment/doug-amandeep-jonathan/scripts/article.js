var articles = [];

function Article (opts) {
  this.title = opts.title;   //'Bacon Ipsum',
  this.category =  opts.category; //   'food',
  this.author = opts.author; //Kevin Bacon
  this.authorUrl = opts.authorUrl;  // 'http://www.imdb.com/name/nm0000102/',
  this.publishedOn = opts.publishedOn; //'2015-11-05',
  this.body = opts.body; //'<p>Bacon ipsum dolor amet do ex andouille minim,
}
//convert article object to html before inseerting it into page
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.find('h1').text(this.title);
  $newArticle.find('a').text(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('.article-body').html(this.body);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');
  return $newArticle;
}
//-------------------end of converting to html-------------------------//


/*sort array using a compare function.  If b is greater than a, a positive value is returned
making b an newer article.  If a is greater than b, a negative number is returned
making b an older article */
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

/*for each index/object in the rawData array, construct a new article object and
push it into the articles array*/
rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});
//for each index in the articles array and append the article to the end
// of the article section
articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
