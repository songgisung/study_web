// リストとボタンを配置
// ボタンをクリックしたら、リストの子要素を置換する処理
function replace() {
  // 空のli要素を作成
  console.log('aaaaa');
  // 生成したノードにid属性"newList"を付与
  var newList= document.createElement('li');
  // テキストノードを生成
  newList.setAttribute('id','newList')
  // 生成したノードを、空のli要素の子ノードとして追加
  var newText= document.createTextNode('新しい要素です');
  newList.appendChild(newText);
  // 置換前の変数oldListの参照を変数oldListに代入。
  // (参照とは、オブジェクトへのリンクのことを言う)
  // https://developer.mozilla.org/ja/docs/Glossary/Object_reference
  var oldList = document.getElementById('oldList');
  // 親ノードulの参照を変数parentNodeに代入
  var parentNode = oldList.parentNode;
  // 既存ノードoldListを、新規に作成したli要素newListと置換
  parentNode.replaceChild(newList, oldList);

}
