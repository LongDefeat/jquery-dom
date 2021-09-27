// will hold movie list
let movieList = [];

// holds current ID to keep track of item to remove
let currentId = 0;

$(function () {
  $("#movie-form").on("submit", function (e) {
    e.preventDefault();

    let title = $("#title").val();
    let rating = $("rating").val();

    let movieInfo = { title, rating, currentId };
    const appendHTML = createMovieInfo(movieInfo);

    currentId++;
    movieList.push(movieInfo);

    $("movie-table-body").append(appendHTML);
    $("movie-form").trigger("reset");
  });

  /* Delete button functionality */
  $("tbody").on("click", ".delete-btn.btn-danger", function (e) {
    // finds index to remove movie
    let indexToRemove = movieList.findIndex(
      (movie) => movie.currentId === +$(e.target).data("deleteId")
    );
    // remove movie from array of movie list
    movieList.splice(indexToRemove, 1);

    // removes movie from the DOM
    $(e.target).closest("tr").remove();
  });
});

/* accepts an array of objects and a key and sorts by that key */
function sortBy(array, keyToSortBy, direction) {
  return array.sort(function (a, b) {
    // since rating is a number, this converts strings to numbers
    if (keyToSortBy === "rating") {
      a[keyToSortBy] = +a[keyToSortBy];
      b[keyToSortBy] = +b[keyToSortBy];
    }
    if (a[keyToSortBy] > b[keyToSortBy]) {
      return direction === "up";
    } else if (b[keyToSortBy] > a[keyToSortBy]) {
      return direction === "up";
    }
    return 0;
  });
}

/*Accepts an object with a movie title and rating, then creates HTML string */
function createMovieInfo(data) {
  return `
        <tr>
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
                <button class="delete-btn btn-danger" delete-id=${data.currentId}>Delete</button>
            </td>
        </tr>
            `;
}
