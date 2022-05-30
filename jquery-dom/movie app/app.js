let movieList = [];
let currentId = 0;

$(function () {

    $("#movieForm").on('submit', function (evt) {

        evt.preventDefault();

        let title = $(".title").val();
        let rating = $(".rating").val();

        let movieData = { title, rating, currentId };
        const HTMLtoAppend = createMovieDataHTML(movieData);

        currentId++
        movieList.push(movieData);

        $(".movie-table-body").append(HTMLtoAppend);

    })

    $("tbody").on("click", ".btn.btn-danger", function(evt){
        let indexToRemoveAt = movieList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
        movieList.splice(indexToRemoveAt, 1)

        $(evt.target).closest("tr").remove()
    })

})


function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
}