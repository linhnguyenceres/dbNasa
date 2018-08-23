$(document).ready(function() {
    //$('#demo1').stopwatch().stopwatch('start');
    var myQuestion = $('form').find(".questions");
    var count = myQuestion.length;
    myQuestion.each(function(i) {
        hider = i + 2;
        if (i == 0) {
            $("#question_" + hider).hide();
            createNextButton(i);
        } else if (count == i + 1) {
            var step = i + 1;
            $("#next" + step).on('click', function() {
                submit();
            });
            $("#prev" + step).on('click', function() {
                submit();
            });
        } else {
            $("#question_" + hider).hide();
            createNextButton(i);
            createPrevButton(i);
        }

    });

    function submit() {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: $('form').serialize(),
            success: function(msg) {
                $("#quiz_form").addClass("hide");
                $('#result').show();
                $('#result').append(msg);
            }
        });
    }

    function createNextButton(i) {
        var step = i + 1;
        var step1 = step + 1;
        $('#next' + step).on('click', function() {
            $("#question_" + step).hide();
            $("#question_" + step1).show();
        });
    }

    function createPrevButton(i) {
        var step = i + 1;
        var step1 = step - 1;
        $('#prev' + step).on('click', function() {
            $("#question_" + step).hide();
            $("#question_" + step1).show();
        });
    }
})