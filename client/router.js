Router.configure({
    layoutTemplate: 'layout'
});
//경로 지정
Router.route('/',{template: 'main'});

Router.route('/haha', {template: 'haha'});
Router.route('/hoho', {template: 'hoho'});
//Router.route('/hahaha', {template: 'hahaha'});
//Router.route('/hahaha', {path: 'hahaha/:_id'});
Router.route('/hahaha', {
    path: 'hahaha/:_id',
    template: 'hahaha'
});