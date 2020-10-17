$(function() {
    $.getJSON('./skills.json', function(data) {
        $.each(data.languages, function(i, lang) {
            var sklRow = "<div class=\"row align-items-center\">" 
                    + "<div class=\"col-sm-3\">"
                        + "<div>" + lang.name + "</div>"
                    + "</div>"
                    + "<div class=\"col-sm-9\">"
                        + "<div class=\"progress\">"
                            + "<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: " 
                            + lang.level 
                            + "%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">"
                            + "</div>"
                        + "</div>"
                    + "</div>"
                + "</div>"
           $(sklRow).appendTo("#json-tester div");
        });
    });
});