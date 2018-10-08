$(document).ready(function() {
  //quote array
  var quotearr = [{
        quote: "Men have called me mad, but the question is not yet settled, whether madness is or is not the loftiest intelligence",
        author: "Edgar Allan Poe"
      },
      {
        quote: "It is the mark of an educated mind to entertain a thought without accepting it.",
        author: "Aristotle"
      },
      {
        quote: "A shinobi's life is not measured by how they live but rather what they managed to accompish before their death.",
        author: "Jiraya"
      },
      {
        quote: "Where there is no imagination there is no horror.",
        author: "Arthur Conan Doyle"
      },
      {
        quote: "No matter how big the void in you, all it takes is a little bit of love and care to fill it all up.",
        author: "Unknown"
      },
      {
        quote: "Pretend inferiority and encourage his arrogance.",
        author: "Sun Tzu"
      },
      {
        quote: "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.",
        author: "Nikola Tesla"
      },
      {
        quote: "There is no law except the law that there is no law.",
        author: "John Archibald Wheeler"
      },
      {
        quote: "Science without religion is lame, religion without science is blind.",
        author: "Albert Eistein"
      },
      {
        quote: "A man who dares to waste one hour of time has not discovered the value of life.",
        author: "Charles Darwin"
      },
      {
        quote: "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
        author: "Robert Pirsig"
      },
      {
        quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        author: "Marie Curie"
      },
      {
        quote: "War : A massacre of people who don't know each other for the profit of those who know each other but don't massacre each other.",
        author: "Paul Valery"
      },
      {
        quote: "Death is not the greatest loss of life. The greatest loss is what dies inside us when while we live.",
        author: "Norman Cousins"
      },
      {
        quote: "We do not inherit the earth from our ancestors we borrow it from our children.",
        author: "Native Americans"
      }
    ],
    colors = [
      "#3CAD92",
      "#232D1D",
      "#F38630",
      "#031634",
      "#F78A61",
      "#3E455A",
      "#41392E",
      "#9C4140",
      "#E4E4E4",
      "#184F6C",
      "#586D62",
      "#C02721",
      "#311B1E",
      "#DACCB1"
    ];

  //to get quote when the site opens
  getQuote();

  //fn to get quote
  var random;

  function getQuote() {
    random = Math.floor(Math.random() * quotearr.length);
    var quote = quotearr[random].quote;
    var author = "-" + quotearr[random].author;
    $("body").css("background-color", colors[random]);
    $("#quote").html("");
    $("#quote").append(
      "<p>" + quote + '</p> <p style="text-align:right">' + author + "</p>"
    );
  }

  // linking getQuotes to button
  $(".btn").on("click", getQuote);

  //tweet
  $(".twitter-quote").click(function() {
    var tweet = $("#quote").text();
    $(".twitter-quote").attr(
      "href",
      "https://twitter.com/intent/tweet/?text=" + tweet
    );
  });
}); //documt.ready ends
