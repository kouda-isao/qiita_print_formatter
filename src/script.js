(function(d,s){
  // ==UserScript==
  // @name Qiita print style
  // @description Qiita の印刷用スタイルの適用
  // @version 1.0.0
  // @match http://qiita.com/*
  // @match https://*.qiita.com/*
  // ==/UserScript==
  //https://gist.github.com/kui/e769a01743c3a58d49b0

  var style = [
    // 消す要素
    // ヘッダー消す
    '.teamHeader,',
    '.teamSubHeader,',
    // いいね、ストックボタン消す
    '.teamArticle_header_actions,',
    // サイトバー消す
    '.teamSidebarContainer_sub,',
    // いいねボタン消す
    '.likeButtonWithLikers,',
    // コメント領域消す
    '.teamArticle_footer,',
    // Footer消す
    '.teamFooter',
    '   { display: none; }',

    // bootstrap3 の余計なスタイルを上書き
    'a[href]:after { content: "" }',

    // 本文のFontsize小さくする
    '.markdownContent { font-size: 14px; }',

    // Code領域の背景濃くする
    '.markdownContent .code-frame { background-color: #f7f7f7 !important; }',

  ].join('\n');

  var s = d.createElement('style');
  s.media = 'print';
  s.textContent = style;
  d.head.appendChild(s);

})(document)
