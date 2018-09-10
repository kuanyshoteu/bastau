    $(document).ready(function () {
        $(".content-markdown").each(function () {
            var content = $(this).text()
            var markedContent = marked(content)
            $(this).html(markedContent)
        });

        $('.menu .item').tab();
        $(".open_form_trener").click(function (event) {
            event.preventDefault();
            $(".form_trener").fadeToggle();
        });
        $(".open_subject_form").click(function (event) {
            event.preventDefault();
            $(".subject_form" + $(this).attr('id')).fadeToggle();
        });
        $(".change_subject").click(function () {
            var this_ = $(this)
            id = this_.attr("id")
            var pageUrl = this_.attr("data-href")
            var title = $('#subject_title' + id).val();
            var text = $('#id_text' + id).val();
            var cost = $('#subject_cost' + id).val();
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("id"),
                        'title':title,
                        'cost':cost,
                        'text':text,
                    },
                    dataType: 'json',
                    success: function (data) {
                        document.getElementById(this_.attr("id")+'title').innerHTML = title 
                        document.getElementById(this_.attr("id")+'text').innerHTML = marked(text) 
                        document.getElementById(this_.attr("id")+'cost').innerHTML = cost 
                        $(".subject_form" + id).fadeToggle();
                    }
                });
            }
        });
        $(".open_form").click(function (event) {
            event.preventDefault();
            $(".update_form").fadeToggle();
        })
        $(".open_comments").click(function (event) {
            event.preventDefault();
            $(".comments").fadeToggle();
        })
        $(".open_docs").click(function (event) {
            event.preventDefault();
            $(".docs").fadeToggle();
        })
        $(".open_page").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var changeUrl = this_.attr("data-href")
            var page = this_.attr('page')
            if (changeUrl) {
                $.ajax({
                    url: changeUrl,
                    method: "GET",
                    data: {
                        'page':page,
                    },
                    success: function (data) {
                        if (page == 'cabinet'){
                            $(".info").show();
                        }
                        if (page == 'profile_info'){
                            $(".info").show();
                        }
                        if (page == 'profile_lesson'){
                            $(".info").show();
                        }
                        if (page == 'profile_attendance'){
                            $(".info").show();
                        }
                        if (page == 'profile_zaiavki'){
                            $(".info").show();
                        }
                        if (page == 'profile_squads'){
                            $(".info").show();
                        }
                    }, error: function (error) {
                        console.log('error')
                    }
                })
            }
        })
        $(".open_form_status").click(function (event) {
            event.preventDefault();
            $(".update_status").fadeToggle();
        })
        $(".open_form_paper").click(function (event) {
            event.preventDefault();
            $(".create_paper").fadeToggle();
        })
        $(".open_form_task").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var form_id = '.' + this_.attr("id") + 'add_task'
            $(form_id).fadeToggle();
        })
        $(document).on("click", '.open_edit_text', function () {
            event.preventDefault();
            var this_ = $(this)
            console.log('ddd')
            var form_id = '.' + this_.attr("id") + 'edit_text_form'
            $(form_id).fadeToggle();
            $('#' + this_.attr("id") + 'task_text').fadeToggle();
        })
        $(".open_add_child").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var form_id = '.' + this_.attr("id") + 'add_child'
            $(form_id).fadeToggle();
        })
        $(".open_groups").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var form_id = '.' + 'groups' + this_.attr("id")
            $(form_id).fadeToggle();
        })
        $(".open_group_details").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var table_id = '#' + this_.attr("id") + 'details';
            console.log(table_id)
            $(table_id).fadeToggle();
        })
        
        $(".open_group_details_hmw").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var table_id = '#' + this_.attr("id") + 'details_hmw'
            $(table_id).fadeToggle();
        })
        $(".open_group_details_cls").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var table_id = '#' + this_.attr("id") + 'details_cls'
            $(table_id).fadeToggle();
        })
        $(".open_chart").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            $('#' + this_.attr("id") + 'chart').fadeToggle();
        })
    })
    $(document).ready(function () {
        $(".delete_zaiavka").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var icon = '#zaiavka' + this_.attr("id")
            var name = '#zaiavka_name_' + this_.attr("id")
            var phone = '#zaiavka_phone_' + this_.attr("id")
            var time = '#zaiavka_time_' + this_.attr("id")
            var changeUrl = this_.attr("data-href")
            if (changeUrl) {
                $.ajax({
                    url: changeUrl,
                    method: "GET",
                    data: {},
                    success: function (data) {
                        console.log('roro')
                        $(icon).css('display', 'none')
                        $(name).css('text-decoration', 'line-through')
                        $(name).css('color', 'grey')
                        $(phone).css('text-decoration', 'line-through')
                        $(phone).css('color', 'grey')
                        $(time).css('text-decoration', 'line-through')
                        $(time).css('color', 'grey')
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".delete_follow").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var icon = '#follow' + this_.attr("id")
            var user = '#follow_user_' + this_.attr("id")
            var group = '#follow_group_' + this_.attr("id")
            var phone = '#follow_phone_' + this_.attr("id")
            var time = '#follow_time_' + this_.attr("id")
            var changeUrl = this_.attr("data-href")
            if (changeUrl) {
                $.ajax({
                    url: changeUrl,
                    method: "GET",
                    data: {},
                    success: function (data) {
                        console.log('roro')
                        $(icon).css('display', 'none')
                        $(user).css('text-decoration', 'line-through')
                        $(user).css('color', 'grey')
                        $(group).css('text-decoration', 'line-through')
                        $(group).css('color', 'grey')
                        $(phone).css('text-decoration', 'line-through')
                        $(phone).css('color', 'grey')
                        $(time).css('text-decoration', 'line-through')
                        $(time).css('color', 'grey')
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".change_status").click(function (e) {
            e.preventDefault()
            var Url = $(this).attr("data-href")
            status = $(".textarea_status").val()
            console.log(status)
            $.ajax({
                url: Url,
                method: "GET",
                data: {
                    'status':status
                },
                success: function (data) {
                    hisstatus = document.getElementsByClassName('hisstatus')[0]
                    hisstatus.innerHTML = status
                }, error: function (error) {
                }

            })
        })
        $(".add_group_btn").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var squadUrl = this_.attr("data-href")
            if (squadUrl) {
                $.ajax({
                    url: squadUrl,
                    data: {
                        'paper_id':this_.attr("paper_id"),
                        'squad_id':this_.attr("squad_id"),
                        'isin':this_.attr("isin"),
                    },
                    success: function (data) {
                        if (this_.attr("isin") == 'yes') {
                            this_.css('background-color', '#F2F2F2')
                            this_.css('color', 'black')
                            this_.attr('isin', 'no')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").css('background-color', '#F2F2F2')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").css('color', 'black')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").attr('isin', 'no')

                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results').hide()
                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results_urok').hide()
                        }
                        else {
                            this_.css('background-color', '#5181b8')
                            this_.css('color', 'white')
                            this_.attr('isin', 'yes')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").css('background-color', '#5181b8')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").css('color', 'white')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn_urok").attr('isin', 'yes')
                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results').show()
                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results_urok').show()

                        }
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".present").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    method: "GET",
                    data: {
                        'id':this_.attr("id2"),
                        'attendance':'present',                        
                    },
                    success: function (data) {
                        var attendance = '#' + 'att' + this_.attr("id2")
                        var absent = '#' + 'absent' + this_.attr("id2")
                        var late = '#' + 'late' + this_.attr("id2")
                        $(attendance).attr('value', 'present');
                        this_.css('background-color', '#5181b8');
                        this_.css('color', 'white');
                        $(absent).css('background-color', '#e5ebf1');
                        $(absent).css('color', 'rgba(0, 0, 0, 0.9)');
                        $(late).css('background-color', '#e5ebf1');
                        $(late).css('color', 'rgba(0, 0, 0, 0.9)');
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".absent").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    method: "GET",
                    data: {
                        'id':this_.attr("id2"),
                        'attendance':'absent',                        
                    },
                    success: function (data) {
                        var attendance = '#' + 'att' + this_.attr("id2");
                        var present = '#' + 'present' + this_.attr("id2");
                        var late = '#' + 'late' + this_.attr("id2");
                        $(attendance).attr('value', 'absent');
                        this_.css('background-color', '#5181b8');
                        this_.css('color', 'white');
                        $(present).css('background-color', '#e5ebf1');
                        $(present).css('color', 'rgba(0, 0, 0, 0.9)');
                        $(late).css('background-color', '#e5ebf1');
                        $(late).css('color', 'rgba(0, 0, 0, 0.9)');
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".late").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            var attendance = '#' + 'att' + this_.attr("id2")
                        
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("id2"),
                        'attendance':'late',
                    },
                    success: function (data) {
                        var absent = '#' + 'absent' + this_.attr("id2")
                        var present = '#' + 'present' + this_.attr("id2")
                        $(attendance).attr('value', 'late');
                        this_.css('background-color', '#5181b8')
                        this_.css('color', 'white')
                        $(absent).css('background-color', '#e5ebf1')
                        $(absent).css('color', 'rgba(0, 0, 0, 0.9)')
                        $(present).css('background-color', '#e5ebf1')
                        $(present).css('color', 'rgba(0, 0, 0, 0.9)')
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
        $(".grade").change(function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            var grade = $(this).val();
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("name"),
                        'grade':grade
                    },
                    dataType: 'json',
                    success: function (data) {
                    }
                });
            }
        });
        $(".zhurnal_grade").click(function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            var grade = $('#grade' + this_.attr("name")).val();
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("name"),
                        'grade':grade
                    },
                    dataType: 'json',
                    success: function (data) {
                    }
                });
            }
        });
    })
    $(document).ready(function () {
        $(".check_task_answer").click(function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            var paper_id = this_.attr("paper_id")
            var answer = $('#check_task_answer' + this_.attr('id') + paper_id).val();
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("id"),
                        'answer':answer,
                        'parent_id':this_.attr("parent_id"),
                    },
                    dataType: 'json',
                    success: function (data) {
                        this_.attr('placeholder', answer);
                        var number_of_solved = parseInt( $('#' + this_.attr('paper') + '_number_of_solved').attr('number') )
                        if(data.action == 'plus'){
                            $('#' + this_.attr('paper') + '_number_of_solved').attr('number', number_of_solved+1)
                            document.getElementById(this_.attr('paper') + '_number_of_solved').innerHTML = number_of_solved+1;                            
                        }
                        if(data.action == 'minus'){
                            $('#' + this_.attr('paper') + '_number_of_solved').attr('number', number_of_solved-1)
                            document.getElementById(this_.attr('paper') + '_number_of_solved').innerHTML = number_of_solved-1
                        }
                        document.getElementById('hiscoins').innerHTML = data.hiscoins;
                        if (data.solved == true){
                            $('#' + this_.attr('id') + 'solved').css('color', 'green');
                            $('#' + this_.attr('id') + 'solved_tick').show();
                            if (data.parent == true){
                                $('#' + this_.attr('parent_id') + 'solved').css('color', 'green');
                                $('#' + this_.attr('parent_id') + 'solved_tick').show();
                            }
                        }
                        else{
                            $('#' + this_.attr('id') + 'solved').css('color', 'black');
                            $('#' + this_.attr('id') + 'solved_tick').hide();
                            if (data.parent == false){
                                $('#' + this_.attr('parent_id') + 'solved').css('color', 'black');
                                $('#' + this_.attr('parent_id') + 'solved_tick').hide();
                            }
                        }
                    }
                });
            }
        });
        $(".open_group_details_urok").click(function (event) {
            event.preventDefault();
            var this_ = $(this)
            var table_id = '#' + this_.attr("id") + 'details_urok'
            $(table_id).fadeToggle();
        })
        $(".add_group_btn_urok").click(function (e) {
            e.preventDefault()
            var this_ = $(this)
            var squadUrl = this_.attr("data-href")
            if (squadUrl) {
                $.ajax({
                    url: squadUrl,
                    data: {
                        'paper_id':this_.attr("paper_id"),
                        'squad_id':this_.attr("squad_id"),
                        'isin':this_.attr("isin"),
                    },
                    success: function (data) {
                        if (this_.attr("isin") == 'yes') {
                            this_.css('background-color', '#F2F2F2')
                            this_.css('color', 'black')
                            this_.attr('isin', 'no')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").css('background-color', '#F2F2F2')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").css('color', 'black')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").attr('isin', 'no')

                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results_urok').hide()
                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results').hide()
                        }
                        else {
                            this_.css('background-color', '#5181b8')
                            this_.css('color', 'white')
                            this_.attr('isin', 'yes')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").css('background-color', '#5181b8')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").css('color', 'white')
                            $('#' + this_.attr("paper_id") + this_.attr("squad_id") + "add_group_btn").attr('isin', 'yes')

                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results_urok').show()
                            $('.' + this_.attr("paper_id") + this_.attr("squad_id") + 'squad_results').show()
                        }
                    }, error: function (error) {
                        console.log('error')
                    }

                })
            }
        })
    })
    $(document).ready(function () {
        $(".task_answer").change(function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            var answer = $(this).val();
            console.log(pageUrl);
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("id"),
                        'answer':answer
                    },
                    dataType: 'json',
                    success: function (data) {
                        this_.attr('placeholder', answer);
                    }
                });
            }
        });
        $(document).on("click", '.delete_task', function () {
            var this_ = $(this)
            console.log('de')
            var pageUrl = this_.attr("data-href")
            if (pageUrl) {
                console.log('de4')
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':this_.attr("id"),
                    },
                    dataType: 'json',
                    success: function (data) {
                        $('#' + this_.attr("id") + 'task_number').attr('style', 'text-decoration:line-through; color:grey;margin-right: 10px; font-size: 16px;font-weight: 600;')
                        $('#' + this_.attr("id") + 'task_text').attr('style', 'text-decoration:line-through; color:grey;')
                    }
                });
            }
        });
        $(document).on("click", '.change_task_text', function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            id = this_.attr("id")
            paper_id = this_.attr("paper_id")
            console.log(document.getElementsByClassName('change_task_text' + id + paper_id))
            var text = document.getElementsByClassName('change_task_text' + id + paper_id)[1].value
            console.log(document.getElementsByClassName('change_task_text' + id + paper_id))
            var cost = document.getElementsByClassName('change_task_cost' + id + paper_id)[1].value
            var str_text = id + "task_text" + paper_id
            var str_cost = id + "task_cost" + paper_id
            if (pageUrl) {
                $.ajax({
                    url: pageUrl,
                    data: {
                        'id':id,
                        'text':text,
                        'cost':cost,
                    },
                    dataType: 'json',
                    success: function (data) {
                        document.getElementsByClassName(str_text)[1].innerHTML = text;
                        document.getElementsByClassName(str_cost)[1].innerHTML = cost;
                        $('.' + id + 'edit_text_form').hide();
                        $("#" + id + 'task_text').show();
                    }
                });
            }
        });
        $(".new_problem").click(function () {
            var this_ = $(this)
            var pageUrl = this_.attr("data-href")
            text = $('#new_problem_text' + this_.attr("id")).val()
            ans = $('#new_problem_ans' + this_.attr("id")).val()
            cost = $('#new_problem_cost' + this_.attr("id")).val()
            paper_id = this_.attr("id");
            $.ajax({
                url: pageUrl,
                data: {
                    'text':text,
                    'ans':ans,
                    'cost':cost,
                    'paper_id':paper_id
                },
                dataType: 'json',
                success: function (data) {
                  console.log('d')
                  var div = document.createElement('div');
                  div.setAttribute('class', 'ui grid');
                  
                  var div2 = document.createElement('div');
                  div2.setAttribute('class', 'twelve wide column');
                  div2.setAttribute('style', 'font-size: 15px;padding-bottom: 0;');

                  var last = parseInt( $('.tasks' + this_.attr('id')).attr('last') );
                  
                  var edit = document.createElement('a');
                  edit.setAttribute('style', 'font-size: 10px; cursor: pointer;')
                  edit.setAttribute('class', 'open_edit_text');
                  edit.setAttribute('id', data.id);
                  edit.innerHTML = 'Изменить'
                  var dlt = document.createElement('a');
                  dlt.setAttribute('style', 'font-size: 10px; margin-left: 10px; color: red')
                  dlt.setAttribute('data-href', data.delete_url)
                  dlt.innerHTML = 'Удалить'

                  var br = document.createElement('br');
                  var br2 = document.createElement('br');
                  var span2 = document.createElement('span');
                  span2.innerHTML = text
                  span2.setAttribute('id', data.id + 'task_text')
                  
                  var span = document.createElement('span');
                  $('.tasks' + this_.attr('id')).attr('last', last + 1);
                  span.innerHTML = last + 1;
                  span.setAttribute('style', 'margin-right: 10px; font-size: 16px;font-weight: 600;')

                  var form_text = document.createElement('form');
                  form_text.setAttribute('class', 'ui form ' + data.id + 'edit_text_form')
                  form_text.setAttribute('style', 'margin-bottom: 0; display: none;')

                  var textarea_text = document.createElement('textarea');
                  textarea_text.setAttribute('style', 'width:100%; height: 46px;')
                  textarea_text.setAttribute('class', 'task_text')
                  textarea_text.setAttribute('id', 'change_task_text' + data.id)
                  textarea_text.setAttribute('data-href', data.change_text_url);
                  textarea_text.innerHTML = text;
                  var textarea_save = document.createElement('a');
                  textarea_save.setAttribute('class', 'ui button mini blue change_task_text');
                  textarea_save.setAttribute('id', data.id);
                  textarea_save.setAttribute('class', 'ui button mini blue change_task_text');
                  textarea_save.setAttribute('data-href', data.change_text_url);
                  textarea_save.innerHTML = '✓';
                  form_text.appendChild(textarea_text);
                  form_text.appendChild(textarea_save);

                  div2.appendChild(edit);
                  div2.appendChild(dlt);
                  div2.appendChild(br);
                  div2.appendChild(span);
                  div2.appendChild(span2);
                  div2.appendChild(form_text);

                  var div3 = document.createElement('div');
                  div3.setAttribute('class', 'four wide column');
                  div3.setAttribute('style', 'font-size: 15px; display: inline-block; padding-bottom: 0');
                  
                  var form_ans = document.createElement('form');
                  form_ans.setAttribute('class', 'ui form')
                  
                  var textarea_ans = document.createElement('textarea');
                  textarea_ans.setAttribute('class', 'ans_textarea')
                  textarea_ans.setAttribute('id', 'check_task_answer' + data.id)
                  textarea_ans.innerHTML = ans;
                  var a5 = document.createElement('a');
                  a5.setAttribute('class', 'ui button mini blue check_task_answer')
                  a5.setAttribute('id', data.id)
                  a5.setAttribute('style', 'width: 100%')
                  a5.setAttribute('data-href', data.change_answer_url)
                  a5.innerHTML = '✓';
                  form_ans.appendChild(textarea_ans);
                  form_ans.appendChild(a5);
                  
                  div3.appendChild(form_ans);

                  div.appendChild(div2);
                  div.appendChild(div3);
                  e = document.getElementById('tasks' + this_.attr('id'))
                  e.appendChild(div)
                }
            });  
        });

    })

    $('.menu-btn').on('click', function(e) {
      e.preventDefault();
      this_ = $('.vmenu')
      if ( this_.attr('stage') == 'passive' ){
          this_.attr('stage', 'active');
          this_.toggleClass('menu_active');
          $('.contenttt').toggleClass('content_active');
      }
      else{
          this_.attr('stage', 'passive');
          document.getElementById("contenttt").classList.remove('content_active');
          document.getElementById("vmenu2").classList.remove('menu_active');
      }
    })
    $('.menu_back').on('click', function(e) {
      e.preventDefault();
      this_ = $('.vmenu')
      if ( this_.attr('stage') == 'active' ){
          this_.attr('stage', 'passive');
          document.getElementById("contenttt").classList.remove('content_active');
          document.getElementById("vmenu2").classList.remove('menu_active');
      }
    })
    
