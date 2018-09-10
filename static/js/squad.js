    $(document).ready(function () {
        $(".change-btn").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var changeUrl = this_.attr("data-href")
            var id2 = "#" + this_.attr("id2")
            var inpt = '.' + this_.attr("id2")
            if (changeUrl) {
                $.ajax({
                    url: changeUrl,
                    method: "GET",
                    data: {},
                    success: function (data) {
                        if (this_.attr("value2") == 'free') {
                            $(id2).css('background-color', '#5181b8')
                            $(id2).attr('value2', 'busy')
                            $(inpt).attr('name', this_.attr("id2") + 'busy')
                        }
                        else {
                            $(id2).css('background-color', '#F2F2F2')
                            $(id2).attr('value2', 'free')
                            $(inpt).attr('name', this_.attr("id2") + 'free')
                        }
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
    })
        $(".follow-btn").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var regUrl = this_.attr("data-href")
            if (regUrl) {
                $.ajax({
                    url: regUrl,
                    method: "GET",
                    data: {},
                    success: function (data) {
                        if (data.reg) {
                            $(".follow-btn").text('Отписаться')
                            $(".follow-btn").css('background-color', '#E0E1E2')
                            $(".follow-btn").css('color', 'black')

                        }
                        else {
                            $(".follow-btn").text('Записаться')
                            $(".follow-btn").css('background-color', '#5181b8')
                            $(".follow-btn").css('color', 'white')
                        }
                    }, error: function (error) {
                        console.log(error)
                    }
                })
            }
        });
        $(".leftt").click(function (e) {
            e.preventDefault();
            var this_ = $(this);
            current_id = parseInt(this_.attr('id'))
            id = current_id - 1;
            console.log(id, $('#week' + id))
            if(id > 0){
                $('#week' + current_id).attr('style', 'display:none')
                $('#week' + id).attr('style', 'display:block');
            }    
        });
        $(".rightt").click(function (e) {
            e.preventDefault();
            var this_ = $(this);
            console.log('de')
            current_id = parseInt(this_.attr('id'))
            id = current_id + 1;
            console.log(id, $('#week' + id))
            if( id <= parseInt( $('#calendar').attr('length') ) ){
                $('#week' + current_id).attr('style', 'display:none')
                $('#week' + id).attr('style', 'display:block');
                console.log('de', $('#' + current_id), $('#' + id))
            }    
        });
