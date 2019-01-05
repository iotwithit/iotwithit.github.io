/*
* @Author: Lorenzo
* @Date:   2019-01-05 16:13:14
* @Last Modified by:   Lorenzo
* @Last Modified time: 2019-01-05 17:31:31
*/

var valid_ids_list;

$(document).ready(function() {
    if (window.location.pathname.indexOf("instagram_references") >= 0) {
        valid_ids_list = JSON.parse($("#instagram-valid-ids").html());
        $("#instagram-references-id").on("input", function(e) {
            var selected_id = $(this).val()
            if (selected_id.length == 4 && /^\d+$/.test(selected_id) && valid_ids_list.includes(parseInt(selected_id))) {
                window.location = (window.location.protocol + "//" + 
                                window.location.host + "/instagram_references/" + selected_id);
            }
        });
    };
})