'use strict';

// レスポンシブ対応用
const mobile = 0;
const tablet = 1;
const computer = 2;

$(function(){

    // 操作端末取得
    let terminal = getUserTerminal();

    // 操作端末がスマホかタブレットの場合
    if (terminal === mobile || terminal === tablet) {
        // ナビアイテム選択時、ナビメニューを閉じる
        $('.navbar-item')
            .attr('data-toggle', 'collapse')
            .attr('data-target', '#navbarCollapse');
    }

    // 操作端末取得
    function getUserTerminal() {
        if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
            return mobile;
        }
        else if (window.matchMedia('(max-width: 768px)').matches) {
            return tablet;
        }
        else if (window.matchMedia('(min-width: 769px)').matches) {
            return computer;
        }
        return '';
    }

    // 年齢セット
    $('#age').html(getAge(1994,1,9));

    // 年齢取得
    function getAge(birthYear, birthMonth, birthDate) {
        let today = new Date();
        if (today.getMonth() > birthMonth || (today.getMonth() == birthMonth - 1 && today.getDate() >= birthDate)) {
            return today.getFullYear() - birthYear;
        } else {
            return today.getFullYear() - birthYear - 1;
        }
    }
});
