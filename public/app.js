$.get("/api/articles", function (data, err) {
    if (err) {
        console.log(err);
    }
    console.log(data);
    data.forEach(article => {
        let newsStory = $("#template").clone().removeAttr("id").removeAttr("hidden");
        newsStory.children("article").attr("data-id", article._id);
        newsStory.children("article").attr("data-fav", article.favorite)
            .find("i")
            .removeClass(article.favorite ? "far" : "fas")
            .addClass(article.favorite ? "fas" : "far");
        newsStory.find(".article-headline").text(article.headline);
        newsStory.find(".article-category").text(article.category);
        newsStory.find(".article-author").text(article.author);
        newsStory.find(".card-body").children(".btn-primary").attr("href", "https://www.nytimes.com/" + article.url);
        if (article.image) {
            newsStory.find("img").attr("src", article.image);
        }
        else {
            newsStory.find("img").attr("hidden", true);
        }

        $("#articles").children(".row").append(newsStory);
    });
});

$(document).on("click", "i", function () {
    let id = $(this).closet("article").attr("data-id");
    let isFav = Boolean($(this).closet("article").attr("data-fav") === 'true');
    console.log($(this).closest("article").attr("data-fav"));
    console.log("id" + id + " faved: " + isFav);
    $.ajax({
        type: 'PUT',
        url: '/api/favorite/' + id,
        data: { favorite: !isFav }
    }).done(data => {
        $(this).toggleClass("far").toggleClass("fas")
    });
});