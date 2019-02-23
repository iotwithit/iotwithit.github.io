/*
* @Author: Lorenzo
* @Date:   2019-01-05 16:13:14
* @Last Modified by:   Lorenzo
* @Last Modified time: 2019-02-23 17:47:49
*/

var valid_ids_list;

$(document).ready(function() {
    if (window.location.pathname.indexOf("instagram_references") >= 0) {
        valid_ids_list = JSON.parse($("#instagram-valid-ids").html());
        var min_id = valid_ids_list[0];
        var max_id = valid_ids_list[1];
        var invalid_ids = valid_ids_list.slice(2);

        $("#instagram-references-id").on("input", function(e) {
            var selected_id = $(this).val()
            var selected_id_int = parseInt(selected_id);
            if (selected_id.length == 4 && /^\d+$/.test(selected_id) &&
                selected_id_int >= min_id && selected_id_int <= max_id && (!invalid_ids.includes(selected_id_int))) {
                window.location = (window.location.protocol + "//" + 
                                window.location.host + "/instagram_references/" + selected_id);
            }
        });
    };
})