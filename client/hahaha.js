Template.hahaha.helpers({
    data: function (){
        var board = CollectionBoard.findOne({_id: Router.current().params._id});
        console.log(board);
        //console창 확인
//        console.log(board.글번호);
        return board
    }

})