//name과 submit이 동일할 때 아래의 함수 실행
Template.haha.events({
    'click [name=submit]':function (){
        //name=submit이라는 클릭 이벤트 발생시 기능 수행
        //                console.log(document.getElementsByName('title')[0].value)
        var title = $('[name=title]').val();
        var num = $('[name=num]').val();
        var count = $('[name=count]').val();
        var content = $('[name=content]').val();
        //JavaScript는 ';'추가해야함

        var obj = {
            '제목': title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }
        //1.입력이라면
        if( $('[name=hidden_id]').val().length <= 0){
            console.log(obj);
            CollectionBoard.insert(obj);
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        }else{        
            //2.수정이라면
            CollectionBoard.update($('[name=hidden_id]').val(),{$set: obj});
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        }
    },

    //    'click [name=deleteBoard]':function(){
    //지우는 뭔가를 이곳에
    //        console.log(this._id);
    //해당 event안에서 deletBoard를 click했을 때 이 요소의 data를 this라는 개체 안에 넣어서 data를 가져올 수 있다.
    //        console.log('삭제버튼이 눌렸습니다.');
    //    }
    'click [name=deleteBoard]':function(element, tmpl){
        var id = $(element.target).attr('id');
        CollectionBoard.remove({_id:id})
        console.log($(element.target).attr('id'));//class는 ., id는 #
        console.log('삭제버튼이 눌렸습니다.');
    },
    'click [name=updateBoard]':function(e, tmpl){
        console.log('수정버튼이 눌렸습니다.');
        //1. 입력모달을 띄운다.
        console.log('a');
        $('#modal-div').modal('show');
        console.log('b');
        //2. 모달의 input창에 기존 데이터를 채워넣는다.
//        console.log(this._id);
//        console.log(this.글번호);
//        console.log(this.제목);
//        console.log(this.조회수);
//        console.log(this.내용);
        $('[name=hidden_id]').val(this._id);
        $('[name=title]').val(this.제목);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=content]').val(this.내용);
        console.log('c');
    }
});

Template.haha.helpers({
    list: function(){

        var result = CollectionBoard.find().fetch()
        console.log(result)
        //        var result=[
        //            {
        //                '글번호': 51,
        //                '제목': "제목1",
        //                '조회수': 15
        //            }
        //            ,
        //            {
        //                '글번호': 14,
        //                '제목': "제목8",
        //                '조회수': 195
        //            }
        //            ,
        //            {
        //                '글번호': 13,
        //                '제목': "제목21",
        //                '조회수': 152
        //            }
        //            ,
        //            {
        //                '글번호': 12,
        //                '제목': "제목13",
        //                '조회수': 151
        //            }
        //        ]
        return result
    }
});