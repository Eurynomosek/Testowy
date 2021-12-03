$(function () {
    $('body').on('keyup', '#search-opis', function(){
        var searchQuest = $(this).val();
        $.ajax({
            method: 'POST',
            url: dynSearchUrl,
            dataType: 'json',
            data: {
                searchQuest: searchQuest
            },
            success: function(res){
                var tableRow ='';

                $('#dynamic-row').html('');

                $.each(res, function(index, value){
                    tableRow = '<tr>' +
                        '<th scope="row">' + value.id + '</th>' +
                        '<td>' + value.int_numer + '</td>' +
                        '<td>' + value.int_wysoko + '</td>' +
                        '<td>' + value.int_nazwa + '</td>' +
                        '<td>' + value.int_data + '</td>' +
                        '<td>' + value.int_nazwisko + '</td>' +
                        '<td>' +
                        '<a href=" "><button class="btn btn-primary btn-sm "> P </button></a>' +
                        '<a href=""><button class="btn btn-success btn-sm "> E </button></a>' +
                        '<button class="btn btn-danger btn-sm delete" data-id=""> X </button>' +
                        '</td>' +
                    '</tr>';

                    $('#dynamic-row').append(tableRow);

                });
            }
        });
    });
});
