new Vue({
    el:'#app',
    data: {
        nama: 'Charles',
        panggilan: 'Jeremy',
        website : 'https://www.mokapos.com/',
        websiteTag: '<a href="https://www.qiscus.com/">kuro'
    },
    methods:{
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus()
        }
    }

})